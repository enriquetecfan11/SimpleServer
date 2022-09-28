#!/bin/sh
echo "👨 No we enter in developer mode "
sleep 2

echo "First we check if we are in the latest version of the project"
git pull

sleep 2

echo "We set the environment variable"
export NODE_ENV=development

sleep 2

# echo "Send Ctrl+C to stop the server"
# kill -INT 888

echo "We are done 🎉, exiting"  

exit 0