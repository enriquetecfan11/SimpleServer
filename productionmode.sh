#!/bin/sh

echo "👨‍💻 No we enter in production mode "
sleep 2
echo "We set the environment variable"
export NODE_ENV=production

sleep 2
echo "We start the server"
node server.js

sleep 2

echo "Send Ctrl+C to stop the server"

echo "We are done 🎉, exiting"  

exit 0