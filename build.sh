#!/bin/bash

CURRENT_DIR=`dirname $0`
BUILD_DIR='out'

BOWER=node_modules/bower/bin/bower
ELECTRON_PACKAGER=node_modules/electron-packager/cli.js


echo "npm installing.."
npm install
echo "finished npm install"

echo "bower installing.."
$BOWER install
echo "finished bower install"

echo "electron-packager . --all --out=${BUILD_DIR}"
$CURRENT_DIR/$ELECTRON_PACKAGER $CURRENT_DIR --all --out=$BUILD_DIR --overwrite
echo "finished all packaging"
