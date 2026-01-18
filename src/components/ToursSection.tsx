import { motion } from "framer-motion";
import { Star, Clock, Users, Heart } from "lucide-react";
import { Button } from "./ui/button";
import catamaran from "@/assets/tour-catamaran.jpg";
import sunset from "@/assets/tour-sunset.jpg";
import diving from "@/assets/tour-diving.jpg";

const tours = [
  {
    id: 1,
    title: "Caribbean Catamaran Adventure",
    location: "Caribbean Islands",
    duration: "7 Days",
    groupSize: "8-12",
    price: 2499,
    rating: 4.9,
    reviews: 127,
    image: catamaran,
    featured: true,
  },
  {
    id: 2,
    title: "Romantic Sunset Sail",
    location: "Mediterranean Sea",
    duration: "3 Days",
    groupSize: "2-4",
    price: 899,
    rating: 4.8,
    reviews: 84,
    image: sunset,
    featured: false,
  },
  {
    id: 3,
    title: "Coral Reef Diving Expedition",
    location: "Maldives",
    duration: "5 Days",
    groupSize: "6-10",
    price: 1799,
    rating: 4.9,
    reviews: 156,
    image: diving,
    featured: true,
  },
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-ocean-teal font-medium uppercase tracking-widest text-sm">
              Featured Tours
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Popular Yacht Tours
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Handpicked experiences curated by our expert team for unforgettable maritime adventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {tour.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    Featured
                  </span>
                )}
                <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-coral transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">{tour.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({tour.reviews} reviews)
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {tour.location}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {tour.groupSize}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-muted-foreground text-sm">From</span>
                    <p className="text-2xl font-bold text-primary">
                      ${tour.price.toLocaleString()}
                    </p>
                  </div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View Details
                  </Button>
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
          <Button variant="ocean" size="lg">
            View All Tours
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ToursSection;
