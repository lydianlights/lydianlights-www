<script lang="ts">
    import NavBar from "./NavBar.svelte";
    import MainTitle from "./MainTitle.svelte";
    import WhoAmI from "./WhoAmI.svelte";
    import Background from "./Background.svelte";
    import StuffIveMade from "./StuffIveMade.svelte";

    let scrollY = 0;
    $: scrollerOpacity = Math.min(Math.max(1 - scrollY / 150, 0), 1);
</script>

<svelte:window bind:scrollY />
<NavBar />
<div class="flex flex-col items-center w-full min-h-screen">
    <div class="h-16" />
    <MainTitle />
    <div class="flex-none w-full h-8 bg-black mask" />
    <WhoAmI />
    <div class="flex-none w-full flex justify-center items-center h-10 pb-10 mt-10">
        <button
            aria-label="scroll down"
            style:opacity={scrollerOpacity}
            class="font-pixel text-8xl text-glow rotate-90 -translate-y-2 hocus-visible:translate-y-0 transition-transform"
        >
            &gt;
        </button>
    </div>
</div>
<div class="flex flex-col items-center w-full mt-10 bg-black">
    <StuffIveMade />
</div>
<Background />

<style>
    .mask {
        mask: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.5) 80%,
            rgba(255, 255, 255, 0) 100%
        );
    }
</style>
