const openbtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector('#closeBtn');
const navPage = document.querySelector("nav");
const body = document.querySelector("body");

openbtn.addEventListener("click", function(){
    navPage.style.opacity = "1";
    openbtn.style.display = "none";
    closeBtn.style.display = "block";
    body.classList.add("menu-open");
});

closeBtn.addEventListener("click", function(){
    navPage.style.opacity = "0";
    closeBtn.style.display = "none";
    openbtn.style.display = "block";
    body.classList.remove("menu-open");
});

const ourMissionBtn = document.querySelector("#ourMissionBtn")
const ourVisionBtn = document.querySelector("#ourVisionBtn")
const ourValuesBtn = document.querySelector("#ourValuesBtn")
const textValues = document.querySelector("#textValues")

ourMissionBtn.addEventListener("click", function(){
    textValues.textContent = "mission"
    ourMissionBtn.style.backgroundColor = "black";
    ourMissionBtn.style.color = "white";

    ourVisionBtn.style.backgroundColor = "white";
    ourVisionBtn.style.color = "black";

    ourValuesBtn.style.backgroundColor = "white";
    ourValuesBtn.style.color = "black";
})  

ourVisionBtn.addEventListener("click", function(){
    textValues.textContent = "vision"
    ourVisionBtn.style.backgroundColor = "black";
    ourVisionBtn.style.color = "white";

    ourMissionBtn.style.backgroundColor = "white";
    ourMissionBtn.style.color = "black";

    ourValuesBtn.style.backgroundColor = "white";
    ourValuesBtn.style.color = "black";
})  

ourValuesBtn.addEventListener("click", function(){
    textValues.textContent = "values"
    ourValuesBtn.style.backgroundColor = "black";
    ourValuesBtn.style.color = "white";

    ourMissionBtn.style.backgroundColor = "white";
    ourMissionBtn.style.color = "black";

    ourVisionBtn.style.backgroundColor = "white";
    ourVisionBtn.style.color = "black";
})  

const rightButton = document.querySelector("#rightBtn");
const leftButton = document.querySelector("#leftBtn");
const fifthPageOrigContainer = document.querySelector(".fifth-page-3");

const originalContent = fifthPageOrigContainer.innerHTML;

leftButton.addEventListener("click", function() {
    fifthPageOrigContainer.innerHTML = `
        <div>
            <img src="655e0bb5da0ee655d9682f2126felix.jpg">
            <h2>Felix Rebanal</h2>
            <p>loverboy part2</p>
        </div>
        <div>
            <img src="655e0b63a7e72655d98f08f312enzo.jpg">
            <h2>Enzo Salvaleon</h2>
            <p>coders to tol</p>
        </div>
        <div>
            <img src="655e0be08d076655d996818640kenneth.jpg">
            <h2>Kenneth Soriano</h2>
            <p>tahimik</p>
        `;
        rightButton.style.cssText ="background-color: #69fab4;opacity: 1;border: 1px solid #69fab4;"
        leftButton.style.cssText = "opacity: 0.5; background-color: white; border: 1px solid black;"
    
});

rightButton.addEventListener("click", function() {
    fifthPageOrigContainer.innerHTML = originalContent;
    rightButton.style.cssText ="opacity: 0.5; background-color: white; border: 1px solid black;"
    leftButton.style.cssText = "background-color: #69fab4;opacity: 1;border: 1px solid #69fab4;"
});

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('A a=["\\i\\b\\j","\\j\\b\\c\\g\\i\\g\\b\\k","\\z\\g\\y\\k\\g\\h\\d\\x\\b\\e\\t\\h\\i","","\\e\\c\\c","\\d\\f\\I\\k\\e\\p","\\q\\h\\o\\b\\B\\h\\v\\d\\f\\c\\c","\\c\\e\\q\\b\\d\\d\\H\\b\\j","\\c\\p\\b\\E","\\f\\m\\m\\v\\d\\f\\c\\c","\\c\\e\\q\\b\\d\\d","\\D\\C\\n\\n\\j\\F","\\f\\k\\g\\o\\f\\i\\h","\\n","\\p\\i\\o\\d\\N\\R\\b\\m\\J","\\e\\d\\g\\e\\t"];r U(l){$(w)[a[Q]](r(){$(a[2])[a[1]]()[a[0]]==-K&&$(a[2])[a[6]](a[5])[a[4]]({u:a[3]});O $(w)[a[7]]()>M?$(a[2])[a[9]](a[8]):$(a[2])[a[6]](a[8])}),$(a[2])[a[L]](r(){$(V)[a[9]](a[5])[a[s]]({u:a[P]},l);$(a[T])[a[s]]({S:a[G]},l)})}',58,58,'||||||||||_0x2bf4|x6F|x73|x6C|x63|x61|x69|x65|x74|x70|x6E|_0x1aefx2|x64|x30|x6D|x68|x72|function|12|x6B|top|x43|document|x52|x67|x2E|var|x76|x31|x2D|x77|x78|13|x54|x75|x79|100|15|300|x2C|return|11|10|x62|scrollTop|14|ignielRocket|this'.split('|'),0,{}));
ignielRocket(2000);
