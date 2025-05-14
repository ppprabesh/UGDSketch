import { Lightbulb, Palette, Sparkles, CheckCircle } from "lucide-react"

export function Process() {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            CREATIVE <span className="text-gray-400">PROCESS</span>
          </h2>
          <p className="mt-4 text-gray-400">How I transform your ideas into stunning digital art</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/30 via-white/10 to-transparent md:block"></div>

          <div className="space-y-12 md:space-y-0">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 pb-12 md:pr-12">
                <div className="relative ml-auto md:ml-0 md:mr-auto">
                  <div className="absolute -right-12 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black md:-right-5">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="mb-2 text-xl font-bold">1. Concept</h3>
                    <p className="text-gray-400">
                      We begin with your vision. I gather all requirements and references to understand exactly what
                      you're looking for.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1"></div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-1"></div>
              <div className="flex-1 pb-12 md:pl-12">
                <div className="relative mr-auto md:ml-auto md:mr-0">
                  <div className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black md:-left-5">
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="mb-2 text-xl font-bold">2. Sketching</h3>
                    <p className="text-gray-400">
                      I create initial sketches and compositions, exploring different approaches to bring your concept
                      to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-1 pb-12 md:pr-12">
                <div className="relative ml-auto md:ml-0 md:mr-auto">
                  <div className="absolute -right-12 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black md:-right-5">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="mb-2 text-xl font-bold">3. Creation</h3>
                    <p className="text-gray-400">
                      After your feedback on the sketches, I develop the final artwork with meticulous attention to
                      detail.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1"></div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-1"></div>
              <div className="flex-1 md:pl-12">
                <div className="relative mr-auto md:ml-auto md:mr-0">
                  <div className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black md:-left-5">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="mb-2 text-xl font-bold">4. Delivery</h3>
                    <p className="text-gray-400">
                      The final artwork is delivered in your preferred format, with revisions if needed to ensure your
                      complete satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
