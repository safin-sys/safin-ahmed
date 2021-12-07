import { Container } from '@chakra-ui/layout'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const featuredProjects = ['hear-the-unheard', 'cool-movie-app', 'awwa', 'rudra-nil-utsa', 'zapomnit-nato', 'seafood']

function swapElement(array, indexA, indexB) {
	const tmp = array[indexA];
	array[indexA] = array[indexB];
	array[indexB] = tmp;
}

export const getStaticProps = async () => {
	const req = await fetch('https://api.github.com/users/safin-sys/repos')
	const res = await req.json()
	const projects = res.filter(({ name }) => featuredProjects.includes(name))
	swapElement(projects, 2, 0)
	swapElement(projects, 5, 4)
	return {
		props: {
			projects
		}
	}
}

export default function Home({ projects }) {
	return (
		<Container maxW="container.lg" style={{ scrollSnapType: 'y mandatory' }}>
			<Hero />
			<Skills />
			<Projects projects={projects} />
			<Contact />
		</Container>
	)
}
