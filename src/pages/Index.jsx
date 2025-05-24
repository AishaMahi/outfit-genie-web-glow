
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
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition">How it works</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition">Pricing</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 bg-gradient-to-r from-[#FDE1D3] to-[#E5DEFF]">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Smart <span className="text-primary">Wardrobe</span> Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Never wonder "what to wear" again. OutfitGenie uses AI to suggest perfect outfits from your existing wardrobe based on weather, occasions, and your personal style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/auth">
              <Button size="lg" className="px-8 py-4 text-lg">
                Start Your Style Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose OutfitGenie?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover-scale">
              <CardContent className="pt-6">
                <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Easy Upload</h3>
                <p className="text-gray-600">Simply snap photos of your clothes and upload them to your digital wardrobe.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover-scale">
              <CardContent className="pt-6">
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI-Powered Suggestions</h3>
                <p className="text-gray-600">Get personalized outfit recommendations based on weather, occasion, and your style preferences.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover-scale">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Style Evolution</h3>
                <p className="text-gray-600">Learn what works best for you and develop your personal style over time.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Upload Your Wardrobe</h3>
              <p className="text-gray-600">Take photos of your clothes and add them to your digital closet with tags and categories.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Get AI Suggestions</h3>
              <p className="text-gray-600">Our AI analyzes your wardrobe, weather, and occasion to suggest perfect outfit combinations.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Look Amazing</h3>
              <p className="text-gray-600">Choose from personalized recommendations and step out with confidence every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4">"OutfitGenie has completely transformed my morning routine. I no longer spend 20 minutes figuring out what to wear!"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">S</div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-gray-500">Marketing Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4">"The AI suggestions are spot-on! It's like having a personal stylist who knows my wardrobe inside out."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">M</div>
                  <div>
                    <p className="font-semibold">Michael Rodriguez</p>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4">"I've discovered so many new outfit combinations I never thought of. My style has evolved amazingly!"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">E</div>
                  <div>
                    <p className="font-semibold">Emily Johnson</p>
                    <p className="text-sm text-gray-500">Teacher</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <p className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-500">/month</span></p>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Up to 50 clothing items</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Basic AI suggestions</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Weather integration</li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="p-6 text-center border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-4xl font-bold mb-6">$9.99<span className="text-lg text-gray-500">/month</span></p>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Unlimited clothing items</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Advanced AI styling</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Occasion-based suggestions</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Style analytics</li>
                </ul>
                <Button className="w-full">Upgrade to Pro</Button>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <p className="text-4xl font-bold mb-6">$19.99<span className="text-lg text-gray-500">/month</span></p>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Everything in Pro</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Personal stylist chat</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Shopping recommendations</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Priority support</li>
                </ul>
                <Button className="w-full">Go Premium</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Style?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of users who've revolutionized their daily outfit choices.</p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">OutfitGenie</h3>
              <p className="text-gray-400">Your smart wardrobe assistant for effortless style every day.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OutfitGenie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
