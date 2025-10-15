import { Users, Target, Award } from "lucide-react";

// Define services data
const services = [
  {
    title: "Transportation & Hotels",
    icon: <Users className="text-primary-foreground" size={32} />,
    summary: "From budget-friendly stays to premium hotels, and private transfers to group-friendly coaches.",
    fullDescription: "We ensure your travel is smooth and comfortable with tailored transportation options and premium accommodations."
  },
  {
    title: "Customized Itineraries",
    icon: <Target className="text-primary-foreground" size={32} />,
    summary: "Our experts design tailor-made itineraries blending sightseeing, activities, and cultural experiences.",
    fullDescription: "We craft itineraries that fit your unique style and budget, making every journey memorable and stress-free."
  },
  {
    title: "Exclusive Cultural Experiences",
    icon: <Award className="text-primary-foreground" size={32} />,
    summary: "Rare cultural journeys including private Hindu festival access curated by a respected Brahmin priest.",
    fullDescription: "Experience deep cultural immersion with unique activities and traditions."
  },
  {
    title: "Lost & Found & Luggage Assistance",
    icon: <Users className="text-primary-foreground" size={32} />,
    summary: "Our team coordinates with airlines and hotels to track and safely return belongings.",
    fullDescription: "For international guests, we arrange secure delivery back home — giving you complete peace of mind."
  },
  {
    title: "Meet & Greet – Airport Assistance",
    icon: <Users className="text-primary-foreground" size={32} />,
    summary: "Personalized welcomes at the airport and smooth check-ins and transfers.",
    fullDescription: "We ensure stress-free arrivals and departures, making the first and last moments of your journey memorable."
  },
  {
    title: "Wedding Guest Assistance",
    icon: <Users className="text-primary-foreground" size={32} />,
    summary: "Reception staff support and luggage assistance for wedding guests.",
    fullDescription: "Our trained hospitality team ensures smooth arrangements so everyone can enjoy the celebration."
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-hero bg-clip-text text-transparent">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-lg p-6 shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.summary}</p>

              {/* Accordion for full description */}
              <details className="mt-3">
                <summary className="cursor-pointer font-semibold text-primary-foreground">
                  Read more
                </summary>
                <p className="mt-2 text-muted-foreground">{service.fullDescription}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
