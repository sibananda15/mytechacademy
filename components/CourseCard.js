import Link from "next/link";

export default function CourseCard({ course }){
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <span className="text-sm font-medium text-brand-700">{course.priceINR}</span>
      </div>
      <p className="small mt-1">{course.duration} • {course.mode}</p>
      <p className="mt-3 text-sm text-gray-700">Stack: {course.stack.join(", ")}</p>
      <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
        {course.outcomes.map((o,i)=>(<li key={i}>{o}</li>))}
      </ul>
      <div className="mt-4 flex gap-3">
        <Link href={`/apply?course=${course.id}`} className="btn">Apply</Link>
        <Link href="/contact" className="btn bg-gray-900">Ask</Link>
      </div>
    </div>
  )
}
