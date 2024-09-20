import {
  type ScheduleItemPause,
  type ScheduleItemPresentation,
} from '~/data/events';
import { useStore } from '~/hooks/useStore';

function EventPresentation({ item }: { item: ScheduleItemPresentation }) {
  const { event } = useStore();
  const timeStart = item.time.split('-')[0];

  return (
    <li className="relative overflow-hidden rounded-2xl bg-white px-4 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {item?.image && (
          <figure className="relative -m-4">
            <img
              src={item.image}
              alt={item.name}
              height={600}
              width={900}
              loading="lazy"
              className="w-full object-cover"
            />
          </figure>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80"></div>
      </div>
      <div className="relative text-white space-y-1">
        <p className="text-2xl font-light">
          <time dateTime={`${event?.date} ${timeStart}`}>{item.time}</time>
        </p>
        <h3 className="text-2xl font-light italic">
          <span>{item.name}</span>
          {item.company && (
            <a
              href={item.company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-base not-italic hover:underline"
            >
              {item.company.name}
            </a>
          )}
          <span className="sr-only">on {`${event?.date} at ${timeStart}`}</span>
        </h3>
        <h4 className="text-2xl">{item.title}</h4>
      </div>
    </li>
  );
}

function EventPause({ item }: { item: ScheduleItemPause }) {
  return (
    <li>
      <h3 className="text-xs uppercase text-white/65">{item.title}</h3>
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
          switch (item.type) {
            case 'pause':
              return <EventPause key={index} item={item} />;
            case 'presentation':
            default:
              return <EventPresentation key={item.name} item={item} />;
          }
        })}
      </ul>
    </div>
  );
}

export { Schedule };
