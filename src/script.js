var http = new XMLHttpRequest();
var url = 'https://www2.correios.com.br/sistemas/rastreamento/resultado_semcontent.cfm?';
let codigo = document.querySelector("#result").value
var params = `objetos=${codigo}`;

function sendPost() {
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () { 
        if (http.readyState == 4 && http.status == 200) {
            let div = document.querySelector("#result")
                div.innerHTML = http.responseText
        }
    }
    http.send(params);
}