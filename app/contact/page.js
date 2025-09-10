import Section from "@/components/Section";
import { SITE } from "@/lib/data";

export const metadata = { title: "Contact • MyTechAcademy" };

export default function Page(){
  return (
    <Section title="Contact" subtitle="Ask about cohorts, curriculum, and fees.">
      <div className="grid md:grid-cols-2 gap-8">
        <form action="https://formspree.io/f/xbldvzlp" method="POST" className="card grid gap-4">
          <input required name="name" placeholder="Your name" className="border rounded px-3 py-2"/>
          <input required type="email" name="email" placeholder="Email" className="border rounded px-3 py-2"/>
          <input name="phone" placeholder="Phone (optional)" className="border rounded px-3 py-2"/>
          <textarea required name="message" placeholder="Your message" rows="4" className="border rounded px-3 py-2"></textarea>
          <button className="btn" type="submit">Send</button>
          <p className="small text-gray-500">Powered by Formspree. Replace the endpoint with your own.</p>
        </form>
        <div className="card">
          <p className="font-semibold">Reach us</p>
          <p className="small mt-2">Phone: <a className="link" href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
          <p className="small">Email: <a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p className="small">Address: {SITE.address}</p>
        </div>
      </div>
    </Section>
  )
}
