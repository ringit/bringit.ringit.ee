import { useStore } from '~/hooks/useStore';

function Schedule() {
  const { schedule } = useStore();

  return (
    <div className="text-foreground">
      <h2 className="sr-only">Schedule</h2>
      <ul className="space-y-8">
        {schedule.map((item) => {
          const timeStart = item.time.split('-')[0];
          return (
            <li key={item.name} className="text-2xl">
              <p className="font-light">
                <time dateTime={`2023-09-28 ${timeStart}`}>{item.time}</time>
              </p>
              <h3 className="font-light">
                {item.name}{' '}
                <span className="sr-only">
                  on {`2023-09-28 at ${timeStart}`}
                </span>
              </h3>
              <h4>{item.title}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { Schedule };
