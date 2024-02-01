import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import HeadPrimary from 'flarum/common/components/HeaderPrimary';
//import * from "./components/Link.js"

app.initializers.add('flarum/fictionextension', () => {
  console.log('[flarum/fictionextension] Hello, admin!');
  extend(HeadPrimary.prototype, 'items', function (items) {
    //TS 文件不支持在TS代码中嵌套html的写法，需要修改后缀才能和官方文档中的保持一致。
    items.add('google', <a href="https://google.com">Google</a>);
  })
});
