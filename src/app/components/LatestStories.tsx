'use client'
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: 'Clean Water Transforms Village in Rural Romania',
    excerpt: 'After 6 months of construction, the new water system now serves 3,000 residents with safe, clean drinking water. Waterborne diseases have dropped by 89%.',
    image: 'https://images.unsplash.com/photo-1543181077-099f32f30a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwYWZyaWNhfGVufDF8fHx8MTc2Nzg0NzE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Water & Sanitation',
    date: 'Jan 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Education Program Graduates 500 Students',
    excerpt: 'Our scholarship program celebrates its largest graduating class, with 95% of students continuing to higher education or vocational training.',
    image: 'https://images.unsplash.com/photo-1569420626546-55b02c8376b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbnxlbnwxfHx8fDE3Njc4NDcxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Education',
    date: 'Dec 15, 2025',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Mobile Clinics Reach Remote Communities',
    excerpt: 'Our healthcare initiative has provided medical care to over 10,000 people in areas previously without access to healthcare services.',
    image: 'https://images.unsplash.com/photo-1624638764471-cffef5035746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBhaWR8ZW58MXx8fHwxNzY3ODQ3MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Healthcare',
    date: 'Dec 8, 2025',
    readTime: '6 min read',
  },
];

function StoryCard({ story, index }: { story: Story; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative overflow-hidden h-64">
        <Image
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          fill
        />

        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-sm">
          <Tag className="w-3.5 h-3.5 text-blue-700" />
          <span className="text-gray-700">{story.category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {story.date}
          </div>
          <span>•</span>
          <span>{story.readTime}</span>
        </div>

        <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
          {story.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          {story.excerpt}
        </p>

        <Link href={'/stories'} className="group/btn inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-colors">
          Read Full Story
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}

export function LatestStories() {
  return (
    <section id="stories" className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
              Latest Updates
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Impact Stories & News
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest projects, success stories, and the difference we&apos;re making together
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href={'/stories'} className="px-8 py-3 text-blue-700 border-2 border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 hover:shadow-lg">
            View All Stories
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
