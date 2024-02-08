import app from 'flarum/forum/app';

app.initializers.add('flarum/fictionextension', () => {
  console.log('[flarum/fictionextension] Hello, forum!');
});
