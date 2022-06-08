import { createColorway } from '@services/colorways';

async function handler(req, res) {
  if (req.method === 'POST') {
    const colorway = await createColorway();
    return res.status(200).json({ colorway });
  }
  // Handle any other HTTP method
  return res.status(405).json({ message: 'Method not valid' });
}

export default handler;
