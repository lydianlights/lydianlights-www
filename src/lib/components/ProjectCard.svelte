<script lang="ts">
    export let title = "";
    export let imageUrl = "";
    export let href = "";
    export let placeholder = false;
</script>

{#if !placeholder}
    <a
        {href}
        class="flex-1 min-w-[35rem] 2xl:min-w-[42rem] bg-grey-900 bg-opacity-70 pb-12 pt-6 rounded -skew-x-6 hocus:scale-105 transition-transform"
    >
        <div class="skew-x-6 flex flex-col justify-center items-center">
            <h3 class="font-pixel text-3xl 2xl:text-4xl text-glow mb-2 2xl:mb-6 whitespace-nowrap">
                {title}
            </h3>
            <img
                src={imageUrl}
                alt="Screenshot of {title}"
                class="w-[24rem] 2xl:w-[30rem] border border-grey-400 rounded"
            />
        </div>
    </a>
{:else}
    <div class="h-0 flex-1 min-w-[32rem] 3xl:flex-none 3xl:min-w-0" />
{/if}
