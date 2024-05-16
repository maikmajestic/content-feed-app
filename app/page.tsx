import { Suspense } from "react";
import { CardPostsSkeletons } from "./components/skeletons/skeletons";
import styles from "./page.module.css";
import CardsWrapper from "./components/cardPost/cardsWrapper";

export default async function Page() {
  return (
    <div className="feed-container">
      <div className={styles.feedWrapper}>
        <Suspense fallback={<CardPostsSkeletons />}>
          <CardsWrapper/>
        </Suspense>
      </div>
    </div>
  );
}
