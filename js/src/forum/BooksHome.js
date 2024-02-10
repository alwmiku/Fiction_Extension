import Extend from 'flarum/common/extenders';
import BooksPage from './components/BooksPage';
import app from 'flarum/forum/app';

export default [
  new Extend.Routes()
    .add('flarum.Fiction_Extension.forntPages', '/Fiction/homepage', <BooksPage />)
    .helper('FictionHomePages',()=>
    {
        app.route('flarum.Fiction_Extension.forntPages');
    }),
];