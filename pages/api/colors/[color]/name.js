import errorHandler from '@utils/errorHandler';
import { getColorName } from '@services/colors';
import nextConnect from 'next-connect';

const handler = nextConnect({
  onError: (errorHandler),
});
export const getHandler = async (req, res) => {
  // Get color
  const { color } = req.query;

  // Get color name
  const colorName = getColorName(`#${color}`);

  // Return color name
  return res.status(200).json({ colorName });
};

handler.get(getHandler);

export default handler;
