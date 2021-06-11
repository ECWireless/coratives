import { useState } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import '../styles/globals.css'


// Components
import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
	const [sidebar, setSidebar] = useState(false)

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/favicon.ico" />

				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Behind every corporate idea is a creative. Coratives provides services in public relations, marketing, and sales enablement for businesses."
				/>
				<meta property="og:title" content="Coratives | Public Relations | United States" />
				<meta property="og:description" content="Behind every corporate idea is a creative. Coratives provides services in public relations, marketing, and sales enablement for businesses." />
				<meta property="og:image" content="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-9/106337463_104357268011412_1661843056636889662_n.png?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SRdW-WdS4agAX_my3Y4&_nc_ht=scontent.fapa1-1.fna&oh=a28bd9c7aa29f24aa2f2654d00e43cc1&oe=60C93C33" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Coratives" />
				<meta property="og:url" content="https://coratives.com/" />

				<meta name="twitter:title" content="Coratives | Public Relations | United States" />
				<meta name="twitter:description" content="Behind every corporate idea is a creative. Coratives provides services in public relations, marketing, and sales enablement for businesses." />
				<meta name="twitter:card" content="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-9/106337463_104357268011412_1661843056636889662_n.png?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SRdW-WdS4agAX_my3Y4&_nc_ht=scontent.fapa1-1.fna&oh=a28bd9c7aa29f24aa2f2654d00e43cc1&oe=60C93C33" />
				<meta name="twitter:image" content="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-9/106337463_104357268011412_1661843056636889662_n.png?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SRdW-WdS4agAX_my3Y4&_nc_ht=scontent.fapa1-1.fna&oh=a28bd9c7aa29f24aa2f2654d00e43cc1&oe=60C93C33" />
				
				<meta name="keywords" content="coratives, marketing, pittsburgh, PR, public relations, sales enablement, email campaigns" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<link rel="canonical" href="https://coratives.com/"></link>

				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
			</Head>
			
			<Layout setSidebar={setSidebar} sidebar={sidebar}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

const Layout = ({ children, setSidebar, sidebar }) => {
    return(
        <>
            <Navigation setSidebar={setSidebar} />
            <Backdrop onClick={() => setSidebar(false)} open={sidebar} />
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            {children}
            <Footer />
        </>
    )
}

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background: #000;
	z-index: -1;
	opacity: 0;
	transition: all .5s ease;

	${props => props.open && css`
		z-index: 999;
		opacity: .8;
	`}
`
