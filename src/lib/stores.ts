import { writable } from 'svelte/store';

import playvertImage from "$lib/assets/websites/playvert.jpg";
import breweryLocatorImage from "$lib/assets/websites/brewery-locator.jpg";
import mastermindImage from "$lib/assets/websites/mastermind.jpg";
import towersOfHanoiImage from "$lib/assets/websites/towers-of-hanoi.jpg";
import hangmanImage from "$lib/assets/websites/hangman.jpeg";
import voxImage from "$lib/assets/websites/vox.jpg";
import type { Project } from './types';

export const projects = writable<Project[]>([
    {
        title: "Think Outside the Vox",
        imageSrc: voxImage,
        url: "https://thinkoutsidethevox.org",
        description: "My team and I created the Think Outside the Vox website using WordPress as well as custom CSS and JavaScript, aiming for screen-reader accessibility and a clean, modern design."
    },
    {
        title: "Playvert",
        imageSrc: playvertImage,
        url: "https://playvert.com",
        repo: "https://github.com/ConnorMcGehee/Playvert",
        description: "Playvert is a versatile web application designed for sharing playlists across multiple music streaming platforms. Made with React."
    },
    {
        title: "Brewery Locator",
        imageSrc: breweryLocatorImage,
        url: "https://connormcgehee.github.io/Brewery-Locator/",
        repo: "https://github.com/ConnorMcGehee/Brewery-Locator",
        description: "Brewery Locator uses the Open Brewery DB API to locate and display the nearest breweries to the user. Made with vanilla JS."
    },
    {
        title: "Hangman",
        imageSrc: hangmanImage,
        url: "https://connormcgehee.github.io/Hangman/",
        repo: "https://github.com/ConnorMcGehee/Hangman",
        description: "Hangman is a webgame that presents a secret phrase that the player can guess letter by letter. Made with vanilla JS."
    },
    {
        title: "Mastermind",
        imageSrc: mastermindImage,
        url: "https://connormcgehee.github.io/Mastermind/",
        repo: "https://github.com/ConnorMcGehee/Mastermind",
        description: "Mastermind is a JavaScript game based off of the Israelian code-breaking board game. Written in vanilla JS, CSS, and HTML."
    },
    {
        title: "Towers of Hanoi",
        imageSrc: towersOfHanoiImage,
        url: "https://connormcgehee.github.io/TowersOfHanoi/",
        repo: "https://github.com/ConnorMcGehee/TowersOfHanoi",
        description: "Towers of Hanoi is a JavaScript game based off the popular mathematical puzzle. Written in vanilla JS, CSS, and HTML."
    },]);