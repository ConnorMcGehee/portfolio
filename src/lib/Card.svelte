<script lang="ts">
    import Fa from "svelte-fa";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    import { faLink } from "@fortawesome/free-solid-svg-icons";

    export let project: import("./types").Project;
</script>

<figure class="card">
    <a href={project.url}><img src={project.imageSrc} alt="Screenshot links to {project.title} site" /></a>
    <figcaption class="description">
        <h3>{project.title}</h3>
        <a href={project.url} class="link-container" target="_blank">
            <Fa icon={faLink} />
            <span>Link to {project.title}</span>
        </a>
        <a href={project.repo} class="link-container" target="_blank">
            <Fa icon={faGithub} />
            <span>{project.title} Repository</span>
        </a>
        <p>{project.description}</p>
    </figcaption>
</figure>

<style>
    .card {
        width: 17rem;
    }
    .card img {
        width: 17rem;
        max-height: 50vh;
        aspect-ratio: 9 / 16;
        object-fit: cover;
        object-position: top;
        border: solid rgb(228, 228, 228) 0.2rem;
        border-radius: 0.5rem;
        margin: 1rem 0;
    }

    .description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-left: 0.5rem;
        width: 100%;
    }

    .description h3 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: normal;
    }

    .description p {
        margin: 0;
    }
</style>
