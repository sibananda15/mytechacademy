
import Image from "next/image";
import { SITE } from "@/lib/data";

export default function Footer(){
  return (
    <footer className="border-t">
      <div className="container py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <span className="font-semibold">{SITE.name}</span>
          </div>
          <p className="small">{SITE.tagline}</p>
          <p className="small mt-2">{SITE.address}</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Contact</p>
          <p className="small">Phone: <a className="link" href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
          <p className="small">Email: <a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p className="small"><a className="link" href={SITE.whatsapp} target="_blank">Whatsapp us</a></p>
        </div>
        <div className="small text-gray-500">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          {/* <p className="mt-2">Built with Next.js + Tailwind CSS.</p> */}
        </div>
      </div>
    </footer>
  )
}
