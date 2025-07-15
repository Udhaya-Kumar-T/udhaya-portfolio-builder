import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/20 via-transparent to-primary-blue/20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-blue/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Udhaya Kumar T
              </h1>
              <p className="text-2xl md:text-3xl text-primary-blue-light font-light">
                Production Engineering Student
              </p>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Seeking challenging opportunities to leverage my engineering skills and expand my knowledge in production engineering and automation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-primary-blue-light" />
                <span>+91 7339443310</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-primary-blue-light" />
                <span>udhayathangavel03@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-primary-blue-light" />
                <span>Erode, Tamil Nadu</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="professional"
                className="px-8 py-6 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-6 text-lg border-primary-blue-light text-primary-blue-light hover:bg-primary-blue-light hover:text-navy"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-blue-light rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-blue-light rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};