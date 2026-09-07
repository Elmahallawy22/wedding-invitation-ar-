import InvitationShell from "@/components/providers/invitation-shell";
import HeroSection from "@/components/sections/hero-section";
import PosterSection from "@/components/sections/poster-section";
import HallSection from "@/components/sections/hall-section";
import ProgramSection from "@/components/sections/program-section";
import DressSection from "@/components/sections/dress-section";
import CountSection from "@/components/sections/count-section";

export default function Home() {
  return (
    <InvitationShell>
      <main>
        <HeroSection />
        <PosterSection />
        <HallSection />
        <ProgramSection />
        <DressSection />
        <CountSection />
      </main>
    </InvitationShell>
  );
}
