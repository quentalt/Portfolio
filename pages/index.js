import NextLink from 'next/link'
import { 
    Link,
    Container,
    Heading,
    Box,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra} from '@chakra-ui/react'
    import Section from '../components/section.js'
    import Paragraph from '../components/paragraph.js'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {BioSection,BioYear} from '../components/bio.js'
import Layout from '../components/layouts/article'
import Image from 'next/image'

import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoDiscord
} from 'react-icons/io5'


const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })

const Accueil = () => {
    return  (
        <Layout>
        <Container>
            
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"

                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >      Hello, I'm a full stack developer
            </Box>

            <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                Quentin Altieri
                </Heading>
            <p>Dev for life</p>
        </Box>
        <Box
            flexShrink={0}
            mt={{ md: 6 }}
            ml={{ base: 4, md: 0 }}
            align="center"
        >
               <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
                <ProfileImage
                    src="/images/quentin.jpg"
                    alt="Profile image"
                    borderRadius='full'
                    width="100%"
                    height="100%"
                     />
</Box>
</Box>
</Box>

<Section delay={0.1}>
    <Heading as="h3" variant="section-title">
        Bio
</Heading>
<Paragraph> Je suis un étudiant en alternance comme développeur fullstack en vue du titre de mastère Développement Web et mobile
    </Paragraph>
    <Box align="center" my={4}>
        <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon></ChevronRightIcon>} colorScheme="teal">
                Mon Portfolio
            </Button>
        </NextLink>
        </Box> 
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
            Expériences 
            </Heading>
            <BioSection>
                <BioYear> 2018 </BioYear>
                CEA/DAM/DIF (Stage)
            </BioSection>
            <BioSection>
                <BioYear> 2019 </BioYear>
                ENC(AVEDOS) (Stage)
            </BioSection>
            <BioSection>
                <BioYear>2020 </BioYear>
                Amundi (Stage)
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                ACM SANTE (alternance)
                </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
            I❤️
                </Heading>
                <Paragraph> J'aime les jeux vidéos et les films
                    </Paragraph> 
                    <Paragraph> J'aime les livres, bd, mangas</Paragraph>
                 <Paragraph>
          Art, Musique, le dessin,{' '}
          {/* <Link href="https://www.deviantart.com/anarkichust" target="_blank">
            Dessin & dessin sur ordinateur
          </Link> */}
          , Modern dance, zumba, arts martiaux,{' '}
            Photographie
          , Langues, Machine Learning
        </Paragraph>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Sur le web
                </Heading>
                <List>
                <ListItem>
            <Link href="https://github.com/quentalt" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @quentalt
              </Button>
            </Link>
          </ListItem>
                        <ListItem>
                                <Link href="https://www.linkedin.com/in/quentin-altieri/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoLinkedin />}

                        >
                            @quentinaltieri
                        </Button>
                        </Link>
                            </ListItem>
                </List>
             </Section>
</Container>
</Layout>
    )
    }
    export default Accueil
    export { getServerSideProps } from '../components/chakra'