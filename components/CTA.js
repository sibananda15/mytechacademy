import Link from "next/link";
export default function CTA(){
  return (
    <div className="bg-brand-600 text-white">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">Ready to level up?</h3>
          <p className="text-white/90">Join the next cohort. Limited seats.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/apply" className="btn bg-white text-brand-700 hover:bg-gray-100">Apply</Link>
          <Link href="/courses" className="btn bg-brand-700 hover:bg-brand-800">View Courses</Link>
        </div>
      </div>
    </div>
  )
}
