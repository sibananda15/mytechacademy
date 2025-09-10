import CourseCard from "@/components/CourseCard";
import Section from "@/components/Section";
import { COURSES } from "@/lib/data";

export const metadata = { title: "Courses • MyTechAcademy" };

export default function Page(){
  return (
    <Section title="Courses">
      <div className="grid md:grid-cols-3 gap-6">
        {COURSES.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </Section>
  )
}
