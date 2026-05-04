const input=document.getElementById("input");
const button=document.getElementById("button");
const ul=document.getElementById("lista");
const rua=document.getElementById("Rua");
const cidade=document.getElementById("Cidade");
const estado=document.getElementById("Estado");
async function buscarInfo() {
    try{
        const cep=input.value.replace(/\D/g, "");
        if(cep.length !== 8){
            alert("CEP deve ter 8 números!");
            return;
        }
        const baseurl=`https://brasilapi.com.br/api/cep/v1/${cep}`
        const response=await fetch(baseurl);
        const dados= await response.json();
        if(response.ok){
            const objetc={
                "Rua": dados.street,"Cidade":dados.city,"Estado":dados.state
            };
            rua.innerHTML=`Rua - ${objetc.Rua}`;
            cidade.innerHTML=`Cidade - ${objetc.Cidade}`;
            estado.innerHTML=`Estado - ${objetc.Estado}`
        }else{
            const msg="Tente novamente mais tarde..! Erro ao realizar uma requisicao!"
        }
    }catch(error){
        console.error("Erro ao buscar as Infos.", error)
    }
};
button.addEventListener("click", buscarInfo);