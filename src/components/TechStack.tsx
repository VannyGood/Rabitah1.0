// Tech icons
import cssIcon from "@/assets/tech/css.png";
import dockerIcon from "@/assets/tech/docker.png";
import flutterIcon from "@/assets/tech/flutter.png";
import githubIcon from "@/assets/tech/github.png";
import gitlabIcon from "@/assets/tech/gitlab.png";
import htmlIcon from "@/assets/tech/html.png";
import jsIcon from "@/assets/tech/js.png";
import mysqlIcon from "@/assets/tech/mysql.png";
import reactNativeIcon from "@/assets/tech/react-native.png";
import nextjsIcon from "@/assets/tech/nextjs.png";
import nodeIcon from "@/assets/tech/node.png";
import phpIcon from "@/assets/tech/php.png";
import pngwingIcon from "@/assets/tech/pngwing.com.png";
import postgresqlIcon from "@/assets/tech/postgresql.png";
import pythonIcon from "@/assets/tech/python.png";
import reactIcon from "@/assets/tech/react.png";
import reduxIcon from "@/assets/tech/redux.png";
import supabaseIcon from "@/assets/tech/supabase.png";
import swiftIcon from "@/assets/tech/swift.png";
import tailwindIcon from "@/assets/tech/tailwind.png";
import typescriptIcon from "@/assets/tech/typescript.png";

// Map tech names to their icons
const techIcons: Record<string, string> = {
  "CSS": cssIcon,
  "Docker": dockerIcon,
  "Flutter": flutterIcon,
  "GitHub": githubIcon,
  "GitLab": gitlabIcon,
  "HTML": htmlIcon,
  "JavaScript": jsIcon,
  "MySQL": mysqlIcon,
  "React Native": reactNativeIcon,
  "Next.js": nextjsIcon,
  "Node.js": nodeIcon,
  "PHP": phpIcon,
  "PostgreSQL": postgresqlIcon,
  "Python": pythonIcon,
  "React": reactIcon,
  "Redux": reduxIcon,
  "Supabase": supabaseIcon,
  "Swift": swiftIcon,
  "Tailwind CSS": tailwindIcon,
  "TypeScript": typescriptIcon,
  "Kubernetes": pngwingIcon,
};

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "HTML", "CSS"]
    },
    {
      title: "Backend",
      techs: ["Node.js", "Python", "PHP", "Supabase", "PostgreSQL", "MySQL"]
    },
    {
      title: "Mobile",
      techs: ["React Native", "Flutter", "Swift"]
    },
    {
      title: "DevOps",
      techs: ["Docker", "GitHub", "GitLab", "Kubernetes"]
    }
  ];

  return (
    <section id="tech" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <span className="text-minimal text-muted-foreground mb-4 block">TECHNOLOGIES</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-architectural">
              Our Stack
            </h2>
          </div>
          
          {/* Tech Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((category, index) => (
              <div key={index}>
                <h3 className="text-minimal text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 text-sm border border-border bg-background hover:border-primary hover:text-primary transition-colors duration-300 flex items-center gap-2"
                    >
                      <img 
                        src={techIcons[tech]} 
                        alt={`${tech} icon`} 
                        className="w-5 h-5 object-contain"
                      />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
