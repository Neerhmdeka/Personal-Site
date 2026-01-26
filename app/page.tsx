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
        <div className="max-w-[336px] md:max-w-[768px] xl:max-w-[960px] mx-auto py-[1.5rem] px-[1rem] grid grid-cols-12 items-center">
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
        <div className="max-w-[336px] md:max-w-[768px] xl:max-w-[960px] mx-auto py-[1.5rem] px-[1rem] md:px-0 grid grid-cols-12 items-center relative">
          <a href="#work" className="col-span-6 md:col-span-2 text-[0.875rem] md:text-[1rem] pl-0 md:pl-[2rem] uppercase font-space-grotesk flex items-center hover:text-gray-400 transition-colors">Work</a>
          <a href="#articles" className="col-span-6 md:col-span-2 md:col-start-3 text-[0.875rem] md:text-[1rem] pl-0 md:pl-[2rem] uppercase font-space-grotesk flex items-center hover:text-gray-400 transition-colors">Articles</a>
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
          <div className="h-full max-w-[336px] md:max-w-[768px] xl:max-w-[960px] mx-auto grid grid-cols-12 items-stretch relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="hidden md:block absolute left-[66.666667%] top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="col-span-12 md:col-span-8 xl:col-span-8 px-[1rem] md:px-[1.5rem] pt-[2rem] md:pt-[4rem] pb-0 md:pb-[4rem] flex items-center">
              <p className="text-[1rem] md:text-[1.5rem]">Hi, I'm Neerh, a product designer and software engineer based in Rotterdam. This is my corner of the internet, where I share my work, craft, experiments, and the in-progress ideas I'm exploring.

Over the past decade, I've collaborated with startups to build well-designed, fast, and delightful digital experiences. Outside of work, I'm into music, gaming, and the intersection of design and code. I'm especially drawn to using technology to create products that offer health, help, or hope where it truly matters.</p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 xl:col-span-4 xl:col-start-9 px-[1rem] md:px-[1.5rem] pt-[2rem] md:pt-[4rem] pb-[8rem] md:pb-[4rem] flex flex-col justify-center">
              <div className="space-y-[1.5rem] md:space-y-[2rem]">
                <div>
                  <div className="text-[0.875rem] md:text-[1rem] font-normal">Senior Product Designer @ Bynder</div>
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

        {/* Section 2 - Work Grid */}
        <section id="work" className="w-screen border-b border-[rgba(14,14,13,0.05)] relative">
          <div className="w-full relative">
            <div className="hidden md:block absolute left-[calc(50%+480px)] top-0 bottom-0 w-0 border-r border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="max-w-[336px] md:max-w-[768px] xl:max-w-[960px] mx-auto grid grid-cols-12 relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="col-span-full">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 grid-rows-[repeat(6,minmax(450px,1fr))] md:grid-rows-[repeat(3,minmax(440px,1fr))] xl:grid-rows-[1fr_1fr] gap-0">
                <div className="project-card col-span-1 md:col-span-1 xl:col-span-4 row-span-1 relative overflow-hidden bg-black group min-h-[450px] md:min-h-[440px] xl:h-[479px]">
                  <img src="/ORBIT-5-01-LITE.gif" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="hidden xl:flex absolute inset-0 items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="card-title-box">{getProjectTitle(1)}</div>
                  </div>
                  <div className="hidden xl:flex absolute inset-0 items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <a href={getProjectLink(1)} target="_blank" rel="noopener noreferrer" className="card-hover-button pointer-events-auto">{getButtonText(1)}</a>
                  </div>
                </div>
                <div className="project-card col-span-1 md:col-span-1 xl:col-span-4 row-span-1 relative overflow-hidden bg-white group min-h-[450px] md:min-h-[440px] xl:h-[479px]">
                  <img src="/Scene-17.gif" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="hidden xl:flex absolute inset-0 items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="card-title-box card-title-white">{getProjectTitle(2)}</div>
                  </div>
                  <div className="hidden xl:flex absolute inset-0 items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <a href={getProjectLink(2)} target="_blank" rel="noopener noreferrer" className="card-hover-button pointer-events-auto">{getButtonText(2)}</a>
                  </div>
                </div>
                <div className="project-card col-span-1 md:col-span-1 xl:col-span-4 row-span-1 relative overflow-hidden bg-black group min-h-[450px] md:min-h-[440px] xl:h-[479px]">
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
                <div className="project-card col-span-1 md:col-span-1 xl:col-span-4 row-span-1 relative overflow-hidden group min-h-[450px] md:min-h-[440px] xl:h-[479px]">
                  <img src="/Swemax.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="hidden xl:flex absolute inset-0 items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="card-title-box">{getProjectTitle(4)}</div>
                  </div>
                  <div className="hidden xl:flex absolute inset-0 items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <a href={getProjectLink(4)} target="_blank" rel="noopener noreferrer" className="card-hover-button pointer-events-auto">{getButtonText(4)}</a>
                  </div>
                </div>
                <div className="project-card col-span-1 md:col-span-1 xl:col-span-4 row-span-1 relative overflow-hidden bg-black group min-h-[450px] md:min-h-[440px] xl:h-[479px]">
                  <img src="/Search (1).gif" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="hidden xl:flex absolute inset-0 items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="card-title-box">{getProjectTitle(5)}</div>
                  </div>
                  <div className="hidden xl:flex absolute inset-0 items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <button className="card-hover-button pointer-events-auto">{getButtonText(5)}</button>
                  </div>
                </div>
                <div className="project-card col-span-1 md:col-span-1 xl:col-span-4 row-span-1 relative overflow-hidden bg-black group min-h-[450px] md:min-h-[440px] xl:h-[479px]">
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

        {/* Section 3 - 100vh */}
        <section className="hidden xl:block min-h-screen md:h-screen w-screen border-b border-[rgba(14,14,13,0.05)]">
          <div className="h-full max-w-[336px] md:max-w-[768px] xl:max-w-[960px] mx-auto grid grid-cols-12 items-start relative py-[8rem]">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="hidden md:block absolute left-[66.666667%] top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="col-span-12 md:col-span-8 xl:col-span-8 px-[1rem] md:px-[1.5rem] flex flex-col h-full">
              <div className="flex flex-col space-y-[2rem]">
                <p className="text-[2em]">I help you envision the future and create steps to reach it</p>
                <div className="flex flex-col gap-[1rem]">
                  <p className="text-[0.875rem] md:text-[1rem]">I believe in care and love for ones craft, my job as a designer I believe is to help you dream of what a better world could look like, visualise it with attention to detail and plan out how to achieve that dream.</p>
                  <p className="text-[0.875rem] md:text-[1rem]">My work isn't created in isolation. It's shaped by constant exposure to the art and thinking of thousands of artists, designers, and creators. Their work influences my perspective, helping me refine my own style, taste, and the way I approach and solve problems.</p>
                  <p className="text-[0.875rem] md:text-[1rem]">I believe the product designer's value isn't in their skill with software; it's in their strategic skill to synthesize human needs and technological capability. We are the ones uniquely positioned to see the latent potential in the market, decode its signs, and design the tangible path to get there.</p>
                </div>
              </div>
              <div className="flex-1 flex items-end">
                <img src="/Signature.png" alt="Signature" className="w-auto h-auto max-w-[200px]" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 xl:col-span-4 xl:col-start-9 px-[1rem] md:px-[1.5rem] flex flex-col justify-start">
              <div className="space-y-[1.5rem] md:space-y-[2rem]">
                <div>
                  <div className="text-[0.875rem] md:text-[1rem] font-normal mb-[1rem]">I can help with</div>
                  <div className="space-y-[0.75rem]">
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Framer and Webflow website design & development</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Local business websites</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Digital product design</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Design systems</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Startup design advisor</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Startup and business strategy</div>
                  </div>
                </div>
                <div>
                  <div className="text-[0.875rem] md:text-[1rem] font-normal mb-[1rem]">Current Interests</div>
                  <div className="space-y-[0.75rem]">
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">All things dither and shaders</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Woodworking</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Working out and combat sports</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">90s electronics & hardware</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Collecting Vinyl</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">Cars and motosport</div>
                    <div className="text-[0.875rem] md:text-[1rem] text-gray-400">AI tools and apps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Logos Strip */}
        <section className="w-screen border-b border-[rgba(14,14,13,0.05)] py-[2rem] md:py-[4rem] overflow-hidden">
          <div className="logos-scroll">
            <div className="logos-track">
              <img src="/a.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/b.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/c.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/d.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/e.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/f.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/g.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/h.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/j.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/l.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              {/* Duplicate for seamless loop */}
              <img src="/a.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/b.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/c.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/d.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/e.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/f.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/g.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/h.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/j.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/l.png" alt="Company logo" className="logo-item opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </section>

        {/* Section 5 - Articles */}
        <section id="articles" className="hidden xl:block w-screen border-b border-[rgba(14,14,13,0.05)]">
          <div className="max-w-[336px] md:max-w-[768px] xl:max-w-[960px] mx-auto border-l border-[rgba(14,14,13,0.05)] py-[24px] md:py-[64px] relative">
            <div className="hidden md:block absolute left-[66.666667%] top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-8 flex flex-col px-[1rem] md:px-[1.5rem]">
              {[
                {
                  title: "How product designers are the first revenue engine for AI startups",
                  date: "Nov 2025",
                  url: "https://medium.com/@mriganavdeka/how-product-designers-are-the-first-revenue-engine-for-ai-startups-96979de79227"
                },
                {
                  title: "Beyond the algorithm: The profound power of product detail",
                  date: "Oct 2025",
                  url: "https://medium.com/@mriganavdeka/beyond-the-algorithm-the-profound-power-of-product-detail-9058ccb5b2d4"
                },
                {
                  title: "The AI-ready design system: The 5 components your component library must update first",
                  date: "Oct 2025",
                  url: "https://medium.com/design-bootcamp/the-ai-ready-design-system-the-5-components-your-component-library-must-update-first-531309f35d85"
                },
                {
                  title: "What is a designer",
                  date: "Oct 2025",
                  url: "https://medium.com/@mriganavdeka/what-is-a-designer-eb5d352c9043"
                },
                {
                  title: "The Drag-&-Drop delusion: Why no-code solves the wrong creative pain",
                  date: "Oct 2025",
                  url: "https://medium.com/@mriganavdeka/the-drag-and-drop-delusion-why-no-code-solves-the-wrong-creative-pain-dcb1efba804c"
                },
                {
                  title: "The AI Paradox: When more friction leads to better UX and stronger retention",
                  date: "Oct 2025",
                  url: "https://medium.com/@mriganavdeka/the-ai-paradox-when-more-friction-leads-to-better-ux-and-stronger-retention-ec203aabb0f9"
                },
                {
                  title: "The data shackles: Why being \"data-driven\" kills your next breakthrough",
                  date: "Oct 2025",
                  url: "https://medium.com/@mriganavdeka/the-data-shackles-why-being-data-driven-kills-your-next-breakthrough-afeb1157e997"
                },
                {
                  title: "The myth of customer-centricity: Iconic products defied their users and why you should too",
                  date: "Oct 2025",
                  url: "https://medium.com/@mriganavdeka/the-myth-of-customer-centricity-iconic-products-defied-their-users-and-why-you-should-too-b68ba4f3561c"
                }
              ].map((article, index, array) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-[1.5rem] md:py-[2rem] block hover:bg-gray-50 transition-colors -mx-[1rem] md:-mx-[1.5rem]"
                >
                  <div className="flex items-center justify-between px-[1rem] md:px-[1.5rem]">
                    <h3 className="text-[0.875rem] md:text-[1rem] font-normal group-hover:text-gray-600 transition-colors">
                      {article.title}
                    </h3>
                    <div className="relative flex items-center">
                      <p className="text-[0.75rem] md:text-[0.875rem] text-gray-400 font-space-grotesk group-hover:opacity-0 transition-opacity">
                        {article.date}
                      </p>
                      <span className="text-base text-white bg-black px-[1rem] py-[0.5rem] absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Read
                      </span>
                    </div>
                  </div>
                </a>
              ))}
              </div>
              <div className="hidden xl:block col-span-4 px-[1rem] md:px-[1.5rem]">
                <h2 className="text-base font-normal mb-[1.5rem] md:mb-[2rem]">Published Articles</h2>
                <p className="text-[0.875rem] md:text-[1rem] text-gray-400">
                  I've been using Medium as a space to deeply explore what I'm learning, going further than the surface-level takes that dominate much of the internet.
                </p>
                <p className="text-[0.875rem] md:text-[1rem] mt-[1rem] text-gray-400">
                  Over time, this evolved from short articles into more in-depth essays, where I share my perspective on the current state of design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="w-screen bg-black relative py-[4rem] md:py-[6rem] xl:py-0">
          <div className="max-w-[336px] md:max-w-[768px] xl:max-w-[960px] mx-auto relative">
            <div className="hidden md:block absolute left-[66.666667%] top-0 bottom-0 w-0 border-l border-[rgba(14,14,13,0.05)] pointer-events-none"></div>
            <div className="grid grid-cols-12 xl:items-stretch">
              <div className="col-span-12 xl:col-span-8 flex flex-col items-start justify-center px-[1rem] md:px-[1.5rem] gap-[2rem] md:gap-[3rem] xl:min-h-[600px]">
                <h2 className="text-[64px] font-normal text-white leading-none">
                  Let's Work Together
                </h2>
                <a 
                  href="mailto:mriganavdeka@gmail.com"
                  className="text-base text-white bg-black border border-white px-[2rem] py-[1rem] hover:bg-white hover:text-black transition-colors"
                >
                  Contact
                </a>
              </div>
              <div className="hidden xl:flex col-span-4 items-center px-[1rem] md:px-[1.5rem]">
                <div className="text-white">
                  <p className="text-[0.875rem] md:text-[1rem] mb-[1rem]">
                    Want to get in touch? Or just say Hi?
                  </p>
                  <p className="text-[0.875rem] md:text-[1rem] mb-[1rem]">
                    Drop me a line at{' '}
                    <a href="mailto:mriganavdeka@gmail.com" className="underline hover:text-gray-400 transition-colors">
                      mriganavdeka@gmail.com
                    </a>
                  </p>
                  <p className="text-[0.875rem] md:text-[1rem]">
                    If you ever come to Rotterdam, let's meet up for coffee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-screen bg-black border-t border-[rgba(255,255,255,0.1)]">
          <div className="max-w-[336px] md:max-w-[768px] xl:max-w-[960px] mx-auto px-[1rem] md:px-[1.5rem] py-[2rem] md:py-[3rem]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-[1.5rem] md:gap-0">
              {/* Left - Text */}
              <div className="text-white text-[0.875rem] md:text-[1rem]">
                Neerh Deka® 2025
              </div>
              
              {/* Middle - Icons */}
              <div className="flex items-center gap-[1.5rem] md:gap-[2rem]">
                <a href="https://www.linkedin.com/in/mriganavdeka/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://drive.google.com/file/d/1lyPG-P0Cog1GT3f5pIcXN9_QyzYzYMhX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                  <span className="text-[0.875rem] md:text-[1rem] font-normal">CV</span>
                </a>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
