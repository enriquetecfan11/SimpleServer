#!/bin/sh
echo "👨 No we enter in developer mode "
sleep 2

echo "First we check if we are in the latest version of the project"
git pull

sleep 2

echo "We set the environment variable"
export NODE_ENV=development

sleep 2
echo "We start the server"
node server.js

echo "We are done 🎉"

exit 0