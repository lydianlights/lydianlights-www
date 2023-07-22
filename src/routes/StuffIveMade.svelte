<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import factoryPlannerImgUrl from "$lib/assets/images/factory-planner.png";
    import mhrPlannerImgUrl from "$lib/assets/images/mhr-build-planner.png";
    import openGPTImgUrl from "$lib/assets/images/open-gpt-playground.png";
</script>

<div class="flex w-full flex-col items-center">
    <h2 class="font-pixel text-glow text-[2.5rem] 2xl:text-[3rem] mb-10">// Stuff I've Made</h2>
    <div class="flex w-full gap-x-8 gap-y-8 px-12 flex-wrap">
        <ProjectCard
            title="Yet Another Factory Planner"
            href="https://www.satisfactory-planner.net/"
            imageUrl={factoryPlannerImgUrl}
        />
        <ProjectCard
            title="MHR Build Planner"
            href="https://www.mhrbuildplanner.net/"
            imageUrl={mhrPlannerImgUrl}
        />
        <ProjectCard
            title="Open GPT Playground"
            href="https://www.satisfactory-planner.net/"
            imageUrl={openGPTImgUrl}
        />
        <ProjectCard placeholder />
    </div>
</div>
