import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Capabilities />
      <Projects />
      <ContactForm />
    </>
  );
}
