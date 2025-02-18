import CommunityCTA from '@/components/CommunityCTA';
import FAQSection from '@/components/FAQSection';
import MascotShowcase from '@/components/MascotShowcase';
import NFTTimeLockComparison from '@/components/NFTTimeLockComparison';
import VaultGrid from '@/components/VaultGrid';

export default function TimeVaults() {
  return (
    <>
      <VaultGrid />
      <NFTTimeLockComparison>
        <MascotShowcase />
      </NFTTimeLockComparison>
      <section className="px-[5vw] py-10">
        <div className="flex max-w-6xl gap-6 max-md:flex-col mx-auto">
          <FAQSection />
          <CommunityCTA />
        </div>
      </section>
    </>
  );
}
