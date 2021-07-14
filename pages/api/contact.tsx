import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const data: ContactFormData = {
    email: req.body.email ?? "<no email>",
    message: req.body.message ?? "<no message>",
    name: req.body.name ?? "<no name>",
  };

  if (!process.env.DISCORD_WEBHOOK) {
    console.error("No webhook provided");
    res.status(500).send("Oops!");
    return;
  }

  await axios.post(process.env.DISCORD_WEBHOOK, {
    embeds: [
      {
        title: "New contact through ianeli1.com",
        fields: [
          {
            name: "Name",
            value: data.name,
          },
          {
            name: "Email",
            value: data.email,
          },
          {
            name: "Message",
            value: data.message,
          },
        ],
      },
    ],
  });

  res.status(200).send("Ok!");
}
