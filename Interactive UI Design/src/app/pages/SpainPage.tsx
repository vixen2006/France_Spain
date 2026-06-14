import React from 'react';
import { Calculator } from '../components/Calculator';
import { CostOfLiving } from '../components/CostOfLiving';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MapPin, Plane, CheckCircle2, Star, Sparkles, Map, Stethoscope, Users, Building, ChevronRight, Home, CreditCard, Smartphone, GraduationCap, Briefcase, HeartPulse, Globe, AlertTriangle, ShieldCheck, Gift, Landmark, Castle, Music, Target, Sun, Bird, Mail, FileText, Laptop, MessageSquare, ArrowRight } from 'lucide-react';

// Figma assets
import imgShhGuy from "figma:asset/0585ac61124aceada9c2eb1dc910085e71ac84c9.png";
import imgMapTexture from "figma:asset/1e6a53fd43e633049dfe1b6845fe9c7fb0691671.png";
// Local country assets
import imgSpainHero from "../../imports/Desktop2/spain_hero_city.jpg";
import imgEuroBg from "../../imports/Desktop2/euro_bg.png";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative bg-[#fcfdfa] pt-32 pb-0 flex flex-col items-center">
        
        {/* Text Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mb-12">
          <h1 className="text-[48px] md:text-[56px] font-bold text-[#141a38] tracking-tight mb-2">
            Spain
          </h1>
          <h2 className="text-[32px] md:text-[40px] text-[#111827] font-medium tracking-tight mb-6">
            Lowest cost of living in Western Europe. Real degrees.
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#2c3eab] font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
            From visa to NIE to your first piso — your complete guide to studying in Spain. Visa<br className="hidden md:block"/> calculator, NIE explainer, city explorer, and verified homes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1e2a6b] hover:bg-[#161d83] text-white font-bold text-[13px] uppercase tracking-wider py-4 px-10 rounded-2xl shadow-[0_8px_20px_rgba(30,42,107,0.25)] transition-transform hover:scale-105 flex items-center gap-3">
              EXPLORE NOW <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button className="bg-transparent border-2 border-[#1e2a6b] text-[#1e2a6b] font-bold text-[13px] uppercase tracking-wider py-[14px] px-10 rounded-2xl hover:bg-[#1e2a6b]/5 transition-colors">
              CONTACT US
            </button>
          </div>
        </div>

        {/* Background Image Container */}
        <div className="relative w-full h-[400px] md:h-[500px] mt-4 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fcfdfa] via-white/50 to-transparent z-10 h-32" />
          <ImageWithFallback 
            src={imgSpainHero}
            alt="Madrid city skyline with the Metropolis building" 
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>
      </section>

      {/* Stats overlapping hero */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: '85+', l: 'Universities covered' },
            { v: '170K+', l: 'International students annually' },
            { v: '8', l: 'Acolyte cities in Spain' },
            { v: '€380–€1,100', l: 'Average monthly rent range' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/40 text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#172554] mb-1">{stat.v}</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative mt-12">
        {/* Large background image of the guy */}
        <div className="absolute right-0 top-[-100px] w-[500px] xl:w-[600px] z-0 hidden lg:block pointer-events-none">
          <ImageWithFallback 
            src={imgShhGuy} 
            alt="Student sharing a secret" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Header */}
        <div className="border-l-[3px] border-[#3b82f6] pl-6 mb-16 max-w-2xl relative z-10">
          <h3 className="text-[11px] font-bold text-blue-600 tracking-widest uppercase mb-4">Why Spain</h3>
          <h2 className="text-4xl md:text-[44px] text-[#0f172a] leading-tight mb-4 tracking-tight font-medium">
            What no one tells you before <br className="hidden md:block"/> you go — <span className="text-[#161d83]">but should.</span>
          </h2>
          <p className="text-blue-600 font-medium text-base leading-relaxed max-w-xl">
            Spain is the most underrated major student destination in Western Europe. Here's the honest case for it.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {/* Card 1 */}
          <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-8 right-4 text-slate-100 opacity-60 pointer-events-none">
              <Building className="w-28 h-28 stroke-[1.5px]" />
            </div>
            <div className="w-12 h-12 bg-blue-50/80 rounded-2xl flex items-center justify-center text-blue-500 mb-8 z-10">
              <Building className="w-6 h-6" />
            </div>
            <h4 className="text-[19px] font-bold text-[#0f172a] mb-3 z-10">The lowest cost of living of any country on this list.</h4>
            <p className="text-slate-500 text-sm leading-relaxed z-10">
              A shared flat in Madrid runs €500–€700/month. In Valencia or Seville, you're looking at €350–€500. Food is cheap — a three-course menu del día lunch in a restaurant costs €10–€13. Student life in Spain is genuinely affordable in a way that UK, Australia, or Canada simply aren't.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-8 right-4 text-slate-100 opacity-60 pointer-events-none">
              <Globe className="w-28 h-28 stroke-[1.5px]" />
            </div>
            <div className="w-12 h-12 bg-blue-50/80 rounded-2xl flex items-center justify-center text-blue-500 mb-8 z-10">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="text-[19px] font-bold text-[#0f172a] mb-3 z-10">Spanish is the second most spoken language in the world.</h4>
            <p className="text-slate-500 text-sm leading-relaxed z-10">
              Investing a year or two in acquiring fluent Spanish doesn't just give you life in Spain — it gives you access to Latin America, the US Hispanic market, and a huge global employer pool that actively values Spanish speakers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-8 right-4 text-slate-100 opacity-60 pointer-events-none">
              <GraduationCap className="w-28 h-28 stroke-[1.5px]" />
            </div>
            <div className="w-12 h-12 bg-blue-50/80 rounded-2xl flex items-center justify-center text-blue-500 mb-8 z-10">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h4 className="text-[19px] font-bold text-[#0f172a] mb-3 z-10">IE Business School and IESE are genuinely world-class.</h4>
            <p className="text-slate-500 text-sm leading-relaxed z-10">
              IE Business School (Madrid) and IESE (Barcelona) consistently rank in the top 10–15 global MBA programmes. Their Spanish tuition is still a fraction of US equivalents at the same prestige level.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-8 right-4 text-slate-100 opacity-60 pointer-events-none">
              <Sun className="w-28 h-28 stroke-[1.5px]" />
            </div>
            <div className="w-12 h-12 bg-blue-50/80 rounded-2xl flex items-center justify-center text-blue-500 mb-8 z-10">
              <Sun className="w-6 h-6" />
            </div>
            <h4 className="text-[19px] font-bold text-[#0f172a] mb-3 z-10">Quality of life that's hard to explain until you've lived it.</h4>
            <p className="text-slate-500 text-sm leading-relaxed z-10">
              300 days of sunshine per year in most of Spain. A food culture that is genuinely excellent. A social culture where people go out on Tuesday nights without it being an event.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#233876] rounded-[32px] p-8 shadow-[0_12px_40px_rgb(35,56,118,0.3)] relative overflow-hidden flex flex-col sm:flex-row items-start gap-6 h-full md:col-span-2">
            <div className="w-12 h-12 bg-blue-600/30 border border-blue-500/30 rounded-2xl flex items-center justify-center text-white shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[19px] font-bold text-white mb-3">The honest bit: Spanish is mandatory and admin is slow.</h4>
              <p className="text-blue-100/90 text-sm leading-relaxed">
                Unlike Germany or France, there is essentially no path to an authentic Spanish student experience without Spanish. Social life, flatmates, landlords, internships, part-time jobs — everything is in Spanish. Going to Spain without at least A2 Spanish and a plan to reach B2 is genuinely difficult. Additionally, Spanish bureaucracy is famously slow. <strong className="text-white">Book your NIE appointment online the day you arrive.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        {/* Background Image of London */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-luminosity">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaWclMjBCZW58ZW58MHx8fHwxNzgxNDQ4MTI3fDA&ixlib=rb-4.1.0&q=80&w=1920" 
            alt="London Big Ben" 
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <ShieldCheck className="w-[18px] h-[18px] text-white" />
              <span className="text-[13px] font-bold text-white tracking-wide">Visa Readiness Engine</span>
            </div>
            
            <h2 className="text-4xl md:text-[44px] text-white mb-4 tracking-tight leading-[1.1] font-normal">
              What are your chances? <br />
              Find out in 60 seconds.
            </h2>
            <p className="text-[17px] text-slate-300 max-w-2xl leading-relaxed">
              Answer 7 questions. Get a personalised Spanish student visa likelihood score and actionable tips.
            </p>
          </div>
          
          <Calculator />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#fcfdfa]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[11px] font-bold tracking-[0.08em] uppercase mb-6">
            Pre-arrival roadmap
          </div>
          <h2 className="text-[40px] md:text-[44px] tracking-tight leading-[1.1] font-light text-[#2c3eab] mb-4">
            From acceptance letter to<br/>NIE — step by step.
          </h2>
          <p className="text-[15px] text-[#5c7bc5] mb-20 font-medium max-w-2xl mx-auto">
            Spain's visa process is straightforward, but the NIE step after arrival catches most students off guard. Know the full sequence.
          </p>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting dashed line */}
            <div className="hidden md:block absolute top-10 left-[8%] right-[8%] border-t border-dashed border-blue-300/60 -z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-7 gap-x-4 gap-y-12">
              {[
                { 
                  icon: <Mail className="w-[22px] h-[22px] text-[#3b82f6] stroke-[2]" />, 
                  title: 'Acceptance Letter', 
                  date: 'IMMEDIATELY',
                  tip: 'Needed for visa.'
                },
                { 
                  icon: <FileText className="w-[22px] h-[22px] text-[#3b82f6] stroke-[2]" />, 
                  title: 'Police Certificate', 
                  date: '4–6 WEEKS',
                  tip: 'Get Apostilled.'
                },
                { 
                  icon: <Building className="w-[22px] h-[22px] text-[#3b82f6] stroke-[2]" />, 
                  title: 'Book Accommodation', 
                  date: 'BEFORE APPOINTMENT',
                  tip: 'Secure your home early.'
                },
                { 
                  icon: <Laptop className="w-[22px] h-[22px] text-[#3b82f6] stroke-[2]" />, 
                  title: 'Student Visa', 
                  date: 'BOOK IMMEDIATELY',
                  tip: 'Show €5,000+.'
                },
                { 
                  icon: <Plane className="w-[22px] h-[22px] text-[#3b82f6] stroke-[2]" />, 
                  title: 'Pre-departure', 
                  date: 'AFTER VISA GRANTED',
                  tip: 'Visa in hand first.'
                },
                { 
                  icon: <FileText className="w-[22px] h-[22px] text-[#3b82f6] stroke-[2]" />, 
                  title: 'NIE & TIE', 
                  date: '1-4 WEEKS ON ARRIVAL',
                  tip: 'Book on day 1.'
                },
                { 
                  icon: <Home className="w-[22px] h-[22px] text-[#3b82f6] stroke-[2]" />, 
                  title: 'Arrival & Setup', 
                  date: 'FIRST 2 WEEKS',
                  tip: 'N26 & SIM first.'
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center relative z-10 group">
                  <div className="w-20 h-20 rounded-full bg-[#fcfdfa] flex items-center justify-center shadow-[0_0_30px_rgb(59,130,246,0.15)] mb-6 transition-transform group-hover:scale-105 border border-white">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-[#141a38] text-[14px] mb-2">{step.title}</h4>
                  <p className="text-[11px] font-bold text-[#3b82f6] uppercase tracking-wide mb-6">{step.date}</p>
                  
                  <div className="bg-[#f4f7fc]/80 border border-blue-200/60 rounded-lg py-2.5 px-3 flex items-start justify-center gap-2 w-full max-w-[140px] mt-auto">
                    <CheckCircle2 className="w-[14px] h-[14px] text-[#3b82f6] shrink-0 mt-[1px] stroke-[2]" />
                    <span className="text-[11px] font-bold text-[#1a2e7c] leading-[1.3] text-left">{step.tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NIE Explainer Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="border-l-[3px] border-[#3b82f6] pl-6 mb-12 max-w-3xl relative z-10">
          <h3 className="text-[11px] font-bold text-blue-600 tracking-widest uppercase mb-4">The NIE — Spain's foreign ID number</h3>
          <h2 className="text-4xl md:text-[44px] text-[#0f172a] leading-tight mb-4 tracking-tight font-medium">
            The one thing that unlocks everything else in Spain.
          </h2>
          <p className="text-blue-600 font-medium text-base leading-relaxed max-w-xl">
            The NIE (Número de Identificación de Extranjero) is your foreign identification number in Spain. Without it, you cannot open a bank account, sign a rental contract, register at university, or do almost anything official. Here's exactly what to do.
          </p>
        </div>

        <div className="bg-[#141a38] rounded-[32px] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-12 lg:gap-16 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="lg:w-1/2 relative z-10">
            <h4 className="text-[28px] font-bold text-white mb-6">Why does the NIE exist?</h4>
            <p className="text-blue-100/80 text-[15px] leading-relaxed mb-6">
              Every non-Spanish person in Spain needs a tax identification number. The NIE is this number — it appears on your visa, your residency card (TIE), your bank statements, and your tax filings for as long as you're in Spain. It's not the same as your residency permit (TIE), which you apply for separately once you have your NIE.
            </p>
            <p className="text-[14px] text-white/90 bg-blue-900/40 border border-blue-500/30 rounded-xl p-4">
              Key difference: <strong className="text-[#60a5fa]">NIE = your ID number</strong> · <strong className="text-[#60a5fa]">TIE = your residency card</strong> — you need both.
            </p>
          </div>

          <div className="lg:w-1/2 relative z-10">
            <div className="text-[11px] font-bold text-blue-400 tracking-widest uppercase mb-6">How to get your NIE & TIE</div>
            <div className="space-y-4">
              {[
                "Book a cita previa (appointment) at extranjeria.ses.mir.es immediately on arrival — wait times are 4–8 weeks in Madrid and Barcelona",
                "Attend appointment with: passport + photocopy, visa, 2 passport photos, university enrollment proof, and EX-15 form",
                "Pay the €10.60 Tasa 790 fee at any Spanish bank before your appointment",
                "Your NIE number is issued on the day — your TIE card arrives 30–60 days later",
                "Use your NIE number (on your appointment certificate) immediately for bank account opening — don't wait for the physical TIE card"
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-blue-400 font-bold mt-0.5">→</div>
                  <div className="text-blue-100/90 text-[14px] leading-relaxed">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Living Section */}
      <section className="relative overflow-hidden bg-[#f4f7fe]">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <ImageWithFallback src={imgEuroBg} alt="" className="w-full h-full object-cover mix-blend-multiply" />
        </div>
        <CostOfLiving country="spain" />
      </section>

      {/* Find Your City Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[44px] md:text-[56px] text-[#2c3eab] mb-4 tracking-tight leading-[1.05] font-light">
            Find your city.<br/>Find your home.
          </h2>
          <p className="text-[17px] text-[#5c7bc5] max-w-2xl mx-auto font-medium tracking-tight">
            Every city Acolyte covers in Spain — with verified properties ready to browse.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { city: 'Madrid', unis: '8 UNIVERSITIES', rent: '€500–€900', desc: 'Capital, biggest job market, IE Business School. Most expensive Spanish city but still affordable vs London.', icon: <Building className="w-[22px] h-[22px] text-[#3b82f6] stroke-[1.5]" /> },
            { city: 'Barcelona', unis: '7 UNIVERSITIES', rent: '€600–€1,000', desc: 'IESE, ESADE, Pompeu Fabra. Tech hub. International but pricier. Best for design, media, and startups.', icon: <Castle className="w-[22px] h-[22px] text-[#3b82f6] stroke-[1.5]" /> },
            { city: 'Valencia', unis: '4 UNIVERSITIES', rent: '€380–€650', desc: 'Most underrated student city in Spain. Excellent quality of life, sunny, affordable, and growing fast.', icon: <Sun className="w-[22px] h-[22px] text-[#3b82f6] stroke-[1.5]" /> },
            { city: 'Seville', unis: '3 UNIVERSITIES', rent: '€350–€600', desc: "Andalusia's capital. Strong architecture, law, and humanities programmes. Very affordable.", icon: <Music className="w-[22px] h-[22px] text-[#3b82f6] stroke-[1.5]" /> },
            { city: 'Bilbao', unis: '2 UNIVERSITIES', rent: '€430–€700', desc: 'Basque country. University of Deusto is strong in business. Cultural and industrial hub.', icon: <Map className="w-[22px] h-[22px] text-[#3b82f6] stroke-[1.5]" /> },
            { city: 'Granada', unis: '1 UNIVERSITY', rent: '€300–€520', desc: 'Cheapest major university city in Spain. Beautiful, great nightlife. Strong humanities and sciences at UGR.', icon: <Target className="w-[22px] h-[22px] text-[#3b82f6] stroke-[1.5]" /> },
            { city: 'Salamanca', unis: '1 UNIVERSITY', rent: '€280–€500', desc: 'Historic university city — USAL is one of the oldest universities in the world. Very affordable, compact.', icon: <Landmark className="w-[22px] h-[22px] text-[#3b82f6] stroke-[1.5]" /> },
            { city: 'Málaga', unis: '1 UNIVERSITY', rent: '€380–€630', desc: 'Fastest-growing city in Spain. Tech startup scene, Mediterranean weather, affordable, great for digital roles.', icon: <MapPin className="w-[22px] h-[22px] text-[#3b82f6] stroke-[1.5]" /> }
          ].map((city, i) => (
            <div key={i} className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col h-full hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all cursor-pointer">
              <div className="w-12 h-12 bg-[#f0f4fa] rounded-[14px] flex items-center justify-center mb-6">
                {city.icon}
              </div>
              <h4 className="font-bold text-[#141a38] text-[22px] mb-2 tracking-tight">{city.city}</h4>
              <p className="text-[10px] font-bold text-[#4c9bea] uppercase tracking-[0.08em] mb-6">{city.unis}</p>
              <p className="text-[14px] font-bold text-[#1a2e7c] mb-5">{city.rent}</p>
              <p className="text-[13px] text-[#8e9bbd] leading-relaxed mt-auto tracking-tight">{city.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banking & SIM & Work Rights */}
      <section className="py-24 bg-[#f8f9fe] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Left Column: Banking & SIM */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[11px] font-bold tracking-[0.08em] uppercase mb-6">
                First week essentials
              </div>
              <h2 className="text-[40px] md:text-[44px] text-[#2c3eab] mb-4 tracking-tight leading-[1.1] font-light">
                Banking & SIM, sorted in<br/>24 hours.
              </h2>
              <p className="text-[15px] text-[#5c7bc5] mb-10 font-medium max-w-md">
                Do these two things before anything else. They unlock rent payments, phone plans, and discounts.
              </p>
              
              <div className="space-y-4 mb-12">
                {/* UP Bank */}
                <div className="bg-white p-6 rounded-[24px] border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex gap-5">
                  <div className="w-12 h-12 bg-[#f0f4fa] rounded-[14px] flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6 text-[#3b82f6] stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-[#141a38] text-[17px]">UP Bank</h4>
                      <span className="text-[10px] bg-[#f0f4fa] text-[#1a2e7c] px-2.5 py-1 rounded-full font-bold">Best for arrival</span>
                    </div>
                    <p className="text-[13px] text-[#6b7cba] leading-relaxed mb-3">
                      Australia's equivalent of Monzo — opens on your phone in minutes with just your passport. No fees, instant notifications, excellent app. Set this up at the airport. It's the fastest way to have a working Australian account.
                    </p>
                    <p className="text-[13px] font-bold text-[#1a2e7c]">This should be your first account.</p>
                  </div>
                </div>

                {/* CommBank */}
                <div className="bg-white p-6 rounded-[24px] border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex gap-5">
                  <div className="w-12 h-12 bg-[#f0f4fa] rounded-[14px] flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6 text-[#3b82f6] stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-[#141a38] text-[17px]">CommBank <span className="font-medium text-[15px]">(Commonwealth Bank)</span></h4>
                      <span className="text-[10px] bg-[#f0f4fa] text-[#1a2e7c] px-2.5 py-1 rounded-full font-bold">Transfers</span>
                    </div>
                    <p className="text-[13px] text-[#6b7cba] leading-relaxed">
                      Largest bank in Australia. ATMs everywhere, trusted by employers, and their student account has no monthly fees. Takes a few days to open fully but worth having. Employers and landlords recognise it immediately.
                    </p>
                  </div>
                </div>

                {/* ING Australia */}
                <div className="bg-white p-6 rounded-[24px] border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex gap-5">
                  <div className="w-12 h-12 bg-[#f0f4fa] rounded-[14px] flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6 text-[#3b82f6] stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-[#141a38] text-[17px]">ING Australia</h4>
                      <span className="text-[10px] bg-[#f0f4fa] text-[#1a2e7c] px-2.5 py-1 rounded-full font-bold">Transfers</span>
                    </div>
                    <p className="text-[13px] text-[#6b7cba] leading-relaxed">
                      No international transaction fees and a solid savings rate. If you're planning to save a portion of your work income, ING's savings account pays better interest than the big four. Good secondary account once you're settled.
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-[#141a38] text-[20px] mb-6 tracking-tight">Recommended SIMs</h4>
              <div className="grid grid-cols-2 gap-4">
                {/* Woolworths */}
                <div className="bg-[#fcfdfa]/50 p-6 rounded-[20px] border border-blue-200/60 shadow-sm flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <Smartphone className="w-5 h-5 text-[#1a2e7c] stroke-[2]" />
                    <h5 className="font-bold text-[#141a38] text-[15px]">Woolworths Mobile</h5>
                  </div>
                  <p className="text-[#1a2e7c] font-bold text-[14px] mb-4">AUD $30/mo</p>
                  <p className="text-[13px] text-[#8e9bbd] leading-relaxed mt-auto">
                    30GB data, unlimited calls on Telstra's network (the best coverage in Australia). Available at every Woolworths supermarket. Easiest to grab on arrival day. Top choice for students in major cities.
                  </p>
                </div>
                {/* Circles.Life */}
                <div className="bg-[#fcfdfa]/50 p-6 rounded-[20px] border border-blue-200/60 shadow-sm flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <Smartphone className="w-5 h-5 text-[#1a2e7c] stroke-[2]" />
                    <h5 className="font-bold text-[#141a38] text-[15px]">Circles.Life</h5>
                  </div>
                  <p className="text-[#1a2e7c] font-bold text-[14px] mb-4">AUD $28/mo</p>
                  <p className="text-[13px] text-[#8e9bbd] leading-relaxed mt-auto">
                    Fully digital, 30GB data on Optus network. Great app and easy SIM swaps. Popular with international students — no ID required beyond your passport. Buy online before you arrive.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Work Rights */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[11px] font-bold tracking-[0.08em] uppercase mb-6">
                Work Rights
              </div>
              <h2 className="text-[40px] md:text-[44px] text-[#2c3eab] mb-4 tracking-tight leading-[1.1] font-light">
                What you can do, and<br/>when.
              </h2>
              <p className="text-[15px] text-[#5c7bc5] mb-10 font-medium max-w-md">
                The actual rules — no hedging. If your situation is complex, the MARA helpline is free.
              </p>
              
              <div className="space-y-4">
                {/* On-Campus Work */}
                <div className="bg-[#3b35c6] text-white p-8 rounded-[24px] shadow-xl shadow-indigo-900/10">
                  <div className="flex items-center gap-4 mb-5">
                    <Briefcase className="w-6 h-6 text-white stroke-[1.5]" />
                    <h4 className="font-bold text-[19px] tracking-tight">On-Campus Work</h4>
                  </div>
                  <div className="space-y-4 text-[14px] text-indigo-100 leading-relaxed">
                    <p>Can work up to <strong className="text-white font-bold">20 hours per week</strong> during semester on campus.</p>
                    <p>Full-time work during official breaks and holidays.</p>
                  </div>
                </div>

                {/* Post-Graduate Visa */}
                <div className="bg-white p-8 rounded-[24px] border border-blue-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
                  <div className="flex items-center gap-4 mb-4">
                    <Sun className="w-6 h-6 text-[#3b82f6] stroke-[1.5]" />
                    <h4 className="font-bold text-[#141a38] text-[19px] tracking-tight">Post-Graduate Visa</h4>
                  </div>
                  <p className="text-[14px] text-[#6b7cba] leading-relaxed">
                    The Temporary Graduate Visa (subclass 485) allows up to 2–6 years of post-study work depending on your degree and location.
                  </p>
                </div>

                {/* Work Schedule */}
                <div className="bg-white p-8 rounded-[24px] border border-blue-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
                  <div className="flex items-center gap-4 mb-4">
                    <GraduationCap className="w-6 h-6 text-[#3b82f6] stroke-[1.5]" />
                    <h4 className="font-bold text-[#141a38] text-[19px] tracking-tight">Transition to Work</h4>
                  </div>
                  <p className="text-[14px] text-[#6b7cba] leading-relaxed">
                    Once you land a full-time contract, you can switch your status from Student to Highly Qualified Professional or Employee residency easily.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Join Community Card */}
          <div className="bg-[#1a1c3c] rounded-[2.5rem] p-10 lg:p-12 text-white shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="w-14 h-14 bg-[#2653c8] rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[32px] font-bold mb-4 tracking-tight">Join 300+ students planning their move to Spain.</h3>
              <p className="text-[#a5b4fc] text-[15px] leading-relaxed mb-10 max-w-md">
                Acolyte's Spain WhatsApp community — NIE tips by city, Spanish language resources, housing compared, and Aco Buddy matching for your arrival city.
              </p>
            </div>
            <div>
              <button className="bg-[#3267f5] hover:bg-blue-500 text-white font-bold text-[13px] uppercase tracking-wider py-4 px-8 rounded-xl transition-colors shadow-lg shadow-blue-500/20">
                JOIN SPAIN COMMUNITY
              </button>
            </div>
          </div>

          {/* Refer & Earn Card */}
          <div className="bg-white border border-slate-100/50 rounded-[2.5rem] p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between h-full">
            <div>
              <div className="w-14 h-14 bg-[#f0f4fa] rounded-2xl flex items-center justify-center mb-8">
                <Gift className="w-7 h-7 text-[#3b82f6]" />
              </div>
              <h3 className="text-[32px] font-bold text-[#141a38] mb-4 tracking-tight">Know someone coming to Spain?</h3>
              <p className="text-[#8e98bc] text-[15px] leading-relaxed mb-8 max-w-md">
                Refer them to Acolyte. When they book a verified property, you get paid directly to your Spanish bank account.
              </p>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-[44px] font-bold text-[#1f4bc5] tracking-tight leading-none">€50</span>
                <span className="text-sm font-medium text-[#7c9eee]">per referral</span>
              </div>
            </div>
            <div>
              <button className="bg-[#161a5b] hover:bg-indigo-950 text-white font-bold text-[13px] uppercase tracking-wider py-4 px-8 rounded-xl transition-colors shadow-lg shadow-indigo-900/20">
                GET YOUR REFERRAL LINK
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#f8f9fe]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-[11px] font-bold text-[#3b82f6] tracking-[0.08em] uppercase mb-4">Student Reviews</h3>
          <h2 className="text-[40px] md:text-[44px] tracking-tight leading-[1.1] font-bold text-[#141a38] mb-16 max-w-3xl mx-auto">
            From students who've done what you're<br/>about to do.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { 
                text: "I was convinced the listing I found on Facebook was real until my friend showed me the same photos on a scam alert page. The fact that Acolyte physically visited the flat changed everything. I slept properly the night I confirmed the booking.",
                name: "Priya R.",
                role: "India · MSc Data Science, UCL",
                initials: "PR",
                avatarBg: "bg-[#1f2c5d]"
              },
              { 
                text: "Moved to Manchester for my Masters. Messaged Acolyte support at 11pm when I couldn't get the heating to work on my first night — someone replied within 20 minutes and had the landlord call me by midnight. The support makes the difference.",
                name: "Akinola O.",
                role: "Nigeria · MBA, UoM",
                initials: "AO",
                avatarBg: "bg-[#1d4ed8]"
              },
              { 
                text: "My parents in Hyderabad were more nervous about housing than I was. I showed them the Acolyte verification report for my flat — the physical inspection notes. My dad read it three times. They finally stopped worrying.",
                name: "Shreya K.",
                role: "India · LLM, UoE",
                initials: "SK",
                avatarBg: "bg-[#3b82f6]"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-10 rounded-[28px] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.05)] border-0 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all h-full">
                {/* Glow effect at top right */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/60 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-[18px] h-[18px] fill-[#3b82f6] text-[#3b82f6]" />
                    ))}
                  </div>
                  <p className="text-[#7180b0] text-[14px] leading-relaxed mb-10">"{review.text}"</p>
                </div>
                
                <div className="pt-6 border-t border-slate-100/60 flex items-center gap-4 relative z-10 mt-auto">
                  <div className={`w-[46px] h-[46px] rounded-full ${review.avatarBg} flex items-center justify-center text-white font-bold text-[13px] tracking-wide shrink-0`}>
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#141a38] text-[15px] mb-0.5">{review.name}</h4>
                    <p className="text-[12px] text-[#5c7bc5] font-medium tracking-tight">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Banner */}
      <footer className="bg-[#141a38] text-white pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-[44px] md:text-[56px] font-bold mb-5 tracking-tight leading-[1.05]">
            Ready to find your<br/>home in Spain?
          </h2>
          <p className="text-[17px] text-[#8e9bbd] mb-12 font-medium">
            Every listing verified. Every NIE-ready landlord. Support from day one to residency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="bg-white text-[#141a38] font-bold text-[13px] uppercase tracking-wider py-4 px-8 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all w-full sm:w-auto">
              BROWSE SPAIN PROPERTIES
            </button>
            <button className="bg-[#1e2a6b]/50 border border-[#3b82f6]/40 text-white font-bold text-[13px] uppercase tracking-wider py-4 px-8 rounded-xl hover:bg-[#1e2a6b]/80 transition-all w-full sm:w-auto flex items-center justify-center gap-3">
              <MessageSquare className="w-4 h-4 stroke-[2.5]" />
              TALK TO AN ACO BUDDY
            </button>
          </div>
          
          <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[13px] text-[#8e9bbd]">
            <p>© 2026 Acolyte. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
