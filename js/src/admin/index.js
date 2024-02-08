import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import HeadPrimary from 'flarum/common/components/HeaderPrimary';
//import * from "./components/Link.js"

app.initializers.add('flarum/fictionextension', () => {
  console.log('[flarum/fictionextension] Hello, admin!');
});