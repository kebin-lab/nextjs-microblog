import Head from "next/head";
import Image from "next/image";
import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "shibattyo";
export const siteTitle = "Next.js blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/rocket.png"
              alt="rocket"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/rocket.png"
              alt="rocket"
              className={`${utilStyles.borderCircle} ${styles.headerImage}`}
            />
            <h1>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>⇦ホームへ戻る</a>
          </Link>
        </div>
      )}
    </div>
  );
}
