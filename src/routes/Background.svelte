<script>
    import Circle from "$lib/components/SVG/Circle.svelte";
    import Cross from "$lib/components/SVG/Cross.svelte";
    import TransformHelper from "$lib/components/TransformHelper.svelte";

    let scrollY = 0;

    $: parallaxScroll = 0.5 * scrollY;
</script>

<svelte:window bind:scrollY />
<div
    style:transform="translateY(-{parallaxScroll}px)"
    class="fixed top-0 left-0 w-full h-screen overflow-hidden -z-50"
>
    <div class="absolute top-[65%] left-[50%] w-0 h-0 text-grey-500 opacity-50">
        <!-- CENTER -->
        <TransformHelper x={0} y={0} rotationTime={24}>
            <Circle size={800} angle={270} width={2} />
        </TransformHelper>
        <TransformHelper x={0} y={0} rotationTime={24}>
            <Cross length={20} width={2} />
        </TransformHelper>
        <TransformHelper x={-330} y={-120} rotationTime={8} rotationDir="reverse">
            <Circle size={400} angle={270} rotate={0} width={3} />
        </TransformHelper>
        <TransformHelper x={330} y={120} rotationTime={8} rotationDir="reverse">
            <Circle size={400} angle={270} rotate={180} width={3} />
        </TransformHelper>
        <!-- OUTER -->
        <TransformHelper x={-880} y={90} rotationTime={16}>
            <Circle size={500} angle={270} rotate={90} width={3} />
        </TransformHelper>
        <TransformHelper x={880} y={-90} rotationTime={16}>
            <Circle size={500} angle={270} rotate={270} width={3} />
        </TransformHelper>
        <TransformHelper x={-880} y={90} rotationTime={16}>
            <Cross length={15} width={1.5} />
        </TransformHelper>
        <TransformHelper x={880} y={-90} rotationTime={16}>
            <Cross length={15} width={1.5} />
        </TransformHelper>
    </div>
</div>
