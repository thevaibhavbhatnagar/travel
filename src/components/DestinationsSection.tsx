import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import santorini from "@/assets/destination-santorini.jpg";
import amalfi from "@/assets/destination-amalfi.jpg";
import maldives from "@/assets/destination-maldives.jpg";

const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    tours: 24,
    image: santorini,
  },
  {
    id: 2,
    name: "Amalfi Coast",
    country: "Italy",
    tours: 18,
    image: amalfi,
  },
  {
    id: 3,
    name: "Maldives",
    country: "Indian Ocean",
    tours: 32,
    image: maldives,
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 bg-sand">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-ocean-teal font-medium uppercase tracking-widest text-sm">
            Popular Destinations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Explore Dream Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From the crystal-clear waters of the Mediterranean to the pristine beaches
            of tropical paradises, discover your next adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    {destination.country}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                    {destination.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-foreground/80 text-sm">
                      {destination.tours} Tours Available
                    </span>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="h-10 w-10 rounded-full bg-ocean-teal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="h-5 w-5 text-primary-foreground" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-ocean-teal transition-colors"
          >
            View All Destinations
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
