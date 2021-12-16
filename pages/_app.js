import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	fonts: {
		body: 'Inter, system-ui, sans-serif',
		heading: 'Inter, system-ui, sans-serif',
		mono: 'Menlo, monospace',
	},
})

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* Primary Meta Tags */}
				<title>Safin Ahmed</title>
				<meta name="title" content="Safin Ahmed" />
				<meta name="description" content="Hi, I am a self-taught front-end developer and this is my portfolio." />
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://safin.netlify.app/" />
				<meta property="og:title" content="Safin Ahmed" />
				<meta property="og:description" content="Hi, I am a self-taught front-end developer and this is my portfolio." />
				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://safin.netlify.app/" />
				<meta property="twitter:title" content="Safin Ahmed" />
				<meta property="twitter:description" content="Hi, I am a self-taught front-end developer and this is my portfolio." />
				<meta name="google-site-verification" content="uR73wVtmcchCUfsHMV8S2bJc2qHxSQAiC5p1wXTd1Fw" />
			</Head>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}

export default MyApp
