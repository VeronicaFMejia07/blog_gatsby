const path = require("path");
const { paginate } = require('gatsby-awesome-pagination'); //Plugin para la paginación

exports.createPages = async({ actions, graphql }) => { //Crea páginas, se extraen las acciones que se pueden hacer y graphql para traer datos
    const { createPage } = actions; //Se saca la fnunción createPages para poder crear las pginas

    //Se hace la petición con graphql para traer los datos desde contentful
    const posts = await graphql(
        `
            query{
                allContentfulCardBlog {
                nodes{
                    title
                    img{
                    publicUrl
                    }
                    description{
                    description
                    }
                    seoTitle
                }
                }
            }
        `
    )
    
    //Crear la paginación
    paginate({ 
        createPage, //Se pasa la función para crear la paginación
        items: posts.data.allContentfulCardBlog.nodes, //Se pasa la variable donde se encuentran todos los items [array]
        itemsPerPage: 8, //Se indican cuantos items por página se van a mostrar
        pathPrefix: '/', //En que página se van a mostrar los items, en este caso es en la raíz
        component: path.resolve('src/templates/Blog/blog.js'), //Importar el componente que se va a cargar, este no puede estar dentro de pages, debe estar dentro de templates
    });

    //Recorre todos los items que trae la data y crea las paginas por cada item de la data 
    posts.data.allContentfulCardBlog.nodes.forEach(post =>{
        createPage({
            path: `/${post.title.replace(/\s+/g, '-')}`, //Se asigna al path el titulo que trae la data, y se eliminan los espacios y se colocan guiones -
            component: path.resolve('src/templates/PagePost/pagePost.js'),
            context: { //Se le envian los datos que va contener la página
                data: post //Se le asigna a la data, la variable post que es la que va contener toda la iteración de la creación de las paginas
            },
        })
    });
   
}
