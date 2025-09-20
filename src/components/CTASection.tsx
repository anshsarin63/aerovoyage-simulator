import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Take Off?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join hundreds of successful pilots who started their journey with AeroVoyage Aviation. 
            Your dream of flying commercially is just one click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="aviation-ghost" size="lg" className="px-8 py-4 text-lg">
              <ArrowRight className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
            
            <Button variant="aviation-outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-aviation-gold-light mb-2">Free</div>
              <div className="text-white/80">Demo Classes</div>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-aviation-gold-light mb-2">Expert</div>
              <div className="text-white/80">Guidance</div>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-aviation-gold-light mb-2">Proven</div>
              <div className="text-white/80">Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;