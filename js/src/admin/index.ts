import app from 'flarum/admin/app';

app.initializers.add('flarum/fictionextension', () => {
  console.log('[flarum/fictionextension] Hello, admin!');
});
