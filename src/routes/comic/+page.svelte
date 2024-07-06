<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';
	import type { Comic } from './comic';

	var comicTitle = '' as string;
	var image = '' as string;
	var imageDesc = '' as string;
	var comicDate = '' as string;
	var comicFromNow = '' as string;

	async function fetchComic() {
		const params = new URLSearchParams() as URLSearchParams;
		params.append('email', 'd.troegubov@innopolis.university');
		const comic_id = (await fetch(
			'https://fwd.innopolis.university/api/hw2?' + params.toString()
		).then((r) => r.json())) as string;
		params.delete('email');
		params.append('id', comic_id);
		const comicObj = (await fetch(
			'https://fwd.innopolis.university/api/comic?' + params.toString()
		).then((r) => r.json())) as Comic;
		return comicObj;
	}

	function handleCoimic(comicObj: Comic) {
		const { safe_title } = comicObj;
		comicTitle = safe_title;

		const { alt, img } = comicObj;
		imageDesc = alt;
		image = img;

		const { day, month, year } = comicObj;
		const date = new Date(year, month, day) as Date;
		comicDate = 'Release date: ' + date.toLocaleDateString();
		comicFromNow = 'Time from release: ' + formatDistanceToNow(date);
	}

	async function getComic() {
		comicTitle = 'Loading...';
		image = '';
		imageDesc = '';
		comicDate = '';
		comicFromNow = '';
		handleCoimic(await fetchComic());
	}
</script>

<div class="main_block">
	<div class="centered-content">
		<button on:click={async () => await getComic()}>Get a comic</button>
		<h2>{comicTitle}</h2>
		<img src={image} alt={imageDesc} />
		<h3>{comicDate}</h3>
		<h3>{comicFromNow}</h3>
	</div>
</div>
