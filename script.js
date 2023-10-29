function adicionarCaracter(caracter) {
    const valordisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valordisplay + caracter

}

function limpaTela() {
    document.querySelector(".display").value = ""
}


function calcular() {
    const valordisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valordisplay)
}

function inverterNumero() {
    const valordisplay = document.querySelector(".display").value
    document.querySelector(".display").value = valordisplay * -1
}
