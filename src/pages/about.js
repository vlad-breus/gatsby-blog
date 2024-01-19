import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About">
                <p>Hi there, my name is Vlad and this is my homepage.</p>
                <p>I'm working as a Data Scientist at Meta, 
                    love playing computer games, tennis and birdwatching.
                </p>
            </Layout>
        </main>
    )
}

export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  )

export default AboutPage