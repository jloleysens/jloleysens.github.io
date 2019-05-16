import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';

funstonTheme.headerFontFamily = ['Fira Mono', 'monospace'];
funstonTheme.bodyFontFamily = ['Fira Sans', 'sans-serif'];

const typography = Typography(funstonTheme);

// // Hot reload typography in development.
// if (process.env.NODE_ENV !== `production`) {
//   typography.injectStyles();
// }

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
