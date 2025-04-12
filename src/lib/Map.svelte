<script lang="ts">
  import { onMount } from 'svelte';
  import * as maplibregl from 'maplibre-gl';
  import * as pmtiles from 'pmtiles';
  import layers from 'protomaps-themes-base';

  let mapContainer: HTMLDivElement;

  onMount(() => {
    const protocol = new pmtiles.Protocol();
    maplibregl.addProtocol('pmtiles', protocol.tile);

    const map = new maplibregl.Map({
      container: mapContainer,
      style: {
        version: 8,
        glyphs: 'https://cdn.protomaps.com/fonts/pbf/{fontstack}/{range}.pbf',
        sources: {
          protomaps: {
            type: 'vector',
            url: `pmtiles://${location.protocol}//${location.host}/my.pmtiles`,
            attribution:
              '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
          }
        },
        layers: layers('protomaps', 'light'),
      },
      center: [-92.38, 37.55], // optional: set a reasonable center
      zoom: 12,
      pitch: 60,
      bearing: -20,
    });

    map.on('load', () => {
      const src = map.getSource('protomaps') as any;
      if (src && src.bounds) {
        map.setMaxBounds(src.bounds);
      }
    });
  });
</script>

<style>
  div {
    width: 100%;
    height: 100vh;
  }
</style>

<div bind:this={mapContainer}>
</div>
