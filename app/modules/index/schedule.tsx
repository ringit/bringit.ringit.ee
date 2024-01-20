import {
  type Event,
  type ItemPause,
  type ItemPresentation,
} from '~/data/events';
import { useStore } from '~/hooks/useStore';

function EventPresentation({
  event,
  item,
}: {
  event: Event;
  item: ItemPresentation;
}) {
  const timeStart = item.time.split('-')[0];

  return (
    <li className="relative overflow-hidden rounded-2xl bg-white px-4 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {item?.image && (
          <div className="relative h-full opacity-70 blur-lg">
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80"></div>
      </div>
      <div className="relative text-white">
        <p className="text-2xl font-light">
          <time dateTime={`${event?.date} ${timeStart}`}>{item.time}</time>
        </p>
        <h3 className="text-2xl font-light italic">
          {item.name}{' '}
          <span className="sr-only">on {`${event?.date} at ${timeStart}`}</span>
        </h3>
        <h4 className="text-2xl">{item.title}</h4>
      </div>
    </li>
  );
}

function EventPause({ item }: { item: ItemPause }) {
  return (
    <li>
      <h5 className="text-xs uppercase text-white/50">{item.title}</h5>
    </li>
  );
}

function Schedule() {
  const { event } = useStore();

  return (
    <div>
      <h2 className="sr-only">Schedule</h2>
      <ul className="space-y-4 md:space-y-6">
        {event?.schedule.map((item, index) => {
          if (item.type === 'pause') {
            return <EventPause key={index} item={item} />;
          }
          return (
            <EventPresentation key={item.name} event={event} item={item} />
          );
        })}
      </ul>
    </div>
  );
}

export { Schedule };
