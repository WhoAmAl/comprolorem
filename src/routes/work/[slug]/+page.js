import { works } from '$lib/data/work';

export function load({ params }) {
	const work = works.find((w) => w.slug === params.slug);

	if (!work) {
		throw new Error('Work not found');
	}

	return {
		work
	};
}
