<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';
	import { partners } from '$lib/data/partners';
	import { goto } from '$app/navigation';

	const options = {
		loop: true
	};

	const plugins = [
		AutoScroll({
			speed: 1,
			stopOnInteraction: false,
			stopOnMouseEnter: true
		})
	];
</script>

<div
	id="partners"
	class="relative my-5 flex h-auto w-full flex-col items-center justify-around gap-4 pb-8"
>
	<h1 class="items-center text-3xl font-bold uppercase">Our Partners</h1>
	<p class="text-center font-light">
		We have been working with some Fortune xxx+ clients to success their agenda achieving higher
		guests satisfactions and engagement.
	</p>
	<div
		class="mt-4 flex w-full flex-row items-center justify-around overflow-hidden"
		use:emblaCarouselSvelte={{ options, plugins }}
	>
		<div class="flex w-full items-center justify-around gap-4">
			{#each partners as partner}
				<div
					onclick={() => goto(`/partners/${partner.slug}`)}
					class="flex flex-[0_0_50%] justify-center md:flex-[0_0_20%]"
				>
					<img src={partner.logo} alt={partner.name} class="w-45 object-contain" />
				</div>
			{/each}
		</div>
	</div>
</div>
