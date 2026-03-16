<script lang="ts">
	import { X, TextAlignEnd, Github, MessageCircle } from '@lucide/svelte';
	import { slide, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let open: boolean = false;

	const menus = [
		{ name: 'Home', href: '/' },
		{ name: 'Work', href: '/#work' },
		{ name: 'Services', href: '/#services' },
		{ name: 'Testimonials', href: '/#testimonials' },
		{ name: 'Our Team', href: '/ourteam' },
		{ name: 'Contact', href: '/contactus' }
	];

	$: if (browser) {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	onDestroy(() => {
		if (browser) {
			document.body.style.overflow = '';
		}
	});
	import { onMount } from 'svelte';

	onMount(() => {
		if (window.location.hash) {
			const el = document.querySelector(window.location.hash);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	});
</script>

<header class="sticky top-0 left-0 z-50 w-full border-b border-neutral-200 bg-neutral-50">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<div class="text-base font-semibold tracking-wide uppercase">Photobooth</div>

		<nav class="hidden items-center gap-8 md:flex">
			{#each menus as menu}
				<a
					href={menu.href}
					class="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
				>
					{menu.name}
				</a>
			{/each}
		</nav>

		<button
			class="relative flex h-6 w-6 items-center justify-center md:hidden"
			on:click={() => (open = !open)}
		>
			{#if open}
				<span
					class="absolute"
					in:scale={{ duration: 160, easing: cubicOut }}
					out:scale={{ duration: 120 }}
				>
					<X size={20} />
				</span>
			{:else}
				<span
					class="absolute"
					in:scale={{ duration: 160, easing: cubicOut }}
					out:scale={{ duration: 120 }}
				>
					<TextAlignEnd size={20} />
				</span>
			{/if}
		</button>
	</div>

	{#if open}
		<div
			class="h-screen border-t border-neutral-200 bg-neutral-50 md:hidden"
			transition:slide={{ duration: 220, easing: cubicOut }}
		>
			<div class="flex h-full flex-col justify-between px-6 py-6">
				<nav class="mx-auto flex w-[75%] flex-col">
					{#each menus as menu, i}
						<a
							href={menu.href}
							class="flex items-center justify-between py-3 text-base font-medium text-neutral-700"
							on:click={() => (open = false)}
						>
							{menu.name}
						</a>

						<div class="border-b border-neutral-200"></div>
					{/each}
				</nav>
			</div>
		</div>
	{/if}
</header>
