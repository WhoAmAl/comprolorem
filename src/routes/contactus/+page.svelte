<script lang="ts">
	import Footer from '$lib/components/sections/Footer.svelte';
	import Header from '$lib/components/sections/Header.svelte';
	import Herosection from '$lib/components/sections/Herosection.svelte';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Camera, Phone, Mail, MessageSquare } from '@lucide/svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let showFaq = false;

	const contacts = [
		{
			name: 'NAME LOREM IPSUM DOLOR',
			role: 'Role Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			phone: '+1012 3456 789',
			email: 'demo@gmail.com'
		},
		{
			name: 'NAME LOREM IPSUM DOLOR',
			role: 'Role Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			phone: '+1012 3456 789',
			email: 'demo@gmail.com'
		}
	];

	const faqs = [
		{
			q: 'The expense windows adapted sir. Wrong widen drawn.',
			a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet volutpat. Integer suscipit gravida diam id feugiat. Nulla at efficitur magna, et sodales velit.'
		},
		{
			q: 'Six curiosity day assurance bed necessary?',
			a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet volutpat. Integer suscipit gravida diam id feugiat. Nulla at efficitur magna, et sodales velit.'
		},
		{
			q: 'Produce say the ten moments parties?',
			a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet volutpat. Integer suscipit gravida diam id feugiat. Nulla at efficitur magna, et sodales velit.'
		},
		{
			q: 'Simple innate summer fat appear basket his desire joy?',
			a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet volutpat. Integer suscipit gravida diam id feugiat. Nulla at efficitur magna, et sodales velit.'
		},
		{
			q: 'Outward mindset promise at gravity do excited?',
			a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet volutpat. Integer suscipit gravida diam id feugiat. Nulla at efficitur magna, et sodales velit.'
		}
	];
</script>

<section class="mx-auto min-h-screen max-w-7xl">
	<Header />
	<Herosection />
	<!-- Description -->
	<p class="mx-auto my-10 w-[95%] max-w-3xl text-center text-sm text-neutral-700">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet
		volutpat. Integer suscipit gravida diam id feugiat. Nulla at efficitur magna, et sodales velit.
	</p>

	<!-- Cards -->
	<div class="mx-auto my-20 flex w-[90%] flex-col gap-10 md:flex-row">
		{#each contacts as contact}
			<Card
				class="flex-1 rounded-lg border-0 bg-linear-to-br from-neutral-800 to-neutral-900 text-white shadow-xl"
			>
				<CardContent class="flex h-60 flex-col justify-between px-8">
					<!-- Header -->
					<div class="flex items-center justify-end gap-2 text-sm font-semibold">
						<div class="flex items-center justify-center rounded-md bg-blue-600 p-2">
							<Camera size={18} />
						</div>
						<span>PhotoBooth</span>
					</div>

					<!-- Middle -->
					<div class="mt-10">
						<div class="flex items-start gap-3">
							<div class="h-10 w-[3px] bg-white"></div>

							<div>
								<h3 class="text-lg font-semibold tracking-wide">
									{contact.name}
								</h3>

								<p class="text-xs text-neutral-400">
									{contact.role}
								</p>
							</div>
						</div>
					</div>

					<!-- Footer -->
					<div class="mt-10 flex justify-between text-sm text-neutral-300">
						<div class="flex items-center gap-2">
							<Phone size={16} />
							<span>{contact.phone}</span>
						</div>

						<div class="flex items-center gap-2">
							<Mail size={16} />
							<span>{contact.email}</span>
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
	<section class="w-full bg-[#2d2d2d] py-4">
		<div class="mx-auto mb-6 flex items-center justify-center gap-4 md:w-[60%]">
			<p class="text-sm font-bold text-neutral-200">Have Probable Common Question?</p>

			<button
				on:click={() => (showFaq = !showFaq)}
				class="rounded-full bg-black px-12 py-2 text-xs text-white"
			>
				{showFaq ? 'Close FAQ' : 'FAQ'}
			</button>
		</div>

		{#if showFaq}
			<div
				in:slide={{ duration: 250, easing: cubicOut }}
				out:slide={{ duration: 200, easing: cubicOut }}
				class="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3"
			>
				<div class="md:col-span-2">
					<Accordion.Root type="single" class="space-y-3">
						{#each faqs as faq, i}
							<Accordion.Item value={`item-${i}`} class="rounded-md bg-neutral-100">
								<Accordion.Trigger
									class="flex w-full items-center justify-between px-6 py-4 text-left font-semibold"
								>
									{faq.q}
								</Accordion.Trigger>

								<Accordion.Content class="px-6 pb-5 text-sm text-neutral-600">
									{faq.a}
								</Accordion.Content>
							</Accordion.Item>
						{/each}
					</Accordion.Root>
				</div>

				<div class="flex flex-col justify-between rounded-lg bg-neutral-100 p-8">
					<div class="flex flex-col items-center gap-4">
						<MessageSquare size={55} class="mx-auto" />

						<h3 class="mb-3 text-lg font-semibold">Do you have more questions?</h3>

						<p class="text-sm text-neutral-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus
							sit amet volutpat. Integer suscipit gravida diam id feugiat. Nulla at efficitur magna,
							et sodales velit.
						</p>
					</div>

					<button class="mt-10 w-full bg-neutral-800 py-3 text-sm text-white hover:bg-black">
						Shoot a Direct Mail
					</button>
				</div>
			</div>
		{/if}
	</section>
	<Footer />
</section>
