<script lang="ts">
	import { X, TextAlignEnd, ChevronDown, User, Headset, Handshake } from '@lucide/svelte';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import { slide, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import * as DropdownMenu from '../ui/dropdown-menu/';

	let open: boolean = false;

	const desktopmenus = [
		{ name: 'Home', href: '/' },
		{ name: 'Work', href: '/#work' },
		{ name: 'Services', href: '/#services' },
		{ name: 'Testimonials', href: '/#testimonials' }
	];
	const mobilemenus = [
		{ name: 'Home', href: '/' },
		{ name: 'Work', href: '/#work' },
		{ name: 'Services', href: '/#services' },
		{ name: 'Testimonials', href: '/#testimonials' },
		{ name: 'Our Team', href: '/ourteam' },
		{ name: 'Contact', href: '/contactus' },
		{ name: 'Our Partners', href: '/partners' }
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
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-2">
		<div class="text-base font-semibold tracking-wide uppercase">Photobooth</div>

		<NavigationMenu.Root class="hidden md:flex">
			<NavigationMenu.List class="flex items-center gap-8">
				{#each desktopmenus as menu}
					{#if !['Contact', 'Our Team'].includes(menu.name)}
						<NavigationMenu.Item>
							<NavigationMenu.Link
								href={menu.href}
								class="text-sm font-medium text-neutral-600 transition hover:bg-transparent hover:text-neutral-900"
							>
								{menu.name}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					{/if}
				{/each}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						class="flex cursor-pointer flex-row items-center justify-center gap-1 text-sm font-medium text-neutral-600 transition hover:bg-transparent hover:text-neutral-900"
					>
						More
						<ChevronDown size={15} />
					</DropdownMenu.Trigger>

					<DropdownMenu.Content class="w-48 p-3">
						<DropdownMenu.Item>
							<User />
							<a href="/ourteam">Our Team</a>
						</DropdownMenu.Item>

						<DropdownMenu.Item>
							<Headset />
							<a href="/contactus">Contact Us</a>
						</DropdownMenu.Item>

						<DropdownMenu.Item>
							<Handshake />
							<a href="/partners">Our Partners</a>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</NavigationMenu.List>
			<NavigationMenu.Viewport />
		</NavigationMenu.Root>

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
					{#each mobilemenus as menu, i}
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
