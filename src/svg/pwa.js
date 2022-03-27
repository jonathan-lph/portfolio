import clsx from "clsx";
import styles from "@styles/icon.module.sass"

export default function PWAIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={clsx(styles.root, className && className)}>
      <path d="M23.55,20.2l.93-2.34h2.66l-1.26-3.55,1.58-4,4.54,12H28.65l-.77-2.15ZM20.7,21.69l4.85-12H22.33L19,17.43,16.65,9.65H14.17l-2.54,7.78L9.85,13.88l-1.62,5,1.64,2.82H13l2.29-7,2.19,7ZM3.06,17.56H5a6.06,6.06,0,0,0,1.61-.2l.51-1.58,1.43-4.42a3.5,3.5,0,0,0-.37-.49A4.11,4.11,0,0,0,5,9.65H0v12H3.06Zm2.62-5.14a1.57,1.57,0,0,1,.43,1.16,1.64,1.64,0,0,1-.38,1.16,1.94,1.94,0,0,1-1.53.48H3.06V12H4.21A2,2,0,0,1,5.68,12.42Z" />
    </svg>
  )
}