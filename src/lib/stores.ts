import { readable, writable } from 'svelte/store';

export const getX = writable(0);

import playvertImage from "$lib/assets/websites/playvert.jpg";
import breweryLocatorImage from "$lib/assets/websites/brewery-locator.jpg";
import mastermindImage from "$lib/assets/websites/mastermind.jpg";
import towersOfHanoiImage from "$lib/assets/websites/towers-of-hanoi.jpg";
import type { Project } from './types';

const playvert: Project = {
    title: "Playvert",
    imageSrc: playvertImage,
    url: "https://playvert.com"
};

const breweryLocator: Project = {
    title: "Brewery Locator",
    imageSrc: breweryLocatorImage,
    url: "https://connormcgehee.github.io/Brewery-Locator/"
};

const mastermind: Project = {
    title: "Mastermind",
    imageSrc: mastermindImage,
    url: "https://connormcgehee.github.io/Mastermind/"
};

const towersOfHanoi: Project = {
    title: "Towers of Hanoi",
    imageSrc: towersOfHanoiImage,
    url: "https://connormcgehee.github.io/TowersOfHanoi/"
};

export const projects = writable(
    [towersOfHanoi, mastermind, breweryLocator, playvert]);

export const swipeEvent = writable("");