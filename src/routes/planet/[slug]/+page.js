/** @type {import('../../.svelte-kit/types/src/routes/$types').PageLoad} */
export async function load({ params }) {
    let planetUrl = `https://swapi.dev/api/planets/${params.slug}`;
    let body = await fetch(planetUrl).then(res => res?.json?.());

    const residentNames = [];

    for (let i = 0; i < body.residents.length; i++)
    {
        let residentInfo = await fetch(body.residents[i]).then(res => res?.json?.());
        residentNames.push(residentInfo.name);
    }

	return {
		post: {
			planetInfo: body,
            residents: residentNames
		}
	};
}