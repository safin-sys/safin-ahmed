import { Container } from '@chakra-ui/layout'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
	return (
		<Container maxW="container.lg" style={{ scrollSnapType: 'y mandatory' }}>
			<Hero />
			<Skills />
			<Projects />
			<Contact />
		</Container>
	)
}
