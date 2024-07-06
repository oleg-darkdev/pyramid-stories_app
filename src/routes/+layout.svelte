<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<main class="bg-black overflow-hidden font-courierPrime font-din">
	<slot />
</main>

<style>
</style>


