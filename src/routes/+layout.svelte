<script>
	import Header from './Header.svelte';
	import Title from './Title.svelte';
	import Socials from './Socials.svelte';
	import between from '../lib/images/between.jpg';
	import '../app.css';
	export const trailingSlash = 'always';
</script>

<head>
	<link rel="icon" href="%sveltekit.assets%/favicon.jpg" />
	<meta name="author" content="Denis Troegubov" />
</head>

<div class="app">
	<Header />

	<Title />

	<main>
		<slot />
	</main>

	<img alt="between-img" class="between-img" src={between} />

	<Socials />
</div>
