import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react';
import { Link } from 'gatsby';
import { map } from 'lodash';
import './List.scss';

 const List = (props) => {
    //Se desestructura la prop recibida
    const { listPost } = props;

    return (
        <Grid className='container__list'>
            {
                map(listPost, (item, index) => {
                    const path = item.title.replace(/\s+/g, '-');

                    return (
                        <Grid.Column key={index} mobile={16} tablet={16} computer={5}>
                            <Link to={`/${path}`}>
                                <Card className='container__list-card'>
                                    <Image src={item.img.publicUrl} />
                                    <Card.Content>
                                        <Card.Header className='header__title'>{item.title}</Card.Header>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                    )
                })
            }
        </Grid>
    )
}
export default List


