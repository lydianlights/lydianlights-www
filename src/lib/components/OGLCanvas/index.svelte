<script lang="ts">
    import type { OGLRenderingContext } from "ogl";
    import { Renderer, Camera, Transform, Program, Mesh, Plane, Vec2 } from "ogl";
    import { onMount } from "svelte";
    import defaultVertextShader from "./defaultVertextShader";
    import fragmentShaderTemplate from "./fragmentShaderTemplate";

    export let shader: string;
    export let resolutionScale: number = 1;
    let klass: string = "";
    export { klass as class };

    let rootElement: HTMLDivElement;
    let width: number;
    let height: number;
    let loaded = false;

    const uniforms = {
        time: { value: 0.0 },
        resolution: { value: new Vec2() },
        mouse_pos: { value: new Vec2() },
        mouse_active: { value: false },
    };

    let renderer: Renderer;
    let gl: OGLRenderingContext;
    let camera: Camera;
    let scene: Transform;

    onMount(() => {
        renderer = new Renderer();
        gl = renderer.gl;
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        rootElement.appendChild(gl.canvas);

        camera = new Camera(gl, { fov: 45 });
        camera.position.set(0, 0, 1);
        setRenderSize(width, height);

        scene = new Transform();
        const geometry = new Plane(gl, {
            width: 2.0,
            height: 2.0,
        });
        const program = new Program(gl, {
            vertex: defaultVertextShader,
            fragment: `${fragmentShaderTemplate}${shader}`,
            uniforms,
        });
        const mesh = new Mesh(gl, { geometry, program });
        mesh.setParent(scene);

        let startTime = performance.now();
        let frame = requestAnimationFrame(mainLoop);
        loaded = true;

        function mainLoop() {
            frame = requestAnimationFrame(mainLoop);
            try {
                const t = performance.now();
                uniforms.time.value = (t - startTime) / 1000;
                renderer.render({ scene, camera });
            } catch (e) {
                cancelAnimationFrame(frame);
            }
        }

        return () => {
            cancelAnimationFrame(frame);
        };
    });

    $: {
        setRenderSize(width, height);
    }

    function setRenderSize(width: number, height: number) {
        if (renderer && camera) {
            const aspect = width / height;
            uniforms.resolution.value.x = width / resolutionScale;
            uniforms.resolution.value.y = height / resolutionScale;
            renderer.setSize(width / resolutionScale, height / resolutionScale);
            renderer.gl.canvas.style.width = `${gl.canvas.width * resolutionScale}px`;
            gl.canvas.style.height = `${gl.canvas.height * resolutionScale}px`;
            camera.perspective({ aspect });
        }
    }

    function setMousePos(x: number, y: number) {
        uniforms.mouse_active.value = true;
        uniforms.mouse_pos.value.set(x, height - y);
    }

    function setMouseExit() {
        uniforms.mouse_active.value = false;
    }
</script>

<div
    role="none"
    on:mousemove={(e) => setMousePos(e.clientX, e.clientY)}
    on:mouseleave={setMouseExit}
    on:touchstart={(e) =>
        setMousePos(e.changedTouches?.[0]?.clientX ?? 0, e.changedTouches?.[0]?.clientY ?? 0)}
    on:touchmove={(e) =>
        setMousePos(e.changedTouches?.[0]?.clientX ?? 0, e.changedTouches?.[0]?.clientY ?? 0)}
    on:touchend={setMouseExit}
    class="relative z-0 {klass}"
>
    <div
        aria-hidden
        bind:this={rootElement}
        bind:clientWidth={width}
        bind:clientHeight={height}
        class="absolute-fill -z-20"
    />
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
