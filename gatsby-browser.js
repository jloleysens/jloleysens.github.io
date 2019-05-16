import React from 'react';
import 'typeface-fira-mono';
import 'typeface-fira-sans';
import 'prismjs/themes/prism-solarizedlight.css';
import './src/variables.module.css'
import {
  AppContextProvider
} from './src/context/AppContext';

export function wrapRootElement({
  element
}) {
  return <AppContextProvider>{ element }</AppContextProvider>;
}
