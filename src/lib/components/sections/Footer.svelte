<script lang="ts">
	import { Facebook, Github, Gitlab, Send, Instagram, Figma } from '@lucide/svelte';

	const social = [
		{ icon: Facebook, href: '#' },
		{ icon: Gitlab, href: '#' },
		{ icon: Github, href: '#' },
		{ icon: Send, href: '#' },
		{ icon: Instagram, href: '#' },
		{ icon: Figma, href: '#' }
	];

	const company = ['Partners', 'Our Work', 'Service', 'Testimonials', 'Contact Us'];
</script>

<footer class="mt-auto w-full bg-black px-6 py-12 text-white">
	<div class="mb-16 flex flex-col items-center gap-4">
		<p class="text-sm text-gray-300">Follow us</p>

		<div class="flex items-center gap-5 text-gray-300">
			{#each social as item}
				<a
					href={item.href}
					class="transition-colors hover:text-white"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svelte:component this={item.icon} size={18} stroke-width={1.5} />
				</a>
			{/each}
		</div>
	</div>

	<div class="flex flex-col justify-around gap-10 lg:flex-row">
		<div class="space-y-4">
			<div class="flex items-center gap-3">
				<div class="flex gap-1">
					<span class="h-5 w-1 rounded bg-white"></span>
					<span class="h-5 w-1 rounded bg-white/60"></span>
					<span class="h-5 w-1 rounded bg-white/30"></span>
				</div>

				<span class="text-lg font-semibold">SiteLogo</span>
			</div>

			<p class="max-w-xs text-sm leading-relaxed text-gray-400">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit
				amet volutpat. Integer suscipit gravida diam id feugiat.
			</p>
		</div>

		<div class="space-y-4">
			<h3 class="font-semibold">Company</h3>

			<ul class="space-y-3 text-sm text-gray-400">
				{#each company as item}
					<li>
						<a href="/" class="transition-colors hover:text-white">
							{item}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
