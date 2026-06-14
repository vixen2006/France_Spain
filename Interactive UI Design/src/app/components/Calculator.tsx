import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Calculator() {
  const [nationality, setNationality] = useState('India');
  const [eduLevel, setEduLevel] = useState('UG / BTech');
  const [grade, setGrade] = useState('Band 1 / Class 1');
  const [ielts, setIelts] = useState('7.5+');
  const [tier, setTier] = useState('Russell Group');

  const calculateScore = () => {
    let base = 60;
    if (grade.includes('Class 1')) base += 20;
    else if (grade.includes('2:1')) base += 10;
    
    if (ielts === '7.5+') base += 10;
    else if (ielts === '7.0') base += 5;
    
    if (tier === 'Russell Group') base -= 10;
    else if (tier === 'Top 50') base += 5;
    else if (tier === 'Any tier') base += 15;
    
    return Math.min(Math.max(base, 20), 98);
  };

  const score = calculateScore();

  return (
    <div className="bg-white rounded-3xl p-2 max-w-[1000px] w-full mx-auto shadow-xl flex flex-col md:flex-row items-stretch border border-slate-100 mt-12 mb-24">
      {/* Left side: Form */}
      <div className="bg-[#1e3a8a] text-white p-8 md:p-12 rounded-[20px] flex-1">
        <h3 className="text-xs uppercase tracking-widest text-blue-200 font-semibold mb-2">YOUR PROFILE</h3>
        <p className="text-xl font-medium mb-8">Tell us what you're working with.</p>

        <div className="space-y-6">
          <div>
            <label className="text-xs text-blue-200 block mb-2">NATIONALITY</label>
            <div className="relative">
              <select 
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full bg-[#1e40af] border border-blue-600 rounded-lg p-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>India</option>
                <option>Nigeria</option>
                <option>China</option>
                <option>USA</option>
                <option>Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-blue-300 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-xs text-blue-200 block mb-2">EDUCATION LEVEL</label>
            <div className="flex flex-wrap gap-2">
              {['UG / BTech', 'PG / Taught', 'PG / Research'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => setEduLevel(opt)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${eduLevel === opt ? 'bg-white text-[#1e3a8a] font-medium' : 'bg-[#1e40af] text-blue-100 hover:bg-blue-800'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-blue-200 block mb-2">DEGREE GRADE</label>
            <div className="flex flex-wrap gap-2">
              {['Band 1 / Class 1', 'Band 2 / Class 2:1', 'Class 2:2 / Pass'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => setGrade(opt)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${grade === opt ? 'bg-white text-[#1e3a8a] font-medium' : 'bg-[#1e40af] text-blue-100 hover:bg-blue-800'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-blue-200 block mb-2">IELTS ENGLISH SCORE</label>
            <div className="flex flex-wrap gap-2">
              {['7.5+', '7.0', '6.5', '< 6.5'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => setIelts(opt)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${ielts === opt ? 'bg-white text-[#1e3a8a] font-medium' : 'bg-[#1e40af] text-blue-100 hover:bg-blue-800'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-blue-200 block mb-2">DESIRED UNIVERSITY TIER</label>
            <div className="flex flex-wrap gap-2">
              {['Russell Group', 'Top 50', 'Non-Russell', 'Any tier'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => setTier(opt)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${tier === opt ? 'bg-white text-[#1e3a8a] font-medium' : 'bg-[#1e40af] text-blue-100 hover:bg-blue-800'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-blue-800 flex justify-between items-center text-sm text-blue-300">
            <span>Reset</span>
            <span>All good to go</span>
            <span>Results 👉</span>
          </div>
        </div>
      </div>

      {/* Right side: Results */}
      <div className="p-8 md:p-12 md:w-[400px] flex flex-col justify-center items-center text-center">
        <h3 className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-8">PREDICTED SUCCESS</h3>
        
        <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90 absolute" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
            <motion.circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#1e3a8a" 
              strokeWidth="8"
              strokeDasharray={283}
              initial={{ strokeDashoffset: 283 }}
              animate={{ strokeDashoffset: 283 - (283 * score) / 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="flex flex-col items-center">
            <motion.span 
              key={score}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-6xl font-bold text-[#1e3a8a] tabular-nums"
            >
              {score}
            </motion.span>
            <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2">
              {score > 80 ? 'Highly competitive' : score > 60 ? 'Fairly competitive' : 'Stretch goal'}
            </span>
          </div>
        </div>

        <p className="text-slate-600 mb-8 leading-relaxed">
          You're well on your way! There's a <span className="font-bold text-[#1e3a8a]">{score}% chance</span> of getting into a <span className="font-bold text-[#1e3a8a]">{tier}</span> university based on your profile.
        </p>

        <button className="w-full bg-[#1e3a8a] hover:bg-blue-900 text-white font-medium py-4 px-6 rounded-full transition-colors flex items-center justify-center gap-2">
          Calculate chances
        </button>
      </div>
    </div>
  );
}
