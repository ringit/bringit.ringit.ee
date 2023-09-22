import { useState } from '~/hooks/useState';

function Schedule() {
  const { schedule } = useState();

  return (
    <div className="text-foreground">
      <ul className="space-y-8">
        {schedule.map((item) => (
          <li key={item.name} className="text-2xl">
            <p className="font-light">{item.time}</p>
            <p className="font-light">{item.name}</p>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Schedule };
