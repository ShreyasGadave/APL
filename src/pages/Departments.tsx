import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { departments } from "@/data/mockData";
import { GraduationCap, Users, FlaskConical, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Departments = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Departments</h1>
          <p className="text-xl opacity-90">Explore our centers of academic and research excellence</p>
        </div>
      </div>

      {/* Departments Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <Card
                key={dept.id}
                className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                      {dept.code}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{dept.name}</CardTitle>
                  <CardDescription className="text-base">{dept.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <Users className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="text-lg font-bold text-foreground">{dept.faculty}</div>
                        <div className="text-xs text-muted-foreground">Faculty Members</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <FlaskConical className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="text-lg font-bold text-foreground">{dept.labs}</div>
                        <div className="text-xs text-muted-foreground">Research Labs</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <Award className="h-4 w-4 text-accent" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry-aligned curriculum with practical training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Active research collaborations and publications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Excellent placement records with top companies</span>
                      </li>
                    </ul>
                  </div>

                  <button className="w-full mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium">
                    View Department Details
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What Makes Our Departments Special
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Expert Faculty",
                description: "Highly qualified professors with extensive industry and research experience"
              },
              {
                title: "Modern Labs",
                description: "State-of-the-art laboratories equipped with latest technology and equipment"
              },
              {
                title: "Industry Partnerships",
                description: "Strong collaborations with leading companies for internships and projects"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Departments;
