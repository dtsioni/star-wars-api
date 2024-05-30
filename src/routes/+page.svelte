<h1>Select A Planet</h1>
<div class="submenu">
	{#each Array.from(Array(60).keys()).map(key => key += 1) as section}
		<a href="/planet/{section}">{section}</a>
		<spacer width=50 />
	{/each}
</div>