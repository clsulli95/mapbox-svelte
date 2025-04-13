<script lang="ts">
	import { onMount } from 'svelte';
	export let map: maplibregl.Map;

	let zoom = 12;
	let pitch = 60;
	let bearing = -20;

	function updateZoom(e: Event) {
		zoom = parseFloat((e.target as HTMLInputElement).value);
		map?.setZoom(zoom);
	}

	function updatePitch(e: Event) {
		pitch = parseFloat((e.target as HTMLInputElement).value);
		map?.setPitch(pitch);
	}

	function updateBearing(e: Event) {
		bearing = parseFloat((e.target as HTMLInputElement).value);
		map?.setBearing(bearing);
	}

	onMount(() => {
		map.on('move', () => {
			zoom = map.getZoom();
			pitch = map.getPitch();
			bearing = map.getBearing();
		});
	});
</script>

<div class="panel">
	<label>Zoom: {zoom.toFixed(1)}</label>
	<input type="range" min="1" max="20" step="0.1" bind:value={zoom} on:input={updateZoom} />

	<label>Pitch: {pitch}°</label>
	<input type="range" min="0" max="85" step="1" bind:value={pitch} on:input={updatePitch} />

	<label>Bearing: {bearing}°</label>
	<input type="range" min="-180" max="180" step="1" bind:value={bearing} on:input={updateBearing} />
</div>

<style>
	.panel {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: rgba(255, 255, 255, 0.95);
		border-radius: 0.5rem;
		padding: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		width: 200px;
		z-index: 1000;
	}

	.panel label {
		font-size: 0.9rem;
		font-weight: bold;
		display: block;
		margin-top: 0.5rem;
	}

	.panel input {
		width: 100%;
	}
</style>
