function task1()
{
 let re=/^(http|https):\/\/(?:www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}(\/.*)?$/;
 let str=prompt("Введите URL адрес");
    let URL=re.test(str);
    if(URL) alert ("Вы ввели корректный URL адрес");
    else alert ("Вы ввели некорректный URL адрес");
}
function task2()
{
    let re=/^([_a-zA-Z\$])([a-zA-Z]|\d_\$){1,254}$/;
    let str=prompt("Введите переменную");
    if (re.test(str)==1) alert ("Вы ввели корректную переменную");
    else alert ("Вы ввели некорректную переменную");
}
function task3()
{
    let re=/^[a-zA-Z\d]{1,}$/
    let str=prompt("Введите строку");
    if (re.test(str)) alert ("Ввод корректен");
    else alert ("Ввод некорректен");
}
function task4()
{
    let re=/[\W\d]{10,}/g;
    let str=prompt("Введите строку");
    let arr=str.match(re);
    if (arr==null) alert ("Строка корректна");
    else alert ("Строка некорректна");
}
function task5()
{
    let reSymbol=/[a-zA-Z]\d/g;
    let reDigit=/\d/g;
    let str=prompt ("Введите строку");
    let numS=str.match(reSymbol);
    if (numS!=null) alert (`Symbol ${numS.length}`);
    let numD=str.match(reDigit);
    if (numD!=null) alert (`Digit ${numD.length}`); //vjhg
}