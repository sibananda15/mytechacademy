"use client";
import { Suspense } from "react";
import Section from "@/components/Section";
import { useSearchParams } from "next/navigation";

function ApplyForm() {
  const params = useSearchParams();
  const course = params.get("course") || "";

  return (
    <Section
      title="Application Form"
      subtitle="Takes 2 minutes. We'll get back within 24 hours."
    >
      <form
        action="https://formspree.io/f/movnbpwe" 
        method="POST"
        className="card grid gap-4 max-w-xl"
      >
        <input
          required
          name="name"
          placeholder="Full name"
          className="border rounded px-3 py-2"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="border rounded px-3 py-2"
        />
        <input
          required
          name="phone"
          placeholder="Phone/WhatsApp"
          className="border rounded px-3 py-2"
        />

        <select
          name="course"
          defaultValue={course}
          className="border rounded px-3 py-2"
        >
          <option value="">Select course</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Full-Stack (MERN)</option>
          <option value="javafullstack">Full-Stack Java</option>
        </select>

        <textarea
          name="about"
          placeholder="Your background and goals"
          rows="4"
          className="border rounded px-3 py-2"
        ></textarea>

        <button className="btn" type="submit">
          Submit Application
        </button>
      </form>
    </Section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading form...</div>}>
      <ApplyForm />
    </Suspense>
  );
}
