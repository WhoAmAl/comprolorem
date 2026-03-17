<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
	import { ArrowLeft } from '@lucide/svelte';

	export let data;
	const { work } = data;
</script>

<div class="mx-auto flex min-h-screen max-w-7xl flex-col text-black">
	<Header />
	<div class="mx-auto max-w-5xl px-6 py-16">
		<!-- Image -->
		<div class="w-full">
			<img src={work.image} alt={work.title} class="w-full object-cover" />
		</div>

		<!-- Content -->
		<div class="mt-10 max-w-4xl">
			<h1 class="text-3xl font-semibold tracking-tight">
				{work.title}
			</h1>

			<p class="mt-4 text-base leading-relaxed text-neutral-600">
				{work.description}
			</p>
		</div>
	</div>
	<Button
		class=" mr-5 ml-auto w-fit rounded-none border-none bg-transparent text-neutral-950 hover:bg-neutral-300"
		><ArrowLeft /> Back</Button
	>
	<Footer />
</div>
