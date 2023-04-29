# Patreon Badge

## About

> - A campaign identification is required in order to use this method, which utilizes Patreon's Official API. Visit a Patreon page and inspect it, then type one of the options below on the browser console to get the campaign identification. Alternatively, you're able to get a campaign identification by running the scraper app and entering a username when prompted.
> - The monthly pledge sum will not display if the owner of the page has their earnings set to private. It is recommended to set your earnings to public in order to be able to get the pledge sum.
> - Replace any text inside angle brackets with your own, usually '\<Username>' and or '\<ID>'. Don't forget to exclude the angle brackets, please do not include '<' or '>' once the text inside has been replaced.

## Console

### Campaign

```css
window.patreon.bootstrap.campaign.data.id
```

### Creator

```css
window.patreon.bootstrap.creator.data.id
```

## Scraper

### Install

```js
  npm i
```

### Start

```js
  npm start
```

## Badge

### Documentation

- [Shields](https://shields.io/#/endpoint)

- [Patreon](https://docs.patreon.com/#api-endpoints)

### Usage

- Endpoint
  - Decoded: `https://www.patreon.com/api/campaigns/<ID>`
  - Encoded: `https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F<ID>`

- Hypertext Markup Language (HTML)

  - Patron Count

    ```HTML
    <a href="https://patreon.com/<Username>"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F<ID>&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>
    ```

  - Pledge Sum

    ```HTML
    <a href="https://patreon.com/<Username>"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F<ID>&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20USD%20/%20MO&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>
    ```

- Markdown (MD)

  - Patron Count

    ```MD
    [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F<ID>&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/<Username>)
    ```

  - Pledge Sum

    ```MD
    [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F<ID>&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20USD%20/%20MO&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/<Username>)
    ```

### Example

- Endpoint
  - Decoded: [`https://www.patreon.com/api/campaigns/1839759`](https://www.patreon.com/api/campaigns/1839759)
  - Encoded: [`https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759`](https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759)

- Hypertext Markup Language (HTML)

  - Patron Count

    ```HTML
    <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>
    ```

    <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>

  - Pledge Sum

    ```HTML
    <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20USD%20/%20MO&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>
    ```

    <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20USD%20/%20MO&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>

- Markdown (MD)

  - Patron Count

    ```MD
    [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)
    ```

    [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)

  - Pledge Sum

    ```MD
    [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20USD%20/%20MO&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)
    ```

    [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20USD%20/%20MO&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)
