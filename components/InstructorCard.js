import Image from "next/image";

export default function InstructorCard({ instructor }){
  return (
    <div className="card flex gap-4 items-center">
      <Image
        src={instructor.avatar}
        alt={instructor.name}
        width={48}
        height={48}
        className="rounded-md"
      />
      <div>
        <p className="font-semibold">{instructor.name}</p>
        <p className="small">{instructor.role}</p>
        <p className="text-sm text-gray-700 mt-2">{instructor.bio}</p>
      </div>
    </div>
  )
}
