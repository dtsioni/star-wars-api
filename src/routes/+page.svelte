<h1>Select A Planet</h1>
<div class="submenu">
	{#each Array.from(Array(61).keys()) as section}
		<a href="/planet/{section}">{section}</a>
		<spacer width=50 />
	{/each}
</div>