<script lang="ts">
    import { onMount } from "svelte";
    import Regl from "regl";
    import defaultVertextShader from "./defaultVertextShader";
    import fragmentShaderTemplate from "./fragmentShaderTemplate";

    export let shader: string;
    export let resolutionScale: number = 1;
    let klass: string = "";
    export { klass as class };

    let canvas: HTMLCanvasElement;
    let width: number;
    let height: number;
    let loaded = false;

    const uniforms = {
        mouse_pos: [0.0, 0.0],
        mouse_active: false,
    };

    onMount(() => {
        try {
            const regl = Regl(canvas);
            const drawQuad = regl({
                vert: defaultVertextShader,
                frag: `${fragmentShaderTemplate}${shader}`,
                uniforms: {
                    time: (context) => context.time,
                    resolution: (context) => [context.viewportWidth, context.viewportHeight],
                    mousePos: (context, props) => (props as any).mousePos,
                    mouseActive: (context, props) => (props as any).mouseActive,
                },
                attributes: {
                    position: [
                        [-1, -1],
                        [1, -1],
                        [1, 1],
                        [-1, 1],
                    ],
                },
                elements: [0, 1, 2, 0, 2, 3],
                count: 6,
            });

            loaded = true;

            regl.frame(() => {
                try {
                    regl.clear({
                        color: [0, 0, 0, 1],
                        depth: 1,
                    });
                    drawQuad({
                        mousePos: uniforms.mouse_pos,
                        mouseActive: uniforms.mouse_active,
                    });
                } catch (e) {
                    regl.destroy();
                }
            });

            return () => {
                regl.destroy();
            };
        } catch (e) {
            // nothing
        }
    });

    $: {
        setCanvasSize(width, height);
    }

    function setCanvasSize(width: number, height: number) {
        if (canvas) {
            canvas.width = width / resolutionScale;
            canvas.height = height / resolutionScale;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        }
    }

    function setMousePos(x: number, y: number) {
        if (canvas) {
            const bounds = canvas.getBoundingClientRect();
            const offsetX = x - bounds.x;
            const offsetY = y - bounds.y;
            uniforms.mouse_active = true;
            uniforms.mouse_pos = [offsetX / resolutionScale, (height - offsetY) / resolutionScale];
        }
    }

    function setMouseExit() {
        uniforms.mouse_active = false;
    }
</script>

<div
    role="none"
    bind:clientWidth={width}
    bind:clientHeight={height}
    on:mousemove={(e) => setMousePos(e.clientX, e.clientY)}
    on:mouseleave={setMouseExit}
    on:touchstart={(e) =>
        setMousePos(e.changedTouches?.[0]?.clientX ?? 0, e.changedTouches?.[0]?.clientY ?? 0)}
    on:touchmove={(e) =>
        setMousePos(e.changedTouches?.[0]?.clientX ?? 0, e.changedTouches?.[0]?.clientY ?? 0)}
    on:touchend={setMouseExit}
    class="relative z-0 {klass}"
>
    <canvas bind:this={canvas} aria-hidden class="absolute-fill -z-20" />
    <div class:fade-out={loaded} class="absolute-fill -z-10 bg-black fade-out" />
    <slot />
</div>

<style>
    .fade-out {
        animation: fade-out 500ms;
        animation-delay: 500ms;
        animation-fill-mode: forwards;
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
