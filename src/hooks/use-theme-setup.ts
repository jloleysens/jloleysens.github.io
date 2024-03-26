import { Theme } from '../styles';
import * as React from 'react';

let hasRun = false;
export function doThemeSetup(theme: Theme) {
  if (hasRun) {
    return;
  }
  let styleEl: null | HTMLStyleElement = document.querySelector('#managed-style');

  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.setAttribute('id', 'managed-style');
  } else {
    styleEl.remove();
  }

  styleEl.innerHTML = `
    body {
      background-color: ${theme.background};
    }

    body a {
      color: ${theme.link};
      transition: color 0.2s ease-in-out;
      text-decoration: none;
    }

    body a:hover {
      color: ${theme.linkHover};
      transition: color 0.2s ease-in-out;
    }
  `;

  document.head.appendChild(styleEl);

  hasRun = true;
}
