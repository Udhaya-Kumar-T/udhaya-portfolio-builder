import { Card, CardContent } from "@/components/ui/card";
import { Code, Wrench, Award, Users, Clock, Target } from "lucide-react";

export const SkillsSection = () => {
  const technicalSkills = [
    { name: "MS Office Suite", level: 90, category: "Office" },
    { name: "AutoCAD", level: 85, category: "Design" },
    { name: "Creo 3D Modeling", level: 80, category: "Design" },
    { name: "SAP (System Application Product)", level: 75, category: "Enterprise" },
    { name: "C Programming", level: 70, category: "Programming" },
    { name: "PLC Basics", level: 65, category: "Automation" }
  ];

  const personalStrengths = [
    { icon: Users, title: "Leadership", description: "Proven team leadership experience in industrial settings" },
    { icon: Clock, title: "Time Management", description: "Efficient in managing multiple tasks and deadlines" },
    { icon: Target, title: "Problem Solving", description: "Strong analytical skills in responding to situations" },
    { icon: Award, title: "Organized & Responsible", description: "Systematic approach to work and accountability" }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "bg-gradient-to-r from-green-500 to-emerald-500";
    if (level >= 75) return "bg-gradient-to-r from-blue-500 to-cyan-500";
    if (level >= 65) return "bg-gradient-to-r from-yellow-500 to-orange-500";
    return "bg-gradient-to-r from-gray-400 to-gray-500";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Skills & Strengths
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">
              Technical expertise and personal qualities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                <Code className="w-6 h-6 text-primary-blue" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <Card key={index} className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-navy">{skill.name}</h4>
                        <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{skill.category}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Personal Strengths */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary-blue" />
                Personal Strengths
              </h3>
              <div className="space-y-6">
                {personalStrengths.map((strength, index) => (
                  <Card key={index} className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform">
                          <strength.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-navy mb-2 group-hover:text-primary-blue transition-colors">
                            {strength.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {strength.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-navy text-center mb-8">Hobbies & Interests</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full shadow-lg">
                <span className="font-medium">Learning New Things</span>
              </div>
              <div className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full shadow-lg">
                <span className="font-medium">Playing Outdoor Games</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};