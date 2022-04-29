import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pizza">
    <Container>
      <Title>
        Pizza <Badge>2021</Badge>
      </Title>
      <Center my={6}>
      </Center>
      <P>
Site d'ingrédients de pizza
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, React-Spring</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://react-spring.io/">Documentation</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
