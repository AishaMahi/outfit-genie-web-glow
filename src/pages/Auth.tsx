
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled when we integrate Firebase authentication
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FDE1D3] to-[#E5DEFF] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Link to="/" className="flex items-center text-gray-600 mb-6 hover:text-primary transition">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to home
        </Link>

        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">OutfitGenie</CardTitle>
            <CardDescription>Sign in to manage your smart wardrobe</CardDescription>
          </CardHeader>
          <Tabs defaultValue="signin" value={isRegistering ? "signup" : "signin"}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger 
                value="signin"
                onClick={() => setIsRegistering(false)}
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger 
                value="signup"
                onClick={() => setIsRegistering(true)}
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">Sign In</Button>
                </CardFooter>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input id="signup-name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm">Confirm Password</Label>
                    <Input id="signup-confirm" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">Create Account</Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
          <div className="px-6 pb-6 text-center text-sm text-gray-600">
            By continuing, you agree to OutfitGenie's <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
