'use client'
import { motion } from 'motion/react';
import { Heart, ArrowRight, Shield, Award } from 'lucide-react';
import { useState } from 'react';

export function DonationCTA() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const amounts = [25, 50, 100, 250, 500];

  return (
    <section id="involved" className="py-20 bg-linear-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm mb-6">
              <Heart className="w-4 h-4" fill="white" />
              Make a Difference Today
            </div>

            <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
              Your Donation Creates Lasting Change
            </h2>

            <p className="text-xl text-blue-100 mb-8">
              Every euro helps us provide essential services, build infrastructure, 
              and empower communities to create sustainable futures.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white">100% Secure</div>
                  <div className="text-sm text-blue-200">Encrypted donations</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white">Tax Deductible</div>
                  <div className="text-sm text-blue-200">EU certified charity</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl text-gray-900 mb-6">Choose Your Impact</h3>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 mb-3 block">Select Amount (EUR)</label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-3 rounded-xl transition-all duration-300 ${
                      selectedAmount === amount
                        ? 'bg-blue-700 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    €{amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Custom amount"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-700 focus:outline-none transition-colors"
              />
            </div>

            {/* Donation Type */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 mb-3 block">Donation Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-3 bg-blue-700 text-white rounded-xl shadow-lg">
                  One-Time
                </button>
                <button className="py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                  Monthly
                </button>
              </div>
            </div>

            {/* Impact Message */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="text-sm text-green-800">
                Your €{selectedAmount} donation can provide clean water for a family of 5 for an entire year! 🌊
              </div>
            </div>

            <button className="group w-full py-4 bg-linear-to-r from-blue-700 to-blue-800 text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Donate Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              You&apos;ll be redirected to our secure payment processor
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
