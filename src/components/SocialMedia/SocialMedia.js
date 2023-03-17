import React from 'react'
import { Icon } from 'semantic-ui-react';
import './SocialMedia.scss';
import { map } from 'lodash';
import socialData from './socialData.js';

const SocialMedia = () => {
    
    return (
        <div className='container__social'>
            {
                map(socialData, (item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className='container__social-item'>
                        <Icon circular link name={item.name} className={item.name} />
                    </a>
                ))
            }
        </div>
    )
}

export default SocialMedia
