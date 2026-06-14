import React from 'react';
import { Building, Building2, Castle, Landmark, MapPin, Sun, Music } from 'lucide-react';

const ukCitiesData = [
  { 
    city: 'London', 
    icon: <Building className="w-4 h-4 text-[#8ea6de]" />, 
    rent: '£850–£1,100', 
    budget: '£1,350', 
    moderate: '£1,800', 
    comfortable: '£2,400' 
  },
  { 
    city: 'Manchester', 
    icon: <Building2 className="w-4 h-4 text-[#8ea6de]" />, 
    rent: '£550–£750', 
    budget: '£950', 
    moderate: '£1,250', 
    comfortable: '£1,700' 
  },
  { 
    city: 'Edinburgh', 
    icon: <Castle className="w-4 h-4 text-[#8ea6de]" />, 
    rent: '£650–£900', 
    budget: '£1,100', 
    moderate: '£1,450', 
    comfortable: '£1,950' 
  },
  { 
    city: 'Birmingham', 
    icon: <MapPin className="w-4 h-4 text-[#8ea6de]" />, 
    rent: '£500–£700', 
    budget: '£900', 
    moderate: '£1,150', 
    comfortable: '£1,550' 
  },
  { 
    city: 'Nottingham', 
    icon: <Landmark className="w-4 h-4 text-[#8ea6de]" />, 
    rent: '£480–£680', 
    budget: '£850', 
    moderate: '£1,100', 
    comfortable: '£1,450' 
  },
];

const spainCitiesData = [
  { city: 'Madrid', icon: <Building className="w-4 h-4 text-[#8ea6de]" />, rent: '€500–€900', budget: '€900', moderate: '€1,200', comfortable: '€1,650' },
  { city: 'Barcelona', icon: <Building2 className="w-4 h-4 text-[#8ea6de]" />, rent: '€600–€1,000', budget: '€1,050', moderate: '€1,400', comfortable: '€1,900' },
  { city: 'Valencia', icon: <Sun className="w-4 h-4 text-[#8ea6de]" />, rent: '€380–€650', budget: '€750', moderate: '€980', comfortable: '€1,350' },
  { city: 'Seville', icon: <Castle className="w-4 h-4 text-[#8ea6de]" />, rent: '€350–€600', budget: '€700', moderate: '€920', comfortable: '€1,250' },
  { city: 'Bilbao', icon: <Landmark className="w-4 h-4 text-[#8ea6de]" />, rent: '€430–€700', budget: '€800', moderate: '€1,050', comfortable: '€1,400' },
  { city: 'Granada', icon: <Music className="w-4 h-4 text-[#8ea6de]" />, rent: '€300–€520', budget: '€620', moderate: '€820', comfortable: '€1,100' },
  { city: 'Salamanca', icon: <MapPin className="w-4 h-4 text-[#8ea6de]" />, rent: '€280–€500', budget: '€600', moderate: '€780', comfortable: '€1,050' },
];

const franceCitiesData = [
  { city: 'Paris', icon: <Building className="w-4 h-4 text-[#8ea6de]" />, rent: '€700–€1,100', budget: '€1,200', moderate: '€1,600', comfortable: '€2,100' },
  { city: 'Lyon', icon: <Building2 className="w-4 h-4 text-[#8ea6de]" />, rent: '€500–€750', budget: '€900', moderate: '€1,200', comfortable: '€1,600' },
  { city: 'Toulouse', icon: <Sun className="w-4 h-4 text-[#8ea6de]" />, rent: '€430–€680', budget: '€800', moderate: '€1,050', comfortable: '€1,400' },
  { city: 'Bordeaux', icon: <Castle className="w-4 h-4 text-[#8ea6de]" />, rent: '€450–€700', budget: '€820', moderate: '€1,080', comfortable: '€1,450' },
  { city: 'Montpellier', icon: <Landmark className="w-4 h-4 text-[#8ea6de]" />, rent: '€400–€650', budget: '€780', moderate: '€1,020', comfortable: '€1,370' },
  { city: 'Strasbourg', icon: <MapPin className="w-4 h-4 text-[#8ea6de]" />, rent: '€400–€630', budget: '€760', moderate: '€1,000', comfortable: '€1,350' },
];

export function CostOfLiving({ country = 'uk' }: { country?: 'uk' | 'spain' | 'france' }) {
  const isSpain = country === 'spain';
  const isFrance = country === 'france';
  const data = isFrance ? franceCitiesData : isSpain ? spainCitiesData : ukCitiesData;
  const countryName = isFrance ? 'France' : isSpain ? 'Spain' : 'the UK';

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
      <div className="mb-14 max-w-3xl">
        <h3 className="text-[11px] font-bold text-[#3b82f6] tracking-[0.08em] uppercase mb-4">Cost of Living</h3>
        <h2 className="text-[44px] md:text-[56px] leading-[1.05] mb-6 tracking-tight">
          <span className="font-light text-[#141a38]">What your money</span><br/>
          <span className="font-bold text-[#161d83]">actually buys in {countryName}.</span>
        </h2>
        <p className="text-[15px] text-[#5c7bc5] font-medium">
          Monthly estimates for 2025/26. Shared accommodation, including rent, food, and transport.
        </p>
      </div>

      <div className="bg-white/95 backdrop-blur-xl rounded-[32px] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.05)] border border-blue-100/60 overflow-hidden relative">
        
        {/* Legend */}
        <div className="px-8 py-6 border-b border-blue-50 flex flex-wrap items-center gap-8 text-[12px] font-bold text-[#5c7bc5]">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#93c5fd]" />
            <span>Budget — cooking at home, deals</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
            <span>Moderate — eating out 1-2x/week</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1e3a8a]" />
            <span>Comfortable — regular outings</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#f8fafd]/60">
                <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-widest text-[#3b82f6] w-[25%]">City</th>
                <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-widest text-[#3b82f6] w-[20%]">Rent (Shared)</th>
                <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-widest text-[#3b82f6] w-[15%]">Budget / Mo</th>
                <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-widest text-[#3b82f6] w-[20%]">Moderate / Mo</th>
                <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-widest text-[#141a38] w-[20%]">Comfortable / Mo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-6 px-8 flex items-center gap-3">
                    {row.icon}
                    <span className="font-bold text-[#141a38] text-[15px]">{row.city}</span>
                  </td>
                  <td className="py-6 px-8 text-[#5c7bc5] font-medium text-[14px]">{row.rent}</td>
                  <td className="py-6 px-8 font-bold text-[#3b82f6] text-[14px]">{row.budget}</td>
                  <td className="py-6 px-8 font-bold text-[#2563eb] text-[14px]">{row.moderate}</td>
                  <td className="py-6 px-8 font-bold text-[#141a38] text-[14px]">{row.comfortable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
