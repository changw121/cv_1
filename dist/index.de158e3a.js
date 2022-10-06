let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我叫小常
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成一个八卦图
 * 首先，把div变成一个圆
 **/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个球 */
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let string2 = ""; //缓存要写到屏幕上的结果
// string = string.replace(/\n/g,'<br>'); //用正则将所有的回车变成html中的回车
let n = 0;
//通过setTimeout模拟了setInterval，好处是随时停止
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") //如果是回车就不照搬，将string中的回车变成html中的回车
        string2 += "<br>";
        else if (string[n] === " ") //如果是空格就转化成html中的空格
        string2 += "&nbsp;";
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
