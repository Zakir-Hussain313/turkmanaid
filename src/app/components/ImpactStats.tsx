'use client'
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Users, Droplets, GraduationCap, Heart } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

function AnimatedStat({ icon, value, suffix = '', label, delay }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl mb-4 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl text-gray-900 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}

export function ImpactStats() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Together, we&apos;re creating measurable change in communities across dependent areas and beyond
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimatedStat
            icon={<Users className="w-8 h-8" />}
            value={30000}
            suffix="+"
            label="Lives Transformed"
            delay={0}
          />
          <AnimatedStat
            icon={<Droplets className="w-8 h-8" />}
            value={24}            suffix="+"
            label="Clean Water Projects"
            delay={0.1}
          />
          <AnimatedStat
            icon={<GraduationCap className="w-8 h-8" />}
            value={4000}
            suffix="+"
            label="Children Educated"
            delay={0.2}
          />
          <AnimatedStat
            icon={<Heart className="w-8 h-8" />}
            value={12500}
            suffix="+"
            label="Volunteer Hours"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
