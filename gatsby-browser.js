import 'typeface-fira-mono';
import 'typeface-fira-sans';
import 'prismjs/themes/prism-solarizedlight.css';
import React from 'react';

import './src/variables.css';
import './src/md-helper-styles.css';

import { AppContextProvider } from './src/context/AppContext';

export function wrapRootElement({ element }) {
  return <AppContextProvider>{element}</AppContextProvider>;
}
