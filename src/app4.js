import $ from 'jquery';
import './app4.css';

const $circle = $('#app4 .circle')
$circle.on("mouseenter", ()=>{
    $circle.addClass("active")
}).on("mouseleave", ()=>{
    $circle.removeClass("active")
});//鼠标进入添加active，鼠标移开，删除active