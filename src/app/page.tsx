import { Hero } from './components/Hero';
import { ImpactStats } from './components/ImpactStats';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Testimonials } from './components/Testimonials';
import FAQSection from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ImpactStats />
      <FeaturedProjects />
      <Testimonials />
      <FAQSection />
    </div>
  );
}
