import { Briefcase, Code, User, Gamepad2 } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Developer & Game Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m <span className="font-medium">Emilio Belloso Marín</span>, a
              software developer and game creator currently finishing my{" "}
              <span className="font-semibold">
                Bachelor’s in Game Design & Development
              </span>{" "}
              at Universidad Jaume I. My journey blends{" "}
              <span className="font-semibold">web development</span>,{" "}
              <span className="font-semibold">Unity tooling</span>, and teaching
              experience, giving me a versatile perspective on tech and design.
            </p>

            <p className="text-muted-foreground">
              I’ve collaborated with{" "}
              <span className="font-semibold">Firescale Studios</span> building
              Unity tools, designing architectures, and managing Git workflows.
              Previously, I worked as a{" "}
              <span className="font-semibold">
                robotics and programming teacher
              </span>{" "}
              at OCA Group, helping kids and teenagers explore Python, block
              programming, and even Roblox Studio.
            </p>

            <p className="text-muted-foreground">
              I’m competitive, adaptive, and a fast learner. Whether it’s
              building software, teaching, or collaborating in teams, I always
              aim to deliver value and learn something new along the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/cvDeveloper.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software & Game Dev</h4>
                  <p className="text-muted-foreground">
                    Skilled in C#, Unity, and object-oriented programming to
                    create efficient tools and interactive experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Game Design & Tooling
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in Unity tooling, asset pipelines, and software
                    architecture to optimize development workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Teaching & Mentoring</h4>
                  <p className="text-muted-foreground">
                    Experience guiding students through robotics, Python, and
                    creative coding with accessible, hands-on lessons.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Collaboration</h4>
                  <p className="text-muted-foreground">
                    Adaptable, team-oriented, and ready to contribute in agile
                    projects with strong communication and problem-solving
                    skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
