import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What training programs does AeroVoyage Aviation offer?",
      answer: "AeroVoyage Aviation specializes in comprehensive DGCA CPL/ATPL ground training, A320/B737 Type Rating preparation, RTR(A) certification, and airline interview coaching. All our programs are designed to meet current aviation industry standards."
    },
    {
      question: "Are your training sessions conducted online or offline?",
      answer: "We provide flexible online training sessions that allow you to learn from anywhere. Our digital platform ensures interactive learning with experienced airline pilots through live sessions and recorded content."
    },
    {
      question: "Which subjects are included in your DGCA CPL/ATPL ground training?",
      answer: "Our comprehensive curriculum covers Air Navigation, Aircraft General Knowledge, Aviation Meteorology, Air Regulations, Flight Planning & Performance, Radio Telephony, and Human Performance & Limitations - all essential subjects for DGCA examinations."
    },
    {
      question: "How adaptable are your class schedules for online training?",
      answer: "We offer highly flexible scheduling options including morning, evening, and weekend batches. Students can choose timings that best fit their personal schedules and learning preferences."
    },
    {
      question: "Do you provide individual guidance for students who need extra help?",
      answer: "Absolutely! We offer personalized mentoring sessions and one-on-one doubt clearing sessions. Students who prefer individual attention can opt for customized training plans with dedicated instructor support."
    },
    {
      question: "What assistance is available beyond regular class hours?",
      answer: "Our 24/7 support system includes access to study materials, doubt resolution through WhatsApp/email, practice tests, and emergency contact with instructors for urgent queries."
    },
    {
      question: "How is your A320/B737 Type Rating preparation structured?",
      answer: "Our Type Rating prep includes aircraft systems training, simulator preparation guidance, interview techniques, and comprehensive study materials. We focus on both theoretical knowledge and practical application skills."
    },
    {
      question: "Do you assist with airline recruitment and interview preparation?",
      answer: "Yes, we provide complete airline interview coaching including technical preparation, HR interview skills, group discussions, and industry-specific guidance to enhance your chances of selection."
    },
    {
      question: "Why should I choose AeroVoyage Aviation for my pilot training?",
      answer: "With experienced airline pilots as instructors, 95% success rate, personalized attention, flexible timings, comprehensive study materials, and continuous support, we ensure your aviation career success."
    },
    {
      question: "What learning resources are included in your training programs?",
      answer: "Students receive comprehensive study guides, practice question banks, video lectures, reference materials, mock tests, and access to our digital learning platform with regular updates."
    },
    {
      question: "What does your RTR(A) certification training include?",
      answer: "Our RTR(A) training covers aviation communication procedures, phraseology, emergency communications, practical radio operation, and preparation for the DGCA RTR examination with hands-on practice sessions."
    },
    {
      question: "How frequently do new training batches commence?",
      answer: "New batches for various subjects start regularly throughout the month. We maintain small batch sizes to ensure quality education and individual attention for every student."
    },
    {
      question: "Are there any entry requirements for CPL or ATPL ground classes?",
      answer: "Basic eligibility includes completion of 12th grade (Physics and Mathematics mandatory). For ATPL, a valid CPL license is required. We also provide guidance on medical and other DGCA requirements."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <HelpCircle className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our aviation training programs and services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16 p-8 bg-card rounded-lg border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our team is ready to help with any specific questions about our training programs, 
            enrollment process, or aviation career guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Call Us Now
            </a>
            <a 
              href="mailto:info@aerovoyageaviation.com" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;