<script lang="ts">
    import { websites, getX } from "./stores";
    import {
        draggable,
        type DragEventData,
        type DragOptions,
    } from "./drag-core";
    import { spring } from "svelte/motion";

    export let website: import("./types").Website;
    export let index: number;

    const THRESHOLD = 75;
    let position = { x: 0, y: 0 };
    let opacity = 1;
    let swipeClass: string | null = null;
    let isDragged = false;
    let dragOptions: DragOptions;
    let isTopCard = false;

    $: isTopCard = index === $websites.length - 1;
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
        opacity = 1 - Math.abs(x / 375);
    }

    function onDragEnd() {
        isDragged = false;
        const isSwiped = Math.abs($getX) > THRESHOLD;
        swipeClass =
            $getX < -THRESHOLD
                ? "swipe-left"
                : $getX > THRESHOLD
                ? "swipe-right"
                : null;
        if (isSwiped) {
            setPositionX($getX);
            nextCard();
        } else {
            opacity = 1;
            setPositionX(0);
        }
    }

    function setPositionX(x: number) {
        position = { ...position, x };
        getX.set(x);
    }

    function nextCard() {
        getX.set(0);
        websites.update((websiteCopy) => {
            websiteCopy.unshift(websiteCopy.splice(index, 1)[0]);
            return websiteCopy;
        });
    }

    const rotation = spring(0, { stiffness: 0.08, damping: 0.3 });

    $: {
        let normalizedX = Math.abs($getX) / THRESHOLD;
        switch (index) {
            case $websites.length - 2:
                rotation.set(Math.min(-7 * (1 - normalizedX), 0));
                break;
            case $websites.length - 3:
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

<a draggable="false" target="_blank" href={website.url} on:click={onClick}>
    <img
        use:draggable={dragOptions}
        draggable="false"
        class="card {swipeClass}"
        class:behind={!isTopCard}
        src={website.imageSrc}
        alt="Screenshot of {website.title}"
        style="rotate: {$rotation}deg;
            opacity: {index < $websites.length - 3 && !swipeClass
            ? 0
            : opacity};
            z-index: {swipeClass ? $websites.length : index};"
        on:animationend={() => {
            setPositionX(0);
            setTimeout(() => {
                opacity = 1;
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
        translate: -50%;
        -webkit-user-select: none;
        user-select: none;
    }

    .behind {
        cursor: default;
        pointer-events: none;
    }

    @keyframes swipeLeft {
        100% {
            translate: calc(-10rem - 50%);
            opacity: 0;
        }
    }

    @keyframes swipeRight {
        100% {
            translate: calc(10rem - 50%);
            opacity: 0;
        }
    }

    .swipe-left {
        animation: swipeLeft 0.3s ease-out forwards;
    }

    .swipe-right {
        animation: swipeRight 0.3s ease-out forwards;
    }
</style>
