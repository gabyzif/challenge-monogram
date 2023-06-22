import Hero from '../components/Hero/Hero';
import JavascriptSection from '@/components/JavascriptSection/JavascriptSection';
import DarkSection from '@/components/DarkSection/DarkSection';
import MarkupSection from '@/components/Markup/MarkupSection';
import AuditSection from '@/components/AuditSection/AuditSection';

export default function Home() {
  return (
    <main className="mt-[4.5rem]">
      <Hero />
      <JavascriptSection />
      <DarkSection />
      {/* <MarkupSection />
      <AuditSection /> */}
    </main>
  );
}
