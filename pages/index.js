import Hero from '../components/Hero';
import Projetcs from '../components/Projetcs';
import Contact from '../components/Contact';
import Stack from '../components/Stack';

const featuredProjects = ['cool-movie-app', 'awwa', 'rudra-nil-utsa', 'zapomnit-nato']

export const getStaticProps = async () => {
	const req = await fetch('https://api.github.com/users/safin-sys/repos')
	const res = await req.json()
	const projects = res
		.filter(project => featuredProjects.includes(project.name))
		.sort((a, b) => featuredProjects.indexOf(a.name) - featuredProjects.indexOf(b.name))
	return {
		props: {
			projects
		}
	}
}

export default function Home({ projects }) {
	return (
		<>
			<Hero />
			<Stack />
			<Projetcs projects={projects} />
			<Contact />
		</>
	)
}
