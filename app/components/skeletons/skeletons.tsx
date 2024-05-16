import styles from "./skeletons.module.scss"

export function CardPostSkeleton() {
  return (
    <div className={styles.cardSkeletonWrapper}>
      <div className={styles.cardImgSkeleton}></div>
      <div className={styles.cardHeader}></div>
      <div className={styles.cardSubtitleSkeleton}></div>
      <div className={styles.cardBodySkeleton}></div>
      <div className={styles.cardCommentsSkeleton}>
        <div className={styles.cardProfileSkeleton}></div>
        <div className={styles.cardCommentSkeleton}></div>
      </div>
    </div>
  )
}

export function CardPostsSkeletons() {
  return(
    <>
      <CardPostSkeleton/>
      <CardPostSkeleton/>
      <CardPostSkeleton/>
      <CardPostSkeleton/>
      <CardPostSkeleton/>
      <CardPostSkeleton/>
    </>
  )
}