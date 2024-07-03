<script lang="ts">
  import between from './assets/between.jpg'

  import Comic from './lib/Comic.svelte'
  import Bio from './lib/Bio.svelte'
  import Title from './lib/Title.svelte'
  import Socials from './lib/Socials.svelte'
</script>

<main>
  <Title />

  <Bio />

  <Comic />

  <img alt="between-img" class='between-img' src="{between}">

  <Socials />
</main>
