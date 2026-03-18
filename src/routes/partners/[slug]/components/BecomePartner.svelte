<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="mt-20 bg-neutral-100 p-10 shadow-sm">
	<div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
		<div>
			<h2 class="mt-2 text-2xl font-semibold">Become Our Partner</h2>
			<p class="mt-2 max-w-md text-sm text-neutral-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum, arcu non
				tincidunt porttitor, justo diam ornare sapien, id rhoncus mauris enim ac eros.
			</p>
		</div>
		<div>
			<Button
				class="bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
			>
				Apply for Partnership
			</Button>
		</div>
	</div>
</section>
