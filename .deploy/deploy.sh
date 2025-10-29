cd ~ /production-project
npm run build:production

rm -rf ~/../var/www/production_project/html
mv ~/production-project/build ~/../var/www/production_project/html