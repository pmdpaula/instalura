import Footer from '../src/components/commons/Footer'
import Menu from '../src/components/commons/Menu'

const Home = () => {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu />
      <Footer />
    </div>
  )
}

export default Home