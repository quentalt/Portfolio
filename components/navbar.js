import Logo from './logo'
import NextLink from 'next/link';

import { 
    Container,
    Box,
     Link,
     Stack,
     Heading,
     Flex,
     Menu,
     MenuItem,
     MenuList,
     MenuButton,
     IconButton,
    useColorModeValue} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons';
import ThemeToogleButton from '../components/theme-toogle-button';
import { IoLogoGithub } from 'react-icons/io5'


const LinkItem = ({href,path, target, children, ...props}) => {
const active = path === href 
const inactiveColor = useColorModeValue('gray200','whiteAlpha.900')
return (
    <NextLink href={href} passHref scroll={false}>
        <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
> 
{children}
        </Link>
    </NextLink>
)
}

const Navbar = props => {
    const {path} = props;

    return (
        <Box
         position='fixed'
         as="nav"
         w="100%"
         bg={useColorModeValue('#ffffff40','#20202380')}
         style = {{backdropFilter:'blur(10px)'}}
         zIndex ={1}
        {...props}
        >
            <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap"
            align="center"
            justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tight'}>
                        <Logo/>
                    </Heading>
                </Flex>
                
                <Stack
                direction={{base:'column',md:'row'}}
                display={{base:'none',md:'flex'}}
                alignItems="center"
                flexGrow={1}
                mt={{base:4, nmd:0}}
                >
                    <LinkItem href="/works" path={path}>
                    Travaux
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                    Posts
                    </LinkItem>
                    <LinkItem
            target="_blank"
            href="https://github.com/quentalt/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
           
          </LinkItem>
          </Stack>

                <Box flex={1} align="right">
                    <ThemeToogleButton/>

                    <Box ml={2} display={{base:'inline-block' , md:'none'}}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton 
                            as={IconButton} 
                            icon={<HamburgerIcon/>}
                            variant="outline" 
                            aria-label="Options" 
                            />
                        <MenuList>
                            <NextLink href="/" passHref>
                        <MenuItem as={Link}> About </MenuItem>
                            </NextLink>
                            <NextLink href="/works" passHref>
                        <MenuItem as={Link}> Travaux </MenuItem>
                            </NextLink>
                            <NextLink href="/posts" passHref>
                        <MenuItem as={Link}> Posts </MenuItem>
                            </NextLink>
                        </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar