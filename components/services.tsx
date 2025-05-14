import { Paintbrush } from "lucide-react"

export function Services() {
  return (
    <section className="relative py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            DIGITAL <span className="text-gray-400">ART</span>
          </h2>
          <p className="mt-4 text-gray-400">Creating stunning digital masterpieces that captivate and inspire</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-lg border border-white/10 p-6 transition-all hover:border-white/30">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black">
              <Paintbrush className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Character Design</h3>
            <p className="text-sm text-gray-400">
              Unique character concepts and illustrations with personality and depth.
            </p>
          </div>

          <div className="group rounded-lg border border-white/10 p-6 transition-all hover:border-white/30">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black">
              <Paintbrush className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Concept Art</h3>
            <p className="text-sm text-gray-400">
              Visually striking concept art for games, films, and personal projects.
            </p>
          </div>

          <div className="group rounded-lg border border-white/10 p-6 transition-all hover:border-white/30">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black">
              <Paintbrush className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Digital Illustrations</h3>
            <p className="text-sm text-gray-400">Detailed illustrations that tell stories and evoke emotions.</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  )
}
