import React from 'react';

import Directory from '../../components/directory/directory.component';
import sections from './sections.data';

import {HomepageContainer} from './homepage.styles.jsx';

const HomePage = () => (
  <HomepageContainer>
    <Directory sections={sections} />
  </HomepageContainer>
)

export default HomePage;