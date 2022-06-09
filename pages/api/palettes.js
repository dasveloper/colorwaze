import { createPalette, getPalettes } from '@services/palettes';
import { getSession } from 'next-auth/react';
import nextConnect from 'next-connect';
import errorHandler from '@utils/errorHandler';
import mongoSanitize from 'express-mongo-sanitize';

const handler = nextConnect({
  onError: (errorHandler),
});

export const postHandler = async (req, res) => {
  const { name, colors } = req.body;
  const session = await getSession({ req });

  const palette = await createPalette({ name, colors, owner: session?.user?.userId });
  return res.status(200).json({ palette });
};

export const getHandler = async (req, res) => {
  const { per_page, page } = req.query;

  const palettes = await getPalettes({ skip: parseInt(page, 10), limit: parseInt(per_page, 10) });
  console.log(palettes);
  return res.status(200).json(palettes);
};

handler.use(mongoSanitize()).post(postHandler);
handler.use(mongoSanitize()).get(getHandler);

export default handler;
