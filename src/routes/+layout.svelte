<script lang="ts">
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import faviconA from "$lib/assets/favicon/favicon_a_32x32.png";
    import faviconB from "$lib/assets/favicon/favicon_b_32x32.png";
    import "../app.css";

    let flip = false;
    let favicon: HTMLLinkElement;

    onMount(() => {
        favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    });

    if (browser) {
        setInterval(() => {
            if (favicon) {
                flip = !flip;
                favicon.href = flip ? faviconA : faviconB;
            }
        }, 600);
    }
</script>

<slot />
