<<<<<<< HEAD
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';

const links = [
  {
    texto: 'Home',
    url: '/'
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq'
  },
  {
    texto: 'Sobre',
    url: '/sobre'
  }
]

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map((link, id) => {
          const linkId = `link_${id}`
          return (
            <li key={linkId}>
              <a href={link.url}>{link.texto}</a>
            </li>
          )
        })}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <Button
          ghost
          variant="secondary.main"
        >
          Entrar
        </Button>

        <Button
          variant="primary.main"
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}


=======
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import { Text } from '../../foundation/Text';

const links = [
  {
    texto: 'Home',
    url: '/'
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq'
  },
  {
    texto: 'Sobre',
    url: '/sobre'
  }
]

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map((link, id) => {
          const linkId = `link_${id}`
          return (
            <li key={linkId}>
              <Text
                tag="a"
                variant="smallestException"
                href={link.url}
              >
                {link.texto}
              </Text>
            </li>
          )
        })}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <Button
          ghost
          variant="secondary.main"
        >
          Entrar
        </Button>

        <Button
          variant="primary.main"
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}


>>>>>>> 3c7bdaad8224dee9ae530cc36093b7c33656aa08
export default Menu