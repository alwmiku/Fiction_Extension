import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import HeadPrimary from 'flarum/common/components/HeaderPrimary';

app.initializers.add('flarum/fictionextension', () => {
  // console.log('[flarum/fictionextension] Hello, admin!');
  extend(HeadPrimary.prototype, 'items', function (items) {
    items.add('google', '<a href="https://google.com">Google</a>');
  });
});
