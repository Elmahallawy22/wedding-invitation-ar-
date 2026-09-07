import Reveal from "../features/reveal";

export default function ProgramSection() {
  return (
    <section className="flex justify-center py-14 bg-gradient-warm">
      <div className="container text-center">
        <Reveal>
          <h6 className="text-2xl font-script">كيف يسير اليوم</h6>
        </Reveal>
        <Reveal>
          <h3 className="text-7xl pb-4 font-kufi">البرنامج</h3>
        </Reveal>
        <div className="border-b border-gray-300 py-6 md:py-8">
          <Reveal>
            <p className="text-4xl font-arabic" dir="ltr">
              8:00 pm
            </p>
          </Reveal>
          <Reveal>
            <h4 className="text-4xl md:text-5xl font-arabic my-4 tracking-[0.3em]">بدء مراسم الزفاف</h4>
          </Reveal>
          <Reveal>
            <p className="text-muted text-xl md:text-2xl">مرحباً بكم في يومنا المميز.</p>
          </Reveal>
        </div>
        <div className="border-b border-gray-300 py-6 md:py-8">
          <Reveal>
            <p className="text-4xl font-arabic" dir="ltr">
              10:00 pm
            </p>
          </Reveal>
          <Reveal>
            <h4 className="text-4xl md:text-5xl font-arabic my-4 tracking-[0.3em]">وجبة العشاء</h4>
          </Reveal>
          <Reveal>
            <p className="text-muted text-xl md:text-2xl">وليمة شهية نتشاركها معاً.</p>
          </Reveal>
        </div>
        <div className="border-b border-gray-300 py-6 md:py-8">
          <Reveal>
            <p className="text-4xl font-arabic" dir="ltr">
              11:45 pm
            </p>
          </Reveal>
          <Reveal>
            <h4 className="text-4xl md:text-5xl font-arabic my-4 tracking-[0.3em]">وداعاً</h4>
          </Reveal>
          <Reveal>
            <p className="text-muted text-xl md:text-2xl">شكراً لمشاركتكم لنا الاحتفال.</p>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-8 font-arabic text-xl md:text-2xl">ابقَ لوقتٍ متأخرٍ بقدر ما تشاء ✿</p>
        </Reveal>
      </div>
    </section>
  );
}
