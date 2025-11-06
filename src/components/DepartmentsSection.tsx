import { departments } from "@/data/mockData";
import { GraduationCap, Users, FlaskConical } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DepartmentsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Departments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of engineering disciplines, each committed to academic excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <Card
              key={dept.id}
              className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="group-hover:text-accent transition-colors">
                  {dept.name}
                </CardTitle>
                <CardDescription className="text-xs font-semibold text-accent">
                  {dept.code}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{dept.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{dept.faculty} Faculty</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FlaskConical className="h-4 w-4" />
                    <span>{dept.labs} Labs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
