import React, { useState, useEffect } from 'react';
import { 
  Apple, 
  ExternalLink, 
  Building2, 
  ChevronDown, 
  CheckCircle2, 
  ChevronRight,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'about'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const workExperience = [
    {
      role: "Workplace Engineer",
      company: "Capgemini",
      period: "2026 — Present",
      status: "Current Role",
      description: "Engineering enterprise workspace solutions, cloud identity alignment, and Microsoft 365 ecosystems.",
      highlights: [
        "Microsoft 365 tenant design & cloud security baselines",
        "Identity federation & automated SCIM user provisioning",
        "Power Platform & operational efficiency tooling"
      ]
    },
    {
      role: "Technical Specialist",
      company: "The Quill",
      period: "Prior — 2026",
      status: "Previous Placement",
      description: "Short-term technical role driving foundational IT operations and service delivery.",
      highlights: [
        "Infrastructure optimization and hands-on operational support",
        "System documentation and workflow streamlining"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 text-xs ${mobileMenuOpen ? 'bg-black' : 'bg-black/90 backdrop-blur-md'}`}>
          <div className="max-w-[1024px] mx-auto px-4 flex items-center justify-between h-11">
            <button 
              onClick={() => navigateTo('home')} 
              className="flex items-center text-white hover:text-gray-300 transition-colors z-50 focus:outline-none"
            >
              <Apple className="w-4 h-4 mr-1.5 mb-0.5" />
              <span className="font-semibold text-sm tracking-tight">Zak Farnworth</span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-[#a1a1a6]">
              <button 
                onClick={() => navigateTo('home')} 
                className={`transition-colors ${activeTab === 'home' ? 'text-white font-medium' : 'hover:text-white'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => navigateTo('about')} 
                className={`transition-colors ${activeTab === 'about' ? 'text-white font-medium' : 'hover:text-white'}`}
              >
                Biography
              </button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors">
                Experience Tree
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                Connect
              </button>
            </div>

            <div className="hidden md:flex items-center text-[#a1a1a6]">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center">
                GitHub <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden text-gray-300 hover:text-white focus:outline-none z-50 w-6 h-6 flex flex-col justify-center items-center relative"
              aria-label="Toggle Mobile Menu"
            >
              <span className={`block w-4 h-[1.5px] bg-current transition-all duration-300 ease-out absolute ${mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'}`} />
              <span className={`block w-4 h-[1.5px] bg-current transition-all duration-300 ease-out absolute ${mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'}`} />
            </button>
          </div>

          {/* Mobile Overlay */}
          <div className={`fixed inset-0 top-11 bg-black/95 backdrop-blur-2xl z-40 transition-all duration-300 ease-in-out md:hidden flex flex-col justify-between px-8 py-8 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="space-y-6 pt-4">
              <div className={`transition-all duration-500 delay-75 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <button onClick={() => navigateTo('home')} className="text-2xl font-semibold text-[#f5f5f7] hover:text-gray-400 block w-full text-left pb-3 border-b border-gray-800">
                  Overview
                </button>
              </div>
              <div className={`transition-all duration-500 delay-100 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <button onClick={() => navigateTo('about')} className="text-2xl font-semibold text-[#f5f5f7] hover:text-gray-400 block w-full text-left pb-3 border-b border-gray-800">
                  Biography
                </button>
              </div>
              <div className={`transition-all duration-500 delay-125 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <button onClick={() => scrollToSection('experience')} className="text-2xl font-semibold text-[#f5f5f7] hover:text-gray-400 block w-full text-left pb-3 border-b border-gray-800">
                  Experience Tree
                </button>
              </div>
              <div className={`transition-all duration-500 delay-150 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <button onClick={() => scrollToSection('contact')} className="text-2xl font-semibold text-[#f5f5f7] hover:text-gray-400 block w-full text-left pb-3 border-b border-gray-800">
                  Connect
                </button>
              </div>
            </div>
            <div className="text-[11px] text-gray-500 border-t border-gray-900 pt-4">
              Zak Farnworth • Personal Workspace
            </div>
          </div>
        </nav>

        {/* Sub-Header */}
        <div className="mt-11 bg-[#1d1d1f] border-b border-[#333336] text-xs text-[#a1a1a6] py-2.5">
          <div className="max-w-[1024px] mx-auto px-4 flex justify-between items-center">
            <span className="font-medium text-white">Workplace & Cloud Systems</span>
            <span className="hidden sm:inline">M365 • Identity Systems • Infrastructure</span>
          </div>
        </div>

        {/* ================= VIEW 1: HOME PAGE ================= */}
        {activeTab === 'home' && (
          <main>
            {/* BLACK HERO BANNER */}
            <section className="bg-black text-white pt-20 pb-24 px-4 text-center border-b border-white/10">
              <div className="max-w-[800px] mx-auto">
                <p className="text-xs font-semibold tracking-widest text-[#86868b] uppercase mb-4">
                  Systems & Engineering Portal
                </p>
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
                  Zak Farnworth
                </h1>
                
                <div className="inline-block mt-2">
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="group flex items-center justify-center space-x-2 text-xl sm:text-2xl font-medium text-[#2997ff] hover:text-[#58a6ff] transition-all bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10"
                  >
                    <span>Workplace Engineer</span>
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform text-[#2997ff]" />
                  </button>
                </div>

                <p className="text-base sm:text-lg text-[#86868b] max-w-[600px] mx-auto font-normal leading-relaxed mt-6">
                  Focused on modern cloud architecture, automated identity federation, and resilient homelab engineering.
                </p>
              </div>
            </section>

            {/* WELCOME SECTION */}
            <section className="py-16 sm:py-24 px-6 max-w-[980px] mx-auto border-b border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4 text-left">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#86868b]">
                    Welcome
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight">
                    Welcome to my website.
                  </h2>
                  <p className="text-base sm:text-lg text-[#86868b] leading-relaxed max-w-[500px]">
                    I’m a Workplace Engineer focused on enterprise Microsoft 365 cloud architecture, identity federation, and system infrastructure.
                  </p>
                  <div className="pt-3">
                    <button 
                      onClick={() => navigateTo('about')}
                      className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#0062c4] rounded-full transition-all duration-200 shadow-sm"
                    >
                      Read my biography
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>

                <div className="hidden md:flex md:col-span-5 justify-end">
                  <div className="w-64 h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-black/5">
                    <img 
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" 
                      alt="Zak Farnworth Workspace" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* EXPERIENCE TREE SECTION */}
            <section id="experience" className="py-20 px-4 max-w-[840px] mx-auto">
              <div className="text-center mb-14">
                <span className="text-xs font-semibold text-[#0066cc] uppercase tracking-wider">Career Progression</span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f] mt-1">
                  Experience & Roles
                </h2>
                <p className="text-sm text-[#86868b] mt-2">
                  Timeline of technical roles, responsibilities, and enterprise focus areas.
                </p>
              </div>

              <div className="relative border-l-2 border-gray-300 ml-4 sm:ml-32 space-y-12">
                {workExperience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 sm:pl-10 group">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#0066cc] group-hover:scale-125 transition-transform" />
                    <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                      <span className="text-xs font-semibold font-mono text-[#86868b]">{exp.period}</span>
                    </div>

                    <div className="bg-white rounded-[20px] p-6 sm:p-8 border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="sm:hidden text-xs font-mono text-[#86868b] font-medium">{exp.period}</span>
                        <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066cc]">
                          {exp.status}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f]">{exp.role}</h3>
                      <div className="flex items-center text-sm font-medium text-[#515154] mt-1 mb-4">
                        <Building2 className="w-4 h-4 mr-1.5 text-gray-400" />
                        {exp.company}
                      </div>

                      <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      <div className="space-y-2 border-t border-gray-100 pt-4">
                        {exp.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center text-xs text-[#515154]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0066cc] mr-2 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CLEAN CONNECT / LINKS SECTION */}
            <section id="contact" className="py-20 px-4 max-w-[980px] mx-auto border-t border-gray-200">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold text-[#0066cc] uppercase tracking-wider">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f] mt-1">
                  Connect & Reach Out
                </h2>
                <p className="text-xs sm:text-sm text-[#86868b] mt-2 max-w-md mx-auto">
                  Direct channels for professional inquiries, engineering discussions, or networking.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email Link */}
                <a 
                  href="mailto:zak@farnworth.org.uk" 
                  className="group bg-white p-8 rounded-2xl border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between"
                  aria-label="Send an email to Zak Farnworth"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0066cc] mb-6 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
                      Direct Email
                    </span>
                    <h3 className="text-base font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors">
                      zak@farnworth.org.uk
                    </h3>
                  </div>
                  <div className="mt-8 flex items-center text-xs font-medium text-[#0066cc] group-hover:translate-x-1 transition-transform">
                    Send Email <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </a>

                {/* LinkedIn Link */}
                <a 
                  href="https://linkedin.com/in/zak-farnworth" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group bg-white p-8 rounded-2xl border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between"
                  aria-label="Visit Zak Farnworth's LinkedIn Profile"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0066cc] mb-6 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
                      LinkedIn
                    </span>
                    <h3 className="text-base font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors">
                      Professional Network
                    </h3>
                  </div>
                  <div className="mt-8 flex items-center text-xs font-medium text-[#0066cc] group-hover:translate-x-1 transition-transform">
                    View Profile <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </div>
                </a>

                {/* GitHub Link */}
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group bg-white p-8 rounded-2xl border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between"
                  aria-label="Visit Zak Farnworth's GitHub Profile"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0066cc] mb-6 group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
                      GitHub
                    </span>
                    <h3 className="text-base font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors">
                      Code Repositories
                    </h3>
                  </div>
                  <div className="mt-8 flex items-center text-xs font-medium text-[#0066cc] group-hover:translate-x-1 transition-transform">
                    Explore Code <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </div>
                </a>
              </div>
            </section>
          </main>
        )}

        {/* ================= VIEW 2: EXECUTIVE BIOGRAPHY ================= */}
        {activeTab === 'about' && (
          <main className="bg-[#f5f5f7] pt-8 pb-16">
            <div className="max-w-[980px] mx-auto px-6">
              <div className="border-t border-gray-300 pt-8 mb-4" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-5 pb-8 sm:pb-12">
                  <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-2">
                    Zak Farnworth
                  </h1>
                  <p className="text-lg sm:text-2xl text-[#515154] font-normal">
                    Workplace Engineer
                  </p>
                </div>

                <div className="md:col-span-7 flex justify-center md:justify-center items-end">
                  <div className="w-full max-w-[340px] sm:max-w-[420px] h-[280px] sm:h-[340px] flex items-end overflow-hidden">
                    <img 
                      src="https://downloads.farnworth.org.uk/images/Zak_F.png" 
                      alt="Zak Farnworth Portrait" 
                      className="w-full h-full object-contain object-bottom mix-blend-multiply"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-t border-gray-200 py-12 sm:py-16">
              <div className="max-w-[980px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-[#1d1d1f] text-sm sm:text-base leading-relaxed">
                  <div className="space-y-5">
                    <p>
                      Zak Farnworth is Workplace Engineer at Capgemini, where he focuses on the design, automation, and operational deployment of modern Microsoft 365 cloud environments and identity governance platforms.
                    </p>
                    <p>
                      Prior to joining Capgemini, Zak held operational technical roles, including a placement at The Quill, driving infrastructure optimization, workflow automation, and endpoint service delivery.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <p>
                      Zak specializes in federating cloud-only Microsoft 365 tenants with custom identity frameworks, utilizing Entra ID, SCIM user provisioning, and Graph API baselines.
                    </p>
                    <p>
                      He also maintains an active interest in hands-on system engineering, managing home lab cluster architectures powered by Proxmox, TrueNAS, and ZimaOS non-destructive storage setups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] text-[11px] text-[#86868b] py-8">
        <div className="max-w-[1024px] mx-auto px-4 space-y-3">
          <p className="leading-relaxed">
            Designed with inspiration from Apple's executive profiles and developer portals.
          </p>
          <div className="border-t border-[#d2d2d7] pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>
              Copyright © {new Date().getFullYear()} Zak Farnworth. All rights reserved.
            </div>
            <div className="flex space-x-4 text-[#515154]">
              <a href="mailto:zak@farnworth.org.uk" className="hover:underline">Email</a>
              <span className="text-gray-300">|</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <span className="text-gray-300">|</span>
              <a href="https://linkedin.com/in/zak-farnworth" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}