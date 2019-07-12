export type Modes = 'LIGHT' | 'DARK';


const main = {
  lightText: 'var(--a-light)',
  background: 'var(--a-light)',
  primary: 'var(--a-dark)',
  link: 'var(--c-cool)',
  linkHover: 'var(--a-warm-1)',
};

export type Theme = typeof main;

const dark = {};

export function getColorTheme(mode: Modes) {
  return mode === 'DARK' ? dark : main;
}
