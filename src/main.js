const contenedor = document.querySelector("#container-coins")
const divisas = document.querySelector("#divisas")
let moneda = "USD"
divisas.addEventListener("change",(e)=>{
  if(divisas.value == "1"){
    introduceParameters()
  }else if( divisas.value == "2"){
    moneda = "EUR"
    introduceParameters()
  }else if(divisas.value == "3"){
    moneda = "GBP"
    introduceParameters()
  }
})

const introduceParameters = async ()=>{
  //Limpiamos el padre
  limpiarHtml()
  const coins = await introduceCoins(moneda)
  //recorremos el array
  let num = 1
  console.log(coins)
  coins.forEach(element => {
    const article = document.createElement("article");
    const price = element.DISPLAY[moneda].PRICE;
    const changePct24Hour = element.DISPLAY[moneda].CHANGEPCT24HOUR;
    const changeClass = changePct24Hour >= 0 ? 'text-green-500' : 'text-red-500';

    article.classList.add("w-full", "flex", "justify-between","items-center","md:border","md:border-[#36536B]", "md:px-16", "md:py-6", "border-b-transparent")
    
    article.innerHTML = `
      <header class="flex gap-2 items-center ">
        <p class="md:mr-6">${num}</p>
        <img src="https://www.cryptocompare.com${element.CoinInfo.ImageUrl}" width="50" heigth="auto">
        <div class="flex flex-col">
          <h3 class="font-bold">${element.CoinInfo.Name}</h3>
          <p class="text-[#36536B]">${element.DISPLAY[moneda].MKTCAP}</p>
        </div>
      </header>
      <main class="flex gap-2 md:gap-6 items-center justify-center">
        <p class="text-xl">${price}</p>
        <p class="${changeClass}">${changePct24Hour}%</p>
      </main>
    `
    contenedor.appendChild(article)
    num++
  });
}

addEventListener("DOMContentLoaded", introduceParameters)



async function introduceCoins (divisa){
  let url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=25&tsym=${divisa}`
  const response = await fetch(url)
  const data = await response.json()
  return data.Data
}

function limpiarHtml(){
  while(contenedor.firstChild){
    contenedor.firstChild.remove(contenedor.firstChild)
  }
}