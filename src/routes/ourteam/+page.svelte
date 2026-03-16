<script lang="ts">
	import { Carousel, CarouselContent, CarouselItem } from '$lib/components/ui/carousel';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Herosection from '../components/Herosection.svelte';

	const team = [
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			image: '/model.png',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet volutpat. Integer suscipit gravida diam id feugiat.'
		},
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			image: '/model.png',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet volutpat. Integer suscipit gravida diam id feugiat.'
		}
	];
	const people = [
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			img: '/model.png'
		},
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			img: '/model.png'
		},
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			img: '/model.png'
		},
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			img: '/model.png'
		},
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			img: '/model.png'
		},
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			img: '/model.png'
		},
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			img: '/model.png'
		},
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			img: '/model.png'
		}
	];
	const oddMembers = people.filter((_, i) => i % 2 === 0);
	const evenMembers = people.filter((_, i) => i % 2 === 1);
</script>

<section class="mx-auto max-w-7xl text-neutral-950">
	<Header />
	<Herosection />

	<div class="mx-auto flex w-full flex-col items-center justify-around md:w-[90%] md:flex-row">
		<div class=" flex flex-row items-center justify-center gap-12 py-10 md:w-4/9">
			{#each team as member}
				<div class="flex w-[30%] flex-col gap-2">
					<div class="aspect-[1.3/1] w-full">
						<img src={member.image} alt={member.name} class="h-auto w-full object-cover" />
					</div>

					<h3 class="text-sm font-semibold text-neutral-900">
						{member.name}
					</h3>

					<p class="text-xs text-neutral-500">
						{member.role}
					</p>

					<p class="text-xs leading-relaxed text-neutral-600">
						{member.description}
					</p>
				</div>
			{/each}
		</div>

		<div class=" flex w-[85%] flex-col gap-5 md:w-5/9">
			<h2 class="text-2xl font-bold tracking-wide text-neutral-900 uppercase">
				Board of Lorem Ipsum
			</h2>

			<p class=" border-b border-b-neutral-400 pb-5 text-sm leading-relaxed text-neutral-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit
				amet volutpat. Integer suscipit gravida diam id feugiat.
			</p>
		</div>
	</div>

	<div class="mx-auto my-10 w-[90%] gap-12 md:mt-0 md:grid md:grid-cols-[320px_1fr]">
		<div class="flex flex-col justify-between bg-blue-900 p-10 text-white">
			<div>
				<p class="mb-4 text-xs tracking-widest uppercase opacity-70">Lorem ipsum dolor sit amet</p>

				<h2 class="mb-6 text-2xl leading-snug font-semibold">
					Lorem ipsum dolor sit amet consectetur ameridi vida en vaso
				</h2>

				<p class="text-md leading-relaxed opacity-90">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit
					amet volutpat. Integer suscipit gravida diam id feugiat. Nulla at efficitur magna, et
					sodales velit.
				</p>
			</div>
		</div>

		<div class="hidden grid-cols-5 gap-x-10 gap-y-12 md:grid">
			{#each people as person}
				<div class="text-center">
					<div class="mb-3 aspect-square w-full overflow-hidden bg-neutral-900">
						<img src={person.img} alt={person.name} class="h-full w-full object-cover" />
					</div>

					<p class="text-sm font-semibold">{person.name}</p>
					<p class="text-xs text-muted-foreground">{person.role}</p>
				</div>
			{/each}
		</div>

		<Carousel
			opts={{ align: 'start' }}
			orientation="vertical"
			class="mt-10 w-full overflow-hidden md:hidden"
		>
			<CarouselContent class="max-h-65">
				{#each oddMembers as person, i}
					<CarouselItem>
						<div class="grid grid-cols-2 gap-4">
							<div class="text-center">
								<div class="mb-3 aspect-square w-full overflow-hidden bg-neutral-900">
									<img src={person.img} alt={person.name} class="h-full w-full object-cover" />
								</div>

								<p class="text-sm font-semibold">{person.name}</p>
								<p class="text-xs text-muted-foreground">{person.role}</p>
							</div>

							{#if evenMembers[i]}
								<div class="text-center">
									<div class="mb-3 aspect-square w-full overflow-hidden bg-neutral-900">
										<img
											src={evenMembers[i].img}
											alt={evenMembers[i].name}
											class="h-full w-full object-cover"
										/>
									</div>

									<p class="text-sm font-semibold">{evenMembers[i].name}</p>
									<p class="text-xs text-muted-foreground">{evenMembers[i].role}</p>
								</div>
							{/if}
						</div>
					</CarouselItem>
				{/each}
			</CarouselContent>
		</Carousel>
	</div>
	<Footer />
</section>
