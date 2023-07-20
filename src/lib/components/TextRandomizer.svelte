<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ=+*/%^\\@#$()<>[]{};:!?_-";

    export let text = "";
    export let infinite = false;
    export let stop = false;
    let computedText = randomize();

    let frame: number;
    if (browser) {
        frame = requestAnimationFrame(loop);
        let lastUpdate = 0;
        function loop() {
            requestAnimationFrame(loop);
            const t = performance.now();
            if (stop || t - lastUpdate < 40) return;
            computedText = randomize();
            lastUpdate = t;
        }
    }

    function randomize() {
        let nextText = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] === " ") {
                nextText += " ";
            } else if (!infinite && computedText[i] === text[i]) {
                nextText += text[i];
            } else if (Math.random() < 0.01) {
                nextText += text[i];
            } else {
                const nextChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                nextText += nextChar;
            }
        }
        return nextText;
    }

    onMount(() => {
        return () => {
            cancelAnimationFrame(frame);
        };
    });
</script>

{stop ? text : computedText}
