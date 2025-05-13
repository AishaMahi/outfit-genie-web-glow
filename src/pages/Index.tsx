
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Heart, Search, ShoppingBag, Upload } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">OutfitGenie</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-primary transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition">How It Works</a>
            <a href="#sustainability" className="text-gray-600 hover:text-primary transition">Sustainability</a>
            <a href="#tech" className="text-gray-600 hover:text-primary transition">Technology</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition">About</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition">Contact</a>
          </div>
          <div>
            <Link to="/auth">
              <Button variant="outline" className="mr-2 hidden md:inline-flex">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-[#FDE1D3] to-[#E5DEFF]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-1/2 justify-center items-start pt-12 pb-24 px-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Smart. Stylish. Sustainable.
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Revolutionize your wardrobe with AI-powered outfit recommendations
              and make more sustainable fashion choices.
            </p>
            <Link to="/auth">
              <Button className="px-8 py-3 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 py-6 text-center">
            <img 
              src="/placeholder.svg" 
              alt="OutfitGenie App" 
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Intelligent Features</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              OutfitGenie combines AI technology with your personal style to create a 
              smarter wardrobe management experience.
            </p>
          </div>
          
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-6">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-[#FDE1D3] p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-2">Smart Recommendations</h3>
                  <p className="text-gray-600">
                    Get personalized outfit recommendations based on color, weather, and your
                    unique personal style preferences.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:w-1/3 p-6">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-[#E5DEFF] p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-2">AI Categorization</h3>
                  <p className="text-gray-600">
                    Our computer vision technology automatically categorizes your clothes by type,
                    color, pattern, and season.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:w-1/3 p-6">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-[#D3E4FD] p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-2">Usage Tracking</h3>
                  <p className="text-gray-600">
                    Track what you wear and receive friendly reminders about clothing items 
                    that haven't been worn in a while.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              OutfitGenie makes managing your wardrobe simple and fun in just three easy steps.
            </p>
          </div>
          
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-6">
              <div className="text-center">
                <div className="mx-auto rounded-full bg-[#FDE1D3] p-4 w-20 h-20 flex items-center justify-center mb-4">
                  <Upload className="h-10 w-10 text-primary" />
                  <span className="absolute -right-2 -top-2 bg-primary text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    1
                  </span>
                </div>
                <h3 className="font-bold text-2xl mb-2">Upload Your Wardrobe</h3>
                <p className="text-gray-600">
                  Take photos of your clothing items or import existing images to build your digital closet.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 p-6">
              <div className="text-center">
                <div className="mx-auto rounded-full bg-[#E5DEFF] p-4 w-20 h-20 flex items-center justify-center mb-4 relative">
                  <Heart className="h-10 w-10 text-primary" />
                  <span className="absolute -right-2 -top-2 bg-primary text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    2
                  </span>
                </div>
                <h3 className="font-bold text-2xl mb-2">Get Outfit Suggestions</h3>
                <p className="text-gray-600">
                  Tell us the occasion, weather, or mood, and our AI will create perfect outfit combinations.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 p-6">
              <div className="text-center">
                <div className="mx-auto rounded-full bg-[#D3E4FD] p-4 w-20 h-20 flex items-center justify-center mb-4 relative">
                  <ShoppingBag className="h-10 w-10 text-primary" />
                  <span className="absolute -right-2 -top-2 bg-primary text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    3
                  </span>
                </div>
                <h3 className="font-bold text-2xl mb-2">Track Your Wear Frequency</h3>
                <p className="text-gray-600">
                  Log when you wear items and receive insights about your wardrobe utilization patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 p-6">
              <img 
                src="/placeholder.svg" 
                alt="Sustainable Fashion" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-4xl font-bold mb-4">Fashion with a Purpose</h2>
              <p className="text-xl text-gray-600 mb-6">
                OutfitGenie is committed to promoting sustainable fashion choices and reducing waste.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1" />
                  <p className="text-gray-600">Maximize your existing wardrobe instead of buying new clothes</p>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1" />
                  <p className="text-gray-600">Rediscover forgotten pieces in your closet</p>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1" />
                  <p className="text-gray-600">Make informed decisions about future purchases</p>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1" />
                  <p className="text-gray-600">Track your fashion footprint and environmental impact</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              OutfitGenie is built on modern technologies to deliver a seamless user experience.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-40">
              <h3 className="font-bold text-lg">HTML</h3>
              <p className="text-gray-600 text-sm">Structure</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-40">
              <h3 className="font-bold text-lg">CSS</h3>
              <p className="text-gray-600 text-sm">Styling</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-40">
              <h3 className="font-bold text-lg">React</h3>
              <p className="text-gray-600 text-sm">UI Framework</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-40">
              <h3 className="font-bold text-lg">Tailwind</h3>
              <p className="text-gray-600 text-sm">CSS Framework</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-40">
              <h3 className="font-bold text-lg">Python</h3>
              <p className="text-gray-600 text-sm">Backend Logic</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-40">
              <h3 className="font-bold text-lg">TensorFlow</h3>
              <p className="text-gray-600 text-sm">AI Framework</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              The passionate individuals behind OutfitGenie.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 p-6 lg:w-1/3">
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Ayesha Sultana" 
                  className="rounded-full w-48 h-48 mx-auto object-cover mb-4"
                />
                <h3 className="font-bold text-2xl mb-1">Ayesha Sultana</h3>
                <p className="text-primary mb-2">Founder & Front-end Developer</p>
                <p className="text-gray-600">
                  Passionate about creating beautiful, intuitive user interfaces for a seamless experience.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-6 lg:w-1/3">
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Deeksha S D" 
                  className="rounded-full w-48 h-48 mx-auto object-cover mb-4"
                />
                <h3 className="font-bold text-2xl mb-1">Deeksha S D</h3>
                <p className="text-primary mb-2">Founder & Backend Developer</p>
                <p className="text-gray-600">
                  Expert in AI technologies and data management, bringing the magic behind OutfitGenie to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Revolutionize Your Wardrobe?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sign up to be the first to know when OutfitGenie launches.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message (Optional)" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <Button className="w-full py-3">Submit</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">OutfitGenie</h3>
              <p className="mb-4">Smart. Stylish. Sustainable.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-primary transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-primary transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-primary transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition">How It Works</a></li>
                <li><a href="#sustainability" className="hover:text-primary transition">Sustainability</a></li>
                <li><a href="#tech" className="hover:text-primary transition">Technology</a></li>
                <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
              </ul>
            </div>

            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="mb-2">Email: info@outfitgenie.com</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>Address: 123 Fashion Blvd, Style City, ST 12345</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} OutfitGenie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
