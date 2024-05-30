<h3>Select A Planet</h3>
<div class="submenu">
	{#each Array.from(Array(61).keys()) as section}
		<a href="/planet/{section}">{section} </a>
	{/each}
</div>