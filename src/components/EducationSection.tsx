import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "B.E Production Engineering",
      institution: "PSG College of Technology, Coimbatore",
      year: "Pursuing",
      grade: "7.065 GPA",
      status: "current"
    },
    {
      degree: "Diploma in Mechatronics",
      institution: "PSG Polytechnic College, Coimbatore",
      year: "2022",
      grade: "92.6%",
      status: "completed"
    },
    {
      degree: "SSLC",
      institution: "Shree Gurukulam Higher Secondary School, Gobichettipalayam",
      year: "2019",
      grade: "78.6%",
      status: "completed"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">
              My academic journey and achievements
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className={`p-4 rounded-full ${edu.status === 'current' ? 'bg-gradient-primary' : 'bg-gray-100'}`}>
                        <GraduationCap className={`w-8 h-8 ${edu.status === 'current' ? 'text-primary-foreground' : 'text-gray-400'}`} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-navy group-hover:text-primary-blue transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-500 font-medium">{edu.year}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-lg">
                        {edu.institution}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="text-accent font-semibold">{edu.grade}</span>
                        {edu.status === 'current' && (
                          <span className="ml-2 px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-xs">
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};