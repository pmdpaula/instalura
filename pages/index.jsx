import Footer from '../src/components/commons/Footer'
import Menu from '../src/components/commons/Menu'
import { Text } from '../src/components/foundation/Text'
import { Button } from '../src/components/commons/Button/index'

const Home = () => {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Menu />

      <div>
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
      </div>

      <Footer />
    </div>
  )
}

export default Home
