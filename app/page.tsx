import Navbar from "@/components/navbar"
import About from "@/components/about"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Projects from "@/components/projects"
import ConnectMe from "@/components/connect-me"
import portfolioData from "@/data/portfolio.json"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About data={portfolioData.about} />
        <Skills skills={portfolioData.skills} />
        <Achievements achievements={portfolioData.achievements} />
        <Projects projects={portfolioData.projects} />
        <ConnectMe contact={portfolioData.contact} />
      </main>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#6B7280]">
          <p>
            &copy; Made with ❤️ by {portfolioData.about.name}
          </p>
        </div>
      </footer>
    </div>
  )
}
