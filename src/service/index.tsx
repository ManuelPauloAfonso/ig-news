import Stripe from '../../node_modules/stripe/lib/stripe'


export const stripe = new Stripe(
    process.env.STRIPE_API_ENV, 
    {
        apiVersion: '9.6.0',
        appInfo: {
            name: 'ig.news',
            version: '1.0.0',


        },
    }
)
