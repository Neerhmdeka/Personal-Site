"use client";

import { useEffect, useRef } from 'react';

export default function Home() {
  const video1Ref = useRef<HTMLVideoElement>(null);

  const getButtonText = (cardNumber: number) => {
    if (cardNumber === 5) return 'COMING SOON';
    if (cardNumber === 6) return 'NDA';
    return 'READ CASE STUDY';
  };

  const getProjectTitle = (cardNumber: number) => {
    const titles: { [key: number]: string } = {
      1: 'Site Builder',
      2: 'Design System update',
      3: 'Bynder Onboarding',
      4: 'Fitness mobile app',
      5: 'AI search',
      6: 'Notification system',
    };
    return titles[cardNumber] || 'Project';
  };

  const getProjectLink = (cardNumber: number) => {
    const links: { [key: number]: string } = {
      1: 'https://pitch.com/v/microsite-builder-kyvttp/a9d88970-aeb7-4a8f-8b78-9d3bf7fd8652',
      2: 'https://app.pitch.com/app/player/40ba0d9b-9e29-495d-bc8e-9fa9a3859aa5/7253ac73-ce21-42c4-85a8-2d0ca93960ba/cdc9630d-5bdb-438b-a2cc-65a9da0b94b4',
      3: 'https://app.pitch.com/app/player/40ba0d9b-9e29-495d-bc8e-9fa9a3859aa5/05093b1f-a449-4a58-a3ef-4581e6bd54c8/bd095b9b-9bed-4073-9af7-e7ca8b27709c',
      4: 'https://drive.google.com/file/d/1_CPOu_A_bUf6W7OOxe6MVLYi69RLxLb7/view',
    };
    return links[cardNumber] || '#';
  };

  useEffect(() => {
    // Ensure videos play after component mounts
    const playVideos = async () => {
      if (video1Ref.current) {
        try {
          await video1Ref.current.play();
        } catch (error) {
          console.error('Error playing video:', error);
        }
      }
    };
    playVideos();
  }, []);
  return (
    <div className="overflow-x-hidden">
      {/* Mobile/Tablet Header - Contact Only */}
      <header className="xl:hidden w-screen border-b border-[rgba(14,14,13,0.05)]">
        <div className="max-w-[300px] md:max-w-[768px] xl:max-w-[960px] mx-auto py-[1.5rem] px-[1rem] grid grid-cols-12 items-center">
          <a 
            href="mailto:mriganavdeka@gmail.com" 
            className="col-span-2 text-[0.875rem] md:text-[1rem] font-space-grotesk text-black hover:text-gray-400 transition-colors"
          >
            mriganavdeka@gmail.com
          </a>
        </div>
      </header>
      
      {/* Desktop Header - Full */}
      <header className="hidden xl:block w-screen border-b border-[rgba(14,14,13,0.05)]">
        <div className="max-w-[300px] md:max-w-[768px] xl:max-w-[960px] mx-auto py-[1.5rem] px-[1rem] md:px-0 grid grid-cols-12 items-center relative">
          <a href="#work" className="col-span-6 md:col-span-2 text-[0.875rem] md:text-[1rem] pl-0 md:pl-[2rem] uppercase font-space-grotesk flex items-center hover:text-gray-400 transition-colors">Work</a>
          <a href="#" className="col-span-6 md:col-span-2 md:col-start-3 text-[0.875rem] md:text-[1rem] pl-0 md:pl-[2rem] uppercase font-space-grotesk flex items-center hover:text-gray-400 transition-colors">Articles</a>
          <a 
            href="mailto:mriganavdeka@gmail.com" 
            className="col-span-12 md:col-span-2 md:col-start-11 text-[0.75rem] md:text-[1rem] mt-[0.5rem] md:mt-0 font-space-grotesk text-black flex items-center hover:text-gray-400 transition-colors"
          >
            mriganavdeka@gmail.com
          </a>
        </div>
      </header>
      <main>
        {/* Section 1 - 85vh */}
        <section className="min-h-[70vh] md:h-[70vh] xl:h-[85vh] w-screen border-b border-[rgba(14,14,13,0.05)]">
          <div className="h-full max-w-[300px] md:max-w-[768px] xl:max-w-[960px] mx-auto grid grid-cols-12 items-stretch relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="hidden md:block absolute left-[66.666667%] top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="col-span-12 md:col-span-8 xl:col-span-8 px-[1rem] md:px-[1.5rem] pt-[2rem] md:pt-[4rem] pb-0 md:pb-[4rem] flex items-center">
              <p className="text-[1rem] md:text-[1.5rem]">Hi, I'm Neerh, a product designer and software engineer based in Rotterdam. This is my corner of the internet, where I share my work, craft, experiments, and the in-progress ideas I'm exploring.

Over the past decade, I've collaborated with startups to build well-designed, fast, and delightful digital experiences. Outside of work, I'm into music, gaming, and the intersection of design and code. I'm especially drawn to using technology to create products that offer health, help, or hope where it truly matters.</p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 xl:col-span-4 xl:col-start-9 px-[1rem] md:px-[1.5rem] pt-[2rem] md:pt-[4rem] pb-[8rem] md:pb-[4rem] flex flex-col justify-center">
              <div className="space-y-[1.5rem] md:space-y-[2rem]">
                <div>
                  <div className="text-[0.875rem] md:text-[1rem] font-medium">Senior Product Designer @ Bynder</div>
                  <div className="text-[0.875rem] md:text-[1rem] font-space-grotesk">2022 - Present</div>
                </div>
                <div>
                  <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Founder @ Canopy</div>
                  <div className="text-[0.875rem] md:text-[1rem] font-space-grotesk text-gray-400">2021-2022</div>
                </div>
                <div>
                  <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Founding Designer / Consutant@ Telescope</div>
                  <div className="text-[0.875rem] md:text-[1rem] font-space-grotesk text-gray-400">2021 - 2023</div>
                </div>
                <div>
                  <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Product Designer @ Swemax</div>
                  <div className="text-[0.875rem] md:text-[1rem] font-space-grotesk text-gray-400">2020 - 2021</div>
                </div>
                <div>
                  <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Product Designer@ Advantage</div>
                  <div className="text-[0.875rem] md:text-[1rem] font-space-grotesk text-gray-400">2019 - 2020</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - 100vh */}
        <section id="work" className="min-h-screen md:h-screen w-screen border-b border-[rgba(14,14,13,0.05)] relative">
          <div className="h-full w-full relative">
            <div className="hidden md:block absolute left-[calc(50%+480px)] top-0 bottom-0 w-0 border-r border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="h-full max-w-[300px] md:max-w-[768px] xl:max-w-[960px] mx-auto grid grid-cols-12 relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="col-span-full h-full">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-rows-[repeat(6,minmax(450px,1fr))] md:grid-rows-[repeat(3,minmax(440px,1fr))] lg:grid-rows-[1fr_1fr] gap-0">
                <div className="project-card col-span-1 md:col-span-1 lg:col-span-4 row-span-1 relative overflow-hidden bg-black group min-h-[450px] md:min-h-[440px]">
                  <img src="/ORBIT-5-01-LITE.gif" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="hidden xl:flex absolute inset-0 items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="card-title-box">{getProjectTitle(1)}</div>
                  </div>
                  <div className="hidden xl:flex absolute inset-0 items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <a href={getProjectLink(1)} target="_blank" rel="noopener noreferrer" className="card-hover-button pointer-events-auto">{getButtonText(1)}</a>
                  </div>
                </div>
                <div className="project-card col-span-1 md:col-span-1 lg:col-span-4 row-span-1 relative overflow-hidden bg-white group min-h-[450px] md:min-h-[440px]">
                  <img src="/Scene-17.gif" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="hidden xl:flex absolute inset-0 items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="card-title-box card-title-white">{getProjectTitle(2)}</div>
                  </div>
                  <div className="hidden xl:flex absolute inset-0 items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <a href={getProjectLink(2)} target="_blank" rel="noopener noreferrer" className="card-hover-button pointer-events-auto">{getButtonText(2)}</a>
                  </div>
                </div>
                <div className="project-card col-span-1 md:col-span-1 lg:col-span-4 row-span-1 relative overflow-hidden bg-black group min-h-[450px] md:min-h-[440px]">
                  <video 
                    ref={video1Ref}
                    className="absolute inset-0 w-full h-full object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="auto"
                  >
                    <source src="/videoExport-2026-01-26@09-47-26.668-540x540@60fps.mp4" type="video/mp4" />
                  </video>
                  <div className="hidden xl:flex absolute inset-0 items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="card-title-box">{getProjectTitle(3)}</div>
                  </div>
                  <div className="hidden xl:flex absolute inset-0 items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <a href={getProjectLink(3)} target="_blank" rel="noopener noreferrer" className="card-hover-button pointer-events-auto">{getButtonText(3)}</a>
                  </div>
                </div>
                <div className="project-card col-span-1 md:col-span-1 lg:col-span-4 row-span-1 relative overflow-hidden group min-h-[450px] md:min-h-[440px]">
                  <img src="/Swemax.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="hidden xl:flex absolute inset-0 items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="card-title-box">{getProjectTitle(4)}</div>
                  </div>
                  <div className="hidden xl:flex absolute inset-0 items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <a href={getProjectLink(4)} target="_blank" rel="noopener noreferrer" className="card-hover-button pointer-events-auto">{getButtonText(4)}</a>
                  </div>
                </div>
                <div className="project-card col-span-1 md:col-span-1 lg:col-span-4 row-span-1 relative overflow-hidden bg-black group min-h-[450px] md:min-h-[440px]">
                  <img src="/Search (1).gif" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="hidden xl:flex absolute inset-0 items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="card-title-box">{getProjectTitle(5)}</div>
                  </div>
                  <div className="hidden xl:flex absolute inset-0 items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <button className="card-hover-button pointer-events-auto">{getButtonText(5)}</button>
                  </div>
                </div>
                <div className="project-card col-span-1 md:col-span-1 lg:col-span-4 row-span-1 relative overflow-hidden bg-black group min-h-[450px] md:min-h-[440px]">
                  <img src="/Notifications.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="hidden xl:flex absolute inset-0 items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="card-title-box">{getProjectTitle(6)}</div>
                  </div>
                  <div className="hidden xl:flex absolute inset-0 items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <button className="card-hover-button pointer-events-auto">{getButtonText(6)}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Section 3 - 150vh */}
        <section className="min-h-[150vh] md:h-[150vh] w-screen border-b border-[rgba(14,14,13,0.05)]">
          <div className="h-full max-w-[300px] md:max-w-[768px] xl:max-w-[960px] mx-auto grid grid-cols-12 relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="hidden md:block absolute left-[66.666667%] top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
          </div>
        </section>

        {/* Section 4 - 100vh */}
        <section className="min-h-screen md:h-screen w-screen">
          <div className="h-full max-w-[300px] md:max-w-[768px] xl:max-w-[960px] mx-auto grid grid-cols-12 relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="hidden md:block absolute left-[66.666667%] top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
