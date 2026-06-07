/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from 'react';
import Part1Research from './sections/Part1Research';
import Part2Motifs from './sections/Part2Motifs';
import Part3Data from './sections/Part3Data';
import Part4Video from './sections/Part4Video';
import Part5End from './sections/Part5End';
import { Header, Tracker, BackToTop } from './components/UI';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-[50] pointer-events-none overflow-hidden m-0 p-0 bg-black flex items-center justify-center">
         <iframe 
            src="https://cdn.21st.dev/jatin-yadav05/old-television-shader/default/bundle.1757953843867.html?theme=dark&dark=true" 
            style={{ width: '100vw', height: '100vh', display: 'block', border: 'none', opacity: 0.7, transform: 'scale(2.5)' }}
            title="Background Shader"
         />
      </div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Tracker />
      <BackToTop />
      
      <main className="relative z-0">
        <Part1Research />
        <Part2Motifs />
        <Part3Data />
        <Part4Video />
        <Part5End />
      </main>

      <Footer />
    </>
  );
}
