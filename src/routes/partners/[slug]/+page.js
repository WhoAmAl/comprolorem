import { partners } from '$lib/data/partners';

export function load({ params }) {
	const partner = partners.find((p) => p.slug === params.slug);

	if (!partner) {
		throw new Error('Partner not found');
	}

	return {
		partner
	};
}
