<script>
	import { partners } from '$lib/data/partners';
	import { ArrowRight } from '@lucide/svelte';
	import Button from '../ui/button/button.svelte';
</script>

<section class="mt-16 flex w-full flex-col items-center justify-center px-5">
	<div class="flex w-full items-center justify-between">
		<div>
			<h2 class="text-xl font-semibold">Our Partners</h2>
			<p class="text-sm text-neutral-500">See more of our partners</p>
		</div>
	</div>
	<div class="mt-6 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each partners.slice(0, 3) as p}
			<a
				href={`/partners/${p.slug}`}
				class="flex items-center justify-between border border-neutral-200 p-4 transition hover:bg-neutral-100"
			>
				<div>
					<p class="text-sm text-neutral-500">{p.status}</p>
					<p class="font-medium">{p.name}</p>
				</div>

				<span class="text-neutral-400">→</span>
			</a>
		{/each}
	</div>
	<Button
		class="mx-auto w-fit cursor-pointer rounded-none border-none bg-transparent text-neutral-950 shadow-none hover:bg-transparent"
		href="/partners"
	>
		More<ArrowRight />
	</Button>
</section>
