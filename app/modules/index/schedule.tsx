import clsx from 'clsx';

import {
  type ScheduleItemPause,
  type ScheduleItemPresentation,
} from '~/data/events';
import { useStore } from '~/hooks/useStore';
import { cn } from '~/lib/utils';

function EventPresentation({ item }: { item: ScheduleItemPresentation }) {
  const { event } = useStore();
  const timeStart = item.time.split('-')[0];

  return (
    <li className="relative overflow-hidden rounded-2xl bg-white px-4 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {item?.image?.image && (
          <figure className="relative h-full md:-m-4 md:h-auto">
            <img
              src={item.image.image}
              alt={item.name}
              height={600}
              width={900}
              loading="lazy"
              className={cn('h-full w-full object-cover', item.image.className)}
            />
          </figure>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80"></div>
      </div>
      <div className="relative space-y-1 text-white">
        <p className="text-xl font-light md:text-2xl">
          <time dateTime={`${event?.date} ${timeStart}`}>{item.time}</time>
        </p>
        <h3 className="text-xl font-light italic md:text-2xl">
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
        <h4 className="text-xl md:text-2xl">{item.title}</h4>
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

  const startsWithPause = event?.schedule[0].type === 'pause';

  return (
    <div>
      <h2 className="sr-only">Schedule</h2>
      <ul
        className={clsx('space-y-4 md:space-y-6', {
          'pt-12': startsWithPause,
        })}
      >
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
