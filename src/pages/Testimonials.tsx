import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, GraduationCap, Plane, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      course: "DGCA CPL",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "AeroVoyage Aviation transformed my aviation dreams into reality. The comprehensive ground school training and expert instructors made all the difference. I cleared my CPL exam on the first attempt!",
      achievement: "First Attempt Success",
      background: "Engineering Graduate"
    },
    {
      id: 2,
      name: "Priya Sharma",
      course: "ATPL Ground School",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "Coming from a non-aviation background, I was worried about the complexity. But the structured curriculum and personalized attention at AeroVoyage made everything clear and achievable.",
      achievement: "Career Transition",
      background: "Commerce Background"
    },
    {
      id: 3,
      name: "Captain Arjun Singh",
      course: "RTR(A) + Navigation",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "The radio telephony and navigation courses were exceptionally detailed. The practical approach and real-world scenarios prepared me perfectly for my airline career.",
      achievement: "Airline Position",
      background: "Military Pilot"
    },
    {
      id: 4,
      name: "Sneha Patel",
      course: "Technical General",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "The technical subjects were made so simple and understandable. The faculty's expertise and teaching methodology helped me score excellent marks in all technical papers.",
      achievement: "Top Scorer",
      background: "Science Graduate"
    },
    {
      id: 5,
      name: "Vikram Reddy",
      course: "Air Regulations",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "Understanding DGCA regulations was crucial for my pilot career. AeroVoyage's comprehensive coverage of air law and regulations gave me the confidence I needed.",
      achievement: "Regulatory Expert",
      background: "Law Graduate"
    },
    {
      id: 6,
      name: "Anita Joshi",
      course: "Complete CPL Package",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "The complete package approach saved me time and money. All subjects were well-coordinated, and the study material was top-notch. Highly recommend for serious aviation aspirants.",
      achievement: "Package Success",
      background: "Management Graduate"
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Students", value: "2,500+" },
    { icon: GraduationCap, label: "Success Rate", value: "95%" },
    { icon: Plane, label: "Courses Completed", value: "5,000+" },
    { icon: Star, label: "Average Rating", value: "4.9/5" }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/src/assets/hero-airplane.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            Success Stories That
            <span className="block text-gold-400 mt-2">Inspire Aviation Dreams</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover authentic testimonials from accomplished DGCA graduates who turned their aviation aspirations 
            into successful careers through our premier ground school training programs.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-400/20 mb-3">
                  <stat.icon className="w-6 h-6 text-gold-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gold-400 mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              DGCA Training Success Stories
              <span className="block text-gold-600 mt-2">Video Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch verified graduates share their journey from aviation dreams to commercial pilot reality. 
              Real success stories from our DGCA CPL, ATPL, and RTR(A) training programs.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 rounded-full bg-gold-100 mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-gold-600" />
                  </div>
                  <CardTitle className="text-xl font-playfair text-foreground">{testimonial.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    <Badge variant="secondary" className="mr-2">{testimonial.course}</Badge>
                    <span className="text-sm">{testimonial.background}</span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold-400/30" />
                    <p className="text-muted-foreground italic pl-6 mb-4">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="text-center">
                    <Badge variant="outline" className="bg-gold-50 text-gold-700 border-gold-200">
                      {testimonial.achievement}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Courses Featured Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
              Aviation Training Programs Featured
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive range of DGCA-approved courses that have helped thousands achieve their aviation goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Comprehensive Curriculum Training",
              "Navigation & Flight Planning",
              "Technical General Studies", 
              "RTR(A) - Radio Telephony",
              "Air Regulations & Law",
              "Meteorology & Air Navigation"
            ].map((course, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card-custom transition-all duration-300 border-border/50">
                <div className="w-12 h-12 rounded-full bg-gold-100 mx-auto mb-4 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-gold-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{course}</h4>
                <p className="text-sm text-muted-foreground">
                  Success stories and testimonials from our graduates
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-playfair font-bold mb-6">
            Ready to Write Your Own Success Story?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of successful pilots who started their journey with AeroVoyage Aviation. 
            Begin your DGCA training today and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-glow">
              Start Your Training
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 font-semibold rounded-lg transition-all duration-300">
              View All Courses
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;