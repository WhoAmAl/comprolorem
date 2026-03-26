<script>
	import Herosection from '$lib/components/sections/Herosection.svelte';
	import Partners from '$lib/components/sections/Partners.svelte';
	import AboutUs from '../lib/components/sections/AboutUs.svelte';
	import Work from '$lib/components/sections/Work.svelte';
	import Service from '$lib/components/sections/Service.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Header from '$lib/components/sections/Header.svelte';
</script>

<div class="mx-auto flex flex-col items-center justify-center text-neutral-950">
	<Header />
	<Herosection />
	<Partners />
	<AboutUs />
	<Work />
	<Service />
	<Testimonials />
	<Footer />
</div>
