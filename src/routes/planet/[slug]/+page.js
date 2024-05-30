/** @type {import('../../.svelte-kit/types/src/routes/$types').PageLoad} */
export async function load({ params }) {
    let foo = `https://swapi.dev/api/planets/${params.slug}`;
    console.log(foo);
    let body = await fetch(foo).then(res => res?.json?.());
	return {
		post: {
			planetInfo: body
		}
	};
}