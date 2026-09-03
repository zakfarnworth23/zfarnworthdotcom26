import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  Building2,
  ChevronDown,
  CheckCircle2,
  ChevronRight,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (activeTab !== "home") {
      setActiveTab("home");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const workExperience = [
    {
      role: "Workplace Engineer",
      company: "Capgemini",
      period: "August 2026 — Present",
      status: "Full Time",
      description:
        "3rd Line Workplace Engineer supporting client's Microsoft 365 platform, amongst other Enterprise solutions and systems.",
      highlights: [
        "Microsoft 365",
        "Windows Server 2016 - 2022",
        "Global Print Solutions",
        "Exchange Server & Online",
        "Intune - Windows, iOS, and Android",
        "Genetic Security Systems",
        "Power Automate",
        "Power Apps",
        "Azure Automation"
      ],
    },
    {
      role: "Technical Systems Specialist",
      company: "The Quill C of E Trust",
      period: "December 2025 - August 2026",
      status: "Full Time",
      description:
        "My role as Technical Systems Specialist comprised of management in ICT Infrastructure, Helpdesk, and the ICT Technicians.",
      highlights: [
        "Infrastructure design and support",
        "System documentation and workflow streamlining, and automation design/implementation",
        "Microsoft 365",
        "Microsoft Azure",
        "Windows Server 2022 - 2025",
        "Google Workspace",
        "Apple School Manager",
        "iOS",
        "Networks - Switching and Firewalls covering Sophos, FortiGate, and Watchguard",
        "Endpoint Management - Setup, and re-development of Intune tenant, new Policies, and implementation of Microsoft Security Baselines",
        "Security - Defender for Endpoint rollout as well as Sophos Endpoint working side-by-side",
        "WiFi - Management of Aruba Central for our Wireless setup",
        "PowerShell",
        "Power Automate",
        "Power Apps",
        "Azure Automation"
      ],
    },
    {
      role: "ICT Technician",
      company: "Albany Learning Trust",
      period: "March - December 2025",
      status: "Full Time",
      description:
        "My role as ICT Technician comprised of working closely with the Network Manager in ICT Infrastructure, Helpdesk, and across multiple schools within our Trust.",
      highlights: [
        "Day to Day Helpdesk Responsibilities 1st & 2nd Line",
        "Many KFC's were enjoyed after a busy summer!",
        "Migration from SIMS.Net to Arbor",
        "Migration from Windows 10 to Windows 11",
        "Management of Active Directory and Microsoft 365 Estate",
        "Management of a very old Samsung OfficeServ VOIP Phone System",
        "Paxton Net2",
        "Watchguard Firewalls - Management and Support of these",
        "Configuration and support of HPE / Aruba Network Switches",
        "Configuration and support of Unifi WiFi Estate",
        "Configuration and support of Ruckus WiFi Estate within a Secondary school environment",
        "System documentation and workflow streamlining, and automation design/implementation"
      ],
    }
  ];

  return (
    <div className="min-h-screen bg-white text-apple-text font-sans">
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-11 text-xs transition-colors duration-300 ${
          mobileMenuOpen
            ? "bg-white border-b border-gray-200"
            : "bg-black/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1024px] mx-auto h-full px-4 flex items-center justify-between">
          <button
            onClick={() => navigateTo("home")}
            className={`transition-colors font-medium focus:outline-none ${
              mobileMenuOpen ? "text-apple-text" : "text-white hover:text-gray-300"
            }`}
          >
            Zak Farnworth
          </button>

          <div className="hidden md:flex items-center gap-8 text-[#a1a1a6]">
            <button
              onClick={() => navigateTo("home")}
              className={`transition-colors ${
                activeTab === "home" ? "text-white font-medium" : "hover:text-white"
              }`}
            >
              Overview
            </button>

            <button
              onClick={() => navigateTo("about")}
              className={`transition-colors ${
                activeTab === "about" ? "text-white font-medium" : "hover:text-white"
              }`}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-white transition-colors"
            >
              Connect
            </button>
          </div>

          <div className="hidden md:flex items-center text-[#a1a1a6]">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center"
            >
              GitHub
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`md:hidden focus:outline-none w-7 h-7 flex items-center justify-center relative z-50 ${
              mobileMenuOpen ? "text-apple-text" : "text-gray-300 hover:text-white"
            }`}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`absolute block w-4 h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute block w-4 h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU DRAWER */}
        <div
          className={`fixed top-11 left-0 right-0 bottom-0 bg-white z-40 md:hidden transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-8 py-8 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <button
                onClick={() => navigateTo("home")}
                className="text-2xl font-semibold text-apple-text hover:text-gray-600 block w-full text-left pb-4 border-b border-gray-100"
              >
                Overview
              </button>

              <button
                onClick={() => navigateTo("about")}
                className="text-2xl font-semibold text-apple-text hover:text-gray-600 block w-full text-left pb-4 border-b border-gray-100"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-2xl font-semibold text-apple-text hover:text-gray-600 block w-full text-left pb-4 border-b border-gray-100"
              >
                Connect
              </button>
            </div>

            <div className="text-[11px] text-apple-subtext border-t border-gray-100 pt-4">
              Zak Farnworth • A personal website, built with React and Gemini
            </div>
          </div>
        </div>
      </nav>

      {/* SUB HEADER */}
      <div className="pt-11">
        <div className="bg-apple-darkBg text-xs text-[#a1a1a6] py-2.5">
          <div className="max-w-[1024px] mx-auto px-4 flex justify-between items-center">
            <span className="font-medium text-white">
              Office of Zak Farnworth
            </span>
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://linkedin.com/in/zakfarnworth"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* HOME PAGE */}
        {activeTab === "home" && (
          <main>
            {/* HERO SECTION WITH FADED DESKTOP BACKGROUND */}
            <section className="relative overflow-hidden bg-black text-white pt-20 pb-24 px-4 text-center border-b border-white/10">
              {/* Desktop-only Faded Watermark */}
              <div 
                aria-hidden="true" 
                className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none select-none z-0"
              >
                <span className="text-[11vw] font-extrabold tracking-tighter text-white/[0.035] whitespace-nowrap uppercase">
                  Zak Farnworth
                </span>
              </div>

              {/* Foreground Hero Content */}
              <div className="relative z-10 max-w-[800px] mx-auto">
                <p className="text-xs font-semibold tracking-[0.2em] text-apple-subtext uppercase mb-4">
                  
                </p>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
                  Zak Farnworth
                </h1>

                <div className="inline-block mt-2">
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="group flex items-center justify-center gap-2 text-xl sm:text-2xl font-medium text-[#2997ff] hover:text-[#58a6ff] transition-all bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10"
                  >
                    <span>Workplace Engineer</span>
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform text-[#2997ff]" />
                  </button>
                </div>

                <p className="text-base sm:text-lg text-apple-subtext max-w-[600px] mx-auto font-normal leading-relaxed mt-6">
                  Experienced individual, primarily having been in Education, but now in the Enterprise world of Technology.
                </p>
              </div>
            </section>

            <section className="py-16 sm:py-24 px-6 max-w-[980px] mx-auto border-b border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-7 space-y-4 text-left">
                  <span className="text-xs font-semibold uppercase tracking-widest text-apple-subtext">
                    Welcome
                  </span>

                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-apple-text leading-tight">
                    Welcome to my website.
                  </h2>

                  <p className="text-base sm:text-lg text-apple-subtext leading-relaxed max-w-[500px]">
                    I'm a workplace Engineer at Capgemini in EUS UK (End User
                    Services), where I focus on our Client's Microsoft 365
                    implementation, design, and support, with the integration
                    of other platforms.
                  </p>

                  <div className="pt-3">
                    <button
                      onClick={() => navigateTo("about")}
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-apple-blue hover:bg-apple-blueHover rounded-full transition-all duration-200 shadow-sm"
                    >
                      Read about me
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>

                <div className="md:col-span-5 flex justify-center md:justify-end">
                  <div className="w-full max-w-[280px] h-[340px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-black/5">
                    <img
                      src="https://downloads.farnworth.org.uk/images/Zak_F.png"
                      alt="Zak Farnworth"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section
              id="experience"
              className="py-20 px-4 max-w-[840px] mx-auto scroll-mt-16"
            >
              <div className="text-center mb-14">
                <span className="text-xs font-semibold text-apple-blue uppercase tracking-wider">
                  Career Progression
                </span>

                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-apple-text mt-1">
                  Experience &amp; Roles
                </h2>

                <p className="text-sm text-apple-subtext mt-2">
                  Timeline of technical roles, responsibilities, and
                  enterprise focus areas.
                </p>
              </div>

              <div className="relative border-l-2 border-gray-300 ml-4 sm:ml-32 space-y-12">
                {workExperience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 sm:pl-10 group">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-apple-blue group-hover:scale-125 transition-transform" />

                    <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                      <span className="text-xs font-semibold font-mono text-apple-subtext">
                        {exp.period}
                      </span>
                    </div>

                    <div className="bg-white rounded-[20px] p-6 sm:p-8 border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="sm:hidden text-xs font-mono text-apple-subtext font-medium">
                          {exp.period}
                        </span>

                        <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-apple-blue">
                          {exp.status}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-apple-text">
                        {exp.role}
                      </h3>

                      <div className="flex items-center text-sm font-medium text-[#515154] mt-1 mb-4">
                        <Building2 className="w-4 h-4 mr-1.5 text-gray-400" />
                        {exp.company}
                      </div>

                      <p className="text-xs sm:text-sm text-apple-subtext leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      <div className="space-y-2 border-t border-gray-100 pt-4">
                        {exp.highlights.map((item, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center text-xs text-[#515154]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-apple-blue mr-2 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="contact"
              className="py-20 px-4 max-w-[980px] mx-auto border-t border-gray-200 scroll-mt-16"
            >
              <div className="text-center mb-12">
                <span className="text-xs font-semibold text-apple-blue uppercase tracking-wider">
                  Get In Touch
                </span>

                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-apple-text mt-1">
                  Connect &amp; Reach Out
                </h2>

                <p className="text-xs sm:text-sm text-apple-subtext mt-2 max-w-md mx-auto">
                  Direct channels for professional inquiries, engineering
                  discussions, or networking.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="mailto:mailer@farnworth.org.uk"
                  className="group bg-white p-8 rounded-2xl border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between"
                  aria-label="Send an email to Zak Farnworth"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-apple-blue mb-6 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold text-apple-subtext uppercase tracking-wider block mb-1">
                      Direct Email
                    </span>

                    <h3 className="text-base font-semibold text-apple-text group-hover:text-apple-blue transition-colors break-words">
                      mailer@farnworth.org.uk
                    </h3>
                  </div>

                  <div className="mt-8 flex items-center text-xs font-medium text-apple-blue group-hover:translate-x-1 transition-transform">
                    Send Email
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/zakfarnworth"
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-white p-8 rounded-2xl border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between"
                  aria-label="Visit Zak Farnworth's LinkedIn Profile"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-apple-blue mb-6 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold text-apple-subtext uppercase tracking-wider block mb-1">
                      LinkedIn
                    </span>

                    <h3 className="text-base font-semibold text-apple-text group-hover:text-apple-blue transition-colors">
                      Professional Network
                    </h3>
                  </div>

                  <div className="mt-8 flex items-center text-xs font-medium text-apple-blue group-hover:translate-x-1 transition-transform">
                    View Profile
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-white p-8 rounded-2xl border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between"
                  aria-label="Visit Zak Farnworth's GitHub Profile"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-apple-blue mb-6 group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold text-apple-subtext uppercase tracking-wider block mb-1">
                      GitHub
                    </span>

                    <h3 className="text-base font-semibold text-apple-text group-hover:text-apple-blue transition-colors">
                      Code Repositories
                    </h3>
                  </div>

                  <div className="mt-8 flex items-center text-xs font-medium text-apple-blue group-hover:translate-x-1 transition-transform">
                    Explore Code
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </div>
                </a>
              </div>
            </section>
          </main>
        )}

        {/* ABOUT PAGE */}
        {activeTab === "about" && (
          <main className="bg-white pb-16">
            <section className="bg-apple-bg">
              <div className="max-w-[980px] mx-auto px-6 pt-5">
                <div className="pb-2">
                  <span className="text-xs sm:text-sm font-semibold text-apple-text">
                    About
                  </span>
                </div>

                <div className="border-t border-apple-border pt-8 sm:pt-10 mb-8 sm:mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 items-end">
                    <div className="md:col-span-6 pb-8 sm:pb-12 md:pb-16">
                      <h1 className="text-4xl sm:text-5xl md:text-[48px] leading-[1.08333] font-semibold tracking-[-0.003em] text-apple-text mb-1 sm:mb-2 antialiased">
                        Zak Farnworth
                      </h1>

                      <p className="text-xl sm:text-2xl md:text-[24px] leading-[1.16667] font-normal tracking-[0.009em] text-[#6e6e73] antialiased">
                        Workplace Engineer
                      </p>
                    </div>

                    <div className="md:col-span-6 flex justify-center md:justify-end items-end">
                      <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] h-[220px] sm:h-[280px] md:h-[300px] flex items-end justify-center overflow-hidden">
                        <img
                          src="https://downloads.farnworth.org.uk/images/IMG_9871.png"
                          alt="Zak Farnworth Portrait"
                          className="block w-auto h-full max-h-[300px] object-contain object-bottom mix-blend-multiply"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white pt-2 sm:pt-4">
              <div className="max-w-[980px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 text-apple-text text-sm sm:text-base leading-relaxed">
                  <div className="space-y-5">
                    <p>
                    Zak Farnworth is Workplace Engineer at Capgemini, where
                    he focuses on the support, design, implementation, and continuous
                    improvement of services and functions within Microsoft 365 in
                    medium to large environments on a global scale.
                    </p>

                    <p>
                      Prior to joining Capgemini, Zak held operational
                      technical roles, including at The Quill C of E Trust,
                      driving ICT Infrastructure, workflow
                      automation, and endpoint service delivery using AD, Entra, Intune, Power Automate, and Azure Automation.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <p>
                      Zak specialises in building low-code solutions and process 
                      automations, leveraging Power Automate, Power Apps, and 
                      Azure Automation to streamline enterprise workflows.
                    </p>

                    <p>
                      He also maintains an active interest in hands-on system
                      engineering, managing home lab cluster architectures
                      powered by Proxmox, TrueNAS, and ZimaOS to stay updated 
                      and aware of emerging platforms and techniques in the 
                      Enterprise world.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        )}

        {/* FOOTER */}
        <footer className="bg-apple-bg border-t border-apple-border text-[11px] text-apple-subtext py-8">
          <div className="max-w-[1024px] mx-auto px-4 space-y-3">
            <p className="leading-relaxed">
              Designed with inspiration from Apple&apos;s executive profiles
              and developer portals.
            </p>

            <div className="border-t border-apple-border pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                Copyright © {new Date().getFullYear()} Zak Farnworth. All
                rights reserved.
              </div>

              <div className="flex space-x-4 text-[#515154]">
                <a
                  href="mailto:mailer@farnworth.org.uk"
                  className="hover:underline"
                >
                  Email
                </a>

                <span className="text-gray-300">|</span>

                <a
                  href="https://linkedin.com/in/zakfarnworth"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>

                <span className="text-gray-300">|</span>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
