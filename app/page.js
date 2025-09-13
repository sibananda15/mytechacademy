import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { SITE, COURSES, INSTRUCTORS, FAQ } from "@/lib/data";
import dynamic from "next/dynamic";

// ✅ Lazy load heavy components
const CourseCard = dynamic(() => import("@/components/CourseCard"), {
  loading: () => <p>Loading course...</p>, // optional placeholder
});

const InstructorCard = dynamic(() => import("@/components/InstructorCard"), {
  loading: () => <p>Loading instructor...</p>,
});

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section
        title="Frontend, Backend, and Full-Stack the right way"
        subtitle="Practical, interview-ready skills. Live cohorts, projects, and mentorship."
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              Learn. Build. Get Hired.
            </h1>
            <p className="mt-4 text-gray-700">{SITE.tagline}</p>
            <div className="mt-6 flex gap-4">
              <Link href="/apply" className="btn">
                Apply Now
              </Link>
              <Link href="/courses" className="btn btn-outline">
                See Courses
              </Link>
            </div>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow">
            <Image
              src="/logo.svg"
              alt="MyTechAcademy"
              width={64}
              height={64}
              priority
            />
            <p className="mt-4">
              “We focus on real-world projects, clean code, and the how-and-why
              behind every decision.”
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {COURSES.map((c) => (
                <li key={c.id} className="p-3 rounded border">
                  {c.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Courses Section */}
      <Section title="Courses" subtitle="Pick a focused track.">
        <div className="grid md:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Section>

      {/* Instructors Section */}
      <Section
        title="Instructors"
        subtitle="Industry experts with years of experience."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {INSTRUCTORS.map((inst) => (
            <InstructorCard key={inst.name} instructor={inst} />
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Frequently Asked Questions">
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <div key={i} className="p-4 border rounded">
              <p className="font-semibold">{item.q}</p>
              <p className="text-sm text-gray-700 mt-1">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <CTA />
    </main>
  );
}
