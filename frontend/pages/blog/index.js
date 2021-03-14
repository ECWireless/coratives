import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import { Fade } from 'react-reveal'
import client from '../../client'
import { colors, shadows } from '../../components/theme'

// Components
import Banner from '../../components/Banner'
import { Box3 } from '../../components/Boxes'
import { Container } from '../../components/Containers'
import Spacer from '../../components/Spacer'
import { H4, P4 } from '../../components/Typography'
import respondTo from '../../components/Breakpoints'

export default function Blog({ blogProps, posts }) {
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
                <Container>
                    <Spacer size={'sm'} />
                    <StyledCardsContainer>
                    {posts.map((post, index) => {
                        return (
                            <PostCard
                                key={index}
                                date={post.publishedAt}
                                image={post.mainImage}
                                index={index}
                                slug={post.slug}
                                title={post.title}
                            />
                        )
                    })}
                    </StyledCardsContainer>
                    <Spacer size={'md'} />
                </Container>
            </main>
        </div>
    )
}

const StyledCardsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const PostCard = ({
    date,
    image,
    slug,
    title,
}) => {
    return (
        <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
            <StyledCardContainer>
                <StyledCardPhoto style={{ backgroundImage: `url(${urlFor(image)})`}} />
                <Spacer size={'sm'} />
                <H4 center bold>{title}</H4>
                <Spacer size={'xs'} />
                <P4 center>{new Date(date).toDateString()}</P4>
            </StyledCardContainer>
        </Link>
    )
}

const StyledCardContainer = styled.div`
    background: ${colors.blueLight};
    border: 2px solid transparent;
    border-radius: 36px;
    box-shadow: ${shadows.card};
    box-sizing: border-box;
    min-height: 25rem;
    margin-bottom: 2rem;
    padding: 2rem 2rem;
    transition: all .3s ease;
    width: 100%;

    &:hover {
        border: 2px solid ${colors.yellow};
        box-shadow: ${shadows.buttonHover};
        cursor: pointer;
    }

    ${respondTo.xs`
        min-height: 29rem;
    `}

    ${respondTo.sm`
        min-height: 29rem;
        width: 28rem;

        &:not(:last-child) {
            margin-right: 2rem;
        }
    `}

    ${respondTo.md`
        min-height: 29rem;
        width: 25rem;
    `}

    ${respondTo.lg`
        min-height: 38rem;
        margin-bottom: 3rem;
        padding: 3rem 2rem;
        width: 38rem;

        &:not(:last-child) {
            margin-right: 3rem;
        }
    `}

    ${respondTo.xl`
        min-height: 55rem;
        padding: 4rem 3rem;
        width: 55rem;
    `}
`

const StyledCardPhoto = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    height: 13rem;
    width: 100%;

    ${respondTo.xs`
        height: 15rem;
    `}

    ${respondTo.sm`
        height: 13rem;
    `}

    ${respondTo.lg`
        border-radius: 36px;
        height: 20rem;
    `}

    ${respondTo.xl`
        height: 30rem;
    `}
`

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

export async function getServerSideProps() {
	const blogProps = await client.fetch(`*[_type == "blog" && slug.current == "v1"][0] {
		blogHeading,
	}`)
    const posts = await client.fetch(`*[_type == "post" && publishedAt < now()]|order(publishedAt desc)`)
	return {
	  props: { blogProps, posts },
	}
}
