import type { NextPage } from 'next'
import Head from 'components/head'
import styles from 'styles/modules/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head title="GweniSwap" description="Simple swap project to learn the basics" />
      <main className='lockup'>
        <p>lorem ipsum</p>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
