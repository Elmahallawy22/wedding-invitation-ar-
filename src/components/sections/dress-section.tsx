import Image from "next/image";
import Reveal from "../features/reveal";

export default function DressSection() {
  const codes = [
    { id: 1, color: "#1f2a44" },
    { id: 2, color: "#6b1f3b" },
    { id: 3, color: "#C0292B" },
    { id: 4, color: "#c58f92" },
    { id: 5, color: "#F3D3CE" },
    { id: 6, color: "#94a58f" },
    { id: 7, color: "#9CAF88" },
    { id: 8, color: "#a16745" },
    { id: 9, color: "#d8c6a1" },
  ];

  return (
    <section className="flex justify-center bg-ink text-cream py-10">
      <div className="container text-center flex flex-col items-center">
        <Reveal>
          <h6 className="text-2xl font-script">ماذا ترتدي</h6>
        </Reveal>
        <Reveal>
          <h3 className="text-6xl pb-4 font-kufi">قواعد اللباس</h3>
        </Reveal>
        <Reveal>
          <h6 className="text-lg text-white/80">نرجو من ضيوفنا الكرام الالتزام بالزي التالي:</h6>
        </Reveal>
        <Reveal className="w-2/3 max-w-110">
          <div className="bg-[#111111] border border-[#ffffff1f] rounded-2xl p-8 flex flex-col items-center my-10">
            <Reveal>
              <div className="w-14 h-14 bg-white p-3 rounded-full flex justify-center items-center">
                <Image src="/assets/dresscode.webp" alt="" width={50} height={50} />
              </div>
            </Reveal>
            <Reveal>
              <p className="text-3xl font-arabic leading-12 mt-1">السادة</p>
            </Reveal>
            <Reveal>
              <p className="text-2xl">البدلات السوداء</p>
            </Reveal>
          </div>
        </Reveal>
        <Reveal className="w-11/12 max-w-182">
          <div className="bg-[#111111] border border-[#ffffff1f] rounded-2xl p-8 flex flex-col items-center mb-5">
            <Reveal>
              <p className="text-3xl font-arabic leading-12 mb-1">السيدات</p>
            </Reveal>
            <Reveal>
              <p className="text-xl">لوحة الألوان </p>
            </Reveal>
            <Reveal>
              <div className="flex gap-4 md:gap-8 justify-center flex-wrap mt-5">
                {codes.map((code) => (
                  <div className="w-9 h-18 rounded-full" style={{ backgroundColor: code.color }} key={code.id}></div>
                ))}
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
