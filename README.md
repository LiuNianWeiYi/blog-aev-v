## Angular - Express - Vue

### Angular - 构建前台展示页面

### Express - 构建服务

### Vue - 构建后台管理页面

### 此项目是基于 Vue 的博客系统后台管理页面


  采用接口的方式，数据通过 Ajax 传输；数据存储采用 Mysql；发布文章采用 Markdown 的编写方式，在后端通过 Marked 插件，把 Markdown 格式转成 HTML 格式

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#### 登录功能

登录时，把后端获取的user数据存储在sessionStorage里，进入adminHome页是，通过sessionStorage里是否有值，来判断用户是否登录
