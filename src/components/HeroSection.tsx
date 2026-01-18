import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-yacht.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury yacht sailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/50 via-ocean-deep/40 to-ocean-deep/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-2 bg-ocean-teal/20 backdrop-blur-sm border border-ocean-teal/30 rounded-full text-primary-foreground text-sm font-medium mb-6 tracking-widest uppercase"
          >
            Premium Yacht Experience
          </motion.span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Discover the World by{" "}
            <span className="text-ocean-teal">Luxury Yacht</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl">
            Experience breathtaking destinations from the deck of premium yachts.
            Sail, explore, and create unforgettable memories on the open sea.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="ocean" size="xl">
              Explore Tours
            </Button>
            <Button variant="hero" size="xl">
              Watch Video
            </Button>
          </div>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 bg-card/95 backdrop-blur-md rounded-2xl shadow-card-hover p-6 max-w-5xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
              <MapPin className="h-5 w-5 text-ocean-teal flex-shrink-0" />
              <div className="flex-1">
                <label className="block text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Destination
                </label>
                <select className="w-full bg-transparent text-foreground font-medium focus:outline-none cursor-pointer">
                  <option>All Destinations</option>
                  <option>Mediterranean</option>
                  <option>Caribbean</option>
                  <option>Maldives</option>
                  <option>Greek Islands</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
              <Calendar className="h-5 w-5 text-ocean-teal flex-shrink-0" />
              <div className="flex-1">
                <label className="block text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  When
                </label>
                <input
                  type="text"
                  placeholder="Select dates"
                  className="w-full bg-transparent text-foreground font-medium focus:outline-none placeholder:text-foreground/60"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
              <Users className="h-5 w-5 text-ocean-teal flex-shrink-0" />
              <div className="flex-1">
                <label className="block text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Guests
                </label>
                <select className="w-full bg-transparent text-foreground font-medium focus:outline-none cursor-pointer">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>8+ Guests</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <Button variant="ocean" size="lg" className="h-full min-h-[60px]">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
