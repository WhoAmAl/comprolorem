<script>
	const works = [
		{
			title: 'Lorem ipsum dolor sit amet',
			description:
				'Highlighted Event we have participated, increasing more engagement and social features to agenda we work with.',
			image: 'headerfull.webp'
		},
		{
			title: 'Lorem ipsum dolor sit amet',
			description:
				'Highlighted Event we have participated, increasing more engagement and social features to agenda we work with.',
			image: 'headerfull.webp'
		},
		{
			title: 'Lorem ipsum dolor sit amet',
			description:
				'Highlighted Event we have participated, increasing more engagement and social features to agenda we work with.',
			image: 'headerfull.webp'
		}
	];
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
		{#each works as work}
			<div class="flex w-full flex-col justify-around gap-3 md:w-1/3">
				<img src={work.image} alt={work.title} class="h-auto w-full object-cover" />

				<h1 class="text-lg font-bold uppercase">
					{work.title}
				</h1>

				<p class="text-xs font-light">
					{work.description}
				</p>
			</div>
		{/each}
	</div>
</div>
