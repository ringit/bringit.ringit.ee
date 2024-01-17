import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from '@remix-run/react';

import { data } from '~/data/events';
import { cn, getLatestEventDate } from '~/lib/utils';

function Menu() {
  const showByDefault = useMedia('(min-width: 50rem)', true);
  const [show, setShow] = useState(showByDefault);
  const latestEventDate = getLatestEventDate(data);
  const menu = data.filter((event) => event.date !== latestEventDate);

  useEffect(() => {
    setShow(showByDefault);
  }, [showByDefault]);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <aside className="fixed bottom-8 left-0 z-[1]">
      <div
        className={cn(
          'relative rounded-br-2xl rounded-tr-2xl border border-background bg-white p-4 text-foreground',
          show ? 'w-64' : 'w-8',
        )}
      >
        <button
          type="button"
          className="absolute right-0 top-0 p-2 text-foreground"
          onClick={toggleShow}
        >
          <span className="sr-only">{show ? 'Hide menu' : 'Show menu'}</span>
          {show ? (
            <XMarkIcon className="h-4 w-4" />
          ) : (
            <Bars3Icon className="h-4 w-4" />
          )}
        </button>
        {show && (
          <nav className="space-y-2">
            <h2 className="text-xs uppercase text-foreground/50">
              Past events:
            </h2>
            <ul className="space-y-1">
              {menu.map((event) => (
                <li key={event.id}>
                  <NavLink
                    to={`/event/${event.slug}`}
                    className="hover:underline"
                  >
                    {event.meta.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </aside>
  );
}

export { Menu };
