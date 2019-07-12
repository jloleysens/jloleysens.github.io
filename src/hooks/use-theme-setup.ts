import { Theme } from '../styles';
import * as React from 'react';

export function useThemeSetup(theme: Theme) {
  React.useEffect(() => {
    console.log('installing global style element');
    let styleEl: HTMLStyleElement = document.querySelector('#managed-style');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.setAttribute('id', 'managed-style');
    }
    styleEl.remove();
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
  }, [theme]);
}
