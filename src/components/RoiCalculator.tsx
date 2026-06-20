import React, { useState } from 'react';
import { DollarSign, Clock, TrendingUp, Sparkles, HelpCircle } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [weeklyHours, setWeeklyHours] = useState<number>(12);
  const [hourlyRate, setHourlyRate] = useState<number>(65);
  const [droppedLeads, setDroppedLeads] = useState<number>(3);
  const [avgLeadValue, setAvgLeadValue] = useState<number>(1200);

  // Calculations
  const monthlyAdminHoursSaved = Math.round(weeklyHours * 4 * 0.85); // 85% admin time saved
  const monthlyTimeValueSaved = monthlyAdminHoursSaved * hourlyRate;
  
  // Assuming 50% recovery rate of dropped leads through instant auto follow-ups
  const monthlyRecoveredLeads = droppedLeads * 0.5; 
  const monthlyRecoveredRevenue = Math.round(monthlyRecoveredLeads * avgLeadValue);
  
  const totalMonthlyImpact = monthlyTimeValueSaved + monthlyRecoveredRevenue;
  const totalYearlyImpact = totalMonthlyImpact * 12;

  return (
    <section id="roi-calculator" className="py-24 bg-brand-slate text-gray-900 border-t border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-blue/10 rounded-full px-3 py-1">
            <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">
              ROI & Time Calculator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark font-sans">
            How Much Time & Revenue Are You Dropping?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-sans">
            Manual data entry, missing follow-ups, and repetitive onboarding tasks are leaking real margin. Drag the sliders to calculate your customized automation savings.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
            <h3 className="font-sans font-bold text-lg text-brand-dark flex items-center space-x-2 border-b border-gray-100 pb-4">
              <Clock className="h-5 w-5 text-brand-blue" />
              <span>Input Your Operational Metrics</span>
            </h3>

            {/* Slider 1: Weekly Hours spent on manual tasks */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-gray-700 flex items-center space-x-1">
                  <span>Weekly Admin Task Load</span>
                  <span className="group relative text-gray-400 hover:text-brand-blue cursor-pointer">
                    <HelpCircle className="h-3.5 w-3.5" />
                    <span className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-48 bg-slate-900 text-white text-[10px] p-2 rounded shadow-lg z-20 font-normal">
                      Hours spent invoicing, scheduling, typing emails or onboarding files manually.
                    </span>
                  </span>
                </label>
                <span className="font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-0.5 rounded text-sm">
                  {weeklyHours} hrs / week
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="40"
                step="1"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>3 hrs</span>
                <span>20 hrs</span>
                <span>40 hrs (Full-time)</span>
              </div>
            </div>

            {/* Slider 2: Hourly Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-gray-700 flex items-center space-x-1">
                  <span>Your Effective Hourly Rate</span>
                  <span className="group relative text-gray-400 hover:text-brand-blue cursor-pointer">
                    <HelpCircle className="h-3.5 w-3.5" />
                    <span className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-48 bg-slate-900 text-white text-[10px] p-2 rounded shadow-lg z-20 font-normal">
                      The billing value of your hourly concentration, or your target rate.
                    </span>
                  </span>
                </label>
                <span className="font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-0.5 rounded text-sm">
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>$20/hr</span>
                <span>$135/hr</span>
                <span>$250/hr</span>
              </div>
            </div>

            {/* Slider 3: Dropped Leads */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-gray-700 flex items-center space-x-1">
                  <span>Missed Leads Per Month</span>
                  <span className="group relative text-gray-400 hover:text-brand-blue cursor-pointer">
                    <HelpCircle className="h-3.5 w-3.5" />
                    <span className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-48 bg-slate-900 text-white text-[10px] p-2 rounded shadow-lg z-20 font-normal">
                      Leads that dropped or went cold due to delayed follow-ups or manual bottleneck.
                    </span>
                  </span>
                </label>
                <span className="font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-0.5 rounded text-sm">
                  {droppedLeads} leads / month
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="1"
                value={droppedLeads}
                onChange={(e) => setDroppedLeads(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>0 leads</span>
                <span>7 leads</span>
                <span>15 leads</span>
              </div>
            </div>

            {/* Slider 4: Clean Contract/Lead Value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-gray-700 flex items-center space-x-1">
                  <span>Average Contract / Service Value</span>
                </label>
                <span className="font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-0.5 rounded text-sm">
                  ${avgLeadValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="8000"
                step="100"
                value={avgLeadValue}
                onChange={(e) => setAvgLeadValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>$200</span>
                <span>$4,100</span>
                <span>$8,000</span>
              </div>
            </div>
          </div>

          {/* Impact/Output results column */}
          <div className="lg:col-span-5 bg-brand-dark rounded-2xl p-6 sm:p-8 text-white relative border border-brand-blue/40 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-brand-light-blue/10 blur-[50px] pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <span className="text-xs font-mono text-brand-light-blue font-bold uppercase tracking-wider block">
                ANNUAL RECLAIMED CAPITAL
              </span>

              {/* Mega value text projection */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light-blue to-[#38bdf8] font-sans">
                  ${totalYearlyImpact.toLocaleString()}
                </div>
                <p className="text-xs text-gray-300 font-sans">
                  Estimated efficiency dividends & recovered sales annually.
                </p>
              </div>

              {/* Segmented Dividends list */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                
                {/* Time saved */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-semibold text-gray-300 block">Monthly Hours Recovered</span>
                    <p className="text-xl font-bold text-white mt-0.5">{monthlyAdminHoursSaved} Hours / mo</p>
                  </div>
                  <div className="text-xs text-brand-light-blue bg-brand-light-blue/10 px-2 py-0.5 rounded font-mono">
                    ~85% efficiency
                  </div>
                </div>

                {/* Time value */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-semibold text-gray-300 block">Monthly Recovered Hours Value</span>
                    <p className="text-xl font-bold text-white mt-0.5">${monthlyTimeValueSaved.toLocaleString()} / mo</p>
                  </div>
                </div>

                {/* Sales value */}
                {droppedLeads > 0 && (
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-semibold text-gray-300 block">Monthly Recovered Sales Revenue</span>
                      <p className="text-xl font-bold text-emerald-400 mt-0.5">${monthlyRecoveredRevenue.toLocaleString()} / mo</p>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Micro value reassurance bar */}
            <div className="mt-8 bg-white/5 border border-white/5 rounded-xl p-4 relative z-10 space-y-2">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-brand-light-blue animate-pulse" />
                <span className="text-xs font-bold text-white">How Abegail secures this ROI:</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                By setting up instantaneous CRM webhooks, multi-channel auto follow-up sequences, and simple automated calendars to convert fresh leads in seconds rather than days.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
