import Footer from '../src/components/commons/Footer'
import Menu from '../src/components/commons/Menu'
import { Text } from '../src/components/foundation/Text'
import { Button } from '../src/components/commons/Button'
import { Grid } from '../src/components/foundation/layout/Grid'
import { Box } from '../src/components/foundation/layout/Box';

const Home = () => {
  return (
    <Box
      flex={1}
      display='flex'
      flexWrap='wrap'
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Menu />

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px'
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5}}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >

            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left'
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left'
              }}
            >
              Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial'
              }}
              display="block"
            >
              Cadastrar
            </Button>

          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6}}
          >
            <img src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png" alt="Phones"/>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>



      <Footer />
    </Box>
  )
}

export default Home
