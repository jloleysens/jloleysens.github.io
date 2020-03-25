import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';

funstonTheme.headerFontFamily = ['Fira Mono', 'monospace'];
funstonTheme.bodyFontFamily = ['Fira Sans', 'sans-serif'];

const typography = Typography(funstonTheme);

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
