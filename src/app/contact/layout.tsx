import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact APEX 24 Recruitment & Talent Solutions',
  description: 'Get in touch with APEX 24, an India-wide recruitment and talent solutions consultancy based in Pune. We are ready to assist employers and candidates.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
