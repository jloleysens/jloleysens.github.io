export type Modes = 'LIGHT' | 'DARK';

const main = {
  lightText: 'var(--a-light)',
  background: 'var(--a-light)',
  primary: 'var(--a-dark)',
};

const dark = {};

export function getColorTheme(mode: Modes) {
  return mode === 'DARK' ? dark : main;
}
