import Head from '../../node_modules/next/head'
import { SubscrevButton } from '../components/SubscrevButton/index'
import { stripe } from '../service/index'

import styles from './home.module.scss'


interface HomeProps {
  product: {
    priceId: string,
    amount: number,

  }
}

export default function Home({product}) {
  return (
    <>
       <Head>
        <title>Inicio | ig.news</title>
      </Head>
      <main className={styles.ContentContainer}>
          <section className={styles.hero}>
            <span> 👏 Hey, Welcome  </span>
            <h1>News about the <span>React</span> world.</h1>
            <p>Get acess to all the publication <br /> 
              <span>for {product.amount} month</span>
            </p>
            <SubscrevButton />
          </section>
          <img src="/image/avatar.svg" alt="" />
      </main>
    </>
    
  )
}

export const getServerSideProps =async () => {

  const price = await stripe.prices.retrieve('price_1L80gQI5TYMON9ust9Kk7gwL', {

    expand: ['product']

  })

  const product  = {
    price_Id: price.id,
    amount: price.unit_amount / 100,



  } 

  return{
    props: {
      product,
    }
  }
  
}