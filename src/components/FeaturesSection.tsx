import { Card } from "@/components/ui/card";
import { Users, BookOpen, Trophy, Clock, Laptop, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Airline Instructors",
      description: "Learn directly from experienced pilots & engineers currently active in major airlines."
    },
    {
      icon: BookOpen,
      title: "Structured Curriculum",
      description: "Master the complete DGCA syllabus with our organized, exam-focused online ground school."
    },
    {
      icon: Trophy,
      title: "High Success Rate",
      description: "Benefit from proven teaching methods and rigorous mock tests designed for exam success."
    },
    {
      icon: Clock,
      title: "24/7 Doubt Support",
      description: "Get your questions answered anytime with dedicated support from our expert faculty."
    },
    {
      icon: Laptop,
      title: "Flexible Online Classes",
      description: "Study at your own pace with adaptable schedules fitting your personal commitments."
    },
    {
      icon: Award,
      title: "Specialized Training",
      description: "Comprehensive training programs tailored for aspiring commercial pilots."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose AeroVoyage Aviation?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver focused, high-quality online ground training designed to help you ace your DGCA exams and launch your pilot career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-aviation transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;