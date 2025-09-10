import Section from "@/components/Section";
import { SCHEDULE } from "@/lib/data";

export const metadata = { title: "Schedule • MyTechAcademy" };

export default function Page(){
  return (
    <Section title="Schedule">
      <div className="grid md:grid-cols-2 gap-6">
        {SCHEDULE.map((s, idx)=>(
          <div key={idx} className="card">
            <p className="font-semibold">{s.week}</p>
            <p className="text-sm text-gray-700 mt-2">{s.topic}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
