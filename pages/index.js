import { Container, Heading } from '@chakra-ui/layout'
import Head from 'next/head'

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Portfolio Site</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Heading>Hello Next.js</Heading>
		</Container>
	)
}
