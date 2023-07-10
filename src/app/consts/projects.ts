import type { ProjectObject } from '@/app/types/project'

export const projects : ProjectObject[] = [{
  name: "Stocker",
  type: "Commision",
  categories: [
    "Web Development",
    "UI/UX Design",
    "Branding",
    "Data Manipulation"
  ],
  redacted: false,
  year_short: "2021",
  year_long: "2021 Dec",
  client: "NANI Studio Limited",
  tech_stack: [
    "Next.js",
    "Sass",
    "Jest",
    "Chart.js",
    "Firebase",
    "Stripe",
    "RevenueCat",
    "Yahoo Finance",
    "Binance",
    "Google RSS",
  ],
  description: "Stocker is a stock and cryptocurrency portfolio management system that aims to provide real-time data and statistics to users with stocks in different regions, helping them make data-driven decision. All data are stored in cloud for easy access and synchronized over the website and mobile application. Currently it has over 2000 daily active users with around 45% subscribed to Stocker's premium plans.",
  website_url: "https://dashboard.stocker.nanistudio.org",
  github_url: null,
  previews: [
    "stocker/stocker_1.png",
    "stocker/stocker_2.png",
    "stocker/stocker_3.png",
    "stocker/stocker_4.png",
    "stocker/stocker_5.png",
    "stocker/stocker_6.png"
  ]  
}, {
  name: "The Sharing Kindness Game",
  type: "Commision",
  categories: [
    "Web Development",
    "UI/UX Design",
    "Branding"
  ],
  redacted: false,
  year_short: "2023",
  year_long: "2023 Jun",
  client: "Sharing Kindness",
  tech_stack: [
    "Next.js",
    "Sass",
    "Firebase",
    "PWA",
  ],
  description: "Following the success of their acclaimed affirmation cards and advent calendar, Sharing Kindness is releasing the Sharing Kindness game - a card game for children and families to build a more positive mindset and be more grateful. The project was funded by over 100 people to a total of around AU$11,000. The online version is soon developed and released to make the game more accessible.",
  website_url: "https://game.sharingkindness.com",
  github_url: null,
  previews: [
    "tskg/tskg_1.png",
    "tskg/tskg_2.png",
    "tskg/tskg_3.png",
  ]
}, {
  name: "my little airport",
  type: "Personal",
  categories: [
    "Website Development",
    "UI/UX Design",
    "Open Source"
  ],
  redacted: false,
  year_short: "2023",
  year_long: "2023 May",
  client: null,
  tech_stack: [
    "Next.js",
    "Sass",
    "MongoDB",
    "TypeScript"
  ],
  description: "my little airport is an indie pop band based in Hong Kong. Since 2004, the two core members Ah-P Lam and Nicole Au have published over 11 albums along with numerous singles and EPs, with topic ranging from love stories of the ordinaries to political events. This website acts as a database of all their musical publications and a supplement to their official website mylittleairport.com. It is dedicated to this soon-to-be 20-years-old band - a personal favourite of mine.",
  website_url: "https://mylittleairport.app",
  github_url: "https://github.com/jonathan-lph/mylittleairport",
  previews: [
    "mla/mla_1.png",
    "mla/mla_2.png",
    "mla/mla_3.png",
    "mla/mla_4.png",
    "mla/mla_5.png",
  ],
}, {
  name: "LukHap",
  type: "Personal",
  categories: [
    "Game Development",
    "Open Source"
  ],
  redacted: false,
  year_short: "2022",
  year_long: "2022 Jan",
  client: null,
  tech_stack: [
    "Next.js",
    "Sass"
  ],
  description: "LukHap is a JyutPing word game - a unique take of the popular English word game Wordle on the Cantonese (Yue Chinese) romanisation system. It has a familiar interface customized to fit the Cantonese syntax, allowing users practise JyutPing daily in a fun and engaging way. The game is also open-sourced and encourage developers to make suitable adjustments and create a similar game for their language.",
  website_url: "https://lukhap.jonathanl.dev",
  github_url: "https://github.com/jonathan-lph/lukhap",
  previews: [
    "lukhap/lukhap_1.png",
    "lukhap/lukhap_2.png",
    "lukhap/lukhap_3.png",
    "lukhap/lukhap_4.png",
    "lukhap/lukhap_5.png",
  ]
}, {
  name: "WRNS Online",
  type: "Personal",
  categories: [
    "Website Development",
    "UI/UX Design",
    "Open Source"
  ],
  redacted: true,
  year_short: "2022",
  year_long: "2022 Feb",
  client: null,
  tech_stack: [
    "Next.js",
    "Sass",
    "Firebase",
    "PWA"
  ],
  description: "We're Not Really Strangers Online is an adaptation of the popular conversation card game of the same name. Initially released in 2021 May, the game was revamped for version 2 in 2022 Feb with brand new features such as seeded randomizer, theme customization, and player inputs to encourage meaningful conversations anytime anywhere. The app was well-received and its GitHub repository gained 100+ stars and 50+ forks before it was discontinued on 2022 Jun.",
  website_url: null,
  github_url: null,
  previews: [
    "wnrs/wnrs_1.png",
    "wnrs/wnrs_2.png",
    "wnrs/wnrs_3.png",
    "wnrs/wnrs_4.png",
    "wnrs/wnrs_5.png",
    "wnrs/wnrs_6.png",
  ]
}, {
  name: "YY Tutorial",
  type: "Commision",
  categories: [
    "Backend Development",
    "System Design"
  ],
  redacted: false,
  year_short: "2023",
  year_long: "2023 May",
  client: "YY Tutorial",
  tech_stack: [
    "Node.js",
    "Express",
    "TypeScript",
    "Firebase",
    "Stripe",
    "Zoom",
    "Google Calendar",
    "SendGrid"
  ],
  description: "In light of the increase of remote and online tutorial sessions, YY Tutorial aims to provide a platform to facilitate the connection between tutors and students. Not only does it include booking and scheduling system for managing sessions between clients, but it also has a built in video conferencing system (built with Zoom SDK) and real-time chatboxes for all communication needs.",
  website_url: null,
  github_url: null,
  previews: [
    "yytutorial/yytutorial_1.png"
  ],
// }, {
//   name: "Portfolio ver.2",
//   type: "Personal",
//   categories: [
//     "Website Development",
//     "UI/UX Design",
//     "Open Source"
//   ],
//   redacted: false,
//   year_short: "2023",
//   year_long: "2023 Jul",
//   client: null,
//   tech_stack: [
//     "Next.js 13",
//     "Sass",
//     "TypeScript"
//   ],
//   description: "",
//   website_url: "https://jonathanl.dev",
//   github_url: "https://github.com/jonathan-lph/portfolio",
//   previews: [],
}]