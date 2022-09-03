<h1 align="center">Welcome to G-Fifa Stats 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="docs" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="url" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/Moose_Said" target="_blank">
    <img alt="Twitter: Moose_Said" src="https://img.shields.io/twitter/follow/Moose_Said.svg?style=social" />
  </a>
</p>

> G-Fifa Stats is a Nuxt app that allows the user to check Fifa 22 players statistics and skills.

## ✨ Demo

60 Seconds [Video Demo](https://vimeo.com/manage/videos/746146971)

## ⚙️ Built With

| Used Stack                              |
| --------------------------------------- |
| [Nuxt](https://nuxtjs.org/)             |
| [TailwindCSS](https://tailwindcss.com/) |
| [Sanity](https://www.sanity.io/)        |

## TOC

- [✨ Demo](#-demo)
- [⚙️ Built With](#️-built-with)
- [TOC](#toc)
- [Homepage:](#homepage)
  - [Big Screens:](#big-screens)
  - [Small Screens:](#small-screens)
  - [Responsive design](#responsive-design)
  - [Reusable Table Component](#reusable-table-component)
  - [Dynamic sorting](#dynamic-sorting)
  - [Dynamic Routing](#dynamic-routing)
  - [Loading spinner](#loading-spinner)
  - [SEO](#seo)
- [Details Page](#details-page)
  - [Big Screens:](#big-screens-1)
  - [Small Screens](#small-screens-1)
  - [Sanity Image Builder](#sanity-image-builder)
  - [Fully Dynamic Table](#fully-dynamic-table)
  - [Player Details Component](#player-details-component)
  - [Dynamic Route](#dynamic-route)
- [Additional Information](#additional-information)
- [Build Setup](#build-setup)
- [Author](#author)
- [📝 License](#-license)

## Homepage:

### Big Screens:

`gif`

![GStats Big Screens](https://i.imgur.com/s5P4vPD.gif)

### Small Screens:

`gif`

![GStats Small Screens](https://i.imgur.com/IJhk12n.gif)

### Responsive design

The Homepage has a large data-filled table that is completely flexible and responsive to all screen sizes.

### Reusable Table Component

The **homepage table** is extracted to three Nuxt components (Tlayout, Thead and Trow). These components are created in a customizable way, making the table adaptable to various table design sets. The same table components, for example, will be reused on the details page.

### Dynamic sorting

Data is fetched from Sanity and sorted by overall rating by default, however you may sort the data by tapping on any of the table headers. The application listens to your click and send a tailored query to Sanity, which returns the data you need in the order you choose.

### Dynamic Routing

Each player name is a link that takes the user to the player details page `/details/{_slug}`.

### Loading spinner

Application is listening to Nuxt's `fetch()` hook and shows a loading spinner if the data still being processed.

### SEO

The application utilizes Nuxt `head()` method to provide basic dynamic title and meta tags. Using the `titleTemplate` from `Vue-Meta` in `nuxt.config.js` file, the app name, together with the dynamic page title, will be permanent across all pages.

## Details Page

### Big Screens:

![Details Page Bigsreens Image](https://imgur.com/sqrivUa.png)

[CLICK FOR GIF - GStats Details Big Screens](https://i.imgur.com/gXJWqw9.gif)

### Small Screens

![Details Page Smallscreens Image](https://imgur.com/FhDtw4P.png)

[CLICK FOR GIF - GStats Details Small Screens](https://i.imgur.com/vAjvbFA.gif)

### Sanity Image Builder

Card image is being fetched and displayed using [Sanity Image Builder](https://www.sanity.io/docs/presenting-images#mY9Be3Ph).

Alt attribute is dynamically changing accoridng to the selected player.

### Fully Dynamic Table

- Same reusable table from homepage is being used.
- Rather than being hard coded, table headers are dynamically fetched from Sanity and customized to show only the first three characters in uppercase, and each header has its own data as table rows.

### Player Details Component

A simple component that accepts couple of attributes to display the player's data in the footer seciton.

### Dynamic Route

The page is using the route parameter to tailor a query for Sanity JavaScript SDK.

## Additional Information

- Tailwind is integrated with the typeface "Manrope Variable" for the application font.
- Imported custom colors to Tailwind to match the requested design.
- The app is using a single default layout file.
- Sanity JavaScript SDK and Sanity Image Builder are initiated and added to Nuxt as Plugins, exporting the Client and Image Builder method.
- `projectId` and `dataset` are being fetched from `.env` file because why not.

## Build Setup

Install dependencies:

$ npm install

Serve with hot reload at localhost:3000

$ npm run dev

Don't forget to create .env file that has projectId and dataSet Values

## Author

👤 **Mostafa Said**

- Website: https://linktr.ee/moosesaid
- Twitter: [@Moose_Said](https://twitter.com/Moose_Said)
- Github: [@MooseSaeed](https://github.com/MooseSaeed)
- LinkedIn: [@moosesaid](https://linkedin.com/in/moosesaid)

## 📝 License

This project is [MIT](https://github.com/MooseSaeed/gfifa-stats/blob/master/LICENCE) licensed.
