import React from 'react'
import { graphql } from 'gatsby';
import BlogLayout from '../../layouts/BlogLayout';
import List from '../../components/List/List';
import Pagination from '../../components/Pagination';
import Seo from '../../components/Seo/Seo';
import blogImage from '../../images/blogImage.jpg';

export default function Blog(props) {
    const { data, pageContext } = props;

    const posts = data.allContentfulCardBlog.nodes; //Se igualan todos los items obtenidos a una variable
    //Se le envia por props la data con todos los items
    return (
        <BlogLayout>
            <Seo title="Blog" description="Lenguajes y frameworks de programación, nuevas funcionalidades y más." image={blogImage} />
            <List listPost={posts} />
            <Pagination page={pageContext} />
        </BlogLayout>
    )
}


//Se le envian a la petición el skip y el limit, los cuales contienen los valores desde el createPages, estos indican cuantos items se deben mostrar por página
export const query = graphql
`
    query($skip: Int!, $limit: Int!){
        allContentfulCardBlog(
            skip: $skip
            limit: $limit
        ) {
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


