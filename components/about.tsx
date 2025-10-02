import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

interface AboutProps {
  data: {
    name: string
    title: string
    description: string
    email: string
    location: string
  }
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#6C9EFF]/10 via-white to-[#FFD7A8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Profile Image */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              <Image
                src="/professional-developer-portrait1.png"
                alt={`${data.name} - ${data.title}`}
                width={300}
                height={300}
                className="rounded-full ring-4 ring-white shadow-xl object-cover"
                priority
              />
            </div>
          </div>

          {/* About Content */}
          <div className="md:col-span-8 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">{data.name}</h1>
              <h2 className="text-2xl md:text-3xl text-[#6C9EFF] font-semibold mb-4">{data.title}</h2>
            </div>

            <p className="text-lg text-[#6B7280] leading-relaxed text-pretty">{data.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#6C9EFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C9EFF] rounded-md px-2 py-1"
                aria-label={`Email ${data.name}`}
              >
                <Mail className="h-5 w-5" />
                <span>{data.email}</span>
              </a>
              <div className="inline-flex items-center gap-2 text-[#6B7280]">
                <MapPin className="h-5 w-5" />
                <span>{data.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
