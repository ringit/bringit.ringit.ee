import { useStore } from '~/hooks/useStore';

function Schedule() {
  const { event } = useStore();

  return (
    <div className="text-foreground">
      <h2 className="sr-only">Schedule</h2>
      <ul className="space-y-4 md:space-y-8">
        {event?.schedule.map((item) => {
          const timeStart = item.time.split('-')[0];
          return (
            <li key={item.name} className="rounded-2xl md:rounded-full bg-white px-4 py-8">
              <p className="text-2xl font-light">
                <time dateTime={`${event?.date} ${timeStart}`}>
                  {item.time}
                </time>
              </p>
              <h3 className="text-2xl font-light italic">
                {item.name}{' '}
                <span className="sr-only">
                  on {`${event?.date} at ${timeStart}`}
                </span>
              </h3>
              <h4 className="text-2xl">{item.title}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { Schedule };
