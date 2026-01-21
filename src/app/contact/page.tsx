'use client'
import { AnimatePresence, motion } from 'motion/react';
import { Mail, Phone, Clock, Send, MessageSquare, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    details: '+93 795455274',
    description: 'Mon-Fri from 9am to 6pm CET',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    details: 'info@turkmanaid.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Office Hours',
    details: 'Monday - Friday',
    description: '9:00 AM - 6:00 PM CET',
  },
];

const faqItems = [
  {
    question: 'How is my donation used?',
    answer:
      'Donations are allocated directly to our active programs based on current community needs. The majority of funds support on-the-ground impact, while a small portion covers essential operational and compliance costs.',
  },
  {
    question: 'How do you ensure transparency?',
    answer:
      'We regularly share impact summaries, financial highlights, and project updates through our website and official communication channels, allowing supporters to stay informed without additional requests.',
  },
  {
    question: 'Can I track the impact of my support?',
    answer:
      'Yes. We publish stories, photos, and progress updates from our projects so supporters can see the collective impact their contributions help create.',
  },
  {
    question: 'Are donations tax-deductible?',
    answer:
      'Turkman Aid is registered as a charitable organization. Donation receipts are provided automatically and may be used for tax purposes depending on your local regulations.',
  },
  {
    question: 'Do you offer volunteer opportunities?',
    answer:
      'At this time, we focus on delivering programs efficiently with our local partners. Future volunteer opportunities will be announced publicly when available.',
  },
];


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Get in <span className="text-blue-700">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-700 rounded-xl mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-900 mb-1">{method.details}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-blue-700" />
                  <h2 className="text-3xl text-gray-900">Send us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-700 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-700 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-700 focus:outline-none transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Donation Question</option>
                      <option>Website or Technical Issue</option>
                      <option>Project Information</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-700 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full px-8 py-4 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.1989479757144!2d4.3517!3d50.8503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUxJzAxLjEiTiA0wrAyMScwNi4xIkU!5e0!3m2!1sen!2sbe!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="H Office Location"
                />
              </div>

              {/* Quick Info */}
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl text-gray-900 mb-4">Quick Information</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>We respond to all inquiries within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>For urgent matters, please call us directly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>We support communications in English and Persian</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-blue-700" />
              <h2 className="text-4xl text-gray-900">Frequently Asked Questions</h2>
            </div>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our work and how you can help
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className="text-xl text-gray-900 mb-3">
                    {item.question}
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="text-gray-600 leading-relaxed overflow-hidden"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>


          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="#contact-form"
              className="inline-block px-8 py-3 text-blue-700 border-2 border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300"
            >
              Contact Us Directly
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
