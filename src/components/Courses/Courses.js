import React from 'react'
import './Courses.scss';
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import dataCourses from './coursesData.js';

const Courses = () => {
  return (
    <nav className='container__courses'>
      {
        map(dataCourses, (item, index) => (
          <a key={index} href={item.url} target="_blank" rel='noopener noreferrer' className='container__courses-item'>
            <Image src={item.image} alt={item.title} className="item__img" />
          </a>
        ))
      }
    </nav>
  )
}

export default Courses
