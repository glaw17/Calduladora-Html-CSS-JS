    const form = document.getElementById("form");
    //Quando clicar no submit ele executa
    form.addEventListener("submit", function(event){
        event.preventDefault();
        //Pegando os valores do HTML
        const numero1 = Number(document.querySelector('input[name="numero1"]').value);
        const numero2 = Number(document.querySelector('input[name="numero2"]').value);
        const operador = document.querySelector('select[name="operacao"]').value;

        //Calculo do Resultado
        let resultado = 0;
        switch (operador){
            case "+": 
            resultado = numero1+numero2;
            break;
            case "-":
                resultado = numero1-numero2;
                break;
            case "*":
                resultado = numero1*numero2;
                break;
            case "/":
                if (numero2 == 0){
                    alert("Não é possível dividir algum número por zero!")
                    return;
                }
                else{
                    resultado = numero1/numero2;
                    break;
                }
            case "^":
                resultado = 1;
                let numero2Posi = Math.abs(numero2);
                for (let i = 0; i < numero2Posi;i++){
                    resultado *= numero1;
                }
                if (numero2<0){
                    resultado = 1/resultado;
                }
                break;
            }
        //Mostrando o resultado
        document.getElementById("resultado").style.display="grid";
        if (resultado == 67){
            document.getElementById("resultado").innerHTML = "SIXX SEVEENNN";
        }
        else{
            document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        }
    })