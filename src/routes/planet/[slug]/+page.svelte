<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{@html data.post.planetName}</h1>

<h3>Select Another Planet</h3>
<div class="submenu">
	{#each Array.from(Array(61).keys()) as section}
		<a href="/planet/{section}">{section} </a>
	{/each}
</div>