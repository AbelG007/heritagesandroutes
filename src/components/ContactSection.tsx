import { Mail, Phone, MapPin, Users } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-hero bg-clip-text text-transparent">
          Contact Us
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Have a question? We'd love to hear from you. Reach out and our team will get back to you as soon as possible.
          </p>

          {/* Contact Info Row */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12">
            
            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 bg-gradient-card rounded-lg shadow-soft">
              <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                <Mail className="text-primary-foreground" size={22} />
              </div>
              <h4 className="font-semibold text-lg text-foreground mb-1">Email</h4>
              <p className="text-muted-foreground">info@heritagesandroutes.in</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center p-6 bg-gradient-card rounded-lg shadow-soft">
              <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                <Phone className="text-primary-foreground" size={22} />
              </div>
              <h4 className="font-semibold text-lg text-foreground mb-1">Phone</h4>
              <p className="text-muted-foreground">+91 7306185900</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center p-6 bg-gradient-card rounded-lg shadow-soft">
              <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-primary-foreground" size={22} />
              </div>
              <h4 className="font-semibold text-lg text-foreground mb-1">Location</h4>
              <p className="text-muted-foreground">
                4263 Anjikathu Road, CSEZ, Chittethukara<br />
                Kochi, Kerala - 682037
              </p>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center text-center p-6 bg-gradient-card rounded-lg shadow-soft">
              <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary-foreground" size={22} /> {/* Replace with Instagram icon */}
              </div>
              <h4 className="font-semibold text-lg text-foreground mb-1">Instagram</h4>
              <p className="text-muted-foreground">@heritagesandroutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
