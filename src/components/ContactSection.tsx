import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, ExternalLink } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 7339443310",
      href: "tel:+917339443310"
    },
    {
      icon: Mail,
      title: "Personal Email",
      details: "udhayathangavel03@gmail.com",
      href: "mailto:udhayathangavel03@gmail.com"
    },
    {
      icon: Mail,
      title: "Official Email",
      details: "24p407@psgtech.ac.in",
      href: "mailto:24p407@psgtech.ac.in"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "20/292, Sathy Main Road, Kasipalayam, Gobichettipalayam, Erode-638454",
      href: "https://maps.google.com?q=Gobichettipalayam,Erode"
    }
  ];

  const extraCurricular = [
    {
      title: "Program Executive",
      organization: "Brain Trust Club",
      description: "Managed by Students Union of PSG Polytechnic College",
      type: "Leadership Role"
    },
    {
      title: "Sports Participation",
      organization: "Division Level Kho-Kho",
      description: "Participated in division level competition held at Ramakrishna Mission, Coimbatore",
      type: "Sports Achievement"
    }
  ];

  return (
    <section className="py-20 bg-navy text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-primary-blue/20"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary-blue/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-gray-300 text-base sm:text-lg">
              Feel free to reach out for opportunities and collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform">
                          <contact.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary-blue-light mb-2">
                            {contact.title}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {contact.details}
                          </p>
                          <Button
                            variant="link"
                            className="text-primary-blue-light hover:text-primary-blue p-0 h-auto mt-2"
                            asChild
                          >
                            <a href={contact.href} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Contact
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Quick Actions</h3>
              <div className="space-y-4 sm:space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-primary-blue-light" />
                    <h4 className="font-bold mb-2">Send Message</h4>
                    <p className="text-sm text-gray-300 mb-4">
                      Ready to discuss opportunities
                    </p>
                    <Button variant="outline" className="w-full border-primary-blue-light text-primary-blue-light hover:bg-primary-blue-light hover:text-navy">
                      <a href="mailto:udhayathangavel03@gmail.com">Contact Now</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Extra-Curricular Activities */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Extra-Curricular Activities</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {extraCurricular.map((activity, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-bold text-primary-blue-light group-hover:text-primary-blue transition-colors">
                        {activity.title}
                      </h4>
                      <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs">
                        {activity.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">
                      {activity.organization}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm">
              © 2025 Udhaya Kumar T. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
