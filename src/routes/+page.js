/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    
    let body = await fetch("https://swapi.dev/api/planets/3").then(res => res?.json?.());

	return {
		post: {
			planetName: body.name
		}
	};
}