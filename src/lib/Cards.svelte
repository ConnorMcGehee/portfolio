<script lang="ts">
    import Card from "./Card.svelte";
    import { projects, swipeEvent } from "./stores";
    import Fa from "svelte-fa";
    import { faXmark, faHeart } from "@fortawesome/free-solid-svg-icons";
    import { spring } from "svelte/motion";
    import { fade } from "svelte/transition";

    function swipe(direction: string) {
        swipeEvent.set(direction);
    }

    const dislikeSize = spring(
        { width: 3.5, font: 2 },
        { stiffness: 0.1, damping: 0.3 }
    );
    const loveSize = spring(
        { width: 3.5, font: 1.65 },
        { stiffness: 0.1, damping: 0.3 }
    );

    const maxWidth = spring(17, { stiffness: 0.08, damping: 0.5 });

    function dislikeClick() {
        swipe("left");
    }

    function loveClick() {
        swipe("right");
    }

    let innerWidth = 0;

    $: {
        if (innerWidth < 384) {
            maxWidth.set(14);
        } else {
            maxWidth.set(17);
        }
    }
</script>

<svelte:window bind:innerWidth />

<div id="projects">
    <div id="cards-container" style="width: {$maxWidth}rem;">
        {#each $projects as project, index (project.url)}
            <Card {project} {index} />
        {/each}
    </div>
    {#key $projects[$projects.length - 1].title}
        <a
            href={$projects[$projects.length - 1].url}
            target="_blank"
            class="title"
            transition:fade={{ duration: 150 }}
        >
            <h2>{$projects[$projects.length - 1].title}</h2>
        </a>
    {/key}

    <button
        on:click={() => dislikeClick()}
        class="dislike icon"
        on:pointerover={() => dislikeSize.set({ width: 4.25, font: 2.4 })}
        on:pointerleave={() => dislikeSize.set({ width: 3.5, font: 1.65 })}
        style="width: {$dislikeSize.width}rem;
        font-size: {$dislikeSize.font}rem;"
    >
        <Fa icon={faXmark} />
    </button>
    <button
        on:click={() => loveClick()}
        class="love icon"
        on:pointerover={() => loveSize.set({ width: 4.25, font: 2.4 })}
        on:pointerleave={() => loveSize.set({ width: 3.5, font: 1.65 })}
        style="width: {$loveSize.width}rem;
        font-size: {$loveSize.font}rem;"
    >
        <Fa icon={faHeart} />
    </button>
</div>

<style>
    :root {
        --love-color: rgb(255, 195, 228);
        --dislike-color: rgb(255, 64, 3);
    }

    #projects {
        display: grid;
        grid-template-areas:
            "card card"
            "title title"
            "dislike love";
        column-gap: 25vw;
        row-gap: 1rem;
        justify-items: center;
        margin-top: 1.5rem;
        max-width: 70rem;
    }

    #cards-container {
        position: relative;
        grid-area: card;
        width: 72vw;
        max-height: 50vh;
        aspect-ratio: 9/16;
    }

    .title {
        grid-area: title;
        z-index: 9999;
    }

    .title h2 {
        font-weight: normal;
    }

    .icon {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.5rem;
        border-radius: 50%;
        border: solid 0.2rem;
        aspect-ratio: 1;
        padding: 0.5rem;
        -webkit-user-select: none;
        user-select: none;
        z-index: 9999;
        background: none;
        margin-bottom: 1rem;
    }

    .dislike {
        font-size: 2rem;
        color: var(--dislike-color);
        border-color: var(--dislike-color);
        box-shadow: 0px 0px 20px 0px var(--dislike-color);
        grid-area: dislike;
        justify-self: end;
    }

    .love {
        font-size: 1.65rem;
        color: var(--love-color);
        border-color: var(--love-color);
        box-shadow: 0px 0px 20px 0px var(--love-color);
        grid-area: love;
        justify-self: start;
    }

    .love,
    .dislike {
        align-self: center;
    }

    @media (min-width: 31.25rem) {
        #projects {
            grid-template-areas:
                "dislike card love"
                ". title .";
            column-gap: 2rem;
        }
    }
</style>
