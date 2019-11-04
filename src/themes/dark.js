export let isNightMode = true;
export let DARK_BOTTOM_BACKGROUND;
export let DARK_FONT_UNDONE;
export let DARK_BACKGROUND;
export let DARK_FONT_DONE;
export let DARK_INPUT_BORDER;
export let DARK_ADD_ICON;
export let EDIT_ICON;
export let DARK_WHITE;
export let WHITE_DARK;
export function toggleTheme(IsNightMode) {
  isNightMode = IsNightMode;
  console.log('DARK_WHITE', DARK_WHITE);
  WHITE_DARK = isNightMode ? 'black' : 'white';
  DARK_WHITE = isNightMode ? 'white' : 'black';
  EDIT_ICON = isNightMode ? 'white' : 'black';
  DARK_BOTTOM_BACKGROUND = isNightMode ? '#332b2c' : 'rgb(153,153,153)';
  DARK_FONT_UNDONE = isNightMode ? '#ffffff' : 'rgba(18,18,18,0.94)';
  DARK_BACKGROUND = isNightMode ? '#222222' : 'rgba(198,198,198,0.85)';
  DARK_FONT_DONE = isNightMode
    ? 'rgba(213,204,205,0.95)'
    : 'rgba(0,29,16,0.86)';
  DARK_INPUT_BORDER = isNightMode
    ? 'rgba(226,226,226,0.75)'
    : 'rgba(116,116,116,0.85)';
  DARK_ADD_ICON = isNightMode ? '#dbdbdb' : 'rgba(0,0,0,0.85)';
}
toggleTheme(isNightMode);
