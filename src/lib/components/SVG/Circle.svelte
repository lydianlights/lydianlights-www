<script lang="ts">
    import SimpleSvg from "./SimpleSVG.svelte";

    let klass = "";
    export { klass as class };
    export let size = 1000;
    export let width = 5;
    export let rotate = 0;
    export let angle = 360 - 0.0001;

    const PADDING = 50;
    const RADIUS = 500 - 2 * PADDING;

    $: normalizedAngle = ((angle % 360) + 360) % 360; // love javascript math
    $: x = RADIUS * Math.cos(normalizedAngle * (Math.PI / 180)) + 500;
    $: y = RADIUS * Math.sin(normalizedAngle * (Math.PI / 180)) + 500;
    $: largeAngle = normalizedAngle >= 180 ? 1 : 0;
</script>

<SimpleSvg
    d="M {1000 - 2 * PADDING} 500 A {RADIUS} {RADIUS} 0 {largeAngle} 1 {x} {y}"
    {size}
    {rotate}
    {width}
    class={klass}
/>
