import React from 'react';

import Directory from '../../components/directory/directory.component';
import sections from './sections.data';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Directory sections={sections} />
  </div>
)

export default HomePage;