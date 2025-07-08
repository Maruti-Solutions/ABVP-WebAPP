// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiHelpCircle, FiUserPlus, FiLogOut } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';
// import ImageSlider from '../components/ImageSlider';
// import HelpModal from '../components/HelpModal';
// import CustomCursor from '../components/CustomCursor';
// import { supabase } from '../lib/supabaseClient';
// import { Session } from '@supabase/supabase-js';

// const Home = ({ session }: { session: Session | null }) => {
//   const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState('');

//   useEffect(() => {
//     if (session) {
//       const { user } = session;
//       if (user && user.user_metadata && user.user_metadata.full_name) {
//         setUserName(user.user_metadata.full_name);
//       }
//     }
//   }, [session]);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <CustomCursor />
      
//       {/* Header */}
//       <motion.header
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="bg-gradient-to-r from-red-800 to-blue-900 text-white shadow-lg sticky top-0 z-40"
//       >
//         <div className="container mx-auto px-4 py-5">
//           <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
//             {/* Logo Section */}
//             <div className="flex items-center gap-3 order-1">
//               <div className="w-16 h-16 md:w-20 md:h-20">
//                 <img 
//                   src="/lovable-uploads/be64dbdf-c51f-4b00-b49d-d6eebd8df4f8.png" 
//                   alt="ABVP Logo" 
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div>
//                 <motion.h1
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.6 }}
//                   className="text-xl md:text-2xl font-bold leading-tight"
//                 >
//                   ABVP Indore: May I Help You
//                 </motion.h1>
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4, duration: 0.6 }}
//                   className="text-xs md:text-sm opacity-90"
//                 >
//                   Connecting students with dedicated volunteers in Indore
//                 </motion.p>
//               </div>
//             </div>

//             {/* Navigation - Hidden on mobile, shown on tablet+ */}
//             <nav className="hidden md:flex order-2 lg:order-2">
//               <ul className="flex gap-4 lg:gap-6">
//                 <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-3 py-2 rounded transition-all text-sm lg:text-base">Home</a></li>
//                 <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-3 py-2 rounded transition-all text-sm lg:text-base">About</a></li>
//                 <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-3 py-2 rounded transition-all text-sm lg:text-base">Services</a></li>
//                 <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-3 py-2 rounded transition-all text-sm lg:text-base">Volunteer</a></li>
//                 <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-3 py-2 rounded transition-all text-sm lg:text-base">Contact</a></li>
//               </ul>
//             </nav>
            
//             {/* Auth Buttons - Only Register button now */}
//             <div className="flex gap-2 md:gap-3 order-3">
//               {session ? (
//                 <div className="flex items-center gap-4">
//                   <span className="text-white font-semibold">Welcome, {userName}</span>
//                   <motion.button
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.8, duration: 0.6 }}
//                     onClick={handleLogout}
//                     className="bg-red-600 text-white px-3 py-2 md:px-4 md:py-2 rounded font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-element inline-flex items-center gap-2 text-sm md:text-base"
//                   >
//                     <FiLogOut className="w-3 h-3 md:w-4 md:h-4" />
//                     Logout
//                   </motion.button>
//                 </div>
//               ) : (
//                 <motion.button
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.8, duration: 0.6 }}
//                   onClick={() => navigate('/register')}
//                   className="bg-red-600 text-white px-3 py-2 md:px-4 md:py-2 rounded font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-element inline-flex items-center gap-2 text-sm md:text-base"
//                 >
//                   <FiUserPlus className="w-3 h-3 md:w-4 md:h-4" />
//                   Register
//                 </motion.button>
//               )}
//             </div>

//             {/* Mobile Navigation - Full width on mobile */}
//             <nav className="md:hidden w-full order-4 mt-4">
//               <ul className="flex justify-center gap-4 text-sm">
//                 <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-2 py-1 rounded transition-all">Home</a></li>
//                 <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-2 py-1 rounded transition-all">About</a></li>
//                 <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-2 py-1 rounded transition-all">Services</a></li>
//                 <li><a href="#" className="hover:bg-white hover:bg-opacity-15 px-2 py-1 rounded transition-all">Contact</a></li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </motion.header>

//       {/* Hero Section with Image */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.8 }}
//         className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10 md:py-16 lg:py-20 mb-10"
//         style={{
//           backgroundImage: `linear-gradient(rgba(26, 79, 114, 0.9), rgba(13, 44, 74, 0.9)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Left Content */}
//             <div className="text-center lg:text-left">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//                 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//               >
//                 ABVP Indore: Your Partner for Student Support
//               </motion.h2>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1, duration: 0.6 }}
//                 className="text-lg md:text-xl mb-8 opacity-90"
//               >
//                 ABVP Indore connects students with dedicated volunteers for academic, medical, and other essential support services. Get the help you need to succeed in Indore!
//               </motion.p>
//               <motion.button
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.2, duration: 0.6 }}
//                 onClick={() => setIsHelpModalOpen(true)}
//                 className="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-element inline-flex items-center gap-3"
//               >
//                 <i className="fas fa-hands"></i>
//                 Request Help Now
//               </motion.button>
//             </div>

//             {/* Right Image */}
//             <div className="flex justify-center lg:justify-end">
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 1.4, duration: 0.8 }}
//                 className="relative"
//               >
//                 <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white border-opacity-20">
//                   <img 
//                     src="/lovable-uploads/200b9fd5-1b3d-4f70-99f8-7f49022491af.png" 
//                     alt="Swami Vivekananda" 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600 to-transparent opacity-20"></div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       <main className="container mx-auto px-4 py-8 space-y-12">
//         {/* Image Slider */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.4, duration: 0.8 }}
//         >
//           <ImageSlider />
//         </motion.section>

