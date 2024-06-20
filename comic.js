
const getComic = document.getElementById('get-comic');
const comicTitle = document.getElementById("comic-title");
const comicContainer = document.getElementById('comic');
const comicDate = document.getElementById("comic-date");

async function fetchComic() {
    const params = new URLSearchParams();
    params.append('email', "d.troegubov@innopolis.university");
    const comic_id = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
        .then(r => r.json());
    params.delete('email');
    params.append('id', comic_id);
    const comicObj = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString())
    .then(r => r.json());
    return comicObj;
}

function handleCoimic(comicObj) {
    const { safe_title } = comicObj;
    comicTitle.textContent = safe_title;

    const { alt, img } = comicObj;
    const imageElement = document.createElement("img");
    imageElement.alt = alt;
    imageElement.src = img;
    const container = document.getElementById("comic");
    comicContainer.textContent = null;
    container.appendChild(imageElement);

    const { day, month, year } = comicObj;
    const date = new Date(Date.UTC(year, month, day));
    comicDate.textContent = date.toLocaleDateString();
}

getComic.addEventListener('click', async function (e) {
    comicContainer.textContent = "Loading...";
    const comic = await fetchComic();
    handleCoimic(comic);
});
