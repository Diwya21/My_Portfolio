import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { Achievements } from './components/Achievements';

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Achievements />
    </div>
  );
}

export default App;