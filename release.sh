#!/bin/sh

# ---------------------------------------------------------------------------
# modify these config for the target project
ServerAddress=root@47.89.191.19
DeployDirectoryPath=/web/www.cosmobounty.com
# ---------------------------------------------------------------------------

# ---------------------------------------------------------------------------
# https://blog.csdn.net/huang0700340204/article/details/113841225
# source ~/.nvm/nvm.sh
# nvm use 18.15.0
cd ./cosmo

zip -r ./dist.zip ./*

ssh ${ServerAddress} "mkdir -p $DeployDirectoryPath"
scp -r ./dist.zip ${ServerAddress}:${DeployDirectoryPath}
rm ./dist.zip
ssh ${ServerAddress} "cd $DeployDirectoryPath && unzip -o dist.zip"
## ---------------------------------------------------------------------------
