<script lang="ts">
    import { websites, getX } from "./stores";
    import { draggable, type DragEventData, type DragOptions } from "./drag-core";

    export let website: import("./types").Website;
    export let index: number;
    let isDragged = false;
    let useTransitions = false;
    let opacity = 1;

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
        useTransitions = true;
        opacity = 1;

        let isSwiped = Math.abs($getX) > THRESHOLD;

        if ($getX < -THRESHOLD) {
            swipeClass = "swipe-left";
        } else if ($getX > THRESHOLD) {
            swipeClass = "swipe-right";
        }

        setTimeout(() => {
            useTransitions = false;
            if ($getX === 0) {
                isDragged = false;
            }
        }, 200); // ms should be the duration of the CSS transition

        if (isSwiped) {
            nextCard();
        }

        setPositionX(0);
    }

    function nextCard() {
        let websitesCopy = [...$websites];
        const swipedWebsite = websitesCopy.splice(index, 1)[0];
        websitesCopy.unshift(swipedWebsite);
        $websites = websitesCopy;
        dragOptions = { axis: "none" };
        dragOptions = {
            axis: "y",
            legacyTranslate: false,
            position: position,
            onDrag: onDrag,
            onDragEnd: onDragEnd,
        };
        dragOptions = dragOptions;
    }

    function setPositionX(x: number) {
        position = { ...position, x: x };
        getX.set(x);
    }

    let rotation = 0;

    $: {
        let normalizedX = Math.abs($getX) / THRESHOLD;
        let degrees;
        switch (index) {
            case $websites.length - 2:
                degrees = -7 * (1 - normalizedX);
                rotation = degrees <= 0 ? degrees : 0;
                break;
            case $websites.length - 3:
                degrees = 7 * (1 - normalizedX * 2);
                rotation = degrees >= -7 ? degrees : -7;
                break;
            default:
                rotation = 0;
        }
    }

    function onClick(e: MouseEvent) {
        if (isDragged || !isTopCard) {
            e.preventDefault();
        }
    }
</script>

<a draggable="false" target="_blank" href={website.url} on:click={onClick}>
    <img
        use:draggable={dragOptions}
        draggable="false"
        class="card"
        class:behind={!isTopCard}
        class:dragged={isTopCard && !useTransitions}
        src={website.imageSrc}
        alt="Screenshot of ${website.title}"
        style="opacity: {opacity};
            rotate: {rotation}deg;"
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
        transition: all 0.2s ease-in-out;
        -webkit-user-select: none;
        user-select: none;
    }

    .dragged {
        transition: none;
    }

    .behind {
        cursor: default;
        pointer-events: none;
    }
</style>
