for file in *.html; do
    mv "$file" "`basename $file .html`.markdown"
done