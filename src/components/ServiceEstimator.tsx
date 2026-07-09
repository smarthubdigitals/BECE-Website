import { useState, useEffect } from 'react';
import { Sliders, Clock, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceEstimatorProps {
  onQuoteRequested: (serviceSummary: string) => void;
}

export default function ServiceEstimator({ onQuoteRequested }: ServiceEstimatorProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(['srv-1']);
  const [tier, setTier] = useState<'starter' | 'growth' | 'premium'>('growth');
  const [speed, setSpeed] = useState<'standard' | 'express'>('standard');
  const [estimate, setEstimate] = useState({
    price: 'Flexible Budget',
    days: '2-3 Days',
    summary: '',
  });

  const availableServices = [
    { id: 'srv-1', label: 'Graphic Design', baseDays: 2, icon: 'Palette' },
    { id: 'srv-2', label: 'Website Design', baseDays: 5, icon: 'Globe' },
    { id: 'srv-3', label: 'Content Creation', baseDays: 2, icon: 'PenTool' },
    { id: 'srv-4', label: 'Video Editing', baseDays: 3, icon: 'Video' },
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
    const activeDetails: string[] = [];

    availableServices.forEach((service) => {
      if (selectedServices.includes(service.id)) {
        totalDays += service.baseDays;
        activeDetails.push(service.label);
      }
    });

    // Tier multipliers and descriptions
    let multiplier = 1;
    let priceLabel = 'Highly Affordable';

    if (tier === 'starter') {
      multiplier = 0.8;
      priceLabel = 'Budget-Friendly (Starter)';
    } else if (tier === 'growth') {
      multiplier = 1;
      priceLabel = 'Competitive Standard';
    } else if (tier === 'premium') {
      multiplier = 1.3;
      priceLabel = 'Comprehensive (Premium)';
    }

    // Speed modifiers
    let finalDays = Math.ceil(totalDays * multiplier);
    if (speed === 'express') {
      finalDays = Math.max(1, Math.ceil(finalDays * 0.6));
    }

    // Generate readable turnaround label
    let daysLabel = `${finalDays} to ${finalDays + 2} Days`;
    if (finalDays <= 1) {
      daysLabel = '24-48 Hours';
    }

    // Generate pre-filled prompt summary
    const summaryText = `I am interested in: ${activeDetails.join(', ')} (Package level: ${tier.toUpperCase()}, Timeline: ${speed.toUpperCase()}).`;

    setEstimate({
      price: priceLabel,
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
            Interactive Project Estimator
          </h3>
          <p className="font-sans text-xs sm:text-sm text-gray-500 mt-0.5">
            Select what you need and get an instant turnaround estimate tailored to your budget.
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
                    <span className="font-sans text-sm">{service.label}</span>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                      className="w-4 h-4 text-royal focus:ring-royal rounded border-gray-300"
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
                { id: 'starter', label: 'Starter', desc: 'Indiv / Church' },
                { id: 'growth', label: 'Growth', desc: 'SME / School' },
                { id: 'premium', label: 'Premium', desc: 'NGO / Business' },
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
                Express Delivery⚡
              </button>
            </div>
          </div>
        </div>

        {/* Estimation Results Panel */}
        <div className="md:col-span-5 bg-navy text-white p-6 rounded-2xl flex flex-col justify-between self-stretch">
          <div>
            <span className="text-cyan-accent text-[10px] font-poppins font-bold uppercase tracking-widest block mb-1">
              Estimated Output
            </span>
            <h4 className="font-poppins font-bold text-lg text-white mb-4">
              Custom Package Package
            </h4>

            <div className="space-y-4">
              {/* Turnaround speed indicator */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-cyan-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans text-xs text-gray-400 leading-none">Est. Turnaround Time</p>
                  <p className="font-poppins font-bold text-base text-white mt-1">
                    {estimate.days}
                  </p>
                </div>
              </div>

              {/* Budget transparency block */}
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-cta mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans text-xs text-gray-400 leading-none">Pricing Strategy</p>
                  <p className="font-poppins font-bold text-base text-emerald-cta mt-1">
                    {estimate.price}
                  </p>
                  <p className="font-sans text-[10px] text-gray-400 mt-1 leading-normal">
                    I offer highly flexible pricing to suit local schools, NGOs, churches, and micro-enterprises. Let&apos;s negotiate!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            id="estimator-submit-quote"
            onClick={handleSubmitQuote}
            className="w-full bg-emerald-cta hover:bg-emerald-cta/90 text-white mt-8 py-3 rounded-xl font-poppins font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-emerald-cta/25 cursor-pointer"
          >
            <span>Lock In This Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
