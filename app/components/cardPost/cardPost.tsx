"use client"
import { useState } from "react"
import { ContentCard } from "@components/app/lib/definitions"
import Image from "next/image"
import clsx from "clsx"
import styles from "./cardPost.module.scss"
import { getFormattedDate } from '../../lib/utils';

export function Card({ data }: { data: ContentCard[] | null }) {
  const [showAllTextStates, setShowAllTextStates] = useState<boolean[]>(
    Array(data?.length).fill(false)
  )

  const toggleShowAllText = (index: number) => {
    setShowAllTextStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    )
  }

  return (
    <>
      {data?.map((card, index) => (
        <div key={card.id} className={styles.cardPostWrapper}>
          <Image
            className={styles.cardPostImg}
            alt={card.textData.title}
            src={card.imageUri}
            width={100}
            height={100}
            priority
          />
          <div className={styles.cardPostTextContainer}>
            <div className={styles.cardPostHeader}>
              <h3 className={styles.cardPostTitle}>{card.textData.title}</h3>
              <p className={styles.cardPostAuthor}>
                {card.textData.author.first + " " + card.textData.author.last}
              </p>
            </div>
            <div className={styles.cardPostHeader}>
              <p className={styles.cardPostSubtitle}>{card.textData.subTitle}</p>
              <p className={styles.cardPublishDate}>{getFormattedDate(card.metadata.publishDate)}</p>
            </div>
            <div className={styles.cardPostBodyContainer}>
              <h4
                className={clsx(styles.cardPostBody, {
                  [styles.showMore]: !showAllTextStates[index],
                  [styles.showAll]: showAllTextStates[index],
                })}>
                {card.textData.body}
                <button
                  className={styles.showMoreButton}
                  onClick={() => toggleShowAllText(index)}>
                  {!showAllTextStates[index] ? "more" : "less"}
                </button>
              </h4>
            </div>
          </div>
          <div className={styles.cardPostCommentsWrapper}>
            {card.comments.map((comment, index) => (
              <div key={index} className={styles.cardPostCommentContainer}>
                <Image
                  className={styles.commentProfilePic}
                  src={comment.profilePic}
                  alt={comment.author}
                  width={20}
                  height={20}
                />
                <div className={styles.commentTextContainer}>
                  <p className={styles.commentAuthor}>{comment.author}</p>
                  <p className={styles.commentBody}>{comment.text}</p>
                </div>
                <div className={styles.likesWrapper}>
                  <span className={styles.likes}>&#10084;</span>
                  <p className={styles.likesCount}>{comment.likes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
