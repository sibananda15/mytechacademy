import InstructorCard from "@/components/InstructorCard";
import Section from "@/components/Section";
import { INSTRUCTORS } from "@/lib/data";

export const metadata = { title: "Instructors • MyTechAcademy" };

export default function Page(){
  return (
    <Section title="Instructors">
      <div className="grid md:grid-cols-2 gap-6">
        {INSTRUCTORS.map(i => <InstructorCard key={i.name} instructor={i} />)}
      </div>
    </Section>
  )
}
