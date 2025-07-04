import { ArrowDown } from "lucide-react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="typewriter-text"> Kushal</span>

            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Kongara
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>
          {
            <div className="flex gap-4 justify-center items-center opacity-0 animate-fade-in-delay-4 pt-4">
              {/* Button */}
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>

              {/* Social Icons */}
              <div className="flex gap-3 pl-10">
                <a
                  href="https://www.linkedin.com/in/kushalkongara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#0A66C2] transition-transform transform hover:scale-110 p-2"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/kushal_kongara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#E1306C] transition-transform transform hover:scale-110 p-2"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/Kushal-Kongara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition-transform transform hover:scale-110 p-2"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          }
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
