import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { env } from '../utils';

export default function Home() {
  console.log('NEXT_PUBLIC_ENV_VARIABLE:', env("NEXT_PUBLIC_ENV_VARIABLE"))

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next app</title>
        <link rel="icon" href="/favicon.ico" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/__env.js" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> on Docker Compose!
        </h1>

        <p className={styles.description}>
          Example using <a href="https://github.com/expatfile/next-runtime-env">next-runtime-env</a> with Docker Compose to load environment variables at runtime
        </p>

        <div className={styles.code}>
          <p>NEXT_PUBLIC_ENV_VARIABLE: {env("NEXT_PUBLIC_ENV_VARIABLE") || <span className={styles.text_red}>undefined</span>}</p>
        </div>
      </main>
    </div>
  )
}
