import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FiSend } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal = ({ isOpen, onClose }: HelpModalProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    collegeName: '',
    universityName: '',
    city: '',
    state: '',
    pincode: '',
    issue: '',
    currentLocation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Help form submitted:', formData);
    
    // Redirect to volunteer results page with location data
    const searchParams = new URLSearchParams({
      location: formData.currentLocation,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode
    });
    
    onClose();
    navigate(`/volunteers?${searchParams.toString()}`);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      course: '',
      collegeName: '',
      universityName: '',
      city: '',
      state: '',
      pincode: '',
      issue: '',
      currentLocation: ''
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed inset-0 bg-white z-50 overflow-y-auto"
        >
          <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
              <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Need Help?
                  </h1>
                  <button
                    onClick={onClose}
                    className="p-3 rounded-full hover:bg-gray-100 transition-colors hover-element"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                  <div className="text-center mb-8">
                    <p className="text-xl text-gray-600">
                      Fill out the form below and we'll get back to you as soon as possible
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                          Course
                        </label>
                        <input
                          id="course"
                          name="course"
                          type="text"
                          value={formData.course}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                        />
                      </div>

                      <div>
                        <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-2">
                          College Name
                        </label>
                        <input
                          id="collegeName"
                          name="collegeName"
                          type="text"
                          value={formData.collegeName}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                        />
                      </div>

                      <div>
                        <label htmlFor="universityName" className="block text-sm font-medium text-gray-700 mb-2">
                          University Name
                        </label>
                        <input
                          id="universityName"
                          name="universityName"
                          type="text"
                          value={formData.universityName}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                        />
                      </div>

                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                        />
                      </div>

                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                          State
                        </label>
                        <input
                          id="state"
                          name="state"
                          type="text"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                        />
                      </div>

                      <div>
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                          Pin Code
                        </label>
                        <input
                          id="pincode"
                          name="pincode"
                          type="text"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                        />
                      </div>

                      <div>
                        <label htmlFor="currentLocation" className="block text-sm font-medium text-gray-700 mb-2">
                          Current Location
                        </label>
                        <input
                          id="currentLocation"
                          name="currentLocation"
                          type="text"
                          value={formData.currentLocation}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-2">
                        Issue Description *
                      </label>
                      <div className="relative">
                        <textarea
                          id="issue"
                          name="issue"
                          value={formData.issue}
                          onChange={handleInputChange}
                          placeholder="Describe your issue or question in detail..."
                          className="w-full p-4 pr-16 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none h-40 transition-all duration-300 text-lg"
                          required
                        />
                        <button
                          type="submit"
                          className="absolute bottom-4 right-4 p-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover-element shadow-lg"
                        >
                          <FiSend className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-element inline-flex items-center gap-3"
                      >
                        <FiSend className="w-5 h-5" />
                        Submit Help Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelpModal;
