let demo = document.querySelector("#demo"); //拿到demo
let string = `
我是一名前端新人
接下来我要加样式了
我要加的样式是
body{
    color: red;
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
        else string2 += string[n];
        demo.innerHTML = string2;
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 100);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
