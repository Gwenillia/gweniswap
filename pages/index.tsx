import type { NextPage } from 'next'
import GenericHead from 'components/genericHead'
import Header from 'components/header'
import styles from 'styles/modules/Home.module.css'

const Home: NextPage = () => {

  return (
    <>
      <GenericHead title="GweniSwap" description="Simple swap project to learn the basics" />
      <Header />
      <main className='lockup'>
        <p>lorem ipsum</p>
      </main>
      <footer className={styles.footer}>
      </footer>
    </>
  )
}

export default Home
