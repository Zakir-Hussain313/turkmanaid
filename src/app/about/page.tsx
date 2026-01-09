'use client'
import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const values = [
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Transparency',
        description: 'We maintain complete transparency in all our operations and financial reporting.',
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Community First',
        description: 'Local communities are at the heart of everything we do and every decision we make.',
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: 'Excellence',
        description: 'We strive for excellence in program delivery and measuring our impact.',
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Sustainability',
        description: 'Creating long-term, sustainable solutions that empower communities.',
    },
];

const team = [
    {
        name: 'Dr. Elena Popescu',
        role: 'Executive Director',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
        bio: '15+ years in international development',
    },
    {
        name: 'Marcus Weber',
        role: 'Director of Programs',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
        bio: 'Led 200+ successful projects across Europe',
    },
    {
        name: 'Sofia Dimitrova',
        role: 'Head of Partnerships',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SofiaD',
        bio: 'Former UN Development Programme advisor',
    },
    {
        name: 'Jean-Pierre Dubois',
        role: 'Chief Financial Officer',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jean',
        bio: 'Expert in nonprofit financial management',
    },
];

const milestones = [
    { year: '2013', event: 'Turkman Aid established in Paris' },
    { year: '2016', event: 'Launched first clean water initiative' },
    { year: '2019', event: 'Expanded to 4 countries, 5,000+ lives impacted' },
    { year: '2022', event: 'Achieved €1M in annual funding' },
    { year: '2026', event: 'Serving 10,000+ people in 8+ countries' },
];

export default function AboutPage() {
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
                        <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
                            About <span className="text-blue-700">Turkman Aid</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Since 2013, we&apos;ve been dedicated to creating sustainable change in communities across dependent areas and beyond,
                            empowering people to build better futures.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-3xl overflow-hidden shadow-2xl relative h-100"
                    >
                        <Image
                            src="/aboutimg2.avif"
                            alt="Our team in action"
                            className="object-cover w-full h-full"
                            fill
                        />
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-blue-50 p-8 rounded-2xl"
                        >
                            <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl text-gray-900 mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To empower underserved communities through sustainable programs in education, healthcare,
                                and infrastructure development. We believe every person deserves access to basic necessities
                                and the opportunity to thrive.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-green-50 p-8 rounded-2xl"
                        >
                            <div className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl text-gray-900 mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                A world where every community has the resources, knowledge, and support to create their own
                                sustainable future. We envision thriving societies where no one is left behind.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            These principles guide every decision we make and every action we take
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Our Journey</h2>
                        <p className="text-xl text-gray-600">Key milestones in our mission to create lasting impact</p>
                    </motion.div>

                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="shrink-0 w-24 text-right">
                                    <span className="text-2xl text-blue-700">{milestone.year}</span>
                                </div>
                                <div className="shrink-0 w-4 h-4 bg-blue-700 rounded-full mt-2 relative">
                                    {index !== milestones.length - 1 && (
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-blue-200" />
                                    )}
                                </div>
                                <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                                    <p className="text-gray-700">{milestone.event}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Leadership Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Meet the dedicated professionals leading our mission
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className='relative w-full h-64bg-gray-100 '>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover "
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-blue-700 mb-3">{member.role}</p>
                                    <p className="text-sm text-gray-600">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-20 bg-linear-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-4xl mb-2">98%</div>
                            <div className="text-blue-200">Donor Satisfaction</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Award className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-4xl mb-2">6+</div>
                            <div className="text-blue-200">International Awards</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Users className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-4xl mb-2">50+</div>
                            <div className="text-blue-200">Active Volunteers</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Globe className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-4xl mb-2">8+</div>
                            <div className="text-blue-200">Countries Served</div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}