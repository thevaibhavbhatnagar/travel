import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Travel Blogger",
    content:
      "An absolutely incredible experience! The crew was professional, the yacht was pristine, and the route through the Greek islands was breathtaking. Will definitely book again!",
    rating: 5,
    avatar: "SM",
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Business Executive",
    content:
      "OceanVoyage delivered beyond expectations. From the seamless booking process to the luxurious amenities on board, everything was perfect. A must for yacht enthusiasts.",
    rating: 5,
    avatar: "JA",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Photographer",
    content:
      "The sunset sailing tour was magical! The captain knew exactly where to go for the best views. I captured some of my best photos ever. Thank you, OceanVoyage!",
    rating: 5,
    avatar: "ER",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-ocean relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-ocean-light font-medium uppercase tracking-widest text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
            What Our Guests Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-foreground/20" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-accent fill-current"
                  />
                ))}
              </div>

              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-ocean-teal flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
