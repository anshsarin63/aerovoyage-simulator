import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote, GraduationCap, Plane, Users, Award, Trophy, CheckCircle, PlayCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      course: "DGCA CPL",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "AeroVoyage Aviation transformed my aviation dreams into reality. The comprehensive ground school training and expert instructors made all the difference. I cleared my CPL exam on the first attempt with flying colors!",
      achievement: "First Attempt Success",
      background: "Engineering Graduate",
      location: "Delhi"
    },
    {
      id: 2,
      name: "Priya Sharma",
      course: "ATPL Ground School",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "Coming from a non-aviation background, I was worried about the complexity. But the structured curriculum and personalized attention at AeroVoyage made everything clear and achievable. Now I'm flying with IndiGo!",
      achievement: "Career Transition",
      background: "Commerce Background",
      location: "Mumbai"
    },
    {
      id: 3,
      name: "Captain Arjun Singh",
      course: "RTR(A) + Navigation",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "The radio telephony and navigation courses were exceptionally detailed. The practical approach and real-world scenarios prepared me perfectly for my airline career. Highly recommend AeroVoyage!",
      achievement: "Airline Captain",
      background: "Military Pilot",
      location: "Bangalore"
    },
    {
      id: 4,
      name: "Sneha Patel",
      course: "Technical General",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "The technical subjects were made so simple and understandable. The faculty's expertise and teaching methodology helped me score excellent marks in all technical papers. Best investment in my aviation career!",
      achievement: "Top Scorer (89%)",
      background: "Science Graduate",
      location: "Pune"
    },
    {
      id: 5,
      name: "Vikram Reddy",
      course: "Air Regulations",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "Understanding DGCA regulations was crucial for my pilot career. AeroVoyage's comprehensive coverage of air law and regulations gave me the confidence I needed for both exams and real flying.",
      achievement: "Regulatory Expert",
      background: "Law Graduate",
      location: "Hyderabad"
    },
    {
      id: 6,
      name: "Anita Joshi",
      course: "Complete CPL Package",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "The complete package approach saved me time and money. All subjects were well-coordinated, and the study material was top-notch. Cleared all subjects in one go! Highly recommend for serious aviation aspirants.",
      achievement: "Package Success",
      background: "Management Graduate",
      location: "Chennai"
    },
    {
      id: 7,
      name: "Rohit Gupta",
      course: "Meteorology",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "Weather knowledge is critical for safe flying. AeroVoyage's meteorology course was comprehensive and practical. The instructors made complex weather patterns easy to understand.",
      achievement: "Weather Expert",
      background: "Physics Graduate",
      location: "Kolkata"
    },
    {
      id: 8,
      name: "Kavya Nair",
      course: "ATPL Theory",
      rating: 5,
      image: "/api/placeholder/100/100",
      testimonial: "Being one of the few women in aviation, I needed extra support and confidence. AeroVoyage provided both exceptional training and moral support throughout my ATPL journey.",
      achievement: "Women in Aviation",
      background: "Aerospace Engineer",
      location: "Kochi"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      title: "From Engineering to Aviation Success",
      student: "Rajesh Kumar",
      course: "DGCA CPL",
      duration: "3:24",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 2,
      title: "Breaking Barriers: Woman Pilot Journey",
      student: "Priya Sharma", 
      course: "ATPL Ground",
      duration: "4:15",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 3,
      title: "Military to Commercial Aviation",
      student: "Captain Arjun Singh",
      course: "RTR(A)",
      duration: "5:02",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 4,
      title: "First Attempt Success Story",
      student: "Sneha Patel",
      course: "Technical General",
      duration: "2:45",
      thumbnail: "/api/placeholder/400/225"
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Students", value: "2,500+", color: "text-blue-600" },
    { icon: GraduationCap, label: "Success Rate", value: "95%", color: "text-green-600" },
    { icon: Award, label: "Courses Completed", value: "5,000+", color: "text-purple-600" },
    { icon: Star, label: "Average Rating", value: "4.9/5", color: "text-gold-600" }
  ];

  const achievements = [
    { icon: Trophy, label: "Industry Recognition", value: "Top Aviation Institute 2023" },
    { icon: CheckCircle, label: "DGCA Approved", value: "All Courses Certified" },
    { icon: Users, label: "Expert Faculty", value: "25+ Years Experience" },
    { icon: Plane, label: "Alumni Network", value: "Flying with Major Airlines" }
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Student Success Stories
              <span className="block text-gold-600 mt-2">Video Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Watch our graduates share their inspiring journeys from classroom to cockpit. 
              Real stories, real achievements, real success.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border-border/50">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="w-8 h-8 text-gold-600" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground">{video.student}</p>
                      <Badge variant="secondary" className="mt-1">{video.course}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover authentic testimonials from our successful graduates across India
            </p>
          </div>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-elegant transition-all duration-300 border-border/50">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 rounded-full bg-gold-100 mx-auto mb-4 flex items-center justify-center">
                        <GraduationCap className="w-10 h-10 text-gold-600" />
                      </div>
                      <CardTitle className="text-xl font-playfair text-foreground">{testimonial.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        <div className="space-y-1">
                          <Badge variant="secondary">{testimonial.course}</Badge>
                          <div className="text-sm">{testimonial.background} • {testimonial.location}</div>
                        </div>
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
                      <div className="relative mb-6">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold-400/30" />
                        <p className="text-muted-foreground italic pl-6 text-sm leading-relaxed">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-gold-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
              Recognition & Achievements
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and aviation authorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card-custom transition-all duration-300 bg-white border-border/50">
                <div className="w-16 h-16 rounded-full bg-gold-100 mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-gold-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{achievement.label}</h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.value}
                </p>
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
            <Button className="px-8 py-3 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-glow">
              Start Your Training
            </Button>
            <Button variant="outline" className="px-8 py-3 border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 font-semibold rounded-lg transition-all duration-300">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;