import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.join(__dirname, '..', '_posts');
const outputDir = path.join(__dirname, '..', 'src', 'content', 'posts');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all markdown files
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.markdown') || f.endsWith('.md'));

console.log(`Found ${files.length} posts to migrate`);

for (const file of files) {
  let content = fs.readFileSync(path.join(postsDir, file), 'utf-8');

  // Normalize line endings (CRLF -> LF)
  content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Extract frontmatter (handle trailing spaces after ---)
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!frontmatterMatch) {
    console.log(`Skipping ${file} - no frontmatter found`);
    continue;
  }

  const [, frontmatter, body] = frontmatterMatch;

  // Parse frontmatter (simple YAML parsing)
  const lines = frontmatter.split('\n');
  const data = {};
  let currentKey = null;
  let inArray = false;
  let inObject = false;
  let objectKey = null;

  for (const line of lines) {
    if (line.match(/^\s*-\s+(.+)$/)) {
      // Array item
      const value = line.match(/^\s*-\s+(.+)$/)[1];
      if (currentKey && Array.isArray(data[currentKey])) {
        data[currentKey].push(value);
      }
    } else if (line.match(/^\s+\w+:/)) {
      // Nested object property
      const [key, ...rest] = line.trim().split(':');
      const value = rest.join(':').trim();
      if (objectKey && data[objectKey]) {
        data[objectKey][key] = value;
      }
    } else if (line.match(/^([\w-]+):\s*$/)) {
      // Key with no value (array or object follows)
      currentKey = line.match(/^([\w-]+):/)[1];
      data[currentKey] = [];
    } else if (line.match(/^([\w-]+):$/)) {
      // Object key
      objectKey = line.match(/^([\w-]+):/)[1];
      data[objectKey] = {};
    } else if (line.match(/^([\w-]+):\s+(.+)$/)) {
      // Key: value pair
      const match = line.match(/^([\w-]+):\s+(.+)$/);
      const key = match[1];
      let value = match[2];

      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      // Convert booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;

      data[key] = value;
      currentKey = key;
      objectKey = null;
    }
  }

  // Extract date from filename (YYYY-MM-DD-slug.markdown)
  const filenameMatch = file.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.(markdown|md)$/);
  let date, slug;

  if (filenameMatch) {
    date = filenameMatch[1];
    slug = filenameMatch[2];
  } else {
    // Non-dated filename, use frontmatter date
    slug = file.replace(/\.(markdown|md)$/, '');
    date = data.date || '2020-01-01';
  }

  // Build new frontmatter
  const newFrontmatter = {
    title: data.title || 'Untitled',
    date: new Date(date + 'T00:00:00Z').toISOString().split('T')[0],
    published: data.published !== false && data.published !== 'false',
  };

  // Add categories if present
  if (data.categories && Array.isArray(data.categories) && data.categories.length > 0) {
    newFrontmatter.categories = data.categories;
  }

  // Add tags if present
  if (data.tags && Array.isArray(data.tags) && data.tags.length > 0) {
    newFrontmatter.tags = data.tags;
  }

  // Add header image if present
  if (data['header-img']) {
    newFrontmatter.headerImg = data['header-img'];
  }

  // Format new content
  const yamlLines = [
    '---',
    `title: "${newFrontmatter.title.replace(/"/g, '\\"')}"`,
    `date: ${newFrontmatter.date}`,
    `published: ${newFrontmatter.published}`,
  ];

  if (newFrontmatter.categories) {
    yamlLines.push('categories:');
    for (const cat of newFrontmatter.categories) {
      yamlLines.push(`  - ${cat}`);
    }
  }

  if (newFrontmatter.tags) {
    yamlLines.push('tags:');
    for (const tag of newFrontmatter.tags) {
      yamlLines.push(`  - ${tag}`);
    }
  }

  if (newFrontmatter.headerImg) {
    yamlLines.push(`headerImg: "${newFrontmatter.headerImg}"`);
  }

  yamlLines.push('---');

  // Clean up body - remove <!-- more --> markers
  let cleanBody = body.replace(/<!--\s*more\s*-->/g, '');

  const newContent = yamlLines.join('\n') + '\n' + cleanBody;

  // Write new file
  const outputFile = path.join(outputDir, `${slug}.md`);
  fs.writeFileSync(outputFile, newContent);
  console.log(`Migrated: ${file} -> ${slug}.md`);
}

console.log('\nMigration complete!');
