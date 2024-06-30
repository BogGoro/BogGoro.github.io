import { formatDistanceToNow } from "date-fns";

const getComic = document.getElementById('get-comic') as HTMLButtonElement;
const comicTitle = document.getElementById("comic-title") as HTMLHeadingElement;
const comicContainer = document.getElementById('comic') as HTMLDivElement;
const comicDate = document.getElementById("comic-date") as HTMLHeadingElement;
const comicFromNow = document.getElementById("comic-from-now") as HTMLHeadingElement;

interface Comic {
    "month": number;
    "num": number;
    "link": string;
    "year": number;
    "news": string;
    "safe_title": string;
    "transcript": string;
    "alt": string;
    "img": string;
    "title": string;
    "day": number
}

async function fetchComic() {
    const params = new URLSearchParams() as URLSearchParams;
    params.append('email', "d.troegubov@innopolis.university");
    const comic_id = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
        .then(r => r.json()) as string;
    params.delete('email');
    params.append('id', comic_id);
    const comicObj = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString())
    .then(r => r.json()) as Comic;
    return comicObj;
}

function handleCoimic(comicObj: Comic) {
    const { safe_title } = comicObj;
    comicTitle.textContent = safe_title;

    const { alt, img } = comicObj;
    const imageElement = document.createElement("img") as HTMLImageElement;
    imageElement.alt = alt;
    imageElement.src = img;
    comicContainer.textContent = null;
    comicContainer.appendChild(imageElement);

    const { day, month, year } = comicObj;
    const date = new Date(year, month, day) as Date;
    comicDate.textContent = "Release date: " + date.toLocaleDateString();
    comicFromNow.textContent = "Time from release: " + formatDistanceToNow(date);
}

getComic.addEventListener('click', async function (e) {
    comicContainer.textContent = "Loading...";
    const comic: Comic = await fetchComic();
    handleCoimic(comic);
});
