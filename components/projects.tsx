import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  name: string
  description: string
  link: string
  demo?: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200 flex flex-col"
            >
              <h3 className="text-xl font-bold text-foreground mb-3 text-balance">{project.name}</h3>

              <p className="text-[#6B7280] leading-relaxed mb-6 flex-grow text-pretty">{project.description}</p>

              <div className="flex gap-3 flex-wrap">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1 min-w-[120px] hover:bg-[#6C9EFF] hover:text-white hover:border-[#6C9EFF] transition-colors bg-transparent"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} code on GitHub`}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>

                {project.demo && (
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 min-w-[120px] bg-[#6C9EFF] hover:bg-[#A18FF3] transition-colors"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} live demo`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
