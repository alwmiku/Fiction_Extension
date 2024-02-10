import Page from 'flarum/common/components/Page';

export default class BooksPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);
  }

  oncreate(vnode) {
    super.oncreate(vnode);
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  view() {
    return (
      <div className="BooksPage">
        BooksPage已经初始化。
        测试ssh的功能是否正常。
      </div>
    );
  }
}
