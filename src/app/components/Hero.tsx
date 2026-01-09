'use client'
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-linear-to-b from-blue-50/50 to-white overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
              🌍 Making a Difference Since 2013
            </div>
            
            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
              Empowering Communities,
              <span className="text-blue-700"> Transforming Lives</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join us in creating lasting change across dependent areas. Every contribution 
              helps us provide education, clean water, and healthcare to those who need it most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={'/contact'} className="group px-8 py-4 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer">
                Start Making Impact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl text-blue-700 mb-1">30K+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
              <div>
                <div className="text-3xl text-blue-700 mb-1">8+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-3xl text-blue-700 mb-1">€2.5M</div>
                <div className="text-sm text-gray-600">Funds Raised</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl w-full h-150 overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBoZWxwaW5nJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2Nzg0NzE5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Volunteers helping community"
                fill
                className="object-cover"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💚</span>
                  </div>
                  <div>
                    <div className="text-2xl text-gray-900 mb-1">253</div>
                    <div className="text-sm text-gray-600">Donors This Month</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
