import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Fetch environment variable link to "Patentti- ja Rekisterihallitus"
  res.json(process.env.PRH_LINK);
};
