import './app1.css'
import $ from 'jquery'

const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");
const $number = $("#number");
const n = localStorage.getItem("n");//得到n
$number.text(n || 100);//有的话就是n，没有就是100

$button1.on("click", ()=>{
    let n = parseInt($number.text());//设置一个n是把number转化为数字的
    n +=1;
    localStorage.setItem("n", n);//将n存储下来
    $number.text(n);//返回新的n
});
$button2.on("click", ()=>{
    let n = parseInt($number.text());
    n -=1;
    localStorage.setItem("n", n);
    $number.text(n);
});
$button3.on("click", ()=>{
    let n = parseInt($number.text());
    n *=2;
    localStorage.setItem("n", n);
    $number.text(n);
});
$button4.on("click", ()=>{
    let n = parseInt($number.text());
    n /=2;
    localStorage.setItem("n", n);
    $number.text(n);
});