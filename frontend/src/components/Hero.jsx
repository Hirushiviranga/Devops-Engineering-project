import { useEffect, useRef } from 'react';
import '../App.css';
import heroBg from '../assets/img/hero-bg.jpg';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const initTyped = async () => {
      const { default: Typed } = await import('typed.js');

      if (typedRef.current) {
        new Typed(typedRef.current, {
          strings: [
            'Volunteer',
            'Content Writer',
            'Web Developer',
            'UI/UX Designer',
            'Translator',
          ],
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
        });
      }
    };

    initTyped();
  }, []);

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}
    >
      {/* Optional dark overlay for better text contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // adjust darkness here
          zIndex: 1,
        }}
      ></div>

      <div
        className="hero-container"
        data-aos="fade-in"
        style={{ zIndex: 2, textAlign: 'center', color: '#fff' }}
      >
        <h1>HIRUSHI SIRIWARDHANA</h1>
        <p>
          I'm a <span ref={typedRef}></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;

