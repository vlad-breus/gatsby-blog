import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

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

export const Head = () => <Seo title="About Me" />

export default AboutPage