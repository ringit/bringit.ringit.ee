import { useStore } from '~/hooks/useStore';

function Schedule() {
  const { event } = useStore();

  return (
    <div className="text-foreground">
      <h2 className="sr-only">Schedule</h2>
      <ul className="space-y-4 md:space-y-6">
        {event?.schedule.map((item) => {
          const timeStart = item.time.split('-')[0];
          return (
            <li
              key={item.name}
              className="relative overflow-hidden rounded-2xl bg-white px-4 py-8"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden bg-white pointer-events-none">
                {item?.image && (
                  <div className="w-full -translate-x-1/4 opacity-70 blur-2xl">
                    <img src={item.image} alt={item.name} />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-background/50 to-background/80"></div>
              </div>
              <div className="relative text-white">
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
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { Schedule };
