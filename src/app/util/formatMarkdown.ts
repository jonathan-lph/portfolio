const LINK_REGEX = new RegExp('\\[([^\\]]+)\\]\\(([^\\)]+)\\)')

export default function formatMarkdown(text: string) {
  let result: Array<LinkObject | string> = []
  const splittedText = text.split(LINK_REGEX)
  for (let i = 0; i < splittedText.length; i++) {
    if (i % 3 === 0) {
      result.push(splittedText[i])
    } else if (i % 3 === 2) {
      result.push({
        text: splittedText[i - 1],
        href: splittedText[i],
      })
    }
  }
  return result
}

export type LinkObject = {
  text: string
  href: string
}
