import Reveal from "../features/reveal";
import Timer from "../features/timer";

export default function CountSection() {
  return (
    <section className="flex justify-center">
      <div className="container flex flex-col items-center pt-16 pb-10">
        <Reveal>
          <h3 className="text-5xl md:text-7xl pb-6 font-kufi">العدّ التنازلى</h3>
        </Reveal>
        <Reveal>
          <Timer targetDate="2026-11-09T18:59:59" />
        </Reveal>
        <Reveal>
          <p className="mt-8 font-arabic text-xl md:text-2xl">إلى أن يبدأ عمرنا الأبدي ✿</p>
        </Reveal>
      </div>
    </section>
  );
}
