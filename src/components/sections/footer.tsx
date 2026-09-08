import Reveal from "../features/reveal";

export default function Footer() {
  return (
    <footer className="flex justify-center py-12 md:py-16">
      <div className="container flex flex-col items-center">
        <Reveal>
          <p className="text-center text-2xl md:text-3xl font-arabic mx-2">مليارات العيون، لكنني لا أريد النظر إلا في عينيك.✿</p>
        </Reveal>
        <Reveal>
          <p className="text-5xl md:text-6xl font-arabic mt-8">يوسف - هنا</p>
        </Reveal>
        <Reveal>
          <p className="tracking-[0.2em] mt-5" dir="ltr">
            9 . 11 . 2026
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-10">
            صُمم بواسطة: <span className="font-medium font-arabic text-2xl animate-pulse mx-1">يوسف المحلاوى</span>
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
