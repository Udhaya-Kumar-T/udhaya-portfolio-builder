import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Cpu, Bot, Truck, Eye, Smartphone, ExternalLink, Calendar } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Door Unlock using Face Recognition",
      type: "Mini Project",
      description: "The objective of the project is to open the door lock automatically when it recognizes the saved face.",
      icon: Eye,
      technologies: ["Computer Vision", "Face Recognition", "IoT", "Python"],
      features: [
        "Automatic door unlock system",
        "Face recognition technology",
        "Real-time processing",
        "Security enhancement"
      ]
    },
    {
      title: "Mobile Logistics Robot",
      type: "Diploma Project",
      description: "The objective of the project is pallet lifting and transporting around the industry autonomously.",
      icon: Bot,
      technologies: ["Robotics", "Automation", "Navigation", "Industrial IoT"],
      features: [
        "Autonomous navigation",
        "Pallet lifting mechanism",
        "Industrial automation",
        "Real-time monitoring"
      ]
    }
  ];

  const professionalProjects = [
    {
      title: "Kaizen Ideas Implementation",
      description: "Developed and implemented process improvement ideas to eliminate customer complaints and reduce engine rework.",
      impact: "Reduced customer complaints by implementing systematic problem-solving approaches"
    },
    {
      title: "Model Store Creation",
      description: "Participated in creating a model store following 5S Standards for workplace organization and efficiency.",
      impact: "Improved workplace organization and operational efficiency through 5S methodology"
    }
  ];

  const trainings = [
    {
      title: "Soft Skills Training",
      organization: "Mahindra Pride Classroom",
      duration: "One week",
      type: "Professional Development"
    },
    {
      title: "3D Printing Training",
      organization: "Mahindra Pride Classroom",
      duration: "One week",
      type: "Technical Training"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Projects & Training
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">
              Academic projects and professional development
            </p>
          </div>

          {/* Academic Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
              <Code className="w-6 h-6 text-primary-blue" />
              Academic Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gradient-card shadow-xl border-0 hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform">
                        <project.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium mb-2 inline-block">
                          {project.type}
                        </span>
                        <h4 className="text-xl font-bold text-navy mb-2 group-hover:text-primary-blue transition-colors">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-navy mb-3">Key Features:</h5>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
              <Cpu className="w-6 h-6 text-primary-blue" />
              Professional Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {professionalProjects.map((project, index) => (
                <Card key={index} className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-navy mb-3 group-hover:text-primary-blue transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="bg-accent/10 rounded-lg p-3">
                      <p className="text-accent text-sm font-medium">
                        Impact: {project.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Training Programs */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary-blue" />
              Training & Workshops
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {trainings.map((training, index) => (
                <Card key={index} className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-bold text-navy group-hover:text-primary-blue transition-colors">
                        {training.title}
                      </h4>
                      <span className="px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-xs">
                        {training.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      {training.organization}
                    </p>
                    <span className="text-gray-500 text-xs">
                      {training.type}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Webinar */}
          <div className="mt-12">
            <Card className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-navy mb-2">
                    Webinar: "Robots in Smart Manufacturing"
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Department of Mechatronics, PSG Polytechnic College, Coimbatore
                  </p>
                  <p className="text-gray-500 text-xs">
                    23rd July 2020
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};