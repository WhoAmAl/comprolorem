<script lang="ts">
	import { Card } from '$lib/components/ui/card';

	const team = [
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			image: '/team1.webp',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet volutpat. Integer suscipit gravida diam id feugiat.'
		},
		{
			name: 'Ipsum Dolor',
			role: 'Role Lorem Ipsum',
			image: '/team2.webp',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit amet volutpat. Integer suscipit gravida diam id feugiat.'
		}
	];
</script>

<section class="w-full bg-neutral-100 py-20">
	<div class="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 px-6 md:grid-cols-2">
		<!-- TEAM CARDS -->
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2">
			{#each team as member}
				<Card class="border-none bg-transparent shadow-none">
					<img src={member.image} alt={member.name} class="mb-4 aspect-[3/4] w-full object-cover" />

					<h3 class="text-sm font-semibold text-neutral-900">
						{member.name}
					</h3>

					<p class="mb-3 text-xs text-neutral-500">
						{member.role}
					</p>

					<p class="text-xs leading-relaxed text-neutral-600">
						{member.description}
					</p>
				</Card>
			{/each}
		</div>

		<!-- SECTION TEXT -->
		<div class="flex flex-col justify-start pt-10">
			<h2 class="text-xl font-bold tracking-wide text-neutral-900 uppercase">
				Board of Lorem Ipsum
			</h2>

			<div class="my-4 h-px w-full bg-neutral-300"></div>

			<p class="max-w-md text-sm leading-relaxed text-neutral-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum congue metus sit
				amet volutpat. Integer suscipit gravida diam id feugiat.
			</p>
		</div>
	</div>
</section>
