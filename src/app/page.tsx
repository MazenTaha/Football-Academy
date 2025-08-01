'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Users, 
  Target, 
  Star, 
  ArrowRight, 
  Play,
  Shield,
  Award,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    {
      icon: Trophy,
      title: "Elite Training",
      description: "Professional coaching from experienced athletes and trainers"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Develop leadership skills and teamwork through sports"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Personalized training programs to achieve your goals"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Strive for excellence in every aspect of your game"
    }
  ]

  const stats = [
    { number: "500+", label: "Active Students" },
    { number: "50+", label: "Expert Coaches" },
    { number: "95%", label: "Success Rate" },
    { number: "10+", label: "Years Experience" }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Strive Academy</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/programs" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Login
              </Link>
              <Link href="/register" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Unlock Your</span>
                <br />
                <span className="text-gray-900">Athletic Potential</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join Strive Sports Academy and transform your athletic abilities with our 
                elite training programs, expert coaching, and state-of-the-art facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Video</span>
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl shadow-2xl animate-float">
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Trophy className="w-24 h-24 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Elite Training</h3>
                      <p className="text-lg opacity-90">Professional Development</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Strive Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive training programs designed to develop athletes at every level
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Game?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of athletes who have already taken their skills to the next level
            </p>
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Strive Academy</span>
              </div>
              <p className="text-gray-400">
                Elite sports training and development academy dedicated to unlocking your athletic potential.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Group Training</li>
                <li>Personal Training</li>
                <li>Youth Programs</li>
                <li>Elite Development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Strive Sports Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 