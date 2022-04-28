import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../layouts/footer'

const LazyVoxelDog = dynamic(() => import('../model'), {
  ssr: false,

})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Quentin homepage" />
        <meta name="author" content="Quentin" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
       <meta property="og:site_name" content="Quentin Altieri's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/quentin.jpg" />
        <title>Quentin Altieri - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
