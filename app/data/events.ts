import neleBachmannImage from '~/images/nele-bachmann.jpg';
import artjomSarapovImage from '~/images/artjom-sarapov.jpg';
import markusMandImage from '~/images/markus-mand.jpg';
import vladimirMorozovImage from '~/images/vladimir-morozov.jpg';
import alekseiSohhImage from '~/images/aleksei-sohh.jpg';
import janarMannistuImage from '~/images/janar-mannistu.jpg';
import gertGlukmannImage from '~/images/gert-glukmann.jpg';
import janParveImage from '~/images/jan-parve.jpg';

export type ScheduleItemPause = {
  type: 'pause';
  title: string;
};

export type ScheduleItemPresentation = {
  type: 'presentation';
  time: string;
  name: string;
  title: string;
  image?: string;
};

export type Events = typeof data;
export type Event = Events[number];

export const data = [
  {
    id: 1,
    slug: 'heldeke',
    date: '2023-09-28',
    time: '15:00',
    location: {
      title: 'Heldeke!',
      link: 'https://heldeke.ee/et/',
    },
    meta: {
      title: 'BringIT @Heldeke! 28.09.2023',
      description: '',
    },
    partner: null,
    illustrationTexts: ['Sauna!!!', 'Bar!!!'],
    schedule: [
      {
        type: 'presentation',
        time: '15-16',
        name: 'Aleksei Šohh',
        title: 'Race Condition When Refreshing Tokens',
        image: alekseiSohhImage,
      },
      {
        type: 'presentation',
        time: '16-17',
        name: 'Janar Männistu',
        title: 'Keep Sanity While Writing Frontend Tests',
        image: janarMannistuImage,
      },
      {
        type: 'presentation',
        time: '17:30-18:30',
        name: 'Gert Glükmann',
        title: 'Lets Remix Our Frontend',
        image: gertGlukmannImage,
      },
      {
        type: 'presentation',
        time: '18:30-19:30',
        name: 'Jan Joonas Parve',
        title: 'From Zero to Energy Hero',
        image: janParveImage,
      },
    ] satisfies (ScheduleItemPause | ScheduleItemPresentation)[],
  },
  {
    id: 2,
    slug: 'fairown',
    date: '2024-02-01',
    time: '15:00',
    location: {
      title: 'Fairown',
      link: 'https://www.fairown.com/contact',
    },
    meta: {
      title: 'BringIT x Fairown 01.02.2024',
      description: '',
    },
    partner: {
      name: 'fairown',
      link: 'https://www.fairown.com',
    },
    illustrationTexts: null,
    schedule: [
      {
        type: 'presentation',
        time: '15:00-16:00',
        name: 'Vladimir Morozov',
        title: 'Is my computer - an artist?',
        image: vladimirMorozovImage,
      },
      {
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        type: 'presentation',
        time: '16:30-17:30',
        name: 'Markus Mänd & Marek Läll',
        title: 'Mastering Boost: Supercharging Spring on Kubernetes with Hazelcast',
        image: markusMandImage,
      },
      {
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        type: 'presentation',
        time: '18:00-19:00',
        name: 'Artjom Sarapov',
        title:
          'Data Unleashed: Scraping, Selling, Profiting – Legally (kind of)!',
        image: artjomSarapovImage,
      },
    ] satisfies (ScheduleItemPause | ScheduleItemPresentation)[],
  },
] as const;
