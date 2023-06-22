import Image from 'next/image';
import Hero from '../components/Hero/Hero';
import JavascriptSection from '@/components/JavascriptSection/JavascriptSection';

export default function Home() {
  return (
    <main className="my-[4.5rem]">
      <Hero />
      <JavascriptSection />
    </main>
  );
}
