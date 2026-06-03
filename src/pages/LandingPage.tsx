import { CatalogueSection } from '../components/CatalogueSection'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { PricingBanner } from '../components/PricingBanner'
import { StepsSection } from '../components/StepsSection'
import { invitationDesigns, processSteps } from '../data/landing'

export function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CatalogueSection designs={invitationDesigns} />
      <StepsSection steps={processSteps} />
      <PricingBanner />
    </main>
  )
}
