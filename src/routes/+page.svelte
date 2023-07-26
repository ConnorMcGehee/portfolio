<script lang="ts">
    import headshot from "$lib/assets/headshot.jpg";
    import Cards from "$lib/Cards.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="true"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Crimson+Pro&display=swap"
        rel="stylesheet"
    />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
    />
</svelte:head>

<main>
    <img src={headshot} alt="Headshot" id="headshot" />
    <h1>Connor McGehee</h1>

    <section id="websites">
        <Cards />
    </section>
</main>

<style>
    :global(body) {
        background-color: rgb(10, 2, 26);
        color: rgb(228, 228, 228);
        font-family: "Crimson Pro", serif;
        position: relative;
        height: 100dvh;
        overflow-x: hidden;
        margin: 1rem;
    }

    h1 {
        margin: 1rem;
        font-weight: normal;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100dvh;
    }

    #headshot {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: solid white 0.2rem;
    }
</style>
