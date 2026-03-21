import { partners } from '$lib/data/partners';
import { works } from '$lib/data/work';

export function load({ params }) {
	const work = works.find((w) => w.slug === params.slug);

	if (!work) {
		throw new Error('Work not found');
	}
	const relatedPartners = partners.filter((p) => work.partners.includes(p.slug));

	return {
		work,
		partners: relatedPartners
	};
}