//         {/* How It Works */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.6, duration: 0.8 }}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-800">How ABVP Indore Helps Students</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 icon: "fas fa-user-plus",
//                 title: "Register as a Student in Indore",
//                 description: "Create your student account with basic information to access our help services in Indore."
//               {
//                 icon: "fas fa-hands-helping",
//                 title: "Request Help in Indore",
//                 description: "Select the type of assistance you need and provide your location details within Indore."
//             ].map((step, index) => (
//               <motion.div
//                 key={step.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="bg-red-800 text-white p-6 text-center">
//                   <i className={`${step.icon} text-3xl md:text-4xl mb-4`}></i>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg md:text-xl font-bold text-red-800 mb-4">Register as a Student in Indore</h3>
//                   <p className="text-gray-600 text-sm md:text-base">Create your student account with basic information to access our help services in Indore.</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Help Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2, duration: 0.8 }}
//           className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-12"
//         >
//           <div className="text-center space-y-6">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 2.2, duration: 0.6 }}
//               className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full text-white mb-4"
//             >
//               <FiHelpCircle className="w-8 h-8 md:w-10 md:h-10" />
//             </motion.div>

//             <motion.h3
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 2.4, duration: 0.6 }}
//               className="text-2xl md:text-3xl font-bold text-red-800"
//             >
//               Need Assistance?
//             </motion.h3>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 2.6, duration: 0.6 }}
//               className="text-gray-600 max-w-xl mx-auto text-sm md:text-base"
//             >
//               Our dedicated team is ready to provide you with the support you need. Click the button below to get started.
//             </motion.p>

//             <motion.button
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 2.8, duration: 0.6 }}
//               onClick={() => setIsHelpModalOpen(true)}
//               className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-element inline-flex items-center gap-2"
//             >
//               <FiHelpCircle className="w-4 h-4 md:w-5 md:h-5" />
//               Need Help?
//             </motion.button>
//           </div>
//         </motion.section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-red-800 text-white py-10 mt-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="w-12 h-12">
//                   <img 
//                     src="/lovable-uploads/be64dbdf-c51f-4b00-b49d-d6eebd8df4f8.png" 
//                     alt="ABVP Logo" 
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg md:text-xl font-bold">ABVP Student Help</h3>
//                 </div>
//               </div>
//               <p className="mb-5 opacity-90 text-sm md:text-base">Connecting students with volunteers for essential support services since 2015.</p>
//               <div className="flex gap-4">
//                 <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-base md:text-lg font-bold mb-5 relative pb-3">
//                 Quick Links
//                 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
//               </h3>
//               <ul className="space-y-2 text-sm md:text-base">
//                 <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Home</a></li>
//                 <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">About Us</a></li>
//                 <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Services</a></li>
//                 <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Become a Volunteer</a></li>
//                 <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Testimonials</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-base md:text-lg font-bold mb-5 relative pb-3">
//                 Help Categories
//                 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
//               </h3>
//               <ul className="space-y-2 text-sm md:text-base">
//                 <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Academic Support</a></li>
//                 <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Medical Assistance</a></li>
//                 <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Financial Aid</a></li>
//                 <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Legal Guidance</a></li>
//                 <li><a href="#" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all">Mental Health</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-base md:text-lg font-bold mb-5 relative pb-3">
//                 Contact Us
//                 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
//               </h3>
//               <ul className="space-y-3 text-sm md:text-base">
//                 <li className="flex items-center gap-3">
//                   <i className="fas fa-map-marker-alt text-red-400"></i>
//                   <span className="opacity-80">ABVP Indore Office</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <i className="fas fa-phone text-red-400"></i>
//                   <span className="opacity-80">+91 7745900814</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <i className="fas fa-envelope text-red-400"></i>
//                   <span className="opacity-80">info.abvpindore@gmail.com</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <i className="fas fa-clock text-red-400"></i>
//                   <span className="opacity-80">Mon-Sat: 9AM - 6PM</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-white border-opacity-10 mt-8 pt-6 text-center">
//             <p className="opacity-80 text-sm md:text-base">© 2024 ABVP Student Help Portal. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       <HelpModal
//         isOpen={isHelpModalOpen}
//         onClose={() => setIsHelpModalOpen(false)}
//       />
//     </div>
//   );
// };

// export default Home;



// ...same imports
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHelpCircle, FiUserPlus, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import HelpModal from '../components/HelpModal';
import CustomCursor from '../components/CustomCursor';
import { supabase } from '../lib/supabaseClient';
import { Session } from '@supabase/supabase-js';

const Home = ({ session }: { session: Session | null }) => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (session) {
      const { user } = session;
      if (user && user.user_metadata && user.user_metadata.full_name) {
        setUserName(user.user_metadata.full_name);
      }
    }
  }, [session]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />

      {/* Header */}
      {/* ...unchanged header code */}

      {/* Hero Section */}
      {/* ...unchanged hero section code */}

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Image Slider */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <ImageSlider />
        </motion.section>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-800">
            How ABVP Indore Helps Students
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "fas fa-user-plus",
                title: "Register as a Student in Indore",
                description:
                  "Create your student account with basic information to access our help services in Indore.",
              },
              {
                icon: "fas fa-hands-helping",
                title: "Request Help in Indore",
                description:
                  "Select the type of assistance you need and provide your location details within Indore.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-red-800 text-white p-6 text-center">
                  <i className={`${step.icon} text-3xl md:text-4xl mb-4`}></i>
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-red-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Help Section */}
        {/* ...unchanged help section code */}
      </main>

      {/* Footer */}
      {/* ...unchanged footer code */}

      <HelpModal isOpen={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)} />
    </div>
  );
};

export default Home;
