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
    let isDragged = false;
    let opacity = 1;
    let initialized = false;

    let swipeClass: string | null = null;

    let isTopCard = false;

    $: isTopCard = index === $websites.length - 1;

    const THRESHOLD = 75;

    let position = { x: 0, y: 0 };

    let dragOptions: DragOptions;

    $: dragOptions = {
        axis: "x",
        legacyTranslate: false,
        position: position,
        onDrag: onDrag,
        onDragEnd: onDragEnd,
        disabled: !isTopCard,
    };

    function onDrag(data: DragEventData) {
        const x = data.offsetX;
        getX.set(x);
        if (x < 0 || x > 0) {
            isDragged = true;
        } else {
            isDragged = false;
        }

        opacity = 1 - Math.abs(x / 375);
    }

    async function onDragEnd() {
        let isSwiped = Math.abs($getX) > THRESHOLD;

        if ($getX < -THRESHOLD) {
            swipeClass = "swipe-left";
        } else if ($getX > THRESHOLD) {
            swipeClass = "swipe-right";
        }
        isDragged = false;
        if (isSwiped) {
            setPositionX($getX);
            nextCard();
        } else {
            opacity = 1;
            setPositionX(0);
        }
    }

    function nextCard() {
        initialized = false;
        getX.set(0);
        websites.update((websites) => {
            const swipedWebsite = websites.splice(index, 1)[0];
            websites.unshift(swipedWebsite);
            return websites;
        });
    }

    function setPositionX(x: number) {
        position = { ...position, x: x };
        getX.set(x);
    }

    const rotation = spring(0, { stiffness: 0.08, damping: 0.3 });

    $: {
        let normalizedX = Math.abs($getX) / THRESHOLD;
        let degrees;
        switch (index) {
            case $websites.length - 2:
                degrees = -7 * (1 - normalizedX);
                rotation.set(degrees <= 0 ? degrees : 0);
                break;
            case $websites.length - 3:
                degrees = 7 * (1 - normalizedX * 2);
                rotation.set(degrees >= -7 ? degrees : -7);
                break;
            default:
                rotation.set(0);
        }
    }

    function onClick(e: MouseEvent) {
        if ($getX === 0 || !isTopCard) {
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
        class:dragged={isDragged}
        src={website.imageSrc}
        alt="Screenshot of ${website.title}"
        style="rotate: {$rotation}deg;
            opacity: {index < $websites.length - 3 && !swipeClass ? 0 : opacity};
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
        transition: transform 0.2s ease-in-out;
        -webkit-user-select: none;
        user-select: none;
    }

    .behind {
        cursor: default;
        pointer-events: none;
    }

    .dragged {
        transition: none;
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
        transition: none;
        z-index: 9999;
        animation: swipeLeft 0.3s ease-out forwards;
    }

    .swipe-right {
        transition: none;
        z-index: 9999;
        animation: swipeRight 0.3s ease-out forwards;
    }
</style>
