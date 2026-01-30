'use client'
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  image: string;
  raised: number;
  goal: number;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing access to clean, safe drinking water for rural communities in Eastern Europe.',
    location: 'Afghanistan',
    image: '/WhatsApp Image 2026-01-12 at 9.11.49 PM.jpeg',
    raised: 14000,
    goal: 23000,
    category: 'Water & Sanitation',
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Building schools and providing educational resources to underserved communities.',
    location: 'Pakistan',
    image: '/project-2.jpeg',
    raised: 15000,
    goal: 18000,
    category: 'Education',
  },
  {
    id: 3,
    title: 'Healthcare Access',
    description: 'Mobile health clinics bringing essential medical care to remote areas.',
    location: 'Palestine',
    image: '/project-3.jpeg',
    raised: 11000,
    goal: 20000,
    category: 'Healthcare',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const percentage = (project.raised / project.goal) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative w-full overflow-hidden h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-sm text-gray-700">
          {project.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <MapPin className="w-4 h-4" />
          {project.location}
        </div>

        <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {project.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">
              €{project.raised.toLocaleString()} raised
            </span>
            <span className="text-gray-900">
              €{project.goal.toLocaleString()}
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              className="h-full bg-linear-to-r from-blue-600 to-blue-700 rounded-full"
            />
          </div>
        </div>

        <Link href={'/contact'} className="group/btn w-full px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300 flex items-center justify-center gap-2">
          Support This Project
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="work" className="py-20 bg-linear-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Current Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your contribution directly supports these life-changing initiatives
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href={'/projects'} className="px-8 py-3 text-blue-700 border-2 border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
