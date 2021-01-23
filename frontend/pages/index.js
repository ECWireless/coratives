import Head from 'next/head'
import { colors } from '../components/theme'

// Components
import {
	Hero,
	Services,
	Testimonials,
} from '../components/Home'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Public Relations | Coratives | United States</title>
			</Head>

			<main style={{ background: colors.blue }}>
				<Hero />
				<Services />
				<Testimonials />
			</main>
		</div>
	)
}
