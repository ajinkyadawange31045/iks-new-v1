import JoinHero from '@/components/join-us/JoinHero';
import GetInvolved from '@/components/join-us/GetInvolved';
import ContactForm from '@/components/join-us/ContactForm';

export default function JoinUsPage() {
  return (
    <div className="w-full">
      <JoinHero />
      <div className="bg-[#f7ead8] py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          <GetInvolved />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
