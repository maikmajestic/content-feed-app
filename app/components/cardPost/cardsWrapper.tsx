import { fetchContent } from "@components/app/lib/data"
import { Card } from "./cardPost"
import Image from "next/image"
import styles from "./cardPost.module.scss"

export default async function CardsWrapper() {
  const { data, error } = await fetchContent()

  /* if(data && data.length < 3) { // testing error boundary
    throw new Error("Something went wrong with fetching data")
  } */

  if (error || data?.length === 0) {
    return (
      <div className={styles.emptyScreen}>
        <Image
          src="/no-data.png"
          alt="Something went wrong"
          width={100}
          height={100}
        />
        {error ? error : "No data found"}
      </div>
    )
  }

  return <Card data={data} />
}
