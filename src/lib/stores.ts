import { writable } from 'svelte/store';

export const getX = writable(0);

import playvertImage from "$lib/assets/websites/playvert.jpg";
import breweryLocatorImage from "$lib/assets/websites/brewery-locator.jpg";
import mastermindImage from "$lib/assets/websites/mastermind.jpg";
import towersOfHanoiImage from "$lib/assets/websites/towers-of-hanoi.jpg";
import type { Website } from './types';

const playvert: Website = {
    title: "Playvert",
    imageSrc: playvertImage,
    url: "https://playvert.com",
    id: "playvert"
};

const breweryLocator: Website = {
    title: "Brewery Locator",
    imageSrc: breweryLocatorImage,
    url: "https://connormcgehee.github.io/Brewery-Locator/",
    id: "brewery-locator"
};

const mastermind: Website = {
    title: "Mastermind",
    imageSrc: mastermindImage,
    url: "https://connormcgehee.github.io/Mastermind/",
    id: "mastermind"
};

const towersOfHanoi: Website = {
    title: "Towers of Hanoi",
    imageSrc: towersOfHanoiImage,
    url: "https://connormcgehee.github.io/TowersOfHanoi/",
    id: "towers-of-hanoi"
};

export const websites = writable([playvert, breweryLocator, mastermind, towersOfHanoi]);