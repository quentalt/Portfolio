import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="acmboutique">
    <Container>
      <Title>
       ACM Boutique <Badge>2022</Badge>
      </Title>
      <P>
       Produits de la boutique ACM
      </P>
      <UnorderedList my={4}>
        <ListItem>Produits sur place</ListItem>
        <ListItem>Prestations pro </ListItem>
        <ListItem>Click and collect</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress, plugins (Elementor, Woocommerce)</span>
        </ListItem>
        </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/menkiki_01.png" alt="menkiki" />
        <WorkImage src="/images/works/menkiki_02.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
