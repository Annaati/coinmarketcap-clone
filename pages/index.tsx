import Header from '../components/Header'
import Trending from '../components/Trending'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header/>
      <div className='mt-10' />
      <Trending/>
      <div className='mt-20' />
    </div>
  )
}

export default Home
