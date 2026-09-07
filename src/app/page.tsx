import InvitationShell from "@/components/providers/invitation-shell";
import HeroSection from "@/components/sections/hero-section";
import PosterSection from "@/components/sections/poster-section";

export default function Home() {
  return (
    <InvitationShell>
      <main>
        <HeroSection />
        <PosterSection />
      </main>
    </InvitationShell>
  );
}
