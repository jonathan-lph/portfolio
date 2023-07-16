import { AvalIcon } from "../components/common/Icon/Icon"

export const about : {
  name: string,
  title: string,
  about: string,
  links: {
    type: string
    icon: AvalIcon,
    href: string
  }[],
  cv: string
} = {
  name: "Jonathan Lam",
  title: "Front-End Developer",
  about: "Born in Hong Kong and now based in London, UK. Currently working as a freelance front-end developer.\nPartnering with clients and listening to their stories, I firmly believe web development can be a powerful and versatile tool to materialise our visions. I am honored to have created web applications such as [the Sharing Kindness Game](https://game.sharingkindness.com/) and [WNRS Online](https://www.reddit.com/r/cardgames/comments/nf47ps/were_not_really_strangers_online/) - projects that are actively making a positive impact in the world. From UI/UX design, front-end development, to back-end development, I am constantly expanding my skillset to deliver the most suitable and perfect web solutions to my clients.\nIn my free time, I enjoy organizing and creating websites and documents for, say, [my favourite band](https://mylittleairport.app) and [my favourite boardgame](https://docs.google.com/document/d/1i9-zyuA2z-E-dSrg2cQv4xyPBnzT9YnMbNxw1HDCv_o/edit). I also do some [light scripting](https://steamcommunity.com/id/jonathanlph/myworkshopfiles/) in Tabletop Simulator - a sandbox for playing boardgames.",
  links: [{
    type: 'GitHub',
    icon: 'github',
    href: 'https://github.com/jonathan-lph'
  }, {
    type: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://linkedin.com/in/jonathan-lph'
  }, {
    type: 'Email',
    icon: 'email',
    href: 'mailto:jonathan.lph98@gmail.com'
  }, {
    type: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/jonathan.lph/'
  }],
  cv: '/jonathan_lam_resume.pdf'
}