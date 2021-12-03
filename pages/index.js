import { Container } from '@chakra-ui/layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
	return (
		<Container maxW="container.lg">
			<Hero />
			<Skills />
			<Projects />
		</Container>
	)
}
