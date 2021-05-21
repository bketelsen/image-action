#!/usr/bin/env bash

cd $1
messages=$(node /action/index.js render $2 > $3)

echo "::set-output name=messages::$messages"
