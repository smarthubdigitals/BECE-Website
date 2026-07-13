import { useState, useEffect } from 'react';
import { Sliders, Clock, HelpCircle, CheckCircle2, ArrowRight, Receipt, Tag, Zap } from 'lucide-react';

interface ServiceEstimatorProps {
  onQuoteRequested: (serviceSummary: string) => void;
}

export default function ServiceEstimator({ onQuoteRequested }: ServiceEstimatorProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(['srv-1']);
  const [tier, setTier] = useState<'starter' | 'growth' | 'premium'>('growth');
  const [speed, setSpeed] = useState<'standard' | 'express'>('standard');
  const [estimate, setEstimate] = useState({
    subtotal: 0,
    tierAdjustment: 0,
    speedSurcharge: 0,
    total: 0,
    days: '2-3 Days',
    summary: '',
  });

  const availableServices = [
    { id: 'srv-1', label: 'Graphic Design', baseDays: 2, basePrice: 150, desc: 'Flyers, Logos, Social Posts' },
    { id: 'srv-2', label: 'Website Design', baseDays: 5, basePrice: 950, desc: 'Single Page, Custom Landing Page' },
    { id: 'srv-3', label: 'Content Creation', baseDays: 2, basePrice: 200, desc: 'SEO Articles, Copywriting' },
    { id: 'srv-4', label: 'Video Editing', baseDays: 3, basePrice: 350, desc: 'Social Reels, Promo Videos' },
  ];

  const handleToggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  useEffect(() => {
    // Calculate estimated turnaround time and cost tiers
    let totalDays = 0;
    let baseSubtotal = 0;
    const activeDetails: string[] = [];

    availableServices.forEach((service) => {
      if (selectedServices.includes(service.id)) {
        totalDays += service.baseDays;
        baseSubtotal += service.basePrice;
        activeDetails.push(`${service.label} (GH₵ ${service.basePrice})`);
      }
    });

    // Tier multipliers and descriptions
    let tierMultiplier = 1;
    let tierText = 'SME / School (Growth Tier)';

    if (tier === 'starter') {
      tierMultiplier = 0.85; // 15% discount for churches, students, personal portfolios
      tierText = 'Starter Level (-15% Church/Indiv Discount)';
    } else if (tier === 'growth') {
      tierMultiplier = 1.0;
      tierText = 'Growth Level (Standard SME/School Rate)';
    } else if (tier === 'premium') {
      tierMultiplier = 1.35; // 35% extra for advanced enterprise-grade additions
      tierText = 'Premium Level (+35% NGO/Business Complex Add-ons)';
    }

    const tierAdjustment = baseSubtotal * (tierMultiplier - 1);
    const afterTier = baseSubtotal + tierAdjustment;

    // Speed multiplier (+25% surcharge for express delivery)
    let speedMultiplier = 1.0;
    let speedText = 'Standard speed';
    if (speed === 'express') {
      speedMultiplier = 1.25;
      speedText = 'Express Rush (+25% Speed Surcharge)';
    }

    const speedSurcharge = afterTier * (speedMultiplier - 1);
    const finalTotal = afterTier + speedSurcharge;

    // Turnaround days calculation
    let finalDays = Math.ceil(totalDays * (tier === 'starter' ? 0.9 : tier === 'premium' ? 1.2 : 1.0));
    if (speed === 'express') {
      finalDays = Math.max(1, Math.ceil(finalDays * 0.6));
    }

    // Generate readable turnaround label
    let daysLabel = `${finalDays} to ${finalDays + 2} Days`;
    if (finalDays <= 1) {
      daysLabel = '24-48 Hours';
    }

    // Format numbers cleanly
    const formattedTotal = finalTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    // Generate pre-filled prompt summary for Abdul Waheed's inbox
    const summaryText = `I have used the dynamic project cost estimator to configure a package:
- Services Needed: ${activeDetails.join(', ')}
- Organization Tier: ${tierText}
- Timeline speed: ${speed === 'express' ? 'EXPRESS (Fast-track)' : 'STANDARD'}
- Estimated Duration: ${daysLabel}
- Calculated Cost: GH₵ ${formattedTotal} GHS`;

    setEstimate({
      subtotal: baseSubtotal,
      tierAdjustment: tierAdjustment,
      speedSurcharge: speedSurcharge,
      total: finalTotal,
      days: daysLabel,
      summary: summaryText,
    });
  }, [selectedServices, tier, speed]);

  const handleSubmitQuote = () => {
    onQuoteRequested(estimate.summary);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 mt-12 max-w-4xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2.5 rounded-lg bg-royal/10 text-royal">
          <Sliders className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-poppins font-bold text-lg sm:text-xl text-navy">
            Interactive Project & Cost Estimator
          </h3>
          <p className="font-sans text-xs sm:text-sm text-gray-500 mt-0.5">
            Select what you need, configure your timeline, and view your transparent instant pricing quote in Ghana Cedis.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Settings Column */}
        <div className="md:col-span-7 space-y-6">
          {/* Step 1: Select Services */}
          <div>
            <label className="block font-poppins font-bold text-xs uppercase tracking-wider text-gray-400 mb-3">
              1. What services do you need?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableServices.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    onClick={() => handleToggleService(service.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-royal bg-royal/5 text-royal font-semibold'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <div className="flex flex-col pr-2">
                      <span className="font-sans text-sm font-semibold text-gray-800">{service.label}</span>
                      <span className="font-sans text-[11px] text-gray-400 mt-0.5">{service.desc}</span>
                      <span className="font-mono text-xs text-royal font-semibold mt-1">GH₵ {service.basePrice}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                      className="w-4 h-4 text-royal focus:ring-royal rounded border-gray-300 cursor-pointer"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Client Type / Scope */}
          <div>
            <label className="block font-poppins font-bold text-xs uppercase tracking-wider text-gray-400 mb-3">
              2. Choose your organization tier
            </label>
            <div className="grid grid-cols-3 gap-2 bg-gray-50 p-1 rounded-xl">
              {[
                { id: 'starter', label: 'Starter', desc: 'Indiv / Church', rate: '-15% Disc.' },
                { id: 'growth', label: 'Growth', desc: 'SME / School', rate: 'Standard' },
                { id: 'premium', label: 'Premium', desc: 'NGO / Business', rate: '+35% Complex' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id as any)}
                  className={`py-2.5 px-2 rounded-lg font-poppins font-semibold text-xs transition-all duration-200 text-center cursor-pointer ${
                    tier === t.id
                      ? 'bg-white text-royal shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <span className="block">{t.label}</span>
                  <span className="block font-sans text-[9px] text-gray-400 mt-0.5 font-normal">
                    {t.desc}
                  </span>
                  <span className={`block font-mono text-[9px] mt-0.5 ${t.id === 'starter' ? 'text-emerald-cta font-semibold' : 'text-gray-400'}`}>
                    {t.rate}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Speed option */}
          <div>
            <label className="block font-poppins font-bold text-xs uppercase tracking-wider text-gray-400 mb-3">
              3. Select Turnaround Speed
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setSpeed('standard')}
                className={`flex-1 py-3 px-4 rounded-xl border text-center font-poppins font-medium text-sm transition-all duration-200 cursor-pointer ${
                  speed === 'standard'
                    ? 'border-royal bg-royal/5 text-royal font-semibold'
                    : 'border-gray-200 hover:border-gray-300 text-gray-500'
                }`}
              >
                Standard Timeline
              </button>
              <button
                onClick={() => setSpeed('express')}
                className={`flex-1 py-3 px-4 rounded-xl border text-center font-poppins font-medium text-sm transition-all duration-200 cursor-pointer ${
                  speed === 'express'
                    ? 'border-emerald-cta bg-emerald-cta/5 text-emerald-cta font-semibold'
                    : 'border-gray-200 hover:border-gray-300 text-gray-500'
                }`}
              >
                Express Delivery⚡ (+25%)
              </button>
            </div>
          </div>
        </div>

        {/* Estimation Results Panel */}
        <div className="md:col-span-5 bg-navy text-white p-6 rounded-2xl flex flex-col justify-between self-stretch shadow-lg border border-white/5">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
              <span className="text-cyan-accent text-[10px] font-poppins font-bold uppercase tracking-widest block">
                Live Pricing Proposal
              </span>
              <Receipt className="w-4 h-4 text-cyan-accent" />
            </div>

            {/* Estimated Total */}
            <div className="bg-navy-light/50 border border-white/10 rounded-xl p-4 mb-4">
              <span className="text-[10px] font-poppins uppercase tracking-wider text-gray-400 block mb-1">
                Estimated Investment
              </span>
              <div className="flex items-baseline space-x-1">
                <span className="text-sm font-poppins font-bold text-emerald-cta">GH₵</span>
                <span className="text-3xl font-poppins font-bold text-white tracking-tight">
                  {estimate.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-xs font-mono text-gray-400 ml-1.5 font-bold">GHS</span>
              </div>
            </div>

            {/* Turnaround speed indicator */}
            <div className="flex items-start space-x-3 mb-4 bg-navy-light/20 p-2.5 rounded-lg border border-white/5">
              <Clock className="w-4.5 h-4.5 text-cyan-accent mt-0.5 shrink-0" />
              <div>
                <p className="font-sans text-[11px] text-gray-400 leading-none">Est. Turnaround Time</p>
                <p className="font-poppins font-bold text-sm text-white mt-1">
                  {estimate.days}
                </p>
              </div>
            </div>

            {/* Receipt Breakdown details */}
            <div className="space-y-1.5 border-t border-b border-white/10 py-3 my-4 font-mono text-[11px] text-gray-300">
              <div className="flex justify-between">
                <span>Base Subtotal:</span>
                <span>GH₵ {estimate.subtotal.toFixed(2)}</span>
              </div>
              
              {estimate.tierAdjustment !== 0 && (
                <div className={`flex justify-between ${estimate.tierAdjustment < 0 ? 'text-emerald-cta' : 'text-cyan-accent'}`}>
                  <span>Tier Adjustment:</span>
                  <span>{estimate.tierAdjustment < 0 ? '-' : '+'}GH₵ {Math.abs(estimate.tierAdjustment).toFixed(2)}</span>
                </div>
              )}

              {estimate.speedSurcharge > 0 && (
                <div className="flex justify-between text-yellow-400">
                  <span>Express Delivery Surcharge:</span>
                  <span>+GH₵ {estimate.speedSurcharge.toFixed(2)}</span>
                </div>
              )}
            </div>

            {/* Note reinforcing local trust */}
            <div className="flex items-start space-x-2 mt-4 text-[10px] text-gray-400 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
              <Tag className="w-3.5 h-3.5 text-emerald-cta shrink-0 mt-0.5" />
              <p>
                <strong>Upfront Transparency:</strong> Prices are calibrated based on local rates in Tamale, Ghana, helping you plan your budget. Final scope can still be negotiated!
              </p>
            </div>
          </div>

          <button
            id="estimator-submit-quote"
            onClick={handleSubmitQuote}
            className="w-full bg-emerald-cta hover:bg-emerald-cta/90 text-white mt-6 py-3 rounded-xl font-poppins font-semibold text-xs transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-emerald-cta/25 cursor-pointer uppercase tracking-wider"
          >
            <span>Lock In GHS Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
