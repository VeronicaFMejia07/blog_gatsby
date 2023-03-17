import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import imageDefault from '../../images/imageDefault.jpg';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';//Se importa para definir las props

const Seo = (props) => {
    //Se desestructuran las props que recibe el seo
    const { title, description, meta, lang, image } = props;

    //Se hace la petición a graphQLy esta trae los datos que se encuentran en el archivo gatsby.config, el cual exporta un modulo con un objeto llamado siteMetada
    const { site } = useStaticQuery(
        graphql
        `
            query {
                site {
                siteMetadata {
                    title
                    description
                    author
                }
                }
            }
        `
    )

    //Se inicializa con las props que reciba o con las obtenidas en la petición graphQL
    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title

    return (
        <Helmet title={defaultTitle ? `${title} | ${defaultTitle}` : title} htmlAttributes={{lang}}
            meta={
                [
                    {
                        name: "title",
                        content: title,
                    },
                    {
                        name: "description",
                        content: metaDescription
                    },
                    {
                        name:"og:description",
                        content: metaDescription,
                    },
                    {
                        name: "og:type",
                        content: "website",
                    },
                    {
                        name: "og:image",
                        content: image || imageDefault,
                    },
                    {
                        name:"blog:creator",
                        content: site.siteMetadata.author,
                    },
                    {
                        name: "blog:title",
                        content: title,
                    },
                    {
                        name: "blog:description",
                        content: metaDescription,
                    }
                ].concat(meta)
            }
        >
        </Helmet>
    )
}

//Se crean los valores por defecto de las props (los pondrá en caso de no recibir nada)
Seo.defaultProps = {
    lang: "es",
    meta: [],
    description: "",
}

//Se crean las props que va recibir el componente
Seo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
}

export default Seo
