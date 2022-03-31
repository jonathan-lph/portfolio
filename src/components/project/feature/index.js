import styles from './styles.module.sass'

export default function Features({ image_dir, features, images }) {

  return (
    <main className={styles.root}>
      <div className={styles.gallery}>
        {images.map(image =>
          <img
            src={`/image/${image_dir}/${image}.png`}
            key={image}
          />
        )}
      </div>
      <div className={styles.features}>
        {features.map(({ title, desc }) =>
          <div className={styles.feature} key={title}>
            <h2>{title}</h2>
            <p>
              {desc}
            </p>
          </div>  
        )}
      </div>
    </main>
  )
}