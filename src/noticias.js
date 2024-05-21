const news= document.querySelector("#container-news")


async function introduceNews(){
  const notices = await apiNews();
  console.log(notices)
  limpiarHtml();
  notices.forEach((noticia)=>{
    let article = document.createElement("article")
    const titulo = noticia.title
    const img = "./assets/img-news.png"
    const body = noticia.body
    const publicado = convertTimestampToDate(noticia.published_on)
    console.log(publicado)
    article.classList.add("w-full", "grid","md:grid-cols-2", "justify-between","items-center","md:border","md:border-[#36536B]", "md:px-16", "md:py-6","md:bg-gray-500/10", "md:rounded-2xl")
    article.innerHTML = `
      <header class="w-full md:w-[90%] rounded-xl">
        <img loading="lazy" class="w-full bg-cover rounded-xl" src="${img}">
      </header>
      <main class="flex flex-col gap-4 md:gap-6 items-center justify-center">
        <h3 class="font-bold text-xl mt-5 lg:text-3xl lg:self-start">${titulo}.</h3>
        <p class="text-[#63717d] lg:text-xl">${body}</p>
        <p>${publicado}</p>
      </main>
    `
    news.appendChild(article)
  })
}


const apiNews = async()=>{
  const url = "https://min-api.cryptocompare.com/data/v2/news/?lang=ES&sortOrder=news"
  let response = await fetch(url);
  let data = await response.json();
  return data.Data
}
function limpiarHtml(){
  while(news.firstChild){
    news.firstChild.remove(news.firstChild)
  }
}
addEventListener("DOMContentLoaded", introduceNews)

function convertTimestampToDate(timestamp) {
  // Convertir el timestamp a milisegundos
  let date = new Date(timestamp * 1000);

  // Formatear la fecha a una cadena legible
  let formattedDate = date.toLocaleDateString("es-ES", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  });

  return formattedDate;
}

