'use client';

import { useEffect, useState } from 'react';
import { IconContext, CaretRight, List as Menu, Minus, Plus, X, EnvelopeSimple as Mail, Browser as Globe, DeviceMobile as Smartphone, Database, Cloud, Briefcase as BriefcaseBusiness, Palette, UsersThree as Users } from '@phosphor-icons/react';
import { projects } from './projects';

const principles = [
  { title: 'Understand before building.', detail: 'I start by understanding the problem, the people I am building for, and the constraints around the work. I define what success looks like before deciding how to get there.' },
  { title: 'Make complexity feel simple.', detail: 'I turn complex requirements into clear journeys and focused interfaces. I make the important actions easy to find and give every detail a reason to be there.' },
  { title: 'Build for what comes next.', detail: 'I write code that is clear to read, maintain, and build on. I consider accessibility and performance from the start, and I think about the next person who will work on the system.' },
];

function Brand() {
  return <a className="brand" href="#top" aria-label="emsolutions home"><img src="/logo.png" width={215} height={138} alt="em"/><span>solutions</span></a>;
}

function WhatsAppIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.4 3.6A11.8 11.8 0 0 0 1.8 17.8L.2 23.7l6-1.6A11.8 11.8 0 0 0 20.4 3.6Z" fill="currentColor"/><path d="M12 3.3a8.7 8.7 0 0 0-7.5 13.1l.2.3-.9 3.2 3.3-.9.3.2A8.7 8.7 0 1 0 12 3.3Z" fill="white"/><path d="M9 7.5c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.3 3.8 2.1.8 2.5.6 3 .5.5 0 1.6-.6 1.8-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.4l-1.8-.8c-.3-.1-.5-.2-.7.1l-.8 1c-.1.2-.3.2-.6.1a7 7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.8c-.2-.3 0-.4.1-.5l.4-.5.3-.4c.1-.2.1-.4 0-.5l-.8-1.5Z" fill="currentColor"/></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<number | null>(0);
  const [currentSection, setCurrentSection] = useState('');
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      document.documentElement.style.setProperty('--reading-progress', String(progress));
      const readingLine = Math.min(window.innerHeight * .35, 240);
      const section = sections.find(item => {
        const bounds = item.getBoundingClientRect();
        return bounds.top <= readingLine && bounds.bottom > readingLine;
      });
      setCurrentSection(section?.id ?? '');
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.documentElement.style.removeProperty('--reading-progress');
    };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    elements.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add('will-reveal'); observer.observe(element);
      }
    });
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('will-reveal')); };
  }, []);

  return <IconContext.Provider value={{ weight: 'duotone', size: 20 }} >
    <div className="reading-progress" aria-hidden="true"/>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" id="top"><div className="container header-inner">
      <Brand/>
      <nav id="main-nav" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        <a href="#work" aria-current={currentSection === 'work' ? 'location' : undefined} onClick={() => setMenuOpen(false)}>Work</a><a href="#about" aria-current={currentSection === 'about' ? 'location' : undefined} onClick={() => setMenuOpen(false)}>About</a><a className="nav-contact" href="#contact" aria-current={currentSection === 'contact' ? 'location' : undefined} onClick={() => setMenuOpen(false)}>Get in touch</a>
      </nav>
      <button className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
    </div></header>

    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><div className="container">
        <div className="hero-layout"><div className="hero-copy">
          <div className="eyebrow hero-intro"><span className="status-dot"/> INDEPENDENT SOFTWARE ENGINEER</div>
          <h1 id="hero-title">Thoughtful software.<br/><span>Built for real life.</span></h1>
          <p className="hero-description">I’m Uchendu Martins Echezona, the software engineer behind emsolutions. I build clear, dependable web and mobile experiences for businesses, creatives, and the people they serve.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore selected work <CaretRight size={17} weight="regular" aria-hidden="true"/></a><a className="text-link" href="#contact">Let’s talk</a></div>
        </div><figure className="hero-portrait"><img src="/portrait.webp" width={720} height={1004} alt="Uchendu Martins Echezona, software engineer behind emsolutions" fetchPriority="high"/><figcaption><strong>Uchendu Martins Echezona</strong><span>Software engineer · Web &amp; mobile</span></figcaption></figure></div>
      </div></section>

      <section className="work-section section" id="work" aria-labelledby="work-title"><div className="container">
        <div className="section-heading" data-reveal><div><span className="eyebrow">SOLUTIONS IN PRACTICE</span><h2 id="work-title">Websites and platforms I’ve built.</h2></div><p>A selection of live projects, each shaped<br className="desktop-break"/> around a different audience and purpose.</p></div>
        <div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.slug} data-reveal style={{ '--reveal-delay': `${(index % 3) * 80}ms` } as React.CSSProperties}>
          <a className="project-preview" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`}>
            {project.screenshot ? <picture className="project-picture">{project.mobileScreenshot && <source media="(max-width: 760px)" srcSet={project.mobileScreenshot}/>}<img src={project.screenshot} alt={project.screenshotAlt ?? `${project.name} website screenshot`} width={1264} height={575} loading="lazy"/></picture> : <div className="project-fallback">{project.name}</div>}
          </a>
          <div className="project-content"><div className="project-category"><span>{project.category === 'BUSINESS WEBSITE' ? <BriefcaseBusiness size={20} aria-hidden="true"/> : project.category === 'ARTIST PORTFOLIO' ? <Palette size={20} aria-hidden="true"/> : <Users size={20} aria-hidden="true"/>}{project.category}</span><a className="project-visit-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`}>Visit</a></div><h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3><p>{project.description}</p></div>
        </article>)}</div>
      </div></section>

      <section className="about-section section" id="about" aria-labelledby="about-title"><div className="container about-layout">
      <div className="approach-layout about-process" id="approach" role="group" aria-labelledby="approach-title">
        <div data-reveal><span className="eyebrow">FROM UNDERSTANDING TO DELIVERY</span><h2 id="approach-title">Good work starts<br/>with good decisions.</h2><p className="section-description">A clear process, from understanding<br/>the problem to refining the details.</p></div>
        <div className="principles" data-reveal>{principles.map((principle, index) => <div className={`principle ${active === index ? 'expanded' : ''}`} key={principle.title}><h3><button aria-expanded={active === index} aria-controls={`principle-${index}`} onClick={() => setActive(active === index ? null : index)}><span className="principle-bullet" aria-hidden="true"/><span>{principle.title}</span>{active === index ? <Minus size={17}/> : <Plus size={17}/>}</button></h3><div id={`principle-${index}`} className="principle-panel" aria-hidden={active !== index} inert={active !== index}><div><p>{principle.detail}</p></div></div></div>)}</div>
      </div>
        <div className="about-heading" data-reveal><span className="eyebrow">THE EXPERIENCE BEHIND THE WORK</span><h2 id="about-title">Engineering for web, mobile, and beyond.</h2><p>I care about how software works, and how it feels to use.</p></div>
        <div className="about-details" data-reveal>
          <p className="lead">I build for the web and mobile, connecting thoughtful interfaces with dependable systems.</p>
          <div className="about-biography"><p>I work across full-stack web development and mobile apps. I use Next.js, TypeScript, and Tailwind CSS for the web, and React Native to bring mobile experiences to life.</p>
          <p>My experience extends to MongoDB and SQL databases, media management with Cloudinary, and cloud services with AWS. That breadth helps me think through how an application fits together, from its interface and data to its media and deployment.</p>
          <p>Whether I’m building a business website, a creative portfolio, or a mobile app, I start with the people using it. I aim for clear interactions, maintainable code, and a foundation that can grow with the product.</p></div>
          <div className="toolkit toolkit-grouped"><h3>TECHNOLOGIES I WORK WITH</h3>
            <dl className="toolkit-groups">
              <div><dt><Globe size={20} aria-hidden="true"/>Web</dt><dd>Next.js <span>·</span> TypeScript <span>·</span> Tailwind CSS</dd></div>
              <div><dt><Smartphone size={20} aria-hidden="true"/>Mobile</dt><dd>React Native</dd></div>
              <div><dt><Database size={20} aria-hidden="true"/>Data</dt><dd>MongoDB <span>·</span> SQL databases</dd></div>
              <div><dt><Cloud size={20} aria-hidden="true"/>Cloud &amp; media</dt><dd>AWS <span>·</span> Cloudinary <span>·</span> Vercel</dd></div>
            </dl>
          </div>
        </div>
      </div></section>



      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-layout" data-reveal><div><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2 id="contact-title">Let’s build something useful.</h2><p>A project, an opportunity, or a problem worth solving.<br/>I’d like to hear about it.</p></div><div className="contact-options"><a className="contact-email" href="mailto:echemartins47@gmail.com"><span><Mail size={20} aria-hidden="true"/> START A CONVERSATION</span><strong>echemartins47@gmail.com</strong></a><a className="whatsapp-link" href="https://wa.me/2347037912693" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp at +234 703 791 2693 (opens in a new tab)"><span className="whatsapp-identity"><WhatsAppIcon/><span>Chat on WhatsApp <small>+234 703 791 2693</small></span></span></a></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><Brand/><span>© {new Date().getFullYear()} emsolutions. Built with care.</span><a href="#top">Back to top</a></div></footer>
  </IconContext.Provider>;
}

