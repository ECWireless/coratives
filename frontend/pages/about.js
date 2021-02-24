import Head from 'next/head'
import { Fade } from 'react-reveal'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import respondTo from '../components/Breakpoints'
import { colors, shadows } from '../components/theme'

// Components
import Banner from '../components/Banner'
import { Box3 } from '../components/Boxes'
import { Container } from '../components/Containers'
import Spacer from '../components/Spacer'
import { P2Block } from '../components/Typography'

export default function About({ aboutProps }) {
    // Props
    const {
        aboutHeading,
        aboutPhoto,
        aboutDescription
    } = aboutProps

    return (
        <div>
            <Head>
				<title>About | Coratives | United States</title>
			</Head>
            <main style={{ background: colors.blue }}>
                <Box3 paddingTop={100} paddingBottom={75}>
                    <Banner
                        heading={aboutHeading}
                        textColor={colors.grey}
                        line1Color={colors.yellow}
                        line2Color={colors.white}
                    />
                </Box3>
                <Fade delay={400} ssrFadeout>
                    <Container>
                            <StyledAboutPhoto style={{ backgroundImage: `url(${urlFor(aboutPhoto)})`}} />
                            <StyledAboutTextContainer>
                                <P2Block>
                                    <BlockContent
                                        blocks={aboutDescription}
                                    />
                                </P2Block>
                            </StyledAboutTextContainer>
                        <Spacer size={'lg'} />
                    </Container>
                </Fade>
            </main>
        </div>
    )
}

const StyledAboutPhoto = styled.div`
    position: relative;
    background-position: top;
    background-size: cover;
    border: 2px solid ${colors.grey};
    border-radius: 50%;
    height: 14rem;
    margin: 0 auto;
    width: 14rem;
    z-index: 2;

    ${respondTo.xs`
        height: 20rem;
        width: 20rem;
    `}

    ${respondTo.sm`
        height: 25rem;
        width: 25rem;
    `}

    ${respondTo.md`
        height: 30rem;
        width: 30rem;
    `}

    ${respondTo.xl`
        height: 40rem;
        width: 40rem;
    `}
`

const StyledAboutTextContainer = styled.div`
    background: ${colors.blueLight};
    border-radius: 36px;
    box-shadow: ${shadows.card};
    box-sizing: border-box;
    margin-top: -7rem;
    padding: 10rem 4rem 6rem;
    width: 100%;
    z-index: 1;

    ${respondTo.xs`
        margin-top: -10rem;
        padding: 15rem 5rem 8rem;
    `}

    ${respondTo.sm`
        margin-top: -12rem;
        padding: 15rem 10rem 10rem;
    `}

    ${respondTo.md`
        margin-top: -15rem;
        padding: 20rem 10rem 10rem;
    `}

    ${respondTo.lg`
        margin-top: -15rem;
        padding: 20rem 25rem 10rem;
    `}

    ${respondTo.xl`
        margin-top: -20rem;
        padding: 25rem 35rem 15rem;
    `}
`

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

export async function getServerSideProps() {
	const aboutProps = await client.fetch(`*[_type == "about" && slug.current == "v1"][0] {
		aboutHeading,
        aboutPhoto,
        aboutDescription,
	}`)
	return {
	  props: { aboutProps },
	}
}
