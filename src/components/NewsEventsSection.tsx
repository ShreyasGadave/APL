import { newsEvents } from "@/data/mockData";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NewsEventsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest News & Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at our campus
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsEvents.map((item, index) => (
            <Card
              key={item.id}
              className="hover:shadow-lg transition-shadow animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="group-hover:text-accent transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{item.description}</CardDescription>
                <button className="flex items-center text-accent hover:gap-2 transition-all font-medium">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium">
            View All News & Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
