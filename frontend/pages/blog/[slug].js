import Head from 'next/head'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import { colors } from '../../components/theme'

// Components
import Banner from '../../components/Banner'
import { Box3 } from '../../components/Boxes'
import { Container } from '../../components/Containers'
import Spacer from '../../components/Spacer'
import { P2Block } from '../../components/Typography'
import respondTo from '../../components/Breakpoints'

export default function Blog({ postProps }) {
    const {
        title,
        publishedAt,
        body,
        mainImage,
    } = postProps

    return (
        <div>
            <Head>
				<title>{title} | Coratives | United States</title>
			</Head>
            <main style={{ background: colors.blueLight }}>
                <Box3 paddingTop={100} paddingBottom={75}>
                    <Banner
                        heading={title}
                        subheading={new Date(publishedAt).toDateString()}
                        textColor={colors.grey}
                        line1Color={colors.black}
                        line2Color={colors.yellow}
                    />
                </Box3>
                <Container>
                    <Spacer size={'sm'} />
                    <Fade delay={400} ssrFadeout>
                        <MainImage style={{ backgroundImage: `url(${urlFor(mainImage)})`}} />
                        <Spacer size={'md'} />
                        {body && <P2Block color={colors.black}>
                            <BlockContent
                                blocks={body}
                            />
                        </P2Block>}
                    </Fade>
                    <Spacer size={'md'} />
                </Container>
            </main>
        </div>
    )
}

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

export async function getServerSideProps(context) {
    const { slug = "" } = context.query
	const postProps = await client.fetch(`*[_type == "post" && slug.current == $slug][0] {
		title,
        publishedAt,
        body,
        mainImage,
	}`, { slug })
	return {
	  props: { postProps },
	}
}

const MainImage = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 20rem;
    width: 100%;

    ${respondTo.xs`
        height: 25rem;
    `}

    ${respondTo.sm`
        height: 30rem;
    `}

    ${respondTo.md`
        height: 40rem;
    `}

    ${respondTo.lg`
        height: 60rem;
    `}

    ${respondTo.xl`
        height: 80rem;
    `}
`
