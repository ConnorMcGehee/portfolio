<script lang="ts">
    import Card from "./Card.svelte";
    import { websites } from "./stores";
</script>

<div id="cards">
    {#each $websites as website, index (website.id)}
        <Card {website} {index} />
    {/each}
</div>

<style>
    #cards {
        margin-top: 1rem;
        position: relative;
    }
</style>
