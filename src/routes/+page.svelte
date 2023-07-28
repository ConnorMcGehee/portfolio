<script lang="ts">
    import headshot from "$lib/assets/headshot.jpg";
    import Cards from "$lib/Cards.svelte";
    import Fa from "svelte-fa";
    import {
        faGithub,
        faLinkedin,
        faTwitter,
    } from "@fortawesome/free-brands-svg-icons";
    import {
        faXmark,
        faEnvelope,
        faAnglesUp,
        faAnglesDown,
    } from "@fortawesome/free-solid-svg-icons";
    import { fly } from "svelte/transition";
    let menuOpen = false;
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
    ];
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

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<main
    on:click={() => (menuOpen = false)}
    on:keydown={() => (menuOpen = !menuOpen)}
>
    <button
        id="header"
        on:click={(e) => {
            e.stopPropagation();
            menuOpen = !menuOpen;
        }}
    >
        <img src={headshot} alt="Headshot" id="headshot" />
        <h1>Connor McGehee</h1>
    </button>
    <p>
        Web Developer with a flair for aesthetically appealing and
        high-performing digital interfaces.
    </p>
    {#if menuOpen}
        <div id="menu" transition:fly={{ y: -150 }}>
            <button id="close" on:click={() => (menuOpen = false)}>
                <Fa icon={faXmark} /> Close Menu
            </button>
            <ul>
                {#each socialLinks as link}
                    <li>
                        <a
                            href={link.url}
                            target="_blank"
                            on:click={(e) => e.stopPropagation()}
                            ><Fa
                                icon={link.icon}
                            />&nbsp;&nbsp;&nbsp;{link.name}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
    {/if}

    <section id="projects-section">
        <hr />
        <h2>
            {"<projects />"}
            &nbsp;
            <span
                on:pointerdown={() => {
                    const element = document.querySelector("#email");
                    element?.scrollIntoView({ behavior: "smooth" });
                }}
            >
                <Fa icon={faAnglesDown} />
            </span>
        </h2>
        <Cards />
    </section>

    <section id="skills-section">
        <hr />
        <h2>{"<skills />"}</h2>
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
        </ul>
    </section>

    <section id="contact-section">
        <hr />
        <h2>
            <span
                on:pointerdown={() => {
                    const element = document.querySelector("#header");
                    element?.scrollIntoView({ behavior: "smooth" });
                }}
            >
                <Fa icon={faAnglesUp} />
            </span>
            &nbsp;
            {"<contact />"}
        </h2>
        <ul>
            {#each socialLinks as link}
                <li>
                    <a
                        href={link.url}
                        target="_blank"
                        on:click={(e) => e.stopPropagation()}
                        ><Fa icon={link.icon} />&nbsp;&nbsp;&nbsp;{link.name}</a
                    >
                </li>
            {/each}
            <li id="email">
                <a href="mailto:connormcgehee5@gmail.com">
                    <Fa icon={faEnvelope} />&nbsp;&nbsp;&nbsp;Email
                </a>
            </li>
        </ul>
    </section>
</main>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    :global(body) {
        background-color: rgb(10, 2, 26);
        color: rgb(228, 228, 228);
        font-family: "Crimson Pro", serif;
        position: relative;
        height: 100dvh;
        overflow-x: hidden;
        margin: 1rem;
    }

    :global(a, a:visited) {
        color: inherit;
        text-decoration: none;
        transition: color 0.25s ease-in-out;
    }

    @media (hover) {
        :global(a:hover) {
            color: rgb(250, 255, 164);
        }
    }

    section h2 {
        text-align: center;
        padding: 0.1rem;
        margin-bottom: 2rem;
        width: 100vw;
    }

    hr {
        border-color: rgba(228, 228, 228);
        width: 75vw;
        max-width: 70rem;
    }

    #close {
        display: flex;
        background: none;
        border: none;
        color: rgb(243, 178, 178);
        font-family: inherit;
        font-size: 1rem;
        cursor: pointer;
        margin: auto;
        gap: 0.3rem;
        align-items: end;
        transition: color 0.25s ease-in-out;
    }

    #header {
        background: none;
        border: none;
        color: inherit;
        font-family: inherit;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        transition: color 0.25s ease-in-out;
        cursor: pointer;
    }

    h1 {
        margin: 0;
        font-weight: normal;
        font-size: 1.5rem;
    }

    section span {
        cursor: pointer;
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
    }

    @media (hover) {
        #header:hover,
        #header:hover #headshot {
            border-color: rgb(250, 255, 164);
            color: rgb(250, 255, 164);
        }

        #close:hover {
            color: rgb(239, 127, 127);
        }
    }

    #menu {
        position: absolute;
        background: rgb(10, 2, 26, 0.85);
        color: rgb(228, 228, 228);
        padding: 1rem;
        padding-bottom: 0;
        border-radius: 0.5rem;
        z-index: 10000;
        transition: all 0.3s ease;
        top: 4rem;
        width: 100vw;
        font-size: 1.25rem;
        border: solid rgba(228, 228, 228, 0.85) 0.15rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    #skills {
        width: 10rem;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        margin-bottom: 1rem;
    }
</style>