'use client'
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Popescu',
    role: 'Community Member, Romania',
    content: 'The clean water project has transformed our village. Our children no longer walk hours for water, and we\'ve seen a dramatic decrease in waterborne illnesses.',
    image: '/marie.avif',
  },
  {
    id: 2,
    name: 'Andreas Müller',
    role: 'Monthly Donor, Germany',
    content: 'Knowing exactly where my contribution goes gives me confidence. The transparency and regular updates make me proud to support Turkman Aid.',
    image: '/andrew.avif',
  },
  {
    id: 3,
    name: 'Sofia Dimitrova',
    role: 'Teacher, Bulgaria',
    content: 'The education program has given our students hope for the future. We now have proper supplies, trained teachers, and children eager to learn.',
    image: '/sofia.avif',
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
    >
      <Quote className="w-12 h-12 text-blue-100 mb-6" />

      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        &quot;{testimonial.content}&quot;
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full bg-blue-100"
        />
        <div>
          <div className="text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Stories of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from the people whose lives have been touched by our work
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
