export const projects = [{
  name: 'Stocker',
  date: ['2021.12', '2021.07'],
  desc: 'Stock and cryptocurrency portfolio management system with real-time data. Revamped to provide cleaner layout, chart supports, and more.',
  link: [
    'dashboard.stocker.nanistudio.org',
    'stocker.nanistudio.org'
  ],
  source: [
    null,
    null
  ],
  images: [
    'overview',
    'stock',
    'watchlist',
    'watchlist_stock',
    'settings',
    'ticket',
  ],
  preview: 'stocker_v2',
  image_dir: 'stocker',
  tech: [
    [
      'nextjs-plain-wordmark',
      'sass-original',
      'firebase-plain',
    ],
    [
      'nextjs-plain-wordmark',
      'materialui-plain',
      'firebase-plain'
    ]
  ],
  features: [{
    title: 'Real-time Data',
    desc: "Stocker fetches real-time data for stocks and cryptocurrencies over trusted platforms and cross-references the data to ensure they are correct. It supports multiple currencies with up-to-date conversion rates, allowing users to access and manage their stocks transactions from different bourses and nations within one portfolio."
  }, {
    title: 'Multiple Metrics',
    desc: "Stocker uses a vigorous calculation algorithm, aided with multiple indexes and news feed, to provide useful metrics and graphs to our users. Not only can they access to their portfolios and their corresponding performance, they can also monitor and compare favourable stocks in their watchlist. Additional features are provided for our VIP members to further evaluate their trading performace."
  }, {
    title: 'Cross-platform Support',
    desc: 'Stocker is avaliable on webpage, iOS App Store, and Google Play Store. With a single account, users can access their portfolio and subscription plans across all platforms. All data can be uploaded to database for storage and downloads; or, if users prefer instantaneous update between devices, synchronization are also supported for easy usage.'
  }, {
    title: 'Community and Technical Support',
    desc: 'We value the feedback made by our users. Aside from constantly updating Stocker and lauching new features for our users, we utilize the in-app forum and external discussion threads to ensure their problems and suggestions are heard and dealed with within a short timeframe. Users can also report and track both their privately or publicly visible issues over our custom-made ticket system.'
  }]
}, {
  name: 'WNRS Online',
  date: ['2022.02', '2021.05'],
  desc: "Online adaptation of the conversation card game We're Not Really Strangers. Revamped to include seeded randomizer, theme customization, and more.",
  link: [
    'wnrs.jonathanl.dev',
    null,
  ],
  source: [
    'github.com/jonathan-lph/wnrs/tree/v2',
    'github.com/jonathan-lph/wnrs/tree/main'
  ],
  images: [
    'layout',
    'theme',
    'dialog',
  ],
  image_dir: 'wnrs',
  preview: 'wnrs_v2',
  tech: [
    [
      'nextjs-plain-wordmark',
      'sass-original',
      'firebase-plain',
      'pwa'
    ],
    [
      'react-original',
      'materialui-plain',
      'pwa'
    ],
  ],
  features: [{
    title: 'Portable and Downloadable',
    desc: "WNRS Online contains most of the avaliable decks and expansions published by the official We're Not Really Strangers. With one person or more people in the party, you can download this PWA in your phone and start connecting to people anywhere and anytime."
  }, {
    title: 'Seeded Randomizer',
    desc: 'Revamped from version 1, version 2 now includes seeded randomizer. A link or a seed may be shared to your companions to ensure each cards are randomly shuffled yet consistent over different sessions and devices. This opens the possibility to remote playing over the phone without the need of sharing screens.'
  }, {
    title: 'Customization',
    desc: 'Revamped from version 1, version 2 now allows users to input their name. You will never get lost in the deep conversation now that all turns and cards are labeled. Themes are also now customizable and does not correlate to the playing decks.'
  }]
}, {
  name: 'Luk Hap',
  date: ['2022.01'],
  desc: 'Word game for promoting and practising JyutPing, the Cantonese romanisation system. Adapted from the popular word game Wordle to Next.JS.',
  link: ['lukhap.jonathanl.dev'],
  source: ['github.com/jonathan-lph/LukHap'],
  images: ['layout', 'info', 'guide'],
  image_dir: 'lukhap',
  preview: 'lukhap',
  tech: [
    [
      'nextjs-plain-wordmark',
      'sass-original',
    ]
  ],
  features: [{
    title: 'Standardized JyutPing',
    desc: 'To allow users learn the most popular and standardized Cantonese romanisation system, Luk Hap uses JyutPing for the game. The gameplay is greatly modified from the original game Wordle to provide a challenging yet informational experience.'
  }, {
    title: 'Follow-up learning',
    desc:  'No matter the level or knowledge of your skill in JyutPing, Luk Hap offers multiple sources and guides for you to learn and practise this system. It is also open source and welcome feedbacks to continualy improving the game.'
  }]
}]