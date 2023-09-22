const data = [
  {
    time: '15-16',
    name: 'Aleksei',
    title: 'Race Condition When Refreshing Tokens',
  },
  {
    time: '16-17',
    name: 'Janar',
    title: 'Keep Sanity While Writing Frontend Tests',
  },
  {
    time: '17:30-18:30',
    name: 'Gert',
    title: 'Lets Remix Our Frontend',
  },
  {
    time: '18:30-19:30',
    name: 'Jan',
    title: 'From Zero to Energy Hero',
  },
];

function Schedule() {
  return (
    <div className="text-foreground">
      <ul className="space-y-8">
        {data.map((item) => (
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
