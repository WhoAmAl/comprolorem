<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Header from '$lib/components/sections/Header.svelte';
	import { ArrowLeft, Globe, Mail, Instagram } from '@lucide/svelte';
	import OurPartner from '$lib/components/sections/OurPartner.svelte';
	import BecomePartner from './components/BecomePartner.svelte';

	export let data;
	$: partner = data.partner;

	function goBack() {
		history.back();
	}
</script>

<div class="mx-auto flex min-h-screen max-w-7xl flex-col text-black">
	<Header />
	<div class="w-full px-6 py-10">
		<div class="flex flex-col gap-10 lg:flex-row lg:items-center">
			<div class="flex-1">
				<p class="text-sm text-yellow-600">● {partner.status}</p>
				<h1 class="mt-2 text-4xl font-semibold">{partner.name}</h1>
			</div>
			<div class="relative flex-1">
				<div class=" bg-neutral-100 p-10 shadow">
					<img src={partner.wideimage} alt={partner.name} class="w-full object-contain" />
				</div>
				<div class="absolute -bottom-6 left-6 bg-white p-4 shadow-md">
					<img src={partner.wideimage} alt={partner.name} class="h-16 w-16 object-contain" />
				</div>
			</div>
		</div>
		<div class="mt-16 grid gap-10 lg:grid-cols-3">
			<div class="lg:col-span-1">
				<h2 class="text-xl font-semibold">About</h2>
				<p class="mt-2 text-sm text-neutral-500">Learn about our partner</p>
				<div class="mt-6 flex gap-4 text-neutral-700">
					{#if partner.socials.website}
						<a href={partner.socials.website} target="_blank">
							<Globe class="h-5 w-5 hover:text-black" />
						</a>
					{/if}

					{#if partner.socials.email}
						<a href={`mailto:${partner.socials.email}`}>
							<Mail class="h-5 w-5 hover:text-black" />
						</a>
					{/if}

					{#if partner.socials.instagram}
						<a href={partner.socials.instagram} target="_blank">
							<Instagram class="h-5 w-5 hover:text-black" />
						</a>
					{/if}
				</div>
			</div>
			<div class="text-sm leading-relaxed text-neutral-700 lg:col-span-2">
				{partner.description}
			</div>
		</div>
	</div>
	<Button
		class="mt-auto mr-5 ml-auto w-fit rounded-none border-none bg-transparent px-10 text-neutral-950 hover:bg-neutral-300"
		onclick={goBack}><ArrowLeft /> Back</Button
	>
	<BecomePartner />
	<OurPartner />
	<Footer />
</div>
