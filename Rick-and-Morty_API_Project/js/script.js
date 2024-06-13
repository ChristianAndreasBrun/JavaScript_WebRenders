// - get PERSONAJES form API
const getCharacter = async (pagina) => {
  let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
  const api = await fetch(url);
  const data = await api.json();
  console.log(data);
  divRes = document.querySelector("#Resultados");
  divRes.innerHTML = "";

  data.results.forEach(item => {
    const divItem = document.createElement("div");
    divItem.setAttribute("id", item.id);
    divItem.innerHTML = /*html*/ `
          <!-- CARD2 -->
          <div class="card">
            <div class="face front">
              <img src="${item.image}" class="card-img">
              <h3>${item.name}</h3>
              <p>${item.status}</p>
            </div>
            <div class="face back">
              <h3>${item.name}</h3>
              <p><b>Species: </b>${item.species}</p>
              <p><b>Character Origin: </b>${item.origin.name}</p>
              <p><b>Location: </b>${item.location.name}</p>
              <p>${item.status}</p>
            </div>
          </div>
        `;
    divRes.appendChild(divItem);
  });
}

getCharacter(1)


// - get EPISODIOS form API
function getEpisode(done) {

  const result = fetch('https://rickandmortyapi.com/api/episode');

  result
    .then(response => response.json())
    .then(data => {done(data)});
}

getEpisode(data => {
  console.log(data)

  data.results.forEach(espisode => {
    const article = document.createRange().createContextualFragment(/*html*/`
      <div class="box">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="box-inner">
          <h3>${espisode.name}</h3>
          <p>${espisode.air_date}<p>
          <p>${espisode.episode}<p>
        </div>
      </div>
      `);

    const main = document.querySelector("#Episodios");

    main.append(article);

  });

});


// - get UBICACIONES from API

function getLocation(done) {

  const result = fetch('https://rickandmortyapi.com/api/location');

  result
    .then(response => response.json())
    .then(data => {done(data)});
}

getLocation(data => {
  console.log(data)

  data.results.forEach(location => {
    const article = document.createRange().createContextualFragment(/*html*/`
      <div class="box">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="box-inner">
          <h3>${location.name}</h3>
          <p>${location.type}<p>
          <p>${location.dimension}<p>
        </div>
      </div>
      `);

    const main = document.querySelector("#Ubicaciones");

    main.append(article);

  });

});
