import Image from "next/image";
import Reveal from "../features/reveal";

export default function PosterSection() {
  return (
    <section className="flex justify-center" id="poster">
      <div className="container flex flex-col items-center py-10">
        <Reveal>
          <h5 className="text-5xl md:text-7xl font-semibold font-arabic leading-16 md:leading-24">أحفظ</h5>
        </Reveal>
        <Reveal>
          <h6 className="text-5xl md:text-7xl font-semibold font-arabic leading-16 md:leading-24"> التاريخ</h6>
        </Reveal>
        <Reveal>
          <Image
            src="/assets/couples-emojes.png"
            alt="couples-poster"
            width={500}
            height={500}
            className="mt-10 md:mt-12 w-80 max-w-11/12"
          />
        </Reveal>
        <div className="h-px w-2/3 md:w-2/5! lg:w-1/3! xl:w-1/4! bg-ink mt-4 md:mt-8" />
        <Reveal>
          <p className="text-3xl md:text-5xl font-semibold mt-1.5 md:mt-3 tracking-[0.2em]">يوسف + هنا</p>
        </Reveal>
        <Reveal>
          <p className="tracking-[0.2em] my-1" dir="ltr">
            9 . 11 . 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
