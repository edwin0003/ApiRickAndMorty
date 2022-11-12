const urlApi = "https://rickandmortyapi.com/api/episode";
const url = new URL(window.location.href);

const characterId = url.searchParams.get("card");

fetch("https://rickandmortyapi.com/api/episode/"+characterId)
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => console.log(error))

    const showData = (data) => {
        console.log(data);
        let html = '';
      
            html += `
                <div class="card">
                    <h2>${data.name}</h2>
                    <p>${data.episode}</p>
                    <p>${data.air_date}</p>
                  </div> `
 
        document.getElementById('container-personajes').innerHTML = html
    
    }
    