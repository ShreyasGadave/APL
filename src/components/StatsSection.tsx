import { stats } from "@/data/mockData";
import { TrendingUp } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-accent">
                {stat.value}
              </div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
