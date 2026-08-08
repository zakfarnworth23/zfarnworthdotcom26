import React, { useState, useEffect } from 'react';
import { 
  Apple, 
  Search, 
  ChevronRight, 
  ExternalLink, 
  Download, 
  Code 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Lock body scroll when mobile overlay menu is open (Apple native behavior)
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

  const featuredProjects = [
    {
      title: "Swift",
      languages: "C++, Swift, JavaScript",
      description: "Swift is a general-purpose programming language built using a modern approach to safety, performance, and software design patterns.",
      iconBg: "bg-orange-500",
      link: "#"
    },
    {
      title: "WebKit",
      languages: "C++, Objective-C, Swift, Python",
      description: "WebKit is the open-source web content engine for Safari and web browsing on iOS, macOS, and visionOS platforms.",
      iconBg: "bg-blue-500",
      link: "#"
    },
    {
      title: "Foundation",
      languages: "Swift, C, Objective-C",
      description: "Fundamental statistical data structures, networking, and low-level utility paradigms standard across Apple operating systems.",
      iconBg: "bg-slate-700",
      link: "#"
    }
  ];

  const releases = [
    { name: "macOS 14.4 (Sonoma)", date: "Mar 2024", assets: "Darwin, XNU, WebKit", download: "#" },
    { name: "iOS 17.4", date: "Mar 2024", assets: "CoreFoundation, Security", download: "#" },
    { name: "Developer Tools 15.3", date: "Feb 2024", assets: "LLVM, Clang, Swift Toolchain", download: "#" },
    { name: "macOS 13.6.5 (Ventura)", date: "Jan 2024", assets: "Kernel, Libc, CUPS", download: "#" }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased">
      
      {/* 1. Header & Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 text-xs ${mobileMenuOpen ? 'bg-black' : 'bg-black/90 backdrop-blur-md'}`}>
        <div className="max-w-[1024px] mx-auto px-4 flex items-center justify-between h-11">
          <a href="#" className="flex items-center text-white hover:text-gray-300 transition-colors z-50">
            <Apple className="w-4 h-4 mr-1 mb-0.5" />
            <span className="font-semibold text-sm tracking-tight">Open Source</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 text-[#a1a1a6]">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#releases" className="hover:text-white transition-colors">Releases</a>
            <a href="#community" className="hover:text-white transition-colors">Community</a>
            <a href="#docs" className="hover:text-white transition-colors">Documentation</a>
          </div>

          <div className="hidden md:flex items-center text-[#a1a1a6]">
            <a href="https://github.com/apple" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center">
              GitHub <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>

          {/* Apple Animated Hamburger / Close Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none z-50 w-6 h-6 flex flex-col justify-center items-center relative"
            aria-label="Toggle Mobile Menu"
          >
            <span 
              className={`block w-4 h-[1.5px] bg-current transition-all duration-300 ease-out absolute ${
                mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
              }`}
            />
            <span 
              className={`block w-4 h-[1.5px] bg-current transition-all duration-300 ease-out absolute ${
                mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
              }`}
            />
          </button>
        </div>

        {/* Apple Full-Screen Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 top-11 bg-black/95 backdrop-blur-2xl z-40 transition-all duration-300 ease-in-out md:hidden flex flex-col justify-between px-8 py-8 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="space-y-6 pt-4">
            <div 
              className={`transition-all duration-500 delay-75 transform ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-2xl font-semibold text-[#f5f5f7] hover:text-gray-400 block pb-3 border-b border-gray-800"
              >
                Projects
              </a>
            </div>

            <div 
              className={`transition-all duration-500 delay-100 transform ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              <a 
                href="#releases" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-2xl font-semibold text-[#f5f5f7] hover:text-gray-400 block pb-3 border-b border-gray-800"
              >
                Releases
              </a>
            </div>

            <div 
              className={`transition-all duration-500 delay-150 transform ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              <a 
                href="#community" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-2xl font-semibold text-[#f5f5f7] hover:text-gray-400 block pb-3 border-b border-gray-800"
              >
                Community
              </a>
            </div>

            <div 
              className={`transition-all duration-500 delay-200 transform ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              <a 
                href="https://github.com/apple" 
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)} 
                className="text-2xl font-semibold text-[#f5f5f7] hover:text-gray-400 flex items-center justify-between pb-3 border-b border-gray-800"
              >
                GitHub <ExternalLink className="w-5 h-5 text-gray-500" />
              </a>
            </div>
          </div>

          <div className="text-[11px] text-gray-500 border-t border-gray-900 pt-4">
            Apple Developer Open Source Directory
          </div>
        </div>
      </nav>

      {/* Sub-Header Bar (Offsetting fixed top nav) */}
      <div className="mt-11 bg-[#1d1d1f] border-b border-[#333336] text-xs text-[#a1a1a6] py-2.5">
        <div className="max-w-[1024px] mx-auto px-4 flex justify-between items-center">
          <span className="font-medium text-white">Apple Developer Workspace</span>
          <span className="hidden sm:inline">Internal Distribution & Package Index</span>
        </div>
      </div>

      {/* 2. Apple Black Hero Banner */}
      <section className="bg-black text-white pt-16 pb-20 px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-4">
            Open Source at Apple.
          </h1>
          <p className="text-lg sm:text-xl text-[#86868b] max-w-[640px] mx-auto font-normal leading-relaxed">
            Open source software is at the heart of Apple platforms and developer tools. Explore tools, source code releases, and core infrastructure packages.
          </p>
        </div>
      </section>

      {/* 3. Featured Projects */}
      <section id="projects" className="py-16 px-4 max-w-[1024px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f]">Featured open source projects</h2>
            <p className="text-sm text-[#86868b] mt-1">Key open-source technologies maintained and released by Apple.</p>
          </div>
          <a href="#" className="inline-flex items-center text-xs font-medium text-[#0066cc] hover:underline mt-2 md:mt-0">
            View all projects <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[18px] p-8 flex flex-col justify-between border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div>
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} text-white flex items-center justify-center mb-6 shadow-sm`}>
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-1">{item.title}</h3>
                <p className="text-[11px] font-mono text-[#86868b] mb-4">{item.languages}</p>
                <p className="text-xs text-[#515154] leading-relaxed mb-6">{item.description}</p>
              </div>

              <a 
                href={item.link} 
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#0066cc] hover:bg-[#0077ed] rounded-full transition-colors w-fit"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Release Index Table */}
      <section id="releases" className="py-12 px-4 max-w-[1024px] mx-auto">
        <div className="bg-white rounded-[18px] p-6 sm:p-8 border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-semibold text-[#1d1d1f]">Source Code Releases</h2>
              <p className="text-xs text-[#86868b]">Download target tarballs, kernel builds, and platform headers.</p>
            </div>
            
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search releases..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#f5f5f7] rounded-lg border border-transparent focus:border-gray-300 focus:bg-white outline-none transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-200 text-[#86868b] font-medium">
                  <th className="pb-3 font-normal">Release Target</th>
                  <th className="pb-3 font-normal">Date</th>
                  <th className="pb-3 font-normal">Included Packages</th>
                  <th className="pb-3 font-normal text-right">Download</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {releases
                  .filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((rel, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3.5 font-medium text-[#1d1d1f]">{rel.name}</td>
                    <td className="py-3.5 text-[#86868b]">{rel.date}</td>
                    <td className="py-3.5 text-[#515154] font-mono text-[11px]">{rel.assets}</td>
                    <td className="py-3.5 text-right">
                      <a href={rel.download} className="inline-flex items-center text-[#0066cc] hover:underline font-medium">
                        <Download className="w-3.5 h-3.5 mr-1" />
                        Tarball
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Apple Standard Footer */}
      <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] text-[11px] text-[#86868b] py-8 mt-16">
        <div className="max-w-[1024px] mx-auto px-4 space-y-3">
          <p className="leading-relaxed">
            Open source software released by Apple is subject to applicable license terms including the Apple Public Source License (APSL), Apache 2.0, or MIT licenses.
          </p>
          <div className="border-t border-[#d2d2d7] pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>
              Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
            </div>
            <div className="flex space-x-4 text-[#515154]">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}