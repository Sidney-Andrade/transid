console.log("vai ler essa linha ao execultar o arquivo HTML")

function resolverTabuada() {
    const input01 = document.querySelector("#tab1"); //testar o [document.querySelector("#tab1")] no console com os alunos
    let tab01 = input01.value;
    let tab02 = document.querySelector("#tab2").value;

    //ordenacao AZ
    if(tab01>tab02){
        let aux = tab01;
        tab01 = tab02;
        tab02 = aux;
    }
    //criar a tabuada entre os valores que foram digitados no input e adicionar na tela do navegador


//-2     ///voltar aqui ao final para explicar... caso de varios cliques....
    if(document.querySelector("ul") != null){
        document.querySelector("ul").parentNode.removeChild(document.querySelector("ul"));
    }

    
    //cria um elelemnto div
    const container = document.createElement("ul");
    
    
    do{
    
        for (let index = 1; index <= 10; index++) {
            console.log(tab01 + " X " + index + " = " + tab01*index)
            
            const linha =  document.createElement("li");
            let result = document.createTextNode(`${tab01} X ${index} = ${tab01*index}`)

 //-1       //fazer depois de mostrar o resultado
            if(index === 10){
                linha.className = "fim"
                //criar um css para formatar geral.css
            }

//-3        //por uma classe nas linhas pares
            if(index % 2 != 0){
                linha.className += "impar"
            }

            linha.appendChild(result)
            container.appendChild(linha)
        }
    
    tab01++;    
    }while(tab01<=tab02)
    //adicioa o elemento div na tela depois do ultimo elemento filho do body
    
    document.body.appendChild(container);

}