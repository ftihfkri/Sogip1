import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-[#0A1628] min-h-screen pt-20">
      <HeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <MapSection />
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold mb-6">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Discuss Your{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
              Investment
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Our investment team is ready to guide you through opportunities at SOGIP.
            Reach out today to start your journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ContactFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    investmentType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission - will be replaced with actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        investmentType: '',
        message: '',
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF] transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF] transition-colors"
                    placeholder="+60 XX XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Investment Interest
                </label>
                <select
                  name="investmentType"
                  value={formData.investmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="lng">LNG & Gas Processing</option>
                  <option value="petrochemical">Petrochemical Complex</option>
                  <option value="refinery">Refinery Operations</option>
                  <option value="storage">Storage & Logistics</option>
                  <option value="support">Support Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF] transition-colors resize-none"
                  placeholder="Tell us about your investment plans and requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white font-semibold rounded-lg shadow-xl shadow-[#00D4FF]/30 hover:shadow-[#00D4FF]/50 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm"
                >
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            
            {[
              {
                icon: MapPin,
                title: 'Office Location',
                content: 'SOGDC Office\nKota Kinabalu, Sabah\nMalaysia',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+60 88 XXX XXXX\n+60 88 XXX XXXY (Investment Hotline)',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@sogip.com.my\ninvestment@sogip.com.my',
              },
              {
                icon: Clock,
                title: 'Business Hours',
                content: 'Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-[#00D4FF] to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#0A1628] border border-white/10 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00D4FF]/20 to-transparent flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-[#00D4FF]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Key <span className="text-[#00D4FF]">Departments</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              department: 'Investment & Promotion',
              contact: 'investment@sogip.com.my',
              description: 'Land leasing, investment opportunities, and incentives',
            },
            {
              department: 'Operations & Development',
              contact: 'operations@sogip.com.my',
              description: 'Infrastructure, utilities, and facilities management',
            },
            {
              department: 'Media & Communications',
              contact: 'media@sogip.com.my',
              description: 'Press inquiries, news, and public relations',
            },
          ].map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#0A1628] border border-white/10 rounded-xl p-8 hover:border-[#00D4FF]/30 transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-white mb-3">{dept.department}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{dept.description}</p>
              <a
                href={`mailto:${dept.contact}`}
                className="text-[#00D4FF] hover:text-[#FFB020] transition-colors text-sm font-medium"
              >
                {dept.contact}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0D1F36] to-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-[#0A1628] border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="aspect-video bg-gradient-to-br from-[#0D1F36] to-[#0A1628] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-[#00D4FF] mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">SOGIP Location</h3>
              <p className="text-gray-400">Sipitang, Sabah, Malaysia</p>
              <p className="text-sm text-gray-500 mt-4">
                [Interactive map will be integrated here]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
