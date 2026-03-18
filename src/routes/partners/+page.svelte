<script lang="ts">
	import Footer from '$lib/components/sections/Footer.svelte';
	import Header from '$lib/components/sections/Header.svelte';
	import Herosection from '$lib/components/sections/Herosection.svelte';
	import { partners } from '$lib/data/partners';

	const groups = ['Main Partner', 'Business Partner', 'Event Partner'];

	const groupedPartners = groups.map((group) => ({
		title: group,
		data: partners.filter((p) => p.status === group)
	}));
</script>

<section class="mx-auto flex min-h-screen max-w-7xl flex-col text-neutral-950">
	<Header />
	<Herosection />

	{#each groupedPartners as group}
		{#if group.data.length > 0}
			<div class="mt-14">
				<!-- LABEL -->
				<div class="mb-6 flex items-center gap-6 px-5">
					<h2 class="text-md w-40 font-medium text-neutral-500">
						{group.title}
					</h2>
					<div class="h-px flex-1 bg-neutral-200"></div>
				</div>

				<!-- GRID -->
				<div class="grid w-full grid-cols-2 gap-px bg-neutral-50 sm:grid-cols-3 md:grid-cols-4">
					{#each group.data as partner}
						<a
							href={`/partners/${partner.slug}`}
							class="flex flex-col items-center justify-center bg-white px-6 py-10 transition hover:bg-neutral-100"
						>
							<img src={partner.logo} alt={partner.name} class="h-12 w-auto object-contain" />
							<p class="mt-4 text-center text-sm font-medium text-neutral-700">
								{partner.name}
							</p>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	{/each}

	<Footer />
</section>
