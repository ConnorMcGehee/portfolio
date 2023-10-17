<script lang="ts">
    import Card from "./Card.svelte";
    import { projects } from "./stores";
</script>

<div id="projects">
    <div id="cards-container">
        {#each $projects as project (project.url)}
            <Card {project} />
        {/each}
    </div>
</div>

<style>
    #cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 70rem;
        margin: auto;
    }
</style>
