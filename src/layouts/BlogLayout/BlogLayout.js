import React from 'react'
import './BlogLayout.scss';
import { Container, Grid} from 'semantic-ui-react'
import Menu from '../../components/Menu';

const BlogLayout = (props) => {
  const { children, className } = props;

  //Fluid:ocupe todo el ancho de la pantalla
  //Se le concatena el className que llega por props
  //Se le indica que si llega el className lo coloque si no ponga un espacio (esto para que no lo asigne como undefined en caso de no llegar)
  return (
    <Container fluid className={`container__blog ${className || ""}`}>
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={4} className='first__column'>
         <Menu />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={16} computer={12}>
          {children}
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default BlogLayout
