import { Field } from "components/Field";
import { Default } from "components/layout/default";
import { Gallery } from "components/layout/Gallery";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit() {
    if (!done) {
      const req = await fetch("/api/contact", {
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        method: "POST",
      });

      if (req.status == 200) {
        setDone(true);
      }
    }
  }

  return (
    <Default
      seo={{
        title: "Contact",
        description:
          "Let's get to work! Feel free to send me a message and I'll get back to you!",
      }}
    >
      <Gallery background={""}>
        <div className="grid lg:grid-cols-2 grid-cols-1 h-full overflow-y-auto p-2">
          <main className="m-10">
            Let's get to work! Feel free to send me a message and I'll get back
            to you!
          </main>
          <main className="m-10">
            <Field label="Name" onChange={setName} value={name} />

            <Field label="Email" onChange={setEmail} value={email} />

            <Field label="Message" onChange={setMessage} value={message} />
            <button
              onClick={onSubmit}
              className="bg-black text-white p-1 m-2 rounded font-bold"
            >
              Submit
            </button>
          </main>
        </div>
      </Gallery>
    </Default>
  );
}
