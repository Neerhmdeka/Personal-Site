"use client";

import { useEffect, useState } from "react";
import RotatingEncryptedText from "./components/RotatingEncryptedText";

export default function Home() {
  const [activeSection, setActiveSection] = useState("background");

  useEffect(() => {
    const sections = ["background", "about", "experience", "work", "articles"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  return (
    <div className="bg-white">
      <main>
        <div className="max-w-[1092px] mx-auto">
          <div className="flex relative px-6 gap-12">
            <div className="w-4/5">
              <section id="background" className="h-screen flex items-center">
                <div>
                  <img src="/dithered_image.png" alt="Neerh Deka" className="w-[100px] h-[100px] rounded-full object-cover mb-8" />
                  <div className="text-[36px]">
                    <div>Hi, my name is Neerh, I am a <RotatingEncryptedText words={["Designer", "Developer", "Founder"]} cycleDelayMs={3000} revealDelayMs={400} /></div>
                    <div>with almost a decade of experience, who</div>
                    <div>cares about making beautiful things</div>
                    <div>that help people.</div>
                  </div>
                  <div className="mt-8">
                    <a href="mailto:mriganavdeka@gmail.com" className="text-[16px] bg-black text-white px-6 py-3 inline-block transition-colors hover:bg-gray-800 active:bg-gray-900 uppercase">Contact</a>
                  </div>
                </div>
              </section>
              <section id="experience" className="h-screen flex items-center">
                <div className="w-full">
                  <div className="grid grid-cols-3 gap-4 mb-12">
                    <div className="text-[16px]">Bynder</div>
                    <div className="text-[16px]">Senior Product Designer</div>
                    <div className="text-[16px]">Mar 2022-Now</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-12">
                    <div className="text-[16px] text-gray-500">Telescope</div>
                    <div className="text-[16px] text-gray-500">Founding designer</div>
                    <div className="text-[16px] text-gray-500">2023</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-12">
                    <div className="text-[16px] text-gray-500">Swemax</div>
                    <div className="text-[16px] text-gray-500">Product Designer</div>
                    <div className="text-[16px] text-gray-500">2021-2022</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-[16px] text-gray-500">Advantage</div>
                    <div className="text-[16px] text-gray-500">Product designer</div>
                    <div className="text-[16px] text-gray-500">March 2020-22</div>
                  </div>
                </div>
              </section>
              <section id="work" className="h-screen flex items-center">
                <div className="w-full max-w-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <a href="https://pitch.com/v/microsite-builder-kyvttp" target="_blank" rel="noopener noreferrer" className="aspect-square bg-gray-200 overflow-hidden block relative group transition-transform hover:scale-[1.02] active:scale-[0.98]">
                      <video 
                        src="/P1.mov" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <div className="text-[16px] font-medium mb-1">Doubling AAR using microsite builder</div>
                        <div className="text-[14px] text-white/80">Product design • Strategy • 2024</div>
                      </div>
                    </a>
                    <a href="https://pitch.com/v/design-system-update-v3i5uk" target="_blank" rel="noopener noreferrer" className="aspect-square bg-gray-200 overflow-hidden block relative group transition-transform hover:scale-[1.02] active:scale-[0.98]">
                      <video 
                        src="/P2.mov" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover object-center scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <div className="text-[16px] font-medium mb-1">Design system update</div>
                        <div className="text-[14px] text-white/80">Product design • Design System • 2024</div>
                      </div>
                    </a>
                    <a href="https://pitch.com/v/bynder-onboarding-4j9rpa" target="_blank" rel="noopener noreferrer" className="aspect-square bg-gray-200 overflow-hidden block relative group transition-transform hover:scale-[1.02] active:scale-[0.98]">
                      <img 
                        src="/P3.png" 
                        alt="Project 3"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <div className="text-[16px] font-medium mb-1">Reducing Bynder Onboarding time</div>
                        <div className="text-[14px] text-white/80">Product design • Strategy • 2023</div>
                      </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1_CPOu_A_bUf6W7OOxe6MVLYi69RLxLb7/view" target="_blank" rel="noopener noreferrer" className="aspect-square bg-gray-200 overflow-hidden block relative group transition-transform hover:scale-[1.02] active:scale-[0.98]">
                      <img 
                        src="/P4.png" 
                        alt="Project 4"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <div className="text-[16px] font-medium mb-1">Helping founders launch a new product</div>
                        <div className="text-[14px] text-white/80">UX design • Mobile • 2021</div>
                      </div>
                    </a>
                  </div>
                </div>
              </section>
              <section id="articles" className="h-screen flex items-center">
                <div className="w-full">
                  <div className="flex items-start gap-3 mb-12">
                    <img src="https://miro.medium.com/v2/resize:fill:320:214/1*ssXH29tINN6KwwSPf-W2jQ.jpeg" alt="" className="w-[40px] h-[40px] object-cover flex-shrink-0" />
                    <div className="flex flex-col">
                      <div className="text-[16px]">Beyond the algorithm: The profound power of product detail</div>
                      <div className="text-[14px] text-gray-500">Oct 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-12">
                    <img src="https://miro.medium.com/v2/da:true/resize:fill:320:214/0*ZfK9SOD20AOgA27c" alt="" className="w-[40px] h-[40px] object-cover flex-shrink-0" />
                    <div className="flex flex-col">
                      <div className="text-[16px]">What is a Designer?</div>
                      <div className="text-[14px] text-gray-500">Oct 16, 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-12">
                    <img src="https://miro.medium.com/v2/resize:fill:320:214/1*KR7DnwdQxA0nlJRriTKEqQ.png" alt="" className="w-[40px] h-[40px] object-cover flex-shrink-0" />
                    <div className="flex flex-col">
                      <div className="text-[16px]">The Myth of 'Customer-Centricity': Iconic products defied their user</div>
                      <div className="text-[14px] text-gray-500">Sep 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-12">
                    <img src="https://miro.medium.com/v2/resize:fill:320:214/1*cw5nFvjJbdweqHVOXUQ0rA.png" alt="" className="w-[40px] h-[40px] object-cover flex-shrink-0" />
                    <div className="flex flex-col">
                      <div className="text-[16px]">The Feature Funeral: Why your SaaS innovation depends on killing your darling</div>
                      <div className="text-[14px] text-gray-500">Aug 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-12">
                    <img src="https://miro.medium.com/v2/resize:fill:320:214/1*2m93XqEK9mQGVPAA5dqWCQ.png" alt="" className="w-[40px] h-[40px] object-cover flex-shrink-0" />
                    <div className="flex flex-col">
                      <div className="text-[16px]">How product designers are the first revenue engine for AI startup</div>
                      <div className="text-[14px] text-gray-500">Jul 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-8">
                    <img src="https://miro.medium.com/v2/resize:fill:320:214/1*p0bNGI7ZpkdJxk_-ulhrSA.png" alt="" className="w-[40px] h-[40px] object-cover flex-shrink-0" />
                    <div className="flex flex-col">
                      <div className="text-[16px]">The AI-ready design system: The 5 components your component library must update first</div>
                      <div className="text-[14px] text-gray-500">Jun 2025</div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="https://medium.com/@mriganavdeka" target="_blank" rel="noopener noreferrer" className="text-[16px] bg-black text-white px-6 py-3 inline-block transition-colors hover:bg-gray-800 active:bg-gray-900 uppercase">Read more</a>
                  </div>
                </div>
              </section>
              <section id="about" className="h-screen flex items-center">
                <div className="w-full max-w-2xl">
                  <div className="text-[16px]">
                    <div className="mb-8">
                      <div className="mb-4 uppercase">I can help with</div>
                      <div className="text-gray-500 space-y-2">
                        <div>Framer and Webflow website design & development</div>
                        <div>Local business websites</div>
                        <div>Digital product design</div>
                        <div>Design systems</div>
                        <div>Startup design advisor</div>
                        <div>Startup and business strategy</div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="mb-4 uppercase">Current Interests</div>
                      <div className="text-gray-500 space-y-2">
                        <div>All things dither and shaders</div>
                        <div>Woodworking</div>
                        <div>Working out and combat sports</div>
                        <div>90s electronics & hardware</div>
                        <div>Collecting Vinyl</div>
                        <div>Cars and motosport</div>
                        <div>AI tools and apps</div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-4 uppercase">Worked with/For</div>
                      <div className="grid grid-cols-5 gap-6 items-center">
                        <div className="flex items-center justify-center h-4">
                          <img src="/a.png" alt="" className="max-h-4 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex items-center justify-center h-4">
                          <img src="/b.png" alt="" className="max-h-4 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex items-center justify-center h-4">
                          <img src="/c.png" alt="" className="max-h-4 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex items-center justify-center h-4">
                          <img src="/d.png" alt="" className="max-h-4 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex items-center justify-center h-4">
                          <img src="/e.png" alt="" className="max-h-4 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex items-center justify-center h-3">
                          <img src="/f.png" alt="" className="max-h-3 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex items-center justify-center h-3">
                          <img src="/g.png" alt="" className="max-h-3 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex items-center justify-center h-4">
                          <img src="/h.png" alt="" className="max-h-4 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex items-center justify-center h-4">
                          <img src="/i.png" alt="" className="max-h-4 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-1/5 sticky top-0 h-screen flex items-center">
              <nav className="flex flex-col gap-4 w-full items-start">
                <a 
                  href="#background" 
                  className={`group text-[16px] px-2 py-1 -mx-2 -my-1 transition-colors flex items-center gap-2 ${
                    activeSection === "background" 
                      ? "bg-black text-white" 
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  <video 
                    src="/Ani.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className={`w-[15px] h-[15px] flex-shrink-0 ${
                      activeSection === "background" ? "block" : "hidden group-hover:block"
                    }`}
                  />
                  Background
                </a>
                <a 
                  href="#experience" 
                  className={`group text-[16px] px-2 py-1 -mx-2 -my-1 transition-colors flex items-center gap-2 ${
                    activeSection === "experience" 
                      ? "bg-black text-white" 
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  <video 
                    src="/Ani.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className={`w-[15px] h-[15px] flex-shrink-0 ${
                      activeSection === "experience" ? "block" : "hidden group-hover:block"
                    }`}
                  />
                  Experience
                </a>
                <a 
                  href="#work" 
                  className={`group text-[16px] px-2 py-1 -mx-2 -my-1 transition-colors flex items-center gap-2 ${
                    activeSection === "work" 
                      ? "bg-black text-white" 
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  <video 
                    src="/Ani.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className={`w-[15px] h-[15px] flex-shrink-0 ${
                      activeSection === "work" ? "block" : "hidden group-hover:block"
                    }`}
                  />
                  Work
                </a>
                <a 
                  href="#articles" 
                  className={`group text-[16px] px-2 py-1 -mx-2 -my-1 transition-colors flex items-center gap-2 ${
                    activeSection === "articles" 
                      ? "bg-black text-white" 
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  <video 
                    src="/Ani.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className={`w-[15px] h-[15px] flex-shrink-0 ${
                      activeSection === "articles" ? "block" : "hidden group-hover:block"
                    }`}
                  />
                  Articles
                </a>
                <a 
                  href="#about" 
                  className={`group text-[16px] px-2 py-1 -mx-2 -my-1 transition-colors flex items-center gap-2 ${
                    activeSection === "about" 
                      ? "bg-black text-white" 
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  <video 
                    src="/Ani.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className={`w-[15px] h-[15px] flex-shrink-0 ${
                      activeSection === "about" ? "block" : "hidden group-hover:block"
                    }`}
                  />
                  About
                </a>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
