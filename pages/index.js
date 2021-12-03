import { Container } from '@chakra-ui/layout'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

export default function Home() {
	return (
		<Container maxW="container.lg">
			<Hero />
			<Skills />
		</Container>
	)
}
