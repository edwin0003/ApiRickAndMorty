const URL = "https://rickandmortyapi.com/api/character/";
fetch(URL)
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => console.log(error))
 //   .finally((mensaje)=> console.log(mensaje))
const showData = (data) => {
    console.log(data);
    let html = '';
    data.results.forEach(c => {
        html += `
            <div class="card">
                <img class="image-personaje" src="${c.image}" alt="">
                <h5>${c.name}</h5>
                <p>${c.status}</p>
                <p>${c.species}</p>
                <a href= "episode.html?card=${c.id}"> Details</a>
              </div> `
  
    });

    document.getElementById('container-personajes').innerHTML = html

}
