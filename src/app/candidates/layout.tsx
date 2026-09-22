import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Jobs & Career Opportunities Across India | APEX 24',
  description: 'Explore the latest job opportunities in IT, BFSI, and specialized sectors across India with APEX 24. Submit your profile today.',
}

export default function CandidatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
