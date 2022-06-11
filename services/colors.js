import colorNameList from 'color-name-list';
import nearestColor from 'nearest-color';
import { colord } from 'colord';

const colors = colorNameList.reduce((o, { name, hex: h }) => Object.assign(o, { [name]: h }), {});
const nearest = nearestColor.from(colors);

// eslint-disable-next-line import/prefer-default-export
export const getColorName = (color) => nearest(colord(color).alpha(1).toHex());
