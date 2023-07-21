<script>
    import TextRandomizer from "$lib/components/TextRandomizer.svelte";
    import { browser } from "$app/environment";

    const DELAY = 0;
    const OFFSET = 1000;
    const MAX_TIME = 2500;

    let infinite = [true, true, true];
    let stop = [false, false, false];

    if (browser) {
        setTimeout(() => (infinite[0] = false), DELAY);
        setTimeout(() => (infinite[1] = false), DELAY + OFFSET);
        setTimeout(() => (infinite[2] = false), DELAY + 2 * OFFSET);

        setTimeout(() => (stop[0] = true), MAX_TIME + DELAY);
        setTimeout(() => (stop[1] = true), MAX_TIME + DELAY + OFFSET);
        setTimeout(() => (stop[2] = true), MAX_TIME + DELAY + 2 * OFFSET);
    }
</script>

<div class="relative flex-1 flex-grow-[0.5] w-full 2xl:w-[100rem] max-w-full px-20">
    <div
        class="slide-in flex gap-16 mt-4 px-8 py-8 2xl:mt-8 2xl:px-12 2xl:py-12
        bg-black bg-opacity-70 border border-white border-opacity-50 backdrop-blur-[2px]
        rounded glow-white font-pixel text-glow text-[2rem] 2xl:text-[2.5rem]"
    >
        <div class="">?WHOAMI_?</div>
        <div>
            <div class=" mb-4">
                # <TextRandomizer stop={stop[0]} infinite={infinite[0]} text="Web developer" />
            </div>
            <div class=" mb-4">
                # <TextRandomizer stop={stop[1]} infinite={infinite[1]} text="Creative coder" />
            </div>
            <div class=" mb-4">
                # <TextRandomizer stop={stop[2]} infinite={infinite[2]} text="Lovable nerd" />
            </div>
            <div class="">
                # ?<TextRandomizer infinite text="dumb" />_<TextRandomizer
                    infinite
                    text="furry"
                />??
            </div>
        </div>
    </div>
</div>

<style>
    .slide-in {
        animation: slide-in 500ms;
        animation-delay: 500ms;
        animation-fill-mode: forwards;
        opacity: 0;
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
</style>
