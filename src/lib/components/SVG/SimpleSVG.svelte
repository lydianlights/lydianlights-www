<script lang="ts">
    let klass = "";
    export { klass as class };
    export let size = 1000;
    export let width = 5;
    export let rotate = 0;
    export let d: string;
</script>

<svg
    class="transform {klass}"
    viewBox="0 0 1000 1000"
    width={size}
    height={size}
    stroke-width={width}
    stroke="currentColor"
    fill="none"
    style:--rotation="{rotate}deg"
    style:--translation="-{size / 2}px"
>
    <!-- SVG filters are slow on firefox but we can get the same effect with css + multiple copies of the path... -->
    <path {d} class="blur" />
    <path {d} class="blur" />
    <path {d} />
</svg>

<style>
    .blur {
        filter: blur(8px);
    }

    .transform {
        transform-origin: 0 0;
        transform: rotateZ(var(--rotation)) translate(var(--translation), var(--translation));
    }
</style>
