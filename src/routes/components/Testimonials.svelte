<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';

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

	const testimonials = [
		{
			name: 'Lorem Ipsum',
			image: 'headerfull.webp',
			text: 'Thanks to this photobooth presence on Lorem Event 2025, me and my gang had the chance to take iconic photos during our visit, it was great event and even greater with photobooth specialized design.',
			event: 'Lorem Event 2025'
		},
		{
			name: 'Lorem Ipsum',
			image: null,
			text: 'Thanks to this photobooth presence on Lorem Event 2025, me and my gang had the chance to take iconic photos during our visit, it was great event and even greater with photobooth specialized design.',
			event: 'Lorem Event 2025'
		},
		{
			name: 'Lorem Ipsum',
			image: null,
			text: 'Thanks to this photobooth presence on Lorem Event 2025, me and my gang had the chance to take iconic photos during our visit, it was great event and even greater with photobooth specialized design.',
			event: 'Lorem Event 2025'
		},
		{
			name: 'Lorem Ipsum',
			image: null,
			text: 'Thanks to this photobooth presence on Lorem Event 2025, me and my gang had the chance to take iconic photos during our visit, it was great event and even greater with photobooth specialized design.',
			event: 'Lorem Event 2025'
		},
		{
			name: 'Lorem Ipsum',
			image: null,
			text: 'Thanks to this photobooth presence on Lorem Event 2025, me and my gang had the chance to take iconic photos during our visit, it was great event and even greater with photobooth specialized design.',
			event: 'Lorem Event 2025'
		}
	];
</script>

<div
	id="testimonials"
	class="relative my-5 flex h-auto w-[90%] flex-col items-center justify-around gap-3 pb-8 md:w-full"
>
	<h1 class="items-center text-center text-3xl font-bold uppercase">
		CLIENT AND USER TESTIMONIALS
	</h1>

	<p class="text-center font-light">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet
		volutpat. Integer suscipit gravida diam id feugiat. Nulla at efficitur magna, et sodales velit.
		Quisque scelerisque, nulla at convallis viverra, nibh orci aliquam sem, et tempor libero tortor
		at lectus.
	</p>

	<div
		class="mt-8 w-full overflow-hidden md:w-[90%]"
		use:emblaCarouselSvelte={{ options, plugins }}
	>
		<div class="flex">
			{#each testimonials as t}
				<div class="flex flex-[0_0_100%] justify-around gap-3 pr-2 md:flex-[0_0_33%]">
					{#if t.image}
						<img src={t.image} alt={t.name} class="aspect-square h-auto w-1/3 object-cover" />
					{/if}
					<div class="flex flex-col">
						<h1 class="items-center text-lg font-bold uppercase">{t.name}</h1>
						<p class="text-xs font-light">
							{t.text}
						</p>
						<p class="mt-10 text-right text-xs font-light">on {t.event}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
