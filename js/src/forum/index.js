import app from 'flarum/forum/app';
export {default as extend} from './BooksHome';
import HeaderPrimary from 'flarum/common/components/HeaderPrimary';

import Link from 'flarum/common/components/Link';

import { extend } from 'flarum/common/extend';

app.initializers.add('flarum/fictionextension', () => {
  // console.log('[flarum/fictionextension] Hello, forum!');
  const bookUrl = app.route('flarum.Fiction_Extension.forntPages');
  extend(HeaderPrimary.prototype,'items',(items)=>{
    items.add('fictionextension', <Link href={bookUrl}>书站</Link>);
  })
});
