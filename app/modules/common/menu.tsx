import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import {
  ArrowLongRightIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from '@remix-run/react';
import clsx from 'clsx';

import { data } from '~/data/events';
import { getLatestEvent } from '~/lib/utils';

function Menu() {
  const showByDefault = useMedia('(min-width: 50rem)', true);
  const [show, setShow] = useState(showByDefault);
  const latestEvent = getLatestEvent(data);
  const menu = data
    .filter((event) => event.date !== latestEvent?.date)
    .reverse();

  useEffect(() => {
    setShow(showByDefault);
  }, [showByDefault]);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <aside className="fixed bottom-8 left-0 z-10">
      <h2 className="sr-only">Menu</h2>
      <div
        className={clsx(
          'relative rounded-br-2xl rounded-tr-2xl border border-gray-900 bg-white text-foreground',
          show ? 'p-4' : 'p-5',
        )}
      >
        <button
          type="button"
          className={clsx(
            'absolute right-0 top-0 text-foreground',
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
            {latestEvent && (
              <div className="space-y-2">
                <h2 className="text-xs uppercase text-black/65">Next event:</h2>
                <ul>
                  <li>
                    <NavLink to={`/`} className="hover:underline">
                      {({ isActive }) => (
                        <span className="flex items-center">
                          {isActive && (
                            <ArrowLongRightIcon className="mr-1 h-4 w-4" />
                          )}
                          <h3>{latestEvent?.meta.title}</h3>
                        </span>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
            <div className="space-y-2">
              <h2 className="text-xs uppercase text-black/65">Past events:</h2>
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
