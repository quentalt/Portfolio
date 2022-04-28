import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Catalogue">
    <Container>
      <Title>
        Catalogue <Badge>2022</Badge>
      </Title>
      <P>Catalogue virtuel des produits & prestations.</P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Site</Meta>
          <Link href="https://online.anyflip.com/xuxsf/zerm/mobile/index.html">
           Catalogue{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
   </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
