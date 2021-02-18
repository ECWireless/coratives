import Head from 'next/head'
import { Fade } from 'react-reveal'
import client from '../client'
import { colors } from '../components/theme'

// Components
import Banner from '../components/Banner'
import { Box3 } from '../components/Boxes'
import { Container } from '../components/Containers'
import Spacer from '../components/Spacer'
import { H2 } from '../components/Typography'

export default function Blog({ blogProps }) {
    // Props
    const {
        blogHeading
    } = blogProps

    return (
        <div>
            <Head>
				<title>Blog | Coratives | United States</title>
			</Head>
            <main style={{ background: colors.blue }}>
                <Box3 paddingTop={100} paddingBottom={75}>
                    <Banner
                        heading={blogHeading}
                        textColor={colors.grey}
                        line1Color={colors.yellow}
                        line2Color={colors.white}
                    />
                </Box3>
                <Container style={{ height: '60vh'}}>
                    <Spacer size={'md'} />
                    <Fade delay={400} ssrFadeout>
                        <H2 center color={colors.grey}>Blog coming soon!</H2>
                    </Fade>
                </Container>
            </main>
        </div>
    )
}

export async function getStaticProps() {
	const blogProps = await client.fetch(`*[_type == "blog" && slug.current == "v1"][0] {
		blogHeading,
	}`)
	return {
	  props: { blogProps },
	}
}
