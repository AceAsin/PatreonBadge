# Patreon Badge

<a href="https://heroku.com/deploy?template=https://github.com/AceAsin/PatreonBadge"><image src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy"> </a>

<!-- [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/AceAsin/PatreonBadge) -->

## Attention

---

### Note

- Important

  ```TXT
  For usage, replace any text inside angle brackets with your own, usually '<Username>' and or '<ID>'. Don't forget to exclude the angle brackets, please do not include '<' or '>' once the text inside has been replaced.
  ```

- Heroku API

  ```TXT
  I recommend to host your own version of this repository on your Heroku account if you want the app to be on 24/7. It is hosted on a free account, so at the end of each month it will probably not be online due to usage, since a free account with a credit/debit card attached for billing can only get up to 1000 hours/month. I can also turn it off at any given time that I wish for.
  ```

- Patreon API

  ```TXT
  You will need to get your campaign <ID> in order to use the second method, which utilizes Patreon's Official API. You are also not able to get the monthly pledge sum if your earnings are set to private, and instead will be welcomed with an error message. It is recommended to set your earnings to public in order to be able to get the pledge sum.
  ```

  ```TXT
  The second method is easier and more flexible if you want to change the prefix and suffix on the fly, without having to update any files, only the dynamic badge url. You also don't have to setup anything in advance, like host your own endpoint.
  ```

  ```TXT
  The second method is also more consistant and reliable, since if hosting on Heroku, web apps love to go to sleep after a while. If nobody is using or going into a page that utilizes the app, then it will fall asleep. You might notice that if hosting the app after a while when you visit your page, it will not display the badge, due to the app falling asleep, but reloading the page will display it, since the app has been awoken from a recent visit.
  ```

## Help

---

### Identification

1. `To get your campaign <ID>, you will need to go to your Patreon page.`
2. `Type <CTRL + SHIFT + I> on your keyboard, or right click and then left click <Inspect> section, which will open up the inspect panel.`
3. `It will show a few tabs near the top, you want to click on <Sources>`
4. `It will then bring up 2 more additional tabs, make sure you're on the <Page> tab. Go into directory <top/www.patreon.com/Username>, you will see your specific username, click on your name to bring up the HTML file if not already on it.`
5. `You want to find query string <creator.id>, which is under a <script> tag and <window.patreon.bootstrap>, on line <220> for me, it might be a bit off for you.`

### Username

1. `Your Patreon account page <Username>.`

## Documentation

---

- Shields
  > Please visit [shields](https://shields.io/#/endpoint) for full documentation on endpoint usage.

- Patreon
  > Please visit [patreon](https://docs.patreon.com/#api-endpoints) for full documentation on endpoint usage.

## Heroku API

---

### Endpoint

- Decoded: `https://aceasin-patreon.herokuapp.com/<Username>`
- Encoded: `https%3A%2F%2Faceasin-patreon.herokuapp.com%2F<Username>`

### Usage

- Hypertext Markup Language (HTML)

  ```html
  <a href='https://patreon.com/<Username>' title='Patreon'><img src='https://img.shields.io/endpoint?url=https%3A%2F%2Faceasin-patreon.herokuapp.com%2F<Username>&color=FF5441&label=Patreon&logo=Patreon&logoColor=FFFFFF&style=for-the-badge'alt="Patreon"/> </a>
  ```

- Markdown (MD)

  ```md
  [![Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Faceasin-patreon.herokuapp.com%2F<Username>&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/<Username>)
  ```

### Example

- Patron Count

  ```HTML
  <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Faceasin-patreon.herokuapp.com%2FAceAsin&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>
  ```

  <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Faceasin-patreon.herokuapp.com%2FAceAsin&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>

  ```MD
  [![Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Faceasin-patreon.herokuapp.com%2FAceAsin&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)
  ```

  [![Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Faceasin-patreon.herokuapp.com%2FAceAsin&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)

- Pledge Sum

  ```HTML
  <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Faceasin-patreon.herokuapp.com%2FAceAsin%2Fpledges&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"/> </a>
  ```

  <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Faceasin-patreon.herokuapp.com%2FAceAsin%2Fpledges&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"/> </a>

  ```MD
  [![Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Faceasin-patreon.herokuapp.com%2FAceAsin%2Fpledges&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)
  ```

  [![Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Faceasin-patreon.herokuapp.com%2FAceAsin%2Fpledges&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)

## Patreon API

---

### Endpoint

- Decoded: `https://www.patreon.com/api/campaigns/<ID>`
- Encoded: `https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F<ID>`

### Usage

- Hypertext Markup Language (HTML)

  ```html
  <a href='https://patreon.com/<Username>' title='Patreon'><img src='https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F<ID>&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge' alt="Patreon"/> <a/>
  ```

- Markdown (MD)

  ```md
  [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F<ID>&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/<Username>)
  ```

### Example

- Patron Count

  ```HTML
  <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>
  ```

  <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>

  ```MD
  [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)
  ```

  [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)

- Pledge Sum

  ```HTML
  <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20USD%20/%20MO&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>
  ```

  <a href="https://patreon.com/AceAsin"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20USD%20/%20MO&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge" alt="Patreon"> </a>

  ```MD
  [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20USD%20/%20MO&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)
  ```

  [![Patreon](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F1839759&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20USD%20/%20MO&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/AceAsin)
