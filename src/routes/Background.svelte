<script>
    import Circle from "$lib/components/SVG/Circle.svelte";
    import Cross from "$lib/components/SVG/Cross.svelte";
    import TransformHelper from "$lib/components/TransformHelper.svelte";
</script>

<div class="absolute top-0 left-0 w-screen h-screen overflow-hidden -z-50">
    <div class="absolute top-[65%] left-[50%] w-0 h-0 text-primary-light opacity-70">
        <!-- CENTER -->
        <TransformHelper x={0} y={0} rotationTime={25}>
            <Circle size={800} angle={270} width={2} />
        </TransformHelper>
        <TransformHelper x={0} y={0} rotationTime={25}>
            <Cross length={20} width={2} />
        </TransformHelper>
        <TransformHelper x={-330} y={-120} rotationTime={10} rotationDir="reverse">
            <Circle size={400} angle={270} rotate={0} width={3} />
        </TransformHelper>
        <TransformHelper x={330} y={120} rotationTime={10} rotationDir="reverse">
            <Circle size={400} angle={270} rotate={180} width={3} />
        </TransformHelper>
        <!-- OUTER -->
        <TransformHelper x={-880} y={90} rotationTime={13}>
            <Circle size={500} angle={270} rotate={90} width={3} />
        </TransformHelper>
        <TransformHelper x={880} y={-90} rotationTime={13}>
            <Circle size={500} angle={270} rotate={270} width={3} />
        </TransformHelper>
        <!-- OUTER -->
        <TransformHelper x={-880} y={90} rotationTime={13}>
            <Cross length={15} width={1.5} />
        </TransformHelper>
        <TransformHelper x={880} y={-90} rotationTime={13}>
            <Cross length={15} width={1.5} />
        </TransformHelper>
    </div>
</div>
