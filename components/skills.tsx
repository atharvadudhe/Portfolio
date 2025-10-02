interface SkillsProps {
  skills: {
    [category: string]: string[]
  }
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-gradient-to-br from-[#6C9EFF]/5 to-[#A18FF3]/5 rounded-2xl p-6 border border-[#6C9EFF]/20 hover:border-[#6C9EFF]/40 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 text-[#6C9EFF] border-b border-[#6C9EFF]/30 pb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-white rounded-lg px-3 py-1.5 text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-gray-200"
                    role="listitem"
                    aria-label={`Skill: ${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
