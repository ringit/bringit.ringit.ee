import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import {
  ArrowLongRightIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from '@remix-run/react';

import { data } from '~/data/events';
import { getLatestEvent } from '~/lib/utils';

function Menu() {
  const showByDefault = useMedia('(min-width: 50rem)', true);
  const [show, setShow] = useState(showByDefault);
  const latestEvent = getLatestEvent(data);
  const menu = data.filter((event) => event.date !== latestEvent?.date);

  useEffect(() => {
    setShow(showByDefault);
  }, [showByDefault]);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <aside className="fixed bottom-8 left-0 z-10">
      <div className="relative rounded-br-2xl rounded-tr-2xl border border-background bg-white p-4 text-foreground">
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
          <nav className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xs uppercase text-foreground/50">
                Next event:
              </h2>
              <ul>
                <li>
                  <NavLink to={`/`} className="hover:underline">
                    {({ isActive }) => (
                      <span className="flex items-center">
                        {isActive && (
                          <ArrowLongRightIcon className="mr-1 h-4 w-4" />
                        )}
                        <span>{latestEvent?.meta.title}</span>
                      </span>
                    )}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
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
                      {({ isActive }) => (
                        <span className="flex items-center">
                          {isActive && (
                            <ArrowLongRightIcon className="mr-1 h-4 w-4" />
                          )}
                          <span>{event.meta.title}</span>
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
    </aside>
  );
}

export { Menu };
