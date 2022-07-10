#!/bin/bash
npm run build
rm -rf ../server/public/
mkdir ../server/public
mkdir ../server/public/auth
cp -R assets ../server/public/auth/assets/
cp -R build ../server/public/build/
cp -R css ../server/public/css/
cp game.html ../server/public/game.html

