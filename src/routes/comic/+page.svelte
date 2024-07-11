<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';
	export let data;
	$: ({ comic } = data);
	$: ({ date } = data);
</script>

<head>
	<title>Comic</title>
	<meta name="title" content="Comic" />
	<meta name="description" content="Shows the comic and information about it" />
</head>

<div class="main_block">
	<div class="centered-content">
		<h2>{comic?.safe_title || 'Loading...'}</h2>
		<img src={comic?.img} alt={comic?.alt} />
		<h3>Release date: {date.toLocaleDateString()}</h3>
		<h3>Time from release: {formatDistanceToNow(date)}</h3>
	</div>
</div>
