import { useState } from 'react';
import { NavLink } from 'react-router';
import { useMedia } from 'react-use';
import {
  ArrowLongRightIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { isPast } from 'date-fns';

import { data } from '~/data/events';
import { getLatestEvent } from '~/lib/utils';

function Menu() {
  const showByDefault = useMedia('(min-width: 50rem)', true);
  const [show, setShow] = useState(showByDefault);
  const [prevShowByDefault, setPrevShowByDefault] = useState(showByDefault);
  const latestEvent = getLatestEvent(data);
  const latestValidEvent =
    latestEvent && !isPast(latestEvent?.date) ? latestEvent : null;
  const menu = data
    .filter((event) => event.date !== latestValidEvent?.date)
    .reverse();

  if (prevShowByDefault !== showByDefault) {
    setPrevShowByDefault(showByDefault);
    setShow(showByDefault);
  }

  function toggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <aside className="fixed bottom-8 left-0 z-10">
      <h2 className="sr-only">Menu</h2>
      <div
        className={clsx(
          'text-foreground relative rounded-tr-2xl rounded-br-2xl border border-gray-900 bg-white',
          show ? 'p-4' : 'p-5',
        )}
      >
        <button
          type="button"
          className={clsx(
            'text-foreground absolute top-0 right-0',
            show ? 'p-2' : 'p-3',
          )}
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
            {latestValidEvent && (
              <div className="space-y-2">
                <h2 className="text-xs text-black/65 uppercase">Next event:</h2>
                <ul>
                  <li>
                    <NavLink to={`/`} className="hover:underline">
                      {({ isActive }) => (
                        <span className="flex items-center">
                          {isActive && (
                            <ArrowLongRightIcon className="mr-1 h-4 w-4" />
                          )}
                          <h3>{latestValidEvent?.meta.title}</h3>
                        </span>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
            <div className="space-y-2">
              <h2 className="text-xs text-black/65 uppercase">Past events:</h2>
              <ul className="space-y-1">
                {menu.map((event) => (
                  <li key={event.id}>
                    <NavLink
                      to={`/event/${event.slug}`}
                      className="hover:underline"
                    >
                      {({ isActive }) => (
                        <h3 className="flex items-center">
                          {isActive && (
                            <ArrowLongRightIcon className="mr-1 h-4 w-4" />
                          )}
                          <span>{event.meta.title}</span>
                        </h3>
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
