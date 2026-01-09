'use client'
import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Calendar, Users, Target, ArrowRight, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    location: string;
    country: string;
    image: string;
    raised: number;
    goal: number;
    category: string;
    beneficiaries: number;
    startDate: string;
    status: 'active' | 'completed' | 'upcoming';
}

const allProjects: Project[] = [
    {
        id: 1,
        title: 'Clean Water Initiative',
        description: 'Providing access to clean, safe drinking water for rural communities.',
        longDescription: 'Building sustainable water infrastructure including wells, filtration systems, and water towers to serve 5,000+ people in Afghanistan.',
        location: 'Herat',
        country: 'Afghanistan',
        image: 'https://images.unsplash.com/photo-1543181077-099f32f30a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwYWZyaWNhfGVufDF8fHx8MTc2Nzg0NzE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        raised: 11000,
        goal: 22000,
        category: 'Water & Sanitation',
        beneficiaries: 8000,
        startDate: 'Jan 2025',
        status: 'active',
    },
    {
        id: 2,
        title: 'Education for All',
        description: 'Building schools and providing educational resources to underserved communities.',
        longDescription: 'Constructing modern school facilities, training teachers, and providing learning materials to ensure quality education for 5,000 children.',
        location: 'Washuk',
        country: 'Pakistan',
        image: 'https://images.unsplash.com/photo-1569420626546-55b02c8376b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbnxlbnwxfHx8fDE3Njc4NDcxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        raised: 29000,
        goal: 40000,
        category: 'Education',
        beneficiaries: 3000,
        startDate: 'Mar 2025',
        status: 'active',
    },
    {
        id: 3,
        title: 'Healthcare Access Program',
        description: 'Mobile health clinics bringing essential medical care to remote areas.',
        longDescription: 'Operating 5 mobile clinics equipped with modern medical equipment, staffed by qualified healthcare professionals serving isolated communities.',
        location: 'Thessaloniki',
        country: 'Greece',
        image: 'https://images.unsplash.com/photo-1624638764471-cffef5035746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBhaWR8ZW58MXx8fHwxNzY3ODQ3MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        raised: 32000,
        goal: 50000,
        category: 'Healthcare',
        beneficiaries: 6000,
        startDate: 'Feb 2025',
        status: 'active',
    },
    {
        id: 4,
        title: 'Sustainable Agriculture Training',
        description: 'Teaching modern farming techniques to improve food security.',
        longDescription: 'Comprehensive training program in sustainable agriculture, providing tools, seeds, and ongoing support to 300 farming families.',
        location: 'Tandojam',
        country: 'Pakistan',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2Nzg0NzE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        raised: 28000,
        goal: 40000,
        category: 'Agriculture',
        beneficiaries: 1500,
        startDate: 'Apr 2025',
        status: 'active',
    },
    {
        id: 6,
        title: 'Emergency Relief Fund',
        description: 'Rapid response support for communities affected by natural disasters.',
        longDescription: 'Immediate assistance including food, shelter, and medical care for families impacted by floods, earthquakes, and other emergencies.',
        location: 'Multiple Regions',
        country: 'African-wide',
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZWxpZWZ8ZW58MXx8fHwxNzY3ODQ3MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        raised: 85000,
        goal: 100000,
        category: 'Emergency',
        beneficiaries: 12000,
        startDate: 'Ongoing',
        status: 'active',
    },
];

const categories = ['All', 'Water & Sanitation', 'Education', 'Healthcare', 'Agriculture', 'Emergency'];

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
            <div className="relative overflow-hidden h-64">
                <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    fill
                />

                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-sm text-gray-700">
                    {project.category}
                </div>

                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full uppercase tracking-wide">
                        {project.status}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.startDate}
                    </div>
                </div>

                <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                    {project.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <Users className="w-4 h-4" />
                    <span>{project.beneficiaries.toLocaleString()} beneficiaries</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">
                            €{project.raised.toLocaleString()} raised
                        </span>
                        <span className="text-gray-900">
                            {percentage.toFixed(0)}%
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
                    <div className="text-sm text-gray-500 mt-1">
                        Goal: €{project.goal.toLocaleString()}
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

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-linear-to-b from-blue-50/50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
                            Our <span className="text-blue-700">Projects</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the initiatives we&apos;re leading to create lasting change. Every project is designed
                            with community input and focuses on sustainable, long-term impact.
                        </p>
                    </motion.div>

                    {/* Statistics */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-lg text-center"
                        >
                            <Target className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                            <div className="text-3xl text-gray-900 mb-2">7</div>
                            <div className="text-gray-600">Active Projects</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white p-6 rounded-2xl shadow-lg text-center"
                        >
                            <Users className="w-12 h-12 text-green-700 mx-auto mb-4" />
                            <div className="text-3xl text-gray-900 mb-2">30K+</div>
                            <div className="text-gray-600">People Reached</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-6 rounded-2xl shadow-lg text-center"
                        >
                            <MapPin className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                            <div className="text-3xl text-gray-900 mb-2">8</div>
                            <div className="text-gray-600">Countries</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-4 border-t border-gray-100 sticky top-20 z-40 backdrop-blur-sm bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 overflow-x-auto pb-2">
                        <Filter className="w-5 h-5 text-gray-400 shrink-0" />
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-blue-700 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-linear-to-b from-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-500">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-linear-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl mb-6">
                            Can&apos;t Decide Which Project to Support?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Make a general donation and let us allocate it where it&apos;s needed most
                        </p>
                        <Link href={'/contact'} className="px-8 py-4 bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
                            Make a General Donation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
