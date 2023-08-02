import { readable, writable } from 'svelte/store';

export const getX = writable(0);

import playvertImage from "$lib/assets/websites/playvert.jpg";
import breweryLocatorImage from "$lib/assets/websites/brewery-locator.jpg";
import mastermindImage from "$lib/assets/websites/mastermind.jpg";
import towersOfHanoiImage from "$lib/assets/websites/towers-of-hanoi.jpg";
import hangmanImage from "$lib/assets/websites/hangman.jpeg";
import type { Project } from './types';

export const projects = writable<Project[]>([{
    title: "Playvert",
    imageSrc: playvertImage,
    url: "https://playvert.com",
    repo: "https://github.com/ConnorMcGehee/Playvert",
    description: "Playvert is a versatile web application designed for sharing playlists across multiple music streaming platforms."
},
{
    title: "Brewery Locator",
    imageSrc: breweryLocatorImage,
    url: "https://connormcgehee.github.io/Brewery-Locator/",
    repo: "https://github.com/ConnorMcGehee/Brewery-Locator",
    description: "Brewery Locator uses the Open Brewery DB API to locate and display the nearest breweries to the user."
},
{
    title: "Hangman",
    imageSrc: hangmanImage,
    url: "https://connormcgehee.github.io/Hangman/",
    repo: "https://github.com/ConnorMcGehee/Hangman",
    description: "Webgame that presents a secret phrase that the player can guess letter by letter. Made with vanilla JS."
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

export const swipeEvent = writable("");