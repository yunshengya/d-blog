#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.zhangshuqi.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master


# Github仓库
git push -f https://github.com/yunshengya/d-blog main

# Gitee仓库
# git push -f https://gitee.com/yunshengya.git main

cd -