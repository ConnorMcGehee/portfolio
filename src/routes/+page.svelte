<script lang="ts">
    import { onMount } from "svelte";
    import headshot from "$lib/assets/headshot.jpg";
    import Cards from "$lib/Cards.svelte";
    import Fa from "svelte-fa";
    import {
        faGithub,
        faLinkedin,
        faTwitter,
    } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    const socialLinks = [
        {
            name: "Github",
            url: "https://github.com/ConnorMcGehee/",
            icon: faGithub,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/connor-mcgehee/",
            icon: faLinkedin,
        },
        {
            name: "Twitter",
            url: "https://twitter.com/ConnorMcGehee5",
            icon: faTwitter,
        },
        {
            name: "Email",
            url: "mailto:connormcgehee5@gmail.com",
            icon: faEnvelope,
        },
    ];

    onMount(() => {
        const anchors = document.querySelectorAll("a");

        anchors.forEach((anchor) => {
            if (anchor.querySelector(".svelte-fa, img")) {
                anchor.style.borderBottomWidth = "0";
                anchor.style.borderBottomStyle = "solid";
                anchor.style.paddingBottom = "0";
            }

            const span = anchor.querySelector("span");
            if (anchor.querySelector(".svelte-fa") && span) {
                span.style.borderBottomWidth = "0.063rem";
                span.style.borderBottomStyle = "solid";
                span.style.paddingBottom = "0.188rem";
            }
        });
    });
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
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Connor McGehee</title>
</svelte:head>

<header>
    <div>
        <img src={headshot} alt="Head shot of Connor McGehee" id="headshot" />
        <h1>Connor McGehee</h1>
    </div>
    <p>
        Web Developer specializing in high-performing, visually appealing, &
        accessible interfaces.
    </p>
</header>

<main>
    <section id="projects-section">
        <hr />
        <h2>
            <span class="visually-hidden">Projects</span>
            <span aria-hidden="true">{"<projects />"}</span>
        </h2>
        <Cards />
    </section>

    <section id="skills-section">
        <hr />
        <h2>
            <span class="visually-hidden">Skills</span>
            <span aria-hidden="true">{"<skills />"}</span>
        </h2>
        <ul id="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Svelte</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Git</li>
            <li>Vite</li>
            <li>RESTful APIS</li>
            <li>WordPress</li>
            <li>A11y</li>
        </ul>
    </section>

    <section id="link-section">
        <hr />
        <h2>
            <span class="visually-hidden">Links</span>
            <span aria-hidden="true">{"<links />"}</span>
        </h2>
        <ul>
            {#each socialLinks as link}
                <li>
                    <a
                        class="link-container"
                        href={link.url}
                        target="_blank"
                        on:click={(e) => e.stopPropagation()}
                        ><Fa icon={link.icon} />
                        <span>{link.name}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </section>
</main>

<style>
    :global(body) {
        background-color: rgb(10, 2, 26);
        color: rgb(228, 228, 228);
        font-family: "Crimson Pro", serif;
        margin: 1rem;
    }

    :global(a, a:visited) {
        color: rgb(164, 214, 255);
        text-decoration: none;
        transition: color 0.25s ease-in-out;
        border-bottom-width: 0.063rem;
        border-bottom-style: solid;
        padding-bottom: 0.188rem;
        width: fit-content;
    }

    :global(a:has(.svelte-fa, img)) {
        border-bottom-width: 0;
        border-bottom-style: solid;
        padding-bottom: 0;
    }

    :global(a:has(.svelte-fa) span) {
        border-bottom-width: 0.063rem;
        border-bottom-style: solid;
        padding-bottom: 0.188rem;
    }

    :global(.link-container) {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    :global(.svelte-fa) {
        width: 1.5rem;
    }

    :global(.visually-hidden) {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    @media (hover) {
        :global(a:hover) {
            color: rgb(250, 255, 164);
        }
    }

    section h2 {
        text-align: center;
        margin-bottom: 2rem;
    }

    hr {
        border-color: rgba(228, 228, 228);
        width: 75vw;
        max-width: 70rem;
    }

    header {
        text-align: center;
    }

    header div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    h1 {
        margin: 0;
        font-weight: normal;
        font-size: 1.5rem;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100dvh;
        text-align: center;
    }

    #headshot {
        width: clamp(2rem, 5vh, 5rem);
        max-width: 5rem;
        aspect-ratio: 1;
        border-radius: 50%;
        border: solid rgb(228, 228, 228) 0.15rem;
        transition: border-color 0.25s ease-in-out;
        transition: width 0.5s ease;
    }

    #projects-section {
        margin-top: 0.5rem;
        text-align: left;
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
    }

    #skills {
        width: 18rem;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        margin-bottom: 1rem;
    }
</style>
