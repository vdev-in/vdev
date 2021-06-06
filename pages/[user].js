import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home({user}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{user.displayName}</h1>
      <h1>{user.email}</h1>
      <p>{user.userdata_id.bio}</p>
      <img src={user.imgurl} alt="user"/>

    </div>
  )
}


export async function getServerSideProps({params}){
  const req = await axios.get(`/user/${params.user}`)
  const data =req.data
  return{
    props:{user : data}
  }
}