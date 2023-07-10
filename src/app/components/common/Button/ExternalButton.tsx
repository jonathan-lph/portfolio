import clsx from "clsx"
import styles from "./ExternalButton.module.sass"
import { type AvalIcon, Icon } from "@components/common"

export default function ExternalButton({
  children,
  href,
  icon = "arrow_outward",
  iconFirst = false,
  className,
  ...props
}: ExternalButtonProps): JSX.Element {
  return (
    <a href={href} target="_blank" className={clsx({
      [styles.root]: true,
      [styles.iconFirst]: iconFirst,
      [className]: className
    })} {...props}>
      {!iconFirst && children}
      <Icon icon={icon}/>
      {iconFirst && children}
    </a>
  )
}

interface ExternalButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string,
  href: string,
  icon?: AvalIcon,
  iconFirst?: boolean
  className?: any
}