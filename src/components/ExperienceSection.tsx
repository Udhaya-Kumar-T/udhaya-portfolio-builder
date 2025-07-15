import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar, Trophy, Users, Lightbulb } from "lucide-react";

export const ExperienceSection = () => {
  const internships = [
    {
      title: "Artificial Intelligence and IOT",
      organization: "PSG Polytechnic College, Coimbatore",
      duration: "31/05/2021 to 01/07/2021",
      type: "4 weeks internship",
      department: "Department of Electronics and Communication Engineering"
    },
    {
      title: "Robotics",
      organization: "Sri Eswar College of Engineering, Coimbatore",
      duration: "25/05/2021 to 01/06/2021",
      type: "1 week internship",
      department: "Engineering Department"
    },
    {
      title: "Auto Guided Vehicles",
      organization: "The Dush Engineering, Coimbatore",
      duration: "Industrial Training",
      type: "Practical training",
      department: "Industrial Engineering"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Kaizen Ideas Implementation",
      description: "Contributed to eliminating customer complaints and reducing engine rework through process improvement initiatives."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Served as Team Leader in 3W Engine Assembly during tenure at TVS Motor Company."
    },
    {
      icon: Lightbulb,
      title: "5S Standards Implementation",
      description: "Participated in creating model store by 'Store JD' to follow 5S Standards for workplace organization."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
              Professional Experience
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-gray-400 text-base sm:text-lg">
              My professional journey and key achievements
            </p>
          </div>

          {/* Main Professional Experience */}
          <Card className="bg-gradient-card shadow-xl border-0 hover:shadow-2xl transition-all duration-300 mb-12 sm:mb-16">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Briefcase className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-navy">
                      Diploma Engineer Trainee
                    </h3>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-500 font-medium">Oct 2022 - Mar 2024</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-primary-blue" />
                    <span className="text-gray-600 font-medium">TVS Motor Company, Hosur</span>
                  </div>
                  
                  <div className="bg-accent/10 rounded-lg p-4 mb-4">
                    <p className="text-accent font-semibold mb-2">Department: 3W Engine Assembly</p>
                    <p className="text-gray-600">Duration: 1 Year 5 Months</p>
                    <p className="text-gray-600">Role: Team Leader</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-navy text-center mb-6 sm:mb-8">Key Achievements</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-gradient-primary rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-3 group-hover:text-primary-blue transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-navy text-center mb-6 sm:mb-8">Internships</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship, index) => (
                <Card key={index} className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-xs font-medium">
                        {internship.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-3 group-hover:text-primary-blue transition-colors">
                      {internship.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {internship.organization}
                    </p>
                    <p className="text-gray-500 text-sm mb-2">
                      {internship.department}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {internship.duration}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};