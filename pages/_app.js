import 'tailwindcss/tailwind.css'
import axios from 'axios';
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL
  return <div>
    <Nav />
    <Component {...pageProps} />
  </div>
}

export default MyApp