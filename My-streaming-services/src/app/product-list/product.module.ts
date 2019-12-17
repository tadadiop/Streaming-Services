import { UseExistingWebDriver } from 'protractor/built/driverProviders';

export let products = [
    {
      name: 'Netflix',
      price: 10.99,
      description: 'Movies and shows streaming service',
      url: 'https://www.netflix.com/signup/planform',
      url1:'https://www.retailmenot.com/view/netflix.com',
      isEnable: false,
    },
    {
      name: 'Disney +',
      price: 6.99,
      description: 'Streaming service created by The Walt Disney Company',
      url: 'https://www.disneyplus.com/sign-up',
      url1:'https://www.disneyplus.com/welcome/disney-hulu-espn-bundle',
      isEnable: false,
    },
    {
      name: 'Apple Music',
      price: 9.99,
      description: 'Apple music streaming service',
      url: 'https://support.apple.com/en-us/HT204930',
      url1:'https://support.apple.com/en-us/HT205928',
      isEnable: false,
    },
    {
      name: 'Spotify',
      price: 10.99,
      description: 'Universal Music and podcast streaming service',
      url: 'https://www.spotify.com/us/signup/',
      url1:'https://www.spotify.com/us/student/',
      isEnable: false,
    }
  ];