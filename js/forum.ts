export * from './src/common';
export * from './src/forum';

let m = require("mithril");

module.exports = {
    view:function()
    {
        return m(
            "div",["h1","测试界面试试看怎么样。"]
        )
    }

}
