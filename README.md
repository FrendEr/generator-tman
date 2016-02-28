# generator-tman
> unit test generator

## 安装

```bash
npm install -g generator-tman
```

## 初始化项目

```bash
cd /your-repo/dir
yo tman
```

## 运行示例

* 不展示覆盖率信息

```bash
npm test

// ./node_modules/.bin/_mocha --compilers js:babel-register --recursive

```

* 展示覆盖率信息（对 es2015 的语法进行覆盖率计算时不进行编译）

```bash
npm run coverage

// ./node_modules/.bin/babel-node ./node_modules/.bin/isparta cover ./node_modules/.bin/_mocha -- --recursive
```


## License

* MIT
