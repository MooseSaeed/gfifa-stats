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

| G-Fifa Stats Structure |
| ---------------------- |
| [Homepage](#Homepage)  |

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

`gif`
![GStats details Big Screens](https://i.imgur.com/gXJWqw9.gif)

### Small Screens

`gif`
![GStats details small Screens](https://i.imgur.com/vAjvbFA.gif)

## Author

👤 **Mostafa Said**

- Website: https://linktr.ee/moosesaid
- Twitter: [@Moose_Said](https://twitter.com/Moose_Said)
- Github: [@MooseSaeed](https://github.com/MooseSaeed)
- LinkedIn: [@moosesaid](https://linkedin.com/in/moosesaid)

## 📝 License

Copyright © 2022 [Mostafa Said](https://github.com/MooseSaeed).<br />
This project is [MIT](https://github.com/MooseSaeed/Tailwinder/blob/master/LICENSE) licensed.
