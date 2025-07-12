<script>
	export let scenario;

	let showFullInfo = false;
</script>

<div class="info-box background-color-schwarz">
	<div class="margin-bottom margin-xlarge">
		<div class="image-wrap">
			<img
				src={scenario.avatar}
				loading="lazy"
				alt="scenario {scenario.title} avatar"
				class="image"
			/>
		</div>
		<div class="margin-bottom margin-large">
			<!--  -->
			<h3 class="heading-style-h4 text-center text-black">{scenario.title}</h3>
		</div>
		<div class="margin-bottom margin-small">
			<div class="line text-black" />
		</div>

		{#each showFullInfo ? scenario.desc : scenario.desc.slice(0, 1) as desc}
			<p class="text-size-regular} mb-1 text-black">
				{desc}
			</p>
		{/each}

		<div class="mt-4 flex flex-row flex-wrap justify-between">
			<button class="button button-color-black w-button">Play scenario</button>
			<button
				class="button button-color-black w-button"
				on:click={() => (showFullInfo = !showFullInfo)}
			>
				<img
					src={scenario.avatar}
					alt="{scenario.title} btn"
					class="h-6 w-6 {showFullInfo ? '' : 'rotate-180'}"
				/>
			</button>
		</div>
	</div>
</div>
