/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Facebook, Instagram, Linkedin, Search, Layers, AlertCircle, Target, Youtube, Check, X, TrendingUp, Mail } from 'lucide-react';
import Chatbot from './components/Chatbot';
import LeadCaptureModal from './components/LeadCaptureModal';
import NewsletterForm from './components/NewsletterForm';


const TypewriterText = () => {
  const fullText = "This is not a performance issue. It’s structural.";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (!isDeleting && index < fullText.length) {
      timer = setTimeout(() => setIndex(prev => prev + 1), 60);
    } else if (isDeleting && index > 0) {
      timer = setTimeout(() => setIndex(prev => prev - 1), 30);
    } else if (index === fullText.length && !isDeleting) {
      timer = setTimeout(() => setIsDeleting(true), 4000);
    } else if (index === 0 && isDeleting) {
      timer = setTimeout(() => setIsDeleting(false), 800);
    }
    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  const part1 = "This is not a performance issue. ";
  
  const showPart1 = index <= part1.length 
    ? fullText.slice(0, index) 
    : part1;
    
  const showPart2 = index > part1.length 
    ? fullText.slice(0, index).slice(part1.length) 
    : '';

      return (
        <div className="py-2 border-l-4 border-emerald-500 animate-border-pulse pl-4 min-h-[60px] flex items-center max-w-xl mx-auto w-[fit-content] text-left my-4">
          <p className="font-medium text-slate-800 text-xl m-0 leading-tight">
            <span>{showPart1}</span>
            {index > part1.length && <br className="hidden md:block" />}
            <span>{showPart2}</span>
            <span className="inline-block w-[2px] h-[1em] ml-[2px] align-middle bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite]"></span>
          </p>
        </div>
      );
};

