<script lang="ts">
    export let x = 0;
    export let y = 0;
    export let rotationTime = 0;
    export let rotationDir = "normal";
</script>

<div style:transform="translate({x}px, {y}px)" class="transform-reset">
    <div
        style:--rotation-time="{rotationTime}s"
        style:--rotation-dir={rotationDir}
        class="transform-reset rotate"
    >
        <slot />
    </div>
</div>

<style>
    .transform-reset {
        width: 0;
        height: 0;
        transform-origin: 0 0;
    }

    .rotate {
        animation: rotate var(--rotation-time) steps(32) infinite var(--rotation-dir, normal);
    }

    @keyframes rotate {
        from {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
</style>
