#!/bin/bash

ELECTRON_BIN=node_modules/electron-prebuilt/cli.js
WORKING_DIR=`dirname $0`

if [ -f $ELECTRON_BIN ] ; then
    $ELECTRON_BIN $WORKING_DIR 'dev'
else
    echo "You need npm install first."
fi
