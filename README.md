# UniVerse – University Finder & Comparator

UniVerse is a web application that allows users to search and explore universities from different countries. It uses a public API to fetch real data and provides features like search, filtering, sorting, and comparison.

## Project Overview

This project is built as part of my JavaScript course. The main goal is to apply concepts like API integration, working with JSON data, and using array higher-order functions in a practical way.

The application is designed to help users:

* Find universities based on country
* Search universities by name
* Filter and sort results
* Compare a few universities side-by-side

## Objectives

* Use the fetch API to retrieve data from a public API
* Practice working with JSON, arrays, and objects
* Use array higher-order functions such as filter, map, and sort
* Build a simple and responsive user interface

## API Used

This project uses the Hipo University Domains and Names API.

Base URL:
http://universities.hipolabs.com

Example endpoints:

* Universities in India:
  http://universities.hipolabs.com/search?country=India

* Universities in India with “Technology” in the name:
  http://universities.hipolabs.com/search?country=India&name=Technology

Each university object typically includes:

* name
* country
* alpha_two_code
* state-province
* web_pages
* domains

## Features

* Search universities by name
* Select a country to fetch universities
* Filter universities based on keywords like “Technology” or “Engineering”
* Sort results alphabetically
* Display universities in a card format
* Compare 2–3 universities together in a separate section
* Basic responsive layout

## Technologies Used

* HTML
* CSS
* JavaScript (fetch, async/await, higher-order functions)
* Public API

## How to Run

1. Clone or download the repository
2. Open the project folder
3. Open index.html in a browser