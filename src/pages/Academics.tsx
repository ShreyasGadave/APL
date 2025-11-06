import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Calendar, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Academics = () => {
  const programs = [
    {
      degree: "Bachelor of Engineering (BE)",
      duration: "4 Years",
      specializations: [
        "Computer Engineering",
        "Electronics & Telecommunication",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical Engineering",
        "Information Technology"
      ]
    },
    {
      degree: "Master of Engineering (ME)",
      duration: "2 Years",
      specializations: [
        "Computer Engineering",
        "VLSI & Embedded Systems",
        "Structural Engineering",
        "Power Systems"
      ]
    },
    {
      degree: "Doctor of Philosophy (PhD)",
      duration: "3-5 Years",
      specializations: [
        "All Engineering Disciplines",
        "Research-focused program"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl opacity-90">Comprehensive programs designed for tomorrow's engineers</p>
        </div>
      </div>

      {/* Programs Offered */}
      <section id="programs" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Programs Offered</h2>
            </div>
            <p className="text-muted-foreground">Choose from our diverse range of engineering programs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{program.degree}</CardTitle>
                  <CardDescription className="text-accent font-semibold">
                    Duration: {program.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-foreground">Specializations:</h4>
                  <ul className="space-y-2">
                    {program.specializations.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section id="calendar" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Academic Calendar</h2>
            </div>
            <p className="text-muted-foreground">Key dates and events for the academic year 2024-25</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { event: "Semester Begins", date: "July 15, 2024" },
              { event: "Mid-Semester Examination", date: "September 10-20, 2024" },
              { event: "End-Semester Examination", date: "November 25 - December 10, 2024" },
              { event: "Winter Break", date: "December 15 - January 5, 2025" },
              { event: "Spring Semester Begins", date: "January 10, 2025" },
              { event: "Annual Technical Fest", date: "March 15-17, 2025" }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-card rounded-lg hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-medium text-foreground">{item.event}</span>
                <span className="text-accent font-semibold">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examination */}
      <section id="exam" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Examination System</h2>
            </div>
            <p className="text-muted-foreground">Fair and transparent evaluation process</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground mb-4">Assessment Components</h3>
              <div className="space-y-3">
                {[
                  { component: "Mid-Semester Exam", weightage: "30%" },
                  { component: "End-Semester Exam", weightage: "40%" },
                  { component: "Internal Assessment", weightage: "20%" },
                  { component: "Assignments & Projects", weightage: "10%" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-foreground">{item.component}</span>
                    <span className="font-semibold text-accent">{item.weightage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-semibold text-foreground mb-4">Grading System</h3>
              <div className="space-y-3">
                {[
                  { grade: "A+", range: "90-100", points: "10" },
                  { grade: "A", range: "80-89", points: "9" },
                  { grade: "B+", range: "70-79", points: "8" },
                  { grade: "B", range: "60-69", points: "7" },
                  { grade: "C", range: "50-59", points: "6" },
                  { grade: "F", range: "Below 50", points: "0" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="font-semibold text-accent">{item.grade}</span>
                    <span className="text-muted-foreground text-sm">{item.range}</span>
                    <span className="text-foreground">{item.points} pts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academics;
