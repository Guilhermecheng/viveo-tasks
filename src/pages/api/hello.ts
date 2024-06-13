// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  task: string;
  date: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  res.status(200).json([
    { task: "John Doe", date: "01/12/2022" },
    { task: "John Doe", date: "01/12/2022" },
  ]);
}
