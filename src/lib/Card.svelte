<script lang="ts">
    import { projects, getX, swipeEvent } from "./stores";
    import {
        draggable,
        type DragEventData,
        type DragOptions,
    } from "./drag-core";
    import { spring } from "svelte/motion";

    export let project: import("./types").Project;
    export let index: number;

    const THRESHOLD = 75;
    let position = { x: 0, y: 0 };
    let opacity = spring(1, { stiffness: 0.08, damping: 0.5 });
    let swipeClass: string | null = null;
    let isDragged = false;
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
        isDragged = x !== 0;
        opacity.set(1 - Math.abs(x / 375));
    }

    function onDragEnd() {
        isDragged = false;
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

    function onClick(e: MouseEvent) {
        if (!isTopCard || $getX === 0) {
            e.preventDefault();
        }
    }
</script>

<a draggable="false" target="_blank" href={project.url} on:click={onClick}>
    <img
        use:draggable={dragOptions}
        draggable="false"
        class="card {swipeClass}"
        class:behind={!isTopCard}
        src={project.imageSrc}
        alt="Screenshot of {project.title}"
        style="rotate: {$rotation}deg;
            opacity: {$opacity};
            z-index: {swipeClass ? $projects.length : index};"
        on:animationend={() => {
            setPositionX(0);
            setTimeout(() => {
                opacity.set(1);
                swipeClass = null;
            }, 100);
        }}
    />
</a>

<style>
    .card {
        width: 17rem;
        aspect-ratio: 9 / 16;
        object-fit: cover;
        object-position: top;
        border-radius: 0.5rem;
        border: solid white 0.2rem;
        position: absolute;
        -webkit-user-select: none;
        user-select: none;
    }

    .behind {
        cursor: default;
        pointer-events: none;
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
</style>
