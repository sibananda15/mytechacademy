export default function InstructorCard({ instructor }){
  return (
    <div className="card flex gap-4 items-center">
      <img src={instructor.avatar} alt={instructor.name} className="w-12 h-12 rounded-md"/>
      <div>
        <p className="font-semibold">{instructor.name}</p>
        <p className="small">{instructor.role}</p>
        <p className="text-sm text-gray-700 mt-2">{instructor.bio}</p>
      </div>
    </div>
  )
}
