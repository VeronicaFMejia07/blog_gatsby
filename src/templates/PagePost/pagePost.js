import React from 'react'
import { Image } from 'semantic-ui-react';
import BlogLayout from '../../layouts/BlogLayout';
import './pagePost.scss';
import Seo from "../../components/Seo"

const PagePost = (props) => {

  //Al asignarle a data el post en el forEach para la creación de las páginas por item, y al asignarle que se va renderizar en este componente, este va recibir unas props, de las cuales se extrae lo siguiente:
  const { pageContext } = props; //Se extrae el pageContext que es el que contiene toda la data con el item

  const { data: page } = pageContext; //Se extrae data y se le asigna un alias, que es la que contiene todos los campos a mostrar
  
  //Función para purificar el objeto que llega desde el context que crea las páginas, esto se hace para que el objeto que llega no sea tan fácil y peligroso de hackear


  return (
    <BlogLayout className="container__page">
      <Seo title={page.seoTitle} image={page.img.publicUrl}/> 
      <h2 className='container__page-title'>{page.title}</h2>
      <Image src={page.img.publicUrl} alt={page.title} className="container__page-img" />
      <section className='container__page-body'>
        <div dangerouslySetInnerHTML={{__html:page.description.description}} />
      </section>

    </BlogLayout>
  )
}

export default PagePost