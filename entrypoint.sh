#!/usr/bin/env bash

cd $1
messages=$(node /action/dist/index.js $2 )

echo "::set-output name=messages::$messages"
