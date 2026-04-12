# UniVerse

UniVerse is a simple web app that lets you search and explore universities from around the world. Enter a country name, and it fetches real data from a public dataset — you can then filter by type, sort alphabetically, or search by name within the results.

I built this as part of my JavaScript learning, mainly to practice working with APIs, JSON data, and array methods in a real project.

## What it does

- Enter a country name to fetch universities from that country
- Search within the results by university name
- Filter by category — All, Technology, or Engineering
- Sort results A to Z or Z to A
- Each result shows the university name, country, domain, and a link to their website
- Dark mode toggle

## Tech used

- HTML
- CSS
- JavaScript — fetch, async/await, array methods (filter, sort), event listeners

## Data source

Api - "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json"

Uses the [Hipo University Domains List](https://github.com/Hipo/university-domains-list) — a public JSON dataset hosted on GitHub.

## How to run

1. Clone the repo
2. Open `index.html` in a browser