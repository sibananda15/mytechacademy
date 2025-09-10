"use client";
import Section from "@/components/Section";
import { useSearchParams } from "next/navigation";

export const metadata = { title: "Apply • MyTechAcademy" };

export default function Page(){
  const params = useSearchParams();
  const course = params.get("course") || "";
  return (
    <Section title="Application Form" subtitle="Takes 2 minutes. We'll get back within 24 hours.">
      <form action="https://formspree.io/f/xbldvzlp" method="POST" className="card grid gap-4 max-w-xl">
        <input required name="name" placeholder="Full name" className="border rounded px-3 py-2"/>
        <input required type="email" name="email" placeholder="Email" className="border rounded px-3 py-2"/>
        <input required name="phone" placeholder="Phone/WhatsApp" className="border rounded px-3 py-2"/>
        <select name="course" defaultValue={course} className="border rounded px-3 py-2">
          <option value="">Select course</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Full‑Stack (MERN)</option>
        </select>
        <textarea name="about" placeholder="Your background and goals" rows="4" className="border rounded px-3 py-2"></textarea>
        <button className="btn" type="submit">Submit Application</button>
        <p className="small text-gray-500">Powered by Formspree. Replace the endpoint with your own.</p>
      </form>
    </Section>
  )
}
