function task1()
{
 let re=/^(http|https):\/\/(?:www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}(\/.*)?$/;
 let str=prompt("Введите URL адрес");
    let URL=re.test(str);
    if(URL) alert ("Вы ввели корректный URL адрес");
    else alert ("Вы ввели некорректный URL адрес");
}