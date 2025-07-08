
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, User } from 'lucide-react';

interface Volunteer {
  id: string;
  name: string;
  phone: string;
  email: string;
  skills: string[];
  location: string;
  availability: string;
}

const VolunteerResults = () => {
  const [searchParams] = useSearchParams();
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  
  const location = searchParams.get('location') || '';
  const city = searchParams.get('city') || '';
  const state = searchParams.get('state') || '';

  useEffect(() => {
    // Mock API call - replace with actual endpoint
    const fetchVolunteers = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data based on location
      const mockVolunteers: Volunteer[] = [
        {
          id: '1',
          name: 'Ritesh patel',
          phone: '+91 7745900814',
          email: 'ritesh.patel@email.com',
          skills: ['Teaching', 'Mentoring', 'Event Organization'],
          location: `${city}, ${state}`,
          availability: 'Flexible'
        },
        {
          id: '2',
          name: 'Kushal yadav',
          phone: '+91 9826190704',
          email: 'Kushal.yadav@email.com',
          skills: ['Healthcare', 'Community Outreach', 'Fundraising'],
          location: `${city}, ${state}`,
          availability: 'Weekdays'
        },
        {
          id: '3',
          name: 'Kamaksha goud',
          phone: '+91  9285012321',
          email: 'Kamaksha.goud@email.com',
          skills: ['Social Media', 'Event Setup', 'socializing'],
          location: `${city}, ${state}`,
          availability: 'Weekends'
        }
      ];
      
      setVolunteers(mockVolunteers);
      setLoading(false);
    };

    if (location || city) {
      fetchVolunteers();
    } else {
      setLoading(false);
    }
  }, [location, city, state]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Finding volunteers in your area...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </Link>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Volunteers Near You
                </h1>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{city}, {state}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {volunteers.length > 0 ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Found {volunteers.length} volunteers in your area
                </h2>
                <p className="text-gray-600">
                  Connect with local volunteers ready to help with your cause
                </p>
              </div>

              <div className="grid gap-6">
                {volunteers.map((volunteer) => (
                  <div key={volunteer.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-orange-100 rounded-full">
                            <User className="w-5 h-5 text-orange-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800">{volunteer.name}</h3>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Phone className="w-4 h-4" />
                            <span>{volunteer.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Mail className="w-4 h-4" />
                            <span>{volunteer.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{volunteer.location}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-medium text-gray-800 mb-2">Skills & Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {volunteer.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Availability:</span> {volunteer.availability}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                          Contact Volunteer
                        </button>
                        <button className="border border-orange-300 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No volunteers found
                </h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any volunteers in {city}, {state} at the moment.
                </p>
                <Link 
                  to="/"
                  className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  Try Another Location
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerResults;
