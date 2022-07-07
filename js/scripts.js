function JS_rndm_Color() {
    document.getElementById("randomColor").style.color = RandomLogic();
    document.getElementById("randomBodyColor").style.backgroundColor = RandomLogic();
}

function RandomLogic() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

//Counter Logic
var summ = document.querySelector(".count");
var addMore = document.querySelector(".more");
var takeLess = document.querySelector(".less");

var defaultSumm = 0;

setDefaultSumm();

addMore.addEventListener("click", ()=>{
    defaultSumm++;
    setDefaultSumm();
})

takeLess.addEventListener("click", ()=>{
    defaultSumm--;
    setDefaultSumm();
})

function setDefaultSumm(){
    // if(defaultSumm  <=0) {
        summ.innerHTML = defaultSumm;
    // }
    // else{

    // }
}

function doSomethingFunny(){
    let baseColor = "rgba(";
    for(let i = 0; i < 3; i++){
       baseColor+= Math.floor(Math.random() * 255) + ",";
    }
    return baseColor
}

function takeTheFunnyValue(){
    let funnyPower1 = doSomethingFunny();
    let funnyPower2 = doSomethingFunny();
    document.documentElement.style.setProperty("--rgba1",funnyPower1 + "0.1)")
    document.documentElement.style.setProperty("--rgba2",funnyPower2 + "0.1)")
}

setInterval(takeTheFunnyValue,1000);

function showForm(){
    var template = document.getElementById("contact-form");
    var cloneTemplate = template.content.cloneNode(true);
    document.querySelector(".container1").appendChild(cloneTemplate);
    cloneTemplate.innerHTML = "";
}