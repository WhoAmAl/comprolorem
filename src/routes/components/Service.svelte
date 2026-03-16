<script>
	import Card from '$lib/components/ui/card/card.svelte';

	import {
		Carousel,
		CarouselContent,
		CarouselItem,
		CarouselNext,
		CarouselPrevious
	} from '$lib/components/ui/carousel';
</script>

<div
	id="services"
	class="relative flex h-auto w-full flex-col items-start gap-4 p-10 text-neutral-50"
	style="background-image: url(headerfull.webp); background-size: cover; background-position: center;"
>
	<h1 class="mb-5 text-6xl font-bold uppercase">Our Service</h1>

	<p class="w-full text-base font-light md:w-[60%]">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet
		volutpat. Integer suscipit gravida diam id feugiat. Nulla at efficitur magna, et sodales velit.
	</p>

	<div class="flexrow hidden w-full items-center gap-5 lg:flex">
		<Card class="relative w-1/4 gap-4 p-8 text-neutral-950">
			<div class="mb-12 flex flex-col">
				<h1 class="font-bold">Starter</h1>
				<p class="font-light">Lorem ipsum dolor sit amet</p>
			</div>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
		</Card>

		<Card class="relative w-1/4 gap-4 p-8 text-neutral-950">
			<div class="mb-12 flex flex-col">
				<h1 class="font-bold">Medium</h1>
				<p class="font-light">Lorem ipsum dolor sit amet</p>
			</div>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
		</Card>

		<Card
			class="relative w-1/4 gap-4 border-none bg-conic-90 from-white to-[#999999] to-100% p-8 text-neutral-950"
		>
			<div
				class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-neutral-950 bg-neutral-50 px-5 py-1"
			>
				<h1 class="text-xs font-bold uppercase">Best Package</h1>
			</div>

			<div class="mb-12 flex flex-col">
				<h1 class="font-bold">Expanded</h1>
				<p class="font-light">Lorem ipsum dolor sit amet</p>
			</div>

			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
		</Card>

		<Card class="relative w-1/4 gap-4 p-8 text-neutral-950">
			<div class="mb-12 flex flex-col">
				<h1 class="font-bold">Complete</h1>
				<p class="font-light">Lorem ipsum dolor sit amet</p>
			</div>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
			<p class="font-light">Lorem ipsum dolor sit amet</p>
		</Card>
	</div>

	<div class="w-full lg:hidden">
		<Carousel class="w-full">
			<CarouselContent class="pt-3">
				<CarouselItem class="basis-[85%]">
					<Card class="relative gap-4 p-8 text-neutral-950">
						<div class="mb-12 flex flex-col">
							<h1 class="font-bold">Starter</h1>
							<p class="font-light">Lorem ipsum dolor sit amet</p>
						</div>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
					</Card>
				</CarouselItem>

				<CarouselItem class="basis-[85%]">
					<Card class="relative gap-4 p-8 text-neutral-950">
						<div class="mb-12 flex flex-col">
							<h1 class="font-bold">Medium</h1>
							<p class="font-light">Lorem ipsum dolor sit amet</p>
						</div>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
					</Card>
				</CarouselItem>

				<CarouselItem class="basis-[85%]">
					<Card
						class="relative gap-4 border-none bg-conic-90 from-white to-[#999999] to-100% p-8 text-neutral-950"
					>
						<div
							class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-neutral-950 bg-neutral-50 px-5 py-1"
						>
							<h1 class="text-xs font-bold uppercase">Best Package</h1>
						</div>

						<div class="mb-12 flex flex-col">
							<h1 class="font-bold">Expanded</h1>
							<p class="font-light">Lorem ipsum dolor sit amet</p>
						</div>

						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
					</Card>
				</CarouselItem>

				<CarouselItem class="basis-[85%]">
					<Card class="relative gap-4 p-8 text-neutral-950">
						<div class="mb-12 flex flex-col">
							<h1 class="font-bold">Complete</h1>
							<p class="font-light">Lorem ipsum dolor sit amet</p>
						</div>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
						<p class="font-light">Lorem ipsum dolor sit amet</p>
					</Card>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	</div>
</div>
