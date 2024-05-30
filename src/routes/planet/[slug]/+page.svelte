<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{@html data.post.planetInfo.name}</h1>

<table>
  <tr>
    <th>Planet Name:</th>
    <td>{data.post.planetInfo.name}</td>
  </tr>
    
  <tr>
    <th>Rotation Period:</th>
    <td>{data.post.planetInfo.rotation_period}</td>
  </tr>
    
  <tr>
    <th>Orbital Period:</th>
    <td>{data.post.planetInfo.orbital_period}</td>
  </tr>
    
  <tr>
    <th>Diameter:</th>
    <td>{data.post.planetInfo.diameter}</td>
  </tr>
    
  <tr>
    <th>Climate:</th>
    <td>{data.post.planetInfo.climate}</td>
  </tr>
    
  <tr>
    <th>Gravity:</th>
    <td>{data.post.planetInfo.gravity}</td>
  </tr>
    
  <tr>
    <th>Terrain:</th>
    <td>{data.post.planetInfo.terrain}</td>
  </tr>
    
  <tr>
    <th>Surface Water:</th>
    <td>{data.post.planetInfo.surface_water}</td>
  </tr>

  <tr>
    <th>Population:</th>
    <td>{data.post.planetInfo.population}</td>
  </tr>

  <tr>
    <th>Residents:</th>
    <td>{data.post.residents.map(name => name = " " + name) + (data.post.residents.length == 0 ? "None" : "")}</td>
  </tr>
</table>

<h3>Select Another Planet</h3>
<div class="submenu">
	{#each Array.from(Array(60).keys()).map(key => key += 1) as section}
		<a href="/planet/{section}">{section}</a>
		<spacer width=50 />
	{/each}
</div>