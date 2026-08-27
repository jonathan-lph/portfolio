import type { ProjectCardLinks } from '../components/ProjectCard/ProjectCard'

export type Project = {
  title: string
  description: string
  tags: string
  date: string
  links: ProjectCardLinks
}

export const projects: Project[] = [
  {
    title: "We're Not Really Strangers Online",
    description:
      "We're Not Really Strangers Online is an adaptation of the popular conversation card game of the same name. Initially released in 2021 May, the game was revamped for version 2 in 2022 Feb with brand new features such as seeded randomiser, theme customisation, and player inputs to encourage meaningful conversations anytime anywhere. The app was well-received and its GitHub repository gained 100+ stars and 50+ forks before it was discontinued on 2022 Jun.",
    tags: 'Web, UI/UX Design, Games, Open Source',
    date: 'Feb 2022',
    links: {},
  },
  {
    title: 'my little airport',
    description:
      'my little airport is an indie pop band based in Hong Kong. Since 2004, the two core members Ah-P Lam and Nicole Au have published over 11 albums along with numerous singles and EPs, with topic ranging from love stories of the ordinaries to political events. This website acts as a database of all their musical publications and a supplement to their official website mylittleairport.com. It is dedicated to this soon-to-be 20-years-old band - a personal favourite of mine.',
    tags: 'Web, UI/UX Design, Catalogue, Open Source',
    date: 'May 2023',
    links: {
      website: 'https://mylittleairport.app/',
      github: 'https://github.com/jonathan-lph/mylittleairport',
    },
  },
  {
    title: 'Stocker',
    description:
      "Stocker is a stock and cryptocurrency portfolio management system that aims to provide real-time data and statistics to users with stocks in different regions, helping them make data-driven decision. All data are stored in cloud for easy access and synchronised over the website and mobile application. As of Mar 2026, it has over 2500 daily active users with around half subscribed to Stocker's premium plans.",
    tags: 'Web, UI/UX Design, Branding, Data Processing',
    date: 'NANI Studio Limited, Feb 2022',
    links: { website: 'https://dashboard.stocker.nanistudio.org/' },
  },
  {
    title: 'LukHap 六合',
    description:
      'LukHap is a JyutPing word game - a unique take of the popular English word game Wordle on the Cantonese (Yue Chinese) romanisation system. It has a familiar interface customized to fit the Cantonese syntax, allowing users practise JyutPing daily in a fun and engaging way. The game is also open-sourced and encourage developers to make suitable adjustments and create a similar game for their language.',
    tags: 'Game Development, Open Source',
    date: 'Jan 2022',
    links: {
      website: 'https://lukhap.jonathanl.dev/',
      github: 'https://github.com/jonathan-lph/lukhap',
    },
  },
  {
    title: 'The Sharing Kindness Game',
    description:
      'Following the success of their acclaimed affirmation cards and advent calendar, Sharing Kindness is releasing the Sharing Kindness game - a card game for children and families to build a more positive mindset and be more grateful. The project was funded by over 100 people to a total of around AU$11,000. The online version is soon developed and released to make the game more accessible.',
    tags: 'Web, UI/UX Design, Branding',
    date: 'Jun 2023',
    links: { website: 'https://game.sharingkindness.com/' },
  },
]
