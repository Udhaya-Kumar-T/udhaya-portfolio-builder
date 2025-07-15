import { Card, CardContent } from "@/components/ui/card";
import { Target, Calendar, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
              About Me
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-gray-400 text-base sm:text-lg">
              Get to know more about my background and aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Career Objective */}
            <Card className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-full mr-4">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Career Objective</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Seeking a challenging position in a reputed organization where I can learn new skills, 
                  expand my knowledge and leverage my learnings to contribute to organizational growth 
                  and innovation.
                </p>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary-blue mr-3" />
                    <div>
                      <span className="font-medium text-gray-600">Date of Birth:</span>
                      <span className="ml-2 text-gray-500">10 November 2003</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary-blue mr-3" />
                    <div>
                      <span className="font-medium text-gray-600">Location:</span>
                      <span className="ml-2 text-gray-500">Gobichettipalayam, Erode</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="font-medium text-gray-600">Languages:</span>
                    <div className="flex gap-2 mt-2">
                      <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm">Tamil</span>
                      <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm">English</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};