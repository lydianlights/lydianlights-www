<script>
    import OGLCanvas from "$lib/components/OGLCanvas/index.svelte";
    import { mainTitleShader } from "$lib/shaders";

    const TEXT = "lydianlights.dev";
    let entered = false;
    let doBlink = false;
    let doType = false;

    setTimeout(onEnterDone, 300);

    function onEnterDone() {
        entered = true;
        doBlink = true;
        setTimeout(onWaitDone, 1000);
    }

    function onWaitDone() {
        doBlink = false;
        doType = true;
        setTimeout(onTypingDone, 1500);
    }

    function onTypingDone() {
        doBlink = true;
    }

    const shader = mainTitleShader;
</script>

<div class="flex-1 w-full flex flex-col items-center bg-black">
    <OGLCanvas
        {shader}
        resolutionScale={2}
        class="flex-1 w-full flex flex-col justify-center items-stretch svelte-pls-allow-passing-classes-to-children-without-GLOBAL-mask"
    >
        <div class="slide-in bg-black bg-opacity-90 py-4 flex flex-col items-center">
            <div class="flex-1 w-full 2xl:w-[100rem] max-w-full px-20">
                <div
                    style:--text-width="calc({TEXT.length}ch + {TEXT.length * 0.05}em)"
                    style:--text-char-count={TEXT.length}
                    class="flex flex-nowrap text-[5rem] font-pixel text-glow"
                >
                    <div class="mr-5">&gt;</div>
                    <div
                        class:type={doType}
                        class="flex-none w-0 whitespace-nowrap overflow-hidden"
                    >
                        {TEXT}
                    </div>
                    <div class:invisible={!entered} class:blink={doBlink}>_</div>
                </div>
            </div>
        </div>
    </OGLCanvas>
</div>

<style>
    :global(.svelte-pls-allow-passing-classes-to-children-without-GLOBAL-mask) {
        mask: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 75%,
            rgba(255, 255, 255, 0.5) 80%,
            rgba(255, 255, 255, 0) 100%
        );
    }

    .slide-in {
        animation: slide-in 300ms;
    }

    .type {
        width: var(--text-width);
        animation: type 1500ms steps(var(--text-char-count));
    }

    .blink {
        animation: blink 500ms step-end infinite alternate;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-2rem);
            opacity: 0;
        }
        to {
            transform: translateY(0rem);
            opacity: 1;
        }
    }

    @keyframes type {
        from {
            width: 0;
        }
    }

    @keyframes blink {
        0% {
            visibility: hidden;
        }
        50% {
            visibility: visible;
        }
    }
</style>
