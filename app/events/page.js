import EventsHero from '@/components/events/EventsHero';
import EventsList from '@/components/events/EventsList';
import events from '@/data/events.json';

export default function EventsPage() {
  return (
    <div className="w-full">
      <EventsHero />
      <div className="bg-[#f7ead8] py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EventsList events={events} />
        </div>
      </div>
    </div>
  );
}
