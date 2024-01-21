import app from 'flarum/common/app';

app.initializers.add('flarum/fictionextension', () => {
  console.log('[flarum/fictionextension] Hello, forum and admin!');
});
