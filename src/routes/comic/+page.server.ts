import fetch from 'node-fetch';
import type { Comic } from './comic'; // Assuming 'comic.ts' defines the Comic type

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const params = new URLSearchParams();
	params.append('email', 'd.troegubov@innopolis.university');

	const comic_id = (await fetch(
		'https://fwd.innopolis.university/api/hw2?' + params.toString()
	).then((r) => r.json())) as string;

	params.delete('email');
	params.append('id', comic_id);

	const comicObj = (await fetch(
		'https://fwd.innopolis.university/api/comic?' + params.toString()
	).then((r) => r.json())) as Comic;

	return { comic: comicObj, date: new Date(comicObj.year, comicObj.month, comicObj.day) };
}
