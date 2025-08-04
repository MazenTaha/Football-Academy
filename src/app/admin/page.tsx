'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Trophy, 
  Calendar, 
  Phone, 
  Mail, 
  Eye,
  Download,
  Search,
  Filter
} from 'lucide-react'

interface Registration {
  id: number
  player_full_name: string
  age: number
  gender: string
  parent_name: string
  parent_phone: string
  parent_email: string
  program_type: string
  subscription_plan: string
  created_at: string
}

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchRegistrations()
  }, [])

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/registrations')
      const data = await response.json()
      
      if (data.success) {
        setRegistrations(data.data)
      } else {
        console.error('Failed to fetch registrations:', data.message)
      }
    } catch (error) {
      console.error('Error fetching registrations:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch = reg.player_full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.parent_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.parent_email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filter === 'all' || reg.program_type === filter
    
    return matchesSearch && matchesFilter
  })

  const stats = {
    total: registrations.length,
    groupTraining: registrations.filter(r => r.program_type === 'Group Training').length,
    personalTraining: registrations.filter(r => r.program_type === '1-on-1 Personal Training').length,
    male: registrations.filter(r => r.gender === 'Male').length,
    female: registrations.filter(r => r.gender === 'Female').length
  }

  const exportData = () => {
    const csvContent = [
      ['Player Name', 'Age', 'Gender', 'Parent Name', 'Phone', 'Email', 'Program', 'Plan', 'Date'],
      ...filteredRegistrations.map(reg => [
        reg.player_full_name,
        reg.age,
        reg.gender,
        reg.parent_name,
        reg.parent_phone,
        reg.parent_email,
        reg.program_type,
        reg.subscription_plan,
        new Date(reg.created_at).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'strive-registrations.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading registrations...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-gray-600">Manage Strive Academy registrations</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Total Registrations</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Group Training</p>
                <p className="text-2xl font-bold text-gray-900">{stats.groupTraining}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Personal Training</p>
                <p className="text-2xl font-bold text-gray-900">{stats.personalTraining}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Male</p>
                <p className="text-2xl font-bold text-gray-900">{stats.male}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-pink-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Female</p>
                <p className="text-2xl font-bold text-gray-900">{stats.female}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Programs</option>
                <option value="Group Training">Group Training</option>
                <option value="1-on-1 Personal Training">Personal Training</option>
              </select>
            </div>
            
            <button
              onClick={exportData}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Export CSV
            </button>
          </div>
        </motion.div>

        {/* Registrations Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Player
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Parent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Program
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRegistrations.map((registration, index) => (
                  <motion.tr
                    key={registration.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {registration.player_full_name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {registration.age} years • {registration.gender}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{registration.parent_name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{registration.parent_phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{registration.parent_email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        registration.program_type === 'Group Training' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {registration.program_type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {registration.subscription_plan}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(registration.created_at).toLocaleDateString()}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredRegistrations.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No registrations found</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
} 