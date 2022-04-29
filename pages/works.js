import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCatalogue from '../public/images/works/ACM Boutique Catalogue.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbMedicalShop from '../public/images/works/ACM Boutique.png'
import thumbPizza from '../public/images/works/pizza.png'
import thumbBlog from '../public/images/works/blog.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Travaux
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="blog" title="Blog" thumbnail={thumbBlog}>
           Un blog où on ajoute des postes
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pizza"
            title="Pizza"
            thumbnail={thumbPizza}
          >
            Site d'ingrédients de Pizza  
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="acmboutique"
            title="Acmboutique"
            thumbnail={thumbMedicalShop}
          >
           Site de boutique e-commerce de produits médicaux & prestations
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="catalogue" thumbnail={thumbCatalogue} title="Catalogue">
            Un catalogue pour ACM Santé
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Vieux travaux
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
