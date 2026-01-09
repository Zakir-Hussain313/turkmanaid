'use client'
import { motion } from 'motion/react';
import { TrendingUp, Users, Heart, Droplets, GraduationCap, Award, Eye } from 'lucide-react';
import Image from 'next/image';

const impactAreas = [
    {
        icon: <Droplets className="w-8 h-8" />,
        title: 'Water & Sanitation',
        beneficiaries: '9,000+',
        metric: '21+ wells built',
        color: 'blue',
    },
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: 'Education',
        beneficiaries: '13,000+',
        metric: '13 schools built',
        color: 'green',
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: 'Healthcare',
        beneficiaries: '2,700+',
        metric: '7 mobile clinics',
        color: 'red',
    }
];

const colorClasses = {
    blue: 'from-blue-500 to-blue-700',
    green: 'from-green-500 to-green-700',
    red: 'from-red-500 to-red-700',
    purple: 'from-purple-500 to-purple-700',
};

const yearlyImpact = [
    { year: '2022', beneficiaries: 5500, projects: 8, funding: 420000 },
    { year: '2023', beneficiaries: 6000, projects: 9, funding: 750000 },
    { year: '2024', beneficiaries: 9000, projects: 13, funding: 980000 },
    { year: '2025', beneficiaries: 8000, projects: 11, funding: 900000 },
];

const caseStudies = [
    {
        title: 'Clean Water for Cluj-Napoca Villages',
        location: 'Afghanistan',
        description: 'In 2024, we completed a comprehensive water infrastructure project serving 6 rural villages. The project included drilling 9 wells, installing filtration systems, and training local maintenance teams.',
        image: 'https://images.unsplash.com/photo-1543181077-099f32f30a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwYWZyaWNhfGVufDF8fHx8MTc2Nzg0NzE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        results: [
            '5,000 people with clean water access',
            '89% reduction in waterborne diseases',
            '3 hours per day saved on water collection',
            '12 local jobs created for maintenance',
        ],
    },
    {
        title: 'Sofia Education Initiative',
        location: 'Pakistan',
        description: 'Our education program has built 3 modern schools and renovated 8 existing facilities, while providing scholarships to 1,200 students from low-income families.',
        image: 'https://images.unsplash.com/photo-1569420626546-55b02c8376b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbnxlbnwxfHx8fDE3Njc4NDcxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        results: [
            '5,000 students enrolled',
            '95% graduation rate',
            '200 teachers trained',
            '40% increase in university enrollment',
        ],
    },
];

export default function ImpactPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-20 bg-linear-to-b from-blue-50/50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
                            Measurable Change
                        </div>
                        <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
                            Our <span className="text-blue-700">Impact</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transparent reporting on how we&apos;re creating lasting change in communities across Europe.
                            Every number represents a life transformed, a family empowered, a community thriving.
                        </p>
                    </motion.div>

                    {/* Key Metrics */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-linear-to-br from-blue-700 to-blue-900 p-8 rounded-2xl text-white text-center"
                        >
                            <Users className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-4xl mb-2">30K+</div>
                            <div className="text-blue-100">Lives Transformed</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-linear-to-br from-green-700 to-green-900 p-8 rounded-2xl text-white text-center"
                        >
                            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-4xl mb-2">7</div>
                            <div className="text-green-100">Active Projects</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-linear-to-br from-purple-700 to-purple-900 p-8 rounded-2xl text-white text-center"
                        >
                            <Award className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-4xl mb-2">8+</div>
                            <div className="text-purple-100">Countries Served</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-linear-to-br from-orange-600 to-orange-800 p-8 rounded-2xl text-white text-center"
                        >
                            <Heart className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-4xl mb-2">€320k</div>
                            <div className="text-orange-100">Annual Budget 2025</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Impact by Area */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Impact by Focus Area</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Breaking down our work across key development sectors
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {impactAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white border-2 border-gray-100 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${colorClasses[area.color as keyof typeof colorClasses]} text-white rounded-2xl mb-4`}>
                                    {area.icon}
                                </div>
                                <h3 className="text-xl text-gray-900 mb-4">{area.title}</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Beneficiaries:</span>
                                        <span className="text-gray-900">{area.beneficiaries}</span>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <div className="text-sm text-blue-700">{area.metric}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Yearly Growth */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Growth Over Time</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our expanding reach and increasing impact year over year
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {yearlyImpact.map((year, index) => (
                            <motion.div
                                key={year.year}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-lg"
                            >
                                <div className="grid md:grid-cols-4 gap-6 items-center">
                                    <div className="md:col-span-1">
                                        <div className="text-3xl text-blue-700">{year.year}</div>
                                    </div>
                                    <div className="md:col-span-3 grid grid-cols-3 gap-6">
                                        <div>
                                            <div className="text-sm text-gray-600 mb-1">Beneficiaries</div>
                                            <div className="text-2xl text-gray-900">{year.beneficiaries.toLocaleString()}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 mb-1">Projects Completed</div>
                                            <div className="text-2xl text-gray-900">{year.projects}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 mb-1">Funds Deployed</div>
                                            <div className="text-2xl text-gray-900">€{(year.funding / 1000000).toFixed(1)}M</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Case Studies</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Deep dives into our most impactful projects
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-50 rounded-3xl overflow-hidden"
                            >
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div className="order-2 lg:order-1 p-8 lg:p-12">
                                        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
                                            {study.location}
                                        </div>
                                        <h3 className="text-3xl text-gray-900 mb-4">{study.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Eye className="w-5 h-5 text-blue-700" />
                                                <span className="text-gray-900">Key Results:</span>
                                            </div>
                                            {study.results.map((result, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                        <span className="text-white text-xs">✓</span>
                                                    </div>
                                                    <span className="text-gray-700">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="order-1 lg:order-2 relative min-h-25">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-full object-cover"
                                            fill
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
