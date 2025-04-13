<script lang="ts">
	import { onMount } from 'svelte';
	import * as maplibregl from 'maplibre-gl';
	import * as pmtiles from 'pmtiles';
	import * as basemaps from '@protomaps/basemaps';
	import MapControls from './MapControls.svelte';

	let mapContainer: HTMLDivElement;
	let map: maplibregl.Map;

	onMount(() => {
		const protocol = new pmtiles.Protocol();
		maplibregl.addProtocol('pmtiles', protocol.tile);

		map = new maplibregl.Map({
			container: mapContainer,
			style: {
				version: 8,
				glyphs: 'https://cdn.protomaps.com/fonts/pbf/{fontstack}/{range}.pbf',
				sources: {
					protomaps: {
						type: 'vector',
						url: `pmtiles://${location.protocol}//${location.host}/my.pmtiles`,
						attribution:
							'<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>'
					}
				},
				layers: basemaps.layers('protomaps', basemaps.namedFlavor('black'), { lang: 'en' })
			},
			center: [-92.38, 37.55], // optional: set a reasonable center
			zoom: 12,
			pitch: 60,
			bearing: -20
		});

		map.on('load', () => {
			map.addLayer({
				id: '3d-buildings',
				type: 'fill-extrusion',
				source: 'protomaps',
				'source-layer': 'buildings', // Adjust to your vector layer name
				paint: {
					'fill-extrusion-color': '#aaa',
					'fill-extrusion-height': ['get', 'height'],
					'fill-extrusion-base': 0,
					'fill-extrusion-opacity': 0.9
				}
			});

			const src = map.getSource('protomaps') as any;
			if (src && src.bounds) {
				map.setMaxBounds(src.bounds);
			}
		});
	});
</script>

<div bind:this={mapContainer}></div>

{#if map}
	<MapControls {map} />
{/if}

<style>
	div {
		width: 100%;
		height: 100vh;
	}
</style>
