import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const pageNumber = Number(req.query.page);
    if(isNaN(pageNumber) || pageNumber < 1) {
        // This could/should probably be done better, throwing an error instead of returning a "valid" response and then having to handle that in index.tsx
        return res.status(400).json({ error: 'Invalid page number: ' + pageNumber.toString() });
    }
    const apiCall = await fetch(`${process.env.FETCH_API}?page=${pageNumber}`)
    const data = await apiCall.json();
    res.json({data});
};
