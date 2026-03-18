<script>
	import { works } from '$lib/data/work';
	import { goto } from '$app/navigation';

	const limitedWorks = works.slice(0, 3);
</script>

<div
	id="work"
	class="relative my-5 flex h-auto w-full flex-col items-center justify-around gap-2 pb-8"
>
	<h1 class="items-center text-3xl font-bold uppercase">Our Highlighted Work</h1>

	<p class="max-w-2xl text-center font-light">
		Highlighted Event we have participated, increasing more engagement and social features to agenda
		we work with.
	</p>

	<div class="flex w-[90%] flex-col items-center justify-around gap-2 md:flex-row">
		{#each limitedWorks as work}
			<div
				class="flex w-full cursor-pointer flex-col justify-around gap-3 transition-all hover:-translate-y-3 md:w-1/3"
				on:click={() => goto(`/work/${work.slug}`)}
			>
				<img src={work.image} alt={work.title} class="h-auto w-full object-cover" />

				<h1 class="text-lg font-bold uppercase">
					{work.title}
				</h1>

				<p class="truncate text-xs font-light">
					{work.description}
				</p>
			</div>
		{/each}
	</div>
</div>
