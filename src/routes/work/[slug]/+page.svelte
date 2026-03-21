<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Header from '$lib/components/sections/Header.svelte';
	import { ArrowLeft } from '@lucide/svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { goto } from '$app/navigation';

	export let data;
	const { work, partners } = data;

	function goBack() {
		history.back();
	}
</script>

<div class="mx-auto flex min-h-screen max-w-7xl flex-col text-black">
	<Header />
	<div class="mx-auto max-w-5xl px-6 py-16">
		<div class="w-full">
			<img src={work.image} alt={work.title} class="w-full object-cover" />
		</div>
		<div class="mt-10 max-w-4xl">
			<h1 class="text-3xl font-semibold tracking-tight">
				{work.title}
			</h1>

			<p class="mt-4 text-base leading-relaxed text-neutral-600">
				{work.description}
			</p>
		</div>
		<!-- {#if work.metrics}
			<div class="mt-5 border-t border-neutral-200 pt-10">
				<p class="mb-5 text-xs tracking-widest text-neutral-400 uppercase">Project Metrics</p>

				<div class="grid grid-cols-2 gap-y-10 md:grid-cols-3 md:gap-x-16">
					<Card class="rounded-none px-5">
						<p class="text-3xl font-semibold tracking-tight">
							{work.metrics.attendees}
						</p>
						<p class="mt-1 text-sm text-neutral-500">Attendees</p>
					</Card>

					<Card class="rounded-none px-5">
						<p class="text-3xl font-semibold tracking-tight">
							{work.metrics.productsLaunched}
						</p>
						<p class="mt-1 text-sm text-neutral-500">Products Launched</p>
					</Card>

					<Card class="rounded-none px-5">
						<p class="text-3xl font-semibold tracking-tight">
							{work.metrics.serviceUsage}
						</p>
						<p class="mt-1 text-sm text-neutral-500">Service Usage</p>
					</Card>
				</div>
			</div>
		{/if} -->
		{#if partners.length > 0}
			<div class="mt-12 border-t pt-6">
				<h2 class="text-sm font-medium text-neutral-500 uppercase">Execution Partner(s)</h2>

				<div class="mt-4 flex gap-6">
					{#each partners as partner}
						<Card
							class="flex cursor-pointer items-center gap-2 rounded-none border-none px-15 py-2 transition-all hover:-translate-y-1"
							onclick={() => goto(`/partners/${partner.slug}`)}
						>
							<img src={partner.logo} alt={partner.name} class="h-10 w-auto object-contain" />
							<span class="text-sm">{partner.name}</span>
						</Card>
					{/each}
				</div>
			</div>
		{/if}
	</div>
	<Button
		class=" mr-5 ml-auto w-fit rounded-none border-none bg-transparent text-neutral-950 hover:bg-neutral-300"
		onclick={goBack}><ArrowLeft /> Back</Button
	>
	<Footer />
</div>
