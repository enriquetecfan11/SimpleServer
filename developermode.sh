#!/bin/sh

echo "👨‍💻 No we enter in developer mode "
sleep 2
echo "We set the environment variable"
export NODE_ENV=development

sleep 2
echo "We start the server"
node server.js

echo "We are done 🎉"