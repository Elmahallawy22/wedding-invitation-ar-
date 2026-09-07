import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "../features/reveal";

export default function HallSection() {
  return (
    <section
      className="h-screen flex justify-center text-cream"
      style={{ backgroundImage: "url('/assets/hall.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="container flex flex-col items-center justify-center gap-5 ">
        <Reveal>
          <h3 className="text-5xl md:text-7xl font-arabic leading-16 md:leading-24">تحت ضوء قمرٍ</h3>
        </Reveal>
        <Reveal>
          <h3 className="text-cream text-5xl md:text-7xl font-arabic leading-16 md:leading-24">مكتملٍ تماماً.</h3>
        </Reveal>

        <div className="flex flex-col items-center gap-1 w-full text-2xl md:text-3xl mt-5">
          <Reveal>
            <p className="text-xl text-white/70">القاعة</p>
          </Reveal>
          <Reveal>
            <h5 className="">New Garden - Kempinsko</h5>
          </Reveal>
          <Reveal>
            <h6 className="">طلخا - المنصورة</h6>
          </Reveal>
        </div>
        <div className="flex flex-col items-center gap-1 w-full text-2xl md:text-3xl mt-5">
          <Reveal>
            <p className="text-xl text-white/70">المعاد</p>
          </Reveal>
          <Reveal>
            <h5 className="" dir="ltr">
              9 Novamber 2026
            </h5>
          </Reveal>
          <Reveal>
            <h6 className="" dir="ltr">
              8:00 Pm
            </h6>
          </Reveal>
        </div>

        <Reveal>
          <Link
            href="https://maps.app.goo.gl/Wh7sVEwkkLLQy8YT9?g_st=aw"
            target="_blank"
            className="flex items-center gap-1 text-xl bg-white/20 py-2.5 px-6 rounded-full border border-white/70 mt-5"
          >
            <MoveUpRight height={16} /> تصفح الموقع
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
