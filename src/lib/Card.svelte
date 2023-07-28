<script lang="ts">
    import { projects, getX, swipeEvent } from "./stores";
    import {
        draggable,
        type DragEventData,
        type DragOptions,
    } from "./drag-core";
    import { spring } from "svelte/motion";
    import Fa from "svelte-fa";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    import { faLink } from "@fortawesome/free-solid-svg-icons";

    export let project: import("./types").Project;
    export let index: number;

    const THRESHOLD = 75;
    let position = { x: 0, y: 0 };
    let opacity = spring(1, { stiffness: 0.08, damping: 0.5 });
    let cardHoverStyle = spring(
        { width: 17, translateZ: 0 },
        { stiffness: 0.08, damping: 0.5 }
    );
    let swipeClass: string | null = null;
    let dragOptions: DragOptions;
    let isTopCard = false;

    $: isTopCard = index === $projects.length - 1;
    $: dragOptions = {
        axis: "x",
        legacyTranslate: false,
        position,
        onDrag,
        onDragEnd,
        disabled: !isTopCard,
    };

    function onDrag({ offsetX: x }: DragEventData) {
        getX.set(x);
        opacity.set(1 - Math.abs(x / 375));
    }

    function onDragEnd() {
        const isSwiped = Math.abs($getX) > THRESHOLD;
        if (isSwiped) {
            const direction = $getX < -THRESHOLD ? "left" : "right";
            setPositionX($getX);
            swipe(direction);
        } else {
            opacity.set(1);
            setPositionX(0);
        }
    }

    function setPositionX(x: number) {
        position = { ...position, x };
        getX.set(x);
    }

    function swipe(direction: string) {
        swipeEvent.set("");
        swipeClass = `swipe-${direction}`;
        opacity.set(0);
        nextCard();
    }

    $: {
        if ($swipeEvent && isTopCard) {
            swipe($swipeEvent);
        }
    }

    function nextCard() {
        getX.set(0);
        projects.update((projectsCopy) => {
            projectsCopy.unshift(projectsCopy.splice(index, 1)[0]);
            return projectsCopy;
        });
    }

    const rotation = spring(0, { stiffness: 0.08, damping: 0.3 });

    $: {
        let normalizedX = Math.abs($getX) / THRESHOLD;
        switch (index) {
            case $projects.length - 2:
                rotation.set(Math.min(-7 * (1 - normalizedX), 0));
                break;
            case $projects.length - 3:
                rotation.set(Math.max(7 * (1 - normalizedX * 2), -7));
                break;
            default:
                rotation.set(0);
        }
    }

    let innerWidth = 0;
    let smallScreen = false;

    $: {
        if (innerWidth < 384) {
            cardHoverStyle.update((style) => {
                return { ...style, width: 14 };
            });
            smallScreen = true;
        } else {
            cardHoverStyle.update((style) => {
                return { ...style, width: 17 };
            });
            smallScreen = false;
        }
        console.log(smallScreen);
    }
</script>

<svelte:window bind:innerWidth />

<figure
    draggable="false"
    use:draggable={dragOptions}
    class="card {swipeClass}"
    class:behind={!isTopCard}
    style="rotate: {$rotation}deg;
            opacity: {$opacity};
            z-index: {swipeClass ? $projects.length : index};
            width: {$cardHoverStyle.width}rem;
            left: {$cardHoverStyle.translateZ}rem;
            top: {$cardHoverStyle.translateZ}rem;"
    on:animationend={() => {
        if (!smallScreen) cardHoverStyle.set({ width: 17, translateZ: 0 });
        setPositionX(0);
        setTimeout(() => {
            opacity.set(1);
            swipeClass = null;
        }, 100);
    }}
    on:pointerover={() => {
        if (isTopCard && !smallScreen)
            cardHoverStyle.set({ width: 18, translateZ: -0.5 });
    }}
    on:pointerleave={() => {
        if (isTopCard && !smallScreen)
            cardHoverStyle.set({ width: 17, translateZ: 0 });
    }}
>
    <img
        draggable="false"
        src={project.imageSrc}
        alt="Screenshot of {project.title}"
    />
    <figcaption class="description">
        <p>{project.description}</p>
        <a href={project.repo} target="_blank">
            <Fa icon={faGithub} />&nbsp;&nbsp;&nbsp;&nbsp;Github Repository
        </a>
        <a href={project.url} target="_blank">
            <Fa icon={faLink} />&nbsp;&nbsp;&nbsp;Visit Site
        </a>
    </figcaption>
</figure>

<style>
    .card {
        position: absolute;
        -webkit-user-select: none;
        user-select: none;
        margin: 0;
        cursor: move;
    }

    .card img {
        width: 100%;
        max-height: 50vh;
        aspect-ratio: 9 / 16;
        object-fit: cover;
        object-position: top;
        border: solid rgb(228, 228, 228) 0.2rem;
        border-radius: 0.5rem;
        -webkit-box-shadow: 4px 4px 32px 3px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 4px 4px 32px 3px rgba(0, 0, 0, 0.75);
        box-shadow: 4px 4px 32px 3px rgba(0, 0, 0, 0.75);
    }

    .description {
        position: absolute;
        box-sizing: border-box;
        left: 0.2rem;
        bottom: 0.4rem;
        padding: 1rem;
        width: 100%;
        background: rgb(10, 2, 26);
        background: linear-gradient(
            0deg,
            rgba(10, 2, 26, 0.8) 70%,
            rgba(10, 2, 26, 0.7) 76%,
            rgba(10, 2, 26, 0) 100%
        );
        border-radius: 0 0 0.25rem 0.25rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .description p {
        margin: 0;
        margin-top: 2rem;
        width: 12rem;
    }

    .behind img {
        cursor: default;
        pointer-events: none;
        -webkit-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.13);
        -moz-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.13);
        box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.13);
    }

    @keyframes swipeLeft {
        100% {
            translate: -10rem;
        }
    }

    @keyframes swipeRight {
        100% {
            translate: 10rem;
        }
    }

    .swipe-left {
        animation: swipeLeft 0.3s ease-out forwards;
    }

    .swipe-right {
        animation: swipeRight 0.3s ease-out forwards;
    }

    @media (hover) {
        .description {
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
        }

        figure:hover .description {
            opacity: 1;
        }
    }

    @media (min-width: 24rem) {
        .description p {
            width: 15rem;
        }
    }

    @media (min-width: 24rem) and (hover) {
        .description p {
            width: 16rem;
        }
    }
</style>
