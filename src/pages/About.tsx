import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90">Committed to excellence in engineering education since 2000</p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section id="vision" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be a premier institution recognized globally for excellence in engineering education, research, and innovation. We strive to develop technically competent, ethically strong, and socially responsible engineers who contribute to the advancement of society.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our vision encompasses creating a learning environment that fosters creativity, critical thinking, and lifelong learning, preparing our students to meet the challenges of an ever-evolving technological landscape.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                  </div>
                  <span>Provide quality education through innovative teaching methodologies and industry-aligned curriculum</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                  </div>
                  <span>Foster research and development activities that address real-world challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                  </div>
                  <span>Cultivate ethical values, leadership qualities, and entrepreneurial spirit among students</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                  </div>
                  <span>Build strong partnerships with industry and academia for mutual growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Achievements</h2>
            </div>
            <p className="text-muted-foreground">Recognition and accolades that motivate us to excel further</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "NAAC A+ Accreditation",
                description: "Recognized for outstanding quality in education and infrastructure"
              },
              {
                title: "NBA Accredited Programs",
                description: "All engineering programs accredited by National Board of Accreditation"
              },
              {
                title: "Top Ranked Institute",
                description: "Consistently ranked among the top engineering colleges in the region"
              }
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            World-Class Infrastructure
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "State-of-the-art laboratories with modern equipment",
              "Spacious and well-ventilated smart classrooms",
              "Central library with vast collection of books and e-resources",
              "High-speed internet connectivity across campus",
              "Sports complex and recreational facilities",
              "Modern auditorium and seminar halls"
            ].map((facility, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-card rounded-lg hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-3 w-3 bg-accent rounded-full flex-shrink-0"></div>
                <p className="text-foreground">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
