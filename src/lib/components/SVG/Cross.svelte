<script lang="ts">
    import SimpleSvg from "./SimpleSVG.svelte";

    let klass = "";
    export { klass as class };
    export let size = 1000;
    export let width = 5;
    export let rotate = 0;
    export let length = 500;
</script>

<SimpleSvg
    d="M {500 - length} 500 H {500 + length} M 500 {500 - length} V {500 + length}"
    {size}
    {rotate}
    {width}
    class={klass}
/>
