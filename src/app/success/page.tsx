'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Trophy, ArrowRight, Home } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Registration Successful!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Welcome to Strive Sports Academy! Your registration has been completed successfully.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-yellow-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                What's Next?
              </h2>
            </div>
            
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">You'll receive a confirmation email shortly</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Our team will contact you within 24 hours</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Prepare for your first training session</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Return to Home
              </motion.button>
            </Link>
            
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Access Your Account
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 