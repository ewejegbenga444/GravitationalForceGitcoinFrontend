import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Brain, BookOpen, Zap, Menu } from 'lucide-react'



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-16">
        <section className="bg-[#0033cc] from-primary/90 to-primary-foreground text-white py-20 md:py-32 overflow-hidden relative">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Gravitational</h1>
              <p className="text-xl mb-8 max-w-md">Empower your learning journey with AI-driven personalized education</p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/gravitational">Start Learning</Link>
              </Button>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 relative">
              {/* <div className="w-full h-[400px] md:h-[500px] bg-white rounded-full transform -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}
              <img
                src="https://img.freepik.com/free-photo/scene-abstract-3d-geometrical-background_23-2148772529.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid"
                alt="Student learning"
                width={500}
                height={500}
                className="rounded-full relative z-10 mx-auto"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-50 transform -skew-y-3"></div>
        </section>

        {/* 
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
                <p className="text-gray-600">Personalized learning paths tailored to your unique needs and pace</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-600">Wide range of subjects and topics to explore and master</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
                <p className="text-gray-600">Real-time assessment and progress tracking for optimal growth</p>
              </div>
            </div>
          </div>
        </section> 
        */}

        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About Gravitational</h2>
              <p className="text-gray-600 mb-8">
                Our AI-powered tutoring system revolutionizes the way you learn. By adapting to your individual needs,
                learning style, and pace, we ensure that you get the most out of every study session. Whether you're
                struggling with a specific concept or looking to advance your skills, our platform is designed to help
                you achieve your educational goals.
              </p>
              <Button asChild>
                <Link href="/gravitational">Learn gravitational force calculation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

