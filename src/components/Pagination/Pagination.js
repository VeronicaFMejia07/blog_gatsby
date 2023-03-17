import React from 'react'
import './Pagination.scss';
import PropType from 'prop-types';
import { Link } from 'gatsby';
import { Button, Icon } from 'semantic-ui-react';

const Pagination = (props) => {
    const { page } = props;

    //La primer variable devuelve la url de la pagina previa, la segunda variable devuelve cual es la pagina siguiente
    const { previousPagePath, nextPagePath } = page;
    
    return (
        <div className='container__pagination'>
            {
                previousPagePath &&
               
                <Link to={previousPagePath} className="container__pagination-link">
                    <Button  className="ui inverted orange button">
                        <Icon name='arrow alternate circle left'/>
                        Atrás
                    </Button>
                </Link>
            }

            {
                nextPagePath &&
                <Link to={nextPagePath} className="container__pagination-link">
                    <Button  className="ui inverted orange button">
                        Siguiente
                        <Icon name='arrow alternate circle right'/>
                    </Button>
                </Link>
            }
        </div>
   

    )
}

export default Pagination

Pagination.prototype = {
    page: PropType.object.isRequired,
}
