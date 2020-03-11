#原生Node开发博客项目
---
##创建项目目录

```
mkdir blog
cd blog
mkdir bin
cd bin
touch server.js
npm init
npm install cross-env  --save-dev

```
---
##配置package.json
>配置入口文件和scripts快捷键 npm run dev--->nodemon bin/server.js
```
{
  "name": "blog",
  "version": "1.0.0",
  "description": "",
  "main": "./bin/server.js",
  "scripts": {
    "dev": "nodemon ./bin/server.js"
  },
  "author": "PYJ",
  "license": "ISC",
  "devDependencies": {
    "cross-env": "^7.0.2"
  }
}
```