"use client";

import { MoveLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Reveal from "../features/reveal";

export default function ContactSection() {
  // state
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState(false);

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      toast("من فضلك اكتب اسمك ❤️", {
        position: "top-right",
        className: "!bg-peach !text-cream !border-none font-arabic !text-2xl md:!text-3xl !font-semibold",
      });

      return;
    }

    if (!message.trim()) {
      toast("من فضلك اكتب رسالتك ❤️", {
        position: "top-right",
        className: "!bg-peach !text-cream !border-none font-arabic !text-2xl md:!text-3xl !font-semibold",
      });

      return;
    }

    fetch("https://sendmail-api-docs.vercel.app/api/send", {
      method: "POST",
      body: JSON.stringify({
        to: "elmahallawyyoussef@gmail.com",
        subject: "I get a qoute",
        message: `انا ${name} \n\t, عاوز اقولك ${message},  انا ${attending} سوف احضر`,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // Show massege for submitting..
    toast("تم الارسال 👌👍❤️", {
      position: "top-right",
      className: "!bg-peach !text-cream !border-none font-arabic !text-3xl md:!text-4xl !font-semibold cursor-pointer",
    });

    setName("");
    setMessage("");
  };

  return (
    <section className="flex justify-center bg-ink text-cream p-12 md:py-16">
      <div className="container flex flex-col items-center">
        <Reveal>
          <h6 className="text-2xl font-script">اترك لنا رسالة</h6>
        </Reveal>

        <Reveal>
          <h3 className="text-6xl pb-4 font-kufi">كتاب الزوار</h3>
        </Reveal>

        <form action="" onSubmit={(e) => sendMessage(e)} className="w-full max-w-125 flex flex-col items-center gap-5 px-4">
          <Reveal>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b border-[#555] text-center outline-none h-12 w-full max-w-125 font-sans mt-5"
              placeholder="أسمك"
            />
          </Reveal>

          <Reveal>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-b border-[#555] text-center outline-none w-full max-w-125 font-sans py-2 h-28 mt-4"
              placeholder="رسالتكم اللطيفة . . . ."
            />
          </Reveal>

          <Reveal>
            <h6 className="text-text text-2xl font-semibold mt-5">هل ستحضر؟</h6>
          </Reveal>

          <Reveal>
            <div className="flex gap-5">
              <button
                type="button"
                onClick={() => {
                  setAttending(true);
                  toast(" ياعم بحبك مستنيك يا أخويا  ❤️❤️😍", {
                    position: "top-right",
                    className: "!bg-peach !text-cream !border-none font-arabic !text-3xl md:!text-4xl !font-semibold cursor-pointer",
                  });
                }}
                className="w-20 pt-2 pb-3 text-lg font-semibold bg-[#111111] border border-[#ffffff1f] rounded-full cursor-pointer"
              >
                نعم
              </button>
              <button
                type="button"
                onClick={() =>
                  toast("ياعم عيب عليك ! 😥", {
                    description: "أنت كدا كدا هتنورنا يا صاحبي مفيهاش كلام 😍😊",
                    className: "!bg-peach !text-cream !border-none font-arabic !text-3xl md:!text-4xl !font-semibold cursor-pointer",
                    descriptionClassName: "!text-cream text-2xl",
                  })
                }
                className="w-20 pt-3 pb-2 text-lg font-semibold bg-[#111111] border border-[#ffffff1f] rounded-full cursor-pointer"
              >
                لا
              </button>
            </div>
          </Reveal>

          <Reveal>
            <button type="submit" className="bg-[#ffffff1a] py-3 px-8 text-xl rounded-full mt-5 cursor-pointer flex items-center gap-2">
              أرسل بكل حب <MoveLeft width={16} />
            </button>
          </Reveal>
        </form>
      </div>
    </section>
  );
}
