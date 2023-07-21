<script>
    import NavBar from "./NavBar.svelte";
    import MainTitle from "./MainTitle.svelte";
    import WhoAmI from "./WhoAmI.svelte";
    import Background from "./Background.svelte";
</script>

<div class="flex flex-col items-center w-screen min-h-screen z-10">
    <NavBar />
    <MainTitle />
    <div class="flex-none w-full h-8 bg-black mask" />
    <WhoAmI />
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