export default function App() {
  const [activeModalUrl, setActiveModalUrl] = useState<string | null>(null);

  const openModal = (url: string) => {
    setActiveModalUrl(url);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 font-sans selection:bg-emerald-200">
      <LeadCaptureModal 
        isOpen={activeModalUrl !== null} 
        onClose={() => setActiveModalUrl(null)} 
        redirectUrl={activeModalUrl || ''} 
      />

      {/* Navbar */}
      <nav className="w-full py-5 px-6 md:px-12 flex items-center justify-between border-b border-gray-200 sticky top-0 bg-[#FAFAFA]/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center border border-emerald-100 p-1 shrink-0">
            <motion.div
              animate={{ 
                y: [0, -2, 0],
                x: [0, 2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </motion.div>
          </div>
          <span className="font-bold text-xl tracking-tight block">
            <span className="text-slate-900">Business</span> <span className="text-emerald-700">Catalyst</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#philosophy" className="hover:text-emerald-700 transition-colors">Vision</a>
          <a href="#services" className="hover:text-emerald-700 transition-colors">Services</a>
          <a href="#about" className="hover:text-emerald-700 transition-colors">About Us</a>
        </div>
        <div>
          <button onClick={() => openModal('https://docs.google.com/forms/d/e/1FAIpQLSfRi6XitFtV44xRkgAOzz6URslSUX5KLaNJeRFUysJJpaR2Pg/viewform?usp=dialog')} className="hidden md:inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800 transition-all shadow-sm shadow-emerald-900/20">
            Start with Free Qualification
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden lg:pt-32 lg:pb-32 bg-white border-b border-gray-200">
        {/* Subtle green ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-emerald-50/50 rounded-full blur-3xl -z-10 rounded-b-full"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Strategic Advisory. Not An Agency.
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.1] text-balance">
              Most sellers don’t realise where their business is <span className="text-emerald-700">actually breaking.</span>
            </h1>
            <div className="text-lg md:text-xl leading-relaxed text-slate-500 mb-10 max-w-2xl text-balance flex flex-col gap-4">
              <p>
                <strong className="font-bold text-slate-900">Revenue increases</strong> <span className="text-slate-500">— but margins compress.</span><br />
                <strong className="font-bold text-slate-900">Ad spend scales</strong> <span className="text-slate-500">— but profit doesn’t follow.</span><br />
                <strong className="font-bold text-slate-900">Inventory grows</strong> <span className="text-slate-500">— but cash gets locked.</span>
              </p>
              <TypewriterText />
              <p className="text-emerald-700 font-medium text-lg border-l-2 border-emerald-500 pl-3 my-2">
                A decade inside Amazon systems — seeing where growth actually breaks.
              </p>
              <p>
                Worked across Amazon operations, growth systems, and account management — focused on identifying structural inefficiencies before they compound.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 mb-10 pt-6 border-t border-slate-200/50 w-full max-w-2xl mx-auto">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500">
                <span>50+ Brands</span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500"></span>
                <span>10+ Years in Amazon Growth Systems</span>
              </div>
              <p className="text-slate-500 text-sm font-medium mt-1">
                Worked with sellers across: Amazon &bull; D2C &bull; Private Labels &bull; Scaling Brands
              </p>
            </div>
            <p className="text-slate-800 font-medium mb-6">
              If revenue is growing but profit isn’t — something is structurally broken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <a href="https://calendly.com/connect-businesscatalyst/structural-diagnostic" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-4 text-sm font-medium text-white shadow-md shadow-emerald-900/20 hover:bg-emerald-800 transition-all">
                Apply for Structural Diagnostic
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#philosophy" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-slate-900 ring-1 ring-inset ring-slate-200 hover:ring-emerald-300 hover:bg-emerald-50 hover:text-emerald-900 transition-all">
                Understand the Methodology
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 bg-[#FAFAFA] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Where growth starts breaking down
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Most scaling problems don’t come from lack of effort. They come from structural misalignment across the system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            <div className="group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-200/60 text-emerald-800 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">The Ad Crutch</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Ads are used to compensate for weak conversion. Instead of fixing CTR and CVR, more budget is pushed into traffic. This inflates revenue — while silently eroding margin.
              </p>
            </div>
            <div className="group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-200/60 text-emerald-800 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Metric Misalignment</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                ACoS improves — but actual profit declines. Decisions are made on partial metrics, not system-wide impact. What looks efficient on paper often destroys contribution margin.
              </p>
            </div>
            <div className="group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-200/60 text-emerald-800 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Structural Blind Spots</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Category manipulation, poor inventory planning, and missing margin visibility. These are not small mistakes — they distort the entire system. Cash flow pressure is the result, not the cause.
              </p>
            </div>
            <div className="group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-200/60 text-emerald-800 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Short-Term Thinking</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Chasing quick wins instead of building compounding systems. Generic products, reactive decisions, and inconsistent direction. Growth without structure eventually collapses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-emerald-50/30 rounded-l-full blur-3xl -z-10 hidden md:block"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl text-center mx-auto mb-20">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-3">
              1:1 Advisory Product
            </h2>
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Clear Diagnosis. Actionable Roadmaps.
            </h3>
            <p className="text-lg text-slate-600">
              You don’t need more tactics. You need clarity on what is actually breaking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Intro Call Card */}
            <div className="rounded-2xl border border-slate-200 p-10 bg-[#FAFAFA] flex flex-col hover:border-emerald-300 transition-colors">
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">Introductory Call</h3>
                  <span className="text-xs font-semibold uppercase tracking-widest bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">Free</span>
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-lg text-slate-500 font-light">30 Minutes</span>
                </div>
                <p className="text-slate-600 font-light leading-relaxed border-b border-slate-200 pb-8 h-28">
                  A short qualification call to understand your current structure. We assess whether your business requires a deeper structural diagnostic.
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start text-sm text-slate-600">
                  <span className="text-emerald-500 mr-3">—</span> Initial operations check
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <span className="text-emerald-500 mr-3">—</span> High-level growth plateau identification
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <span className="text-emerald-500 mr-3">—</span> Assessing fit for deep diagnostics
                </li>
              </ul>
              <button onClick={() => openModal('https://docs.google.com/forms/d/e/1FAIpQLSfRi6XitFtV44xRkgAOzz6URslSUX5KLaNJeRFUysJJpaR2Pg/viewform?usp=dialog')} className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-medium text-slate-900 hover:border-emerald-500 hover:text-emerald-700 transition-colors">
                Start with Free Qualification
              </button>
            </div>

            {/* Diagnostic Card - Deep Premium Green */}
            <div className="rounded-2xl border border-emerald-800 p-10 bg-emerald-950 flex flex-col relative overflow-hidden shadow-2xl shadow-emerald-900/40 transform md:scale-105 z-10 transition-all hover:shadow-emerald-900/60 duration-300 ring-1 ring-emerald-500/20">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>
              <div className="relative z-10 mb-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-white">Structural Diagnostic</h3>
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-lg text-emerald-200 font-light">60 Minutes</span>
                </div>
                <p className="text-slate-300 font-light leading-relaxed border-b border-emerald-800 pb-8 min-h-28">
                  A focused diagnostic of your entire growth system. We identify where profit is leaking, where structure is misaligned, and which layer is limiting scale — across conversion, ads, inventory, and margin.<br/><br/>You leave with a clear direction — not more confusion.
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                <li className="flex items-start text-sm text-slate-200">
                  <span className="text-emerald-400 mr-3">—</span> Full growth system breakdown
                </li>
                <li className="flex items-start text-sm text-slate-200">
                  <span className="text-emerald-400 mr-3">—</span> Root cause identification (not surface metrics)
                </li>
                <li className="flex items-start text-sm text-slate-200">
                  <span className="text-emerald-400 mr-3">—</span> Margin leak and cash flow analysis
                </li>
                <li className="flex items-start text-sm text-slate-200">
                  <span className="text-emerald-400 mr-3">—</span> Clear execution direction for your team
                </li>
              </ul>
              <div className="relative z-10 mb-6 border-t border-emerald-800/50 pt-4">
                <p className="text-emerald-300 font-medium text-sm">
                  If you don't get clarity in the first 20 minutes, we stop and you don't pay.
                </p>
              </div>
              <a href="https://calendly.com/connect-businesscatalyst/structural-diagnostic" target="_blank" rel="noreferrer" className="relative z-10 block w-full rounded-full bg-emerald-500 px-4 py-3 text-center text-sm font-medium text-emerald-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
                Apply for Structural Diagnostic
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FAFAFA] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          <div className="max-w-4xl w-full">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 text-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              What You Get After the Call
            </h3>
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <ul className="grid md:grid-cols-2 gap-y-6 gap-x-8">
                <li className="flex items-start gap-4 text-left">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">Clear breakdown of where your profit is leaking</p>
                </li>
                <li className="flex items-start gap-4 text-left">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">Exact priority list (what to fix first vs ignore)</p>
                </li>
                <li className="flex items-start gap-4 text-left">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">Ad + conversion + inventory alignment insights</p>
                </li>
                <li className="flex items-start gap-4 text-left">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">Personalized growth roadmap (next 30–60 days)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Diagnostic Outcomes */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-5">
              Real Diagnostic Outcomes
            </h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              These aren’t tactics. These are structural shifts that changed how businesses actually operate.
            </p>
          </div>

          <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-8">
            What this looks like in practice:
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Profit Recovery</h4>
              <p className="text-slate-600 leading-relaxed font-light text-sm flex-grow">
                Turned a 4% net loss into 12% net profit within 45 days by removing a “bestseller” that was silently destroying unit economics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Ad Efficiency</h4>
              <p className="text-slate-600 leading-relaxed font-light text-sm flex-grow">
                Reduced blended ACOS by 22% while maintaining revenue by fixing a hidden conversion bottleneck.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Cash Flow Unlock</h4>
              <p className="text-slate-600 leading-relaxed font-light text-sm flex-grow">
                Uncovered ₹12L in trapped capital by identifying inventory bleed disguised as “buffer stock”.
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mb-10 max-w-xl mx-auto">
            These are representative outcomes from past work. Results vary based on business stage and execution.
          </p>

          <div className="flex flex-col items-center pt-10 border-t border-slate-200 max-w-3xl mx-auto text-center">
            <p className="text-slate-700 font-medium mb-6">
              If your numbers look fine — but profit doesn’t — something deeper is breaking.
            </p>
            <a href="https://calendly.com/connect-businesscatalyst/structural-diagnostic" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-medium text-white shadow-md shadow-slate-900/20 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
              Apply for Structural Diagnostic
            </a>
          </div>
        </div>
      </section>

      {/* Validation Layer */}
      <section className="py-24 bg-[#FAFAFA] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">What actually surfaces during a structural diagnostic:</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3 bg-[#FAFAFA] p-4 rounded-xl border border-slate-200 shadow-sm">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm leading-relaxed">Where profit is actually leaking (not where they assumed)</span>
              </div>
              <div className="flex items-start gap-3 bg-[#FAFAFA] p-4 rounded-xl border border-slate-200 shadow-sm">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm leading-relaxed">Why ad performance is misleading</span>
              </div>
              <div className="flex items-start gap-3 bg-[#FAFAFA] p-4 rounded-xl border border-slate-200 shadow-sm">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm leading-relaxed">Which layer is blocking scale</span>
              </div>
              <div className="flex items-start gap-3 bg-[#FAFAFA] p-4 rounded-xl border border-slate-200 shadow-sm">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm leading-relaxed">What to fix first vs what to ignore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#FAFAFA] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-6">About The Founder</h2>
              <h3 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Saurav Raj</h3>
              <div className="flex flex-col gap-4">
                <div className="border border-slate-200 hover:border-emerald-200 transition-colors bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-light text-emerald-700 mb-1">10+ Years</div>
                  <div className="text-sm text-slate-500">Amazon Operations Experience</div>
                </div>
                <div className="border border-slate-200 hover:border-emerald-200 transition-colors bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-light text-emerald-700 mb-1">Systems First</div>
                  <div className="text-sm text-slate-500">Strategic pattern recognition</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 lg:pt-5 flex flex-col gap-6 text-slate-700 text-lg font-light leading-relaxed">
              <p className="font-medium text-slate-900 text-xl border-l-[3px] border-emerald-500 pl-5 mb-2">
                I don’t run an agency. I don’t sell execution.
              </p>
              
              <p>
                For over a decade, I’ve worked inside Amazon growth systems — across operations, ads, inventory, and account management.
              </p>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm my-2">
                <p className="font-medium text-slate-900 mb-2">The pattern is always the same:</p>
                <p className="text-slate-600">
                  Most sellers don’t fail because of effort.<br/>
                  <span className="font-medium text-emerald-800">They fail because their systems are misaligned.</span>
                </p>
              </div>

              <p>
                Ads, listings, inventory, and pricing are treated as separate functions — when in reality, each layer directly affects the other.
              </p>
              
              <p>
                My role is simple:<br/>
                Identify where the system breaks — and define the exact shifts required to restore control, profitability, and scalable growth.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-emerald-500"></div>
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Diagnosis drives direction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* For You */}
            <div className="bg-emerald-50/50 rounded-2xl p-8 md:p-12 border border-emerald-100">
              <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
                <Check className="w-6 h-6 text-emerald-600" />
                This is for you if:
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5"></div>
                  <p className="text-slate-700 leading-relaxed">You are already selling and facing inconsistent profitability</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5"></div>
                  <p className="text-slate-700 leading-relaxed">Your ad spend is increasing but margins are unclear</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5"></div>
                  <p className="text-slate-700 leading-relaxed">You feel growth is happening, but control is slipping</p>
                </li>
              </ul>
            </div>

            {/* Not For You */}
            <div className="bg-slate-50/50 rounded-2xl p-8 md:p-12 border border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
                <X className="w-6 h-6 text-rose-500" />
                This is NOT for:
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></div>
                  <p className="text-slate-600 leading-relaxed">Beginners looking to "start Amazon"</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></div>
                  <p className="text-slate-600 leading-relaxed">Sellers looking for execution or agency work</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="min-w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></div>
                  <p className="text-slate-600 leading-relaxed">Anyone expecting quick fixes or hacks</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-32 bg-emerald-900 relative overflow-hidden">
        {/* Abstract background flair */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Stop scaling what you don’t fully understand.
          </h2>
          <p className="text-xl font-light text-emerald-100 mb-10 text-balance">
            If you don't identify where the system is breaking, scale will only amplify the problem.
          </p>
          
          <div className="mb-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Choose how you want to start:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex flex-col items-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRi6XitFtV44xRkgAOzz6URslSUX5KLaNJeRFUysJJpaR2Pg/viewform?usp=dialog" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-emerald-500 bg-transparent px-8 py-4 text-sm font-medium text-white hover:bg-emerald-800 hover:border-emerald-400 transition-all mb-2 min-w-[280px]">
                Start with Free Qualification
              </a>
              <span className="text-emerald-100 text-xs text-center max-w-[280px]">This is a short qualification step before the full diagnostic.</span>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://calendly.com/connect-businesscatalyst/structural-diagnostic" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-emerald-900 shadow-xl shadow-emerald-950/50 hover:bg-emerald-50 transition-all mb-2 min-w-[280px]">
                Apply for Structural Diagnostic
              </a>
              <span className="text-emerald-100 text-xs text-center max-w-[280px]">All requests are reviewed before confirming the session.</span>
            </div>
          </div>

          <div className="mt-8 text-center text-emerald-200">
            <p className="text-sm">Payment is shared only after confirming mutual fit.</p>
          </div>

          <div className="mt-6">
            <p className="text-emerald-200 text-sm font-medium inline-flex items-center gap-2 bg-emerald-800/50 px-4 py-2 rounded-full border border-emerald-700/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              Limited slots per week to ensure quality of diagnostics.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-emerald-800/50 max-w-md mx-auto flex flex-col items-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400/80 mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Contact us at</span>
            </div>
            <a href="mailto:connect@businesscatalyst.co.in" className="text-emerald-100 hover:text-white text-lg transition-colors">
              connect@businesscatalyst.co.in
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterForm />

      {/* Footer */}
      <footer className="bg-[#111111] py-12 border-t border-slate-800 mt-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center md:flex-row justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="font-medium text-lg tracking-tight">
              <span className="text-white">Business</span> <span className="text-emerald-500">Catalyst</span>
            </span>
          </div>

          <div className="flex gap-4 sm:gap-6 items-center flex-wrap justify-center mt-6 md:mt-0">
            <a href="https://linkedin.com/company/businesscatalyst-co-in" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400 bg-slate-800/40 hover:bg-slate-800 p-3 rounded-full transition-all border border-slate-700 hover:border-emerald-500/50 shadow-sm">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="https://www.facebook.com/businesscatalyst.co.in" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400 bg-slate-800/40 hover:bg-slate-800 p-3 rounded-full transition-all border border-slate-700 hover:border-emerald-500/50 shadow-sm">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="https://www.instagram.com/businesscatalyst.co.in/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400 bg-slate-800/40 hover:bg-slate-800 p-3 rounded-full transition-all border border-slate-700 hover:border-emerald-500/50 shadow-sm">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="https://www.youtube.com/channel/UCIBFOTaQIVIa3rroUBflIQQ" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400 bg-slate-800/40 hover:bg-slate-800 p-3 rounded-full transition-all border border-slate-700 hover:border-emerald-500/50 shadow-sm">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 text-slate-400">
            <div className="text-[10px] uppercase tracking-widest font-semibold">
              &copy; {new Date().getFullYear()} Business Catalyst.
            </div>
          </div>
        </div>
      </footer>
      
      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}

