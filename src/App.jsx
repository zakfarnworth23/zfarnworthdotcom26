import React, { useState } from 'react';
import { 
  Apple, 
  Menu, 
  X, 
  Download, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Layers, 
  Cpu, 
  Globe 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "SwiftUI Core Components",
      tag: "UI Kit & Framework",
      version: "v2.4.0",
      description: "A lightweight, modular UI library replicating modern native iOS/macOS interface components for web applications.",
      link: "#",
      download: "#"
    },
    {
      title: "Metal Compute Engine",
      tag: "Graphics / GPU",
      version: "v1.1.2",
      description: "High-performance GPU calculation wrapper for heavy data pipelines and WebGL canvas rendering.",
      link: "#",
      download: "#"
    },
    {
      title: "WebKit Extensions Package",
      tag: "Browser Utilities",
      version: "v3.0.1",
      description: "Custom productivity tools and extension primitives engineered for WebKit and Safari engines.",
      link: "#",
      download: "#"
    },
    {
      title: "CoreML React Adapter",
      tag: "Machine Learning",
      version: "v0.9.5",
      description: "Seamless React bindings and hooks to interact with browser-based ONNX and CoreML model runners.",
      link: "#",
      download: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f5f5f7] text-[#1d1d1f]">
      {/* 1. Apple-style Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-apple border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11 text-xs text-gray-700 dark:text-gray-300">
            <a href="#" className="flex items-center space-x-1 hover:text-black dark:hover:text-white transition-colors">
              <Apple className="w-4 h-4 mb-0.5" />
              <span className="font-semibold text-sm tracking-tight text-black dark:text-white">Open Source</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects & Downloads</a>
              <a href="#documentation" className="hover:text-black dark:hover:text-white transition-colors">Documentation</a>
              <a href="#github" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-6 py-4 space-y-3 text-sm">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">Projects & Downloads</a>
            <a href="#documentation" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">Documentation</a>
            <a href="#github" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">GitHub</a>
          </div>
        )}
      </nav>

      {/* 2. Hero Banner */}
      <section className="pt-28 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">Personal Developer Hub</p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Open Source Projects
          </h1>
          <p className="text-lg sm:text-xl text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            High-performance libraries, native interfaces, and developer primitives crafted with clarity and precision.
          </p>
        </div>
      </section>

      {/* 3. About Me Section */}
      <section id="about" className="py-12 px-4 max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-200/80">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f] mb-3">
              Engineering with purpose.
            </h2>
            <p className="text-[#86868b] leading-relaxed">
              Inspired by Apple’s commitment to open technology, this workspace acts as a central distribution node for production-ready packages, frameworks, and developer utilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-[#f5f5f7] border border-gray-100 flex flex-col items-center text-center">
              <Code2 className="w-8 h-8 text-[#0066cc] mb-3" />
              <h3 className="font-semibold text-sm mb-1">Clean Architecture</h3>
              <p className="text-xs text-[#86868b]">Modular components designed for maximum reuse and tiny bundle footprint.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#f5f5f7] border border-gray-100 flex flex-col items-center text-center">
              <Terminal className="w-8 h-8 text-[#0066cc] mb-3" />
              <h3 className="font-semibold text-sm mb-1">Developer First</h3>
              <p className="text-xs text-[#86868b]">Comprehensive type definitions, clear documentation, and zero friction.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#f5f5f7] border border-gray-100 flex flex-col items-center text-center">
              <Layers className="w-8 h-8 text-[#0066cc] mb-3" />
              <h3 className="font-semibold text-sm mb-1">Native Polish</h3>
              <p className="text-xs text-[#86868b]">Thoughtful UI patterns reflecting human interface guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Projects & Downloads Section */}
      <section id="projects" className="py-12 px-4 max-w-5xl mx-auto w-full flex-grow">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">Projects & Releases</h2>
          <p className="text-sm text-[#86868b] mt-1">Direct access to source repositories and compiled bundles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#0066cc] bg-blue-50 rounded-full">
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">{item.version}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-xs text-[#86868b] leading-relaxed mb-6">{item.description}</p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <a 
                  href={item.link} 
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#0066cc] hover:bg-[#0077ed] rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  View Source
                </a>
                <a 
                  href={item.download} 
                  className="inline-flex items-center justify-center p-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  title="Download Package"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Apple-style Footer */}
      <footer className="bg-[#f5f5f7] border-t border-gray-300/80 text-[11px] text-[#86868b] py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="leading-relaxed">
            Open Source projects released under the MIT or Apache 2.0 licenses. Designed with inspiration from Apple's design language and public documentation interfaces.
          </p>
          <div className="border-t border-gray-300/60 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>
              Copyright © {new Date().getFullYear()} Personal Portfolio. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Sales Policy</a>
              <a href="#" className="hover:underline">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}