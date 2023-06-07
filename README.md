# AI Travel Guide

AI Travel Guide powered by OpenAI, using React, Vite and Chakra UI. Type a location and click the button to see list of things to do; with a map using the Google Maps API.

**Link to project:** https://taaaaab.github.io/ai-tour-guide/

![alt tag](https://github.com/Taaaaab/ai-tour-guide/blob/main/src/assets/guide-screenshot.png)

## How It's Made:

**Tech used:** React, Vite, Chakra UI, OpenAI, Google Maps JavaScript API

Began with Traversy Media's keyword extractor as inspiration. Created components using Chakra UI with header, footer, text area and button. Setup API using OpenAI's davinci-003 for text. API call made with user's input location which returns list of things to do in a modal. Then, Google Maps JavaScript API is loaded below list with a search map of the results. Additionally, a project to practice using Chakra UI with React.

## Optimizations

Moved all API keys to .env file to prepare for hosting. Added separate Chakra UI AspectRatio component to appear below text results with Chakra UI loading circle.

## Lessons Learned:

First project using OpenAI, Google Maps JavaScript API and Chakra UI. Chakra UI and Google API documentation pages were extremely useful, Chakra UI even had a specific guide for embedding Google Maps. Became stuck with importing API keys and finally fixed issue after reading guide to importing from .env using Vite (import.meta.env...).

## Examples:

Take a look at these examples that I have in my own portfolio:

**Wildlife Inventory Application:** https://github.com/Taaaaab/wildlife-inventory-application

**Members Only Message Board:** https://github.com/Taaaaab/members-only

**Memory Card Game:** https://github.com/Taaaaab/memory-card
