var text = document.getElementById ("text1");

function insulinoterapia () {
    let prescricao = parseFloat (document.getElementsByClassName ("number1")[0].value);
    let seringa = parseFloat (document.getElementsByClassName ("number2")[0].value);
    let frasco = parseFloat (document.getElementsByClassName ("number3")[0].value);
    let resultado = parseFloat;

        resultado = (prescricao * seringa) / frasco;

        text.innerHTML = resultado + " " + "Ul";

}