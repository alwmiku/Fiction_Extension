import Extend from 'flarum/common/extenders';
import BooksPage from './components/BooksPage';
import app from 'flarum/forum/app';

export default [
  new Extend.Routes()
    .add('flarum.Fiction_Extension.forntPages', '/Fiction/homepage', BooksPage)
    //下面这句话用的是文档中的结构。根本不行，结果就是不可以。去掉反而好使了。
    // .add('flarum.Fiction_Extension.forntPages', '/Fiction/homepage', <BooksPage />)
    .helper('FictionHomePages',()=>
    {
        app.route('flarum.Fiction_Extension.forntPages');
    }),
];