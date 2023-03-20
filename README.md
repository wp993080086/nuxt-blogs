# nuxt-blogs

Nuxt.js写的一个简单博客：[预览](https://wp993080086.github.io/nuxt-blogs/)

# 🔧 开发

- 安装

需要node.js版本 ≥ 16.18.1

```JavaScript
npm install
```

- 运行

```JavaScript
npm run serve
```

# 🔍 修复

```JavaScript
npm run fix
```

# 🔨 打包

- 静态部署

```JavaScript
npm run generate
```

运行成功后，会生成`dist`文件夹，把`dist`文件夹放到服务器直接就可以访问

- 动态部署

```JavaScript
npm run build
```

运行成功后，会生成`.nuxt`文件夹。将`.nuxt`、`static`、`nuxt.config.js`、`package.json`放入同一个文件夹，进入文件夹后按顺序运行以下命令即可访问：

```JavaScript
npm install
npm run start
```