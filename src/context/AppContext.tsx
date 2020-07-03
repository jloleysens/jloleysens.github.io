import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Modes, getColorTheme } from '../styles';

export const AppContext = React.createContext<{
  mode: [string, React.Dispatch<React.SetStateAction<Modes>>];
  assetsUrlPath: string;
}>(undefined);

export function AppContextProvider({ children }: any) {
  const [mode, setMode] = React.useState<Modes>('LIGHT');
  return (
    <ThemeProvider theme={getColorTheme(mode)}>
      <AppContext.Provider
        value={{
	  mode: [mode, setMode],
	  assetsUrlPath: '/assets'
        }}
      >
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export const useAppContext = () => React.useContext(AppContext);
