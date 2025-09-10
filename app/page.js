import Link from "next/link";
import Section from "@/components/Section";
import CourseCard from "@/components/CourseCard";
import InstructorCard from "@/components/InstructorCard";
import CTA from "@/components/CTA";
import { SITE, COURSES, INSTRUCTORS, FAQ } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="h1">{SITE.tagline}</h1>
            <p className="mt-4 text-gray-700">
              Practical, interview‑ready skills. Live cohorts, projects, and mentorship.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/apply" className="btn">{SITE.ctaText}</Link>
              <Link href="/courses" className="btn bg-gray-900">See Courses</Link>
            </div>
            <p className="small mt-3">Call us at <a className="link" href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
          </div>
          <div className="border rounded-xl p-6 bg-white shadow">
            <img src="/logo.svg" alt="MyTechAcademy" className="w-16 h-16"/>
            <p className="mt-4">“We focus on real‑world projects, clean code, and the how‑and‑why behind every decision.”</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {COURSES.map(c => (
                <li key={c.id} className="p-3 rounded border">{c.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section id="courses" title="Courses" subtitle="Pick a focused track.">
        <div className="grid md:grid-cols-3 gap-6">
          {COURSES.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
      </Section>

      <Section id="instructors" title="Instructors" subtitle="Learn from people who build and ship.">
        <div className="grid md:grid-cols-2 gap-6">
          {INSTRUCTORS.map(i => <InstructorCard key={i.name} instructor={i} />)}
        </div>
      </Section>

      <Section id="faq" title="FAQ">
        <div className="grid md:grid-cols-2 gap-6">
          {FAQ.map((item, idx) => (
            <div key={idx} className="card">
              <p className="font-semibold">{item.q}</p>
              <p className="text-sm text-gray-700 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
