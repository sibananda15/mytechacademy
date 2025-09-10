import Section from "@/components/Section";
import { COURSES } from "@/lib/data";
import Link from "next/link";

export const metadata = { title: "Pricing • MyTechAcademy" };

export default function Page(){
  return (
    <Section title="Pricing" subtitle="Simple, transparent. EMI options available.">
      <div className="grid md:grid-cols-3 gap-6">
        {COURSES.map(c => (
          <div key={c.id} className="card">
            <p className="font-semibold">{c.title}</p>
            <p className="text-3xl font-bold mt-2">{c.priceINR}</p>
            <p className="small mt-1">{c.duration}</p>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
              {c.outcomes.map((o,i)=>(<li key={i}>{o}</li>))}
            </ul>
            <Link href={`/apply?course=${c.id}`} className="btn mt-4">Apply</Link>
          </div>
        ))}
      </div>
    </Section>
  )
}
