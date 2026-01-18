import { motion } from "framer-motion";
import { Shield, Award, Users, Compass } from "lucide-react";
import heroImage from "@/assets/hero-yacht.jpg";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "All our yachts meet the highest safety standards with certified crews.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-selected fleet of luxury yachts for an exceptional experience.",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Experienced captains and crew ensuring memorable journeys.",
  },
  {
    icon: Compass,
    title: "Unique Routes",
    description: "Exclusive itineraries to hidden gems and pristine locations.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "120+", label: "Yacht Tours" },
  { value: "45+", label: "Destinations" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="About OceanVoyage"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 md:right-8 bg-card rounded-2xl shadow-card-hover p-6 grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-4 py-2">
                  <p className="text-3xl font-bold text-ocean-teal">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-ocean-teal font-medium uppercase tracking-widest text-sm">
              Who We Are
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Sailing Excellence Since 2010
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              OceanVoyage was born from a passion for the sea and a desire to share
              the beauty of yacht travel with the world. We believe that every journey
              on the water should be extraordinary, combining luxury, adventure, and
              unforgettable experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-ocean-teal/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-ocean-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
