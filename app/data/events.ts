import artjom from '~/images/atrjom.jpg';
import vova from '~/images/vova.jpg';
import markus from '~/images/markus.jpg';


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
    illustrationTexts: ['Sauna!!!', 'Bar!!!'],
    schedule: [
      {
        time: '15-16',
        name: 'Aleksei Šohh',
        title: 'Race Condition When Refreshing Tokens',
      },
      {
        time: '16-17',
        name: 'Janar Männistu',
        title: 'Keep Sanity While Writing Frontend Tests',
      },
      {
        time: '17:30-18:30',
        name: 'Gert Glükmann',
        title: 'Lets Remix Our Frontend',
      },
      {
        time: '18:30-19:30',
        name: 'Jan Joonas Parve',
        title: 'From Zero to Energy Hero',
      },
    ],
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
      link: 'https://www.fairown.com'
    },
    schedule: [
      {
        time: '15-16',
        name: 'Vladimir Morozov',
        title: 'Is my computer - an artist?',
        image: vova,
      },
      {
        time: '16:30-17:30',
        name: 'Mystery Speaker from Fairown',
        title: 'TBC',
        image: markus,
      },
      {
        time: '18:00-19:00',
        name: 'Artjom Sarapov',
        title:
          'Data Unleashed: Scraping, Selling, Profiting – Legally (kind of)!',
        image: artjom,
      },
    ],
  },
] as const;
