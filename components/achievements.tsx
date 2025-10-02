interface Achievement {
  title: string
  description: string
  year: string
}

interface AchievementsProps {
  achievements: Achievement[]
}

export default function Achievements({ achievements }: AchievementsProps) {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Achievements & Extracurriculars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-[#6C9EFF] transition-colors">
                  {achievement.title}
                </h3>
                <span className="text-sm font-medium text-[#A18FF3] bg-[#A18FF3]/10 px-3 py-1 rounded-full">
                  {achievement.year}
                </span>
              </div>
              <p className="text-[#6B7280] leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
