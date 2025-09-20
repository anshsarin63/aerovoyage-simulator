import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AeroVoyage Aviation - India's Premier Training Institute
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ace your DGCA examinations with professional online ground training. Learn from experienced airline pilots like 
            <strong> Mohit Babbar</strong> and <strong>Abhas Sandilya</strong>. 
            Our ATC courses include comprehensive CPL/ATPL training, Type Rating preparation, and RTR(A) certification 
            with 24/7 support and proven success rates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-aviation transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl font-bold text-primary">DGCA</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Ground School</h3>
            <p className="text-muted-foreground text-sm">Comprehensive DGCA exam preparation</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-aviation transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl font-bold text-accent">TR</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Type Rating Prep</h3>
            <p className="text-muted-foreground text-sm">Aircraft-specific training programs</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-aviation transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl font-bold text-primary">RTR</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">RTR(A) Training</h3>
            <p className="text-muted-foreground text-sm">Radio Telephony certification</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-aviation transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl font-bold text-accent">AI</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Airline Instructors</h3>
            <p className="text-muted-foreground text-sm">Learn from industry experts</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;