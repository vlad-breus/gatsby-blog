import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About">
            <h2>Hi, my name is Vlad</h2>
            <p>I'm from Orenburg, Russia, and currently based in London, UK. This website is my personal homepage, which includes my blog and some other (potentially) important thingies like my CV (in case you want to hire me for big bucks or get inspired in your career journey), among other bells and whistles.</p>

            <h3>My short bio</h3>
            <ul>
            <li><b>Born in Orenburg, Russia</b>: A nice town I enjoy visiting where life is calm but not much happens.</li>
            <li><b>Education</b>: Moved to Moscow for studies at the Financial University, majoring in Applied Mathematics in Economics for both my Bachelor's and Master's degrees.</li>
            <li><b>Career</b>: Worked as a data analyst, data scientist, and data handyman in various companies. (See my [CV](link-to-cv) for more details)</li>
            <li><b>Currently</b>: Living in London, planning to stay here for the foreseeable future.</li>
            </ul>

            <h3>My hobbies</h3>
            <ul>
            <li><b>Birdwatching</b>: Got passionate about it after the pandemic to reconnect with nature.</li>
            <li><b>Computer Games</b>: A lifelong hobby, though recently I have less time. I mostly play FC 24 (formerly FIFA ##).</li>
            <li><b>Football</b>: Love watching it and reconnected with this passion after moving to London. I occasionally watch games and once went to Wembley stadium to see a match.</li>
            <li><b>Piano</b>: Disliked it as a kid, but found joy in playing as a hobby during university (and realised you can impress your girlfriend with that, which was helpful motivation). I continue to learn new pieces at a lazy pace.</li>
            <li><b>Other Hobbies</b>: Tennis, gym, gardening, hiking, reading, pub outings with friends, and attending gigs (EDM, metal, hip-hop, classical, pop, you name it).</li>
            </ul>

            <p>I hope this blog is useful to you in some way. If you want to connect, my contacts are in the footer.</p>

            </Layout>
        </main>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage