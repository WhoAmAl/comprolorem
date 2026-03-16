<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Herosection from '../components/Herosection.svelte';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Camera, Phone, Mail } from '@lucide/svelte';

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

	<Footer />
</section>
