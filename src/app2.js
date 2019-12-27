import './app2.css'
import $ from 'jquery'

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", (e)=>{ //监听父元素下子元素的事件（事件委托）
    const $li = $(e.currentTarget);//找到那个子元素
    $li 
        .addClass("selected")//添加selected类
        .siblings()//找到兄弟
        .removeClass("selected");//删除selected
    const index = $li.index();
    $tabContent
        .children()//找到孩子
        .eq(index)//找到对应的下标元素
        .addClass("active")//添加active类
        .siblings()//找到兄弟
        .removeClass("active");//删除active
});

$tabBar.children().eq(0).trigger('click')//找到tabBar的第一个孩子，触发点击事件
