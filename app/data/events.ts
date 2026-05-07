import aleksTatterImage from '~/images/aleks-tatter.jpg';
import alekseiSohhImage from '~/images/aleksei-sohh.jpg';
import antonGrambergImage from '~/images/anton-gramberg.jpg';
import artjomSarapovImage from '~/images/artjom-sarapov.jpg';
import gertGlukmannImage from '~/images/gert-glukmann.jpg';
import janParveImage from '~/images/jan-parve.jpg';
import janarMannistuImage from '~/images/janar-mannistu.jpg';
import kethmarSalumetsImage2 from '~/images/kethmar-salumets-2.jpeg';
import kethmarSalumetsImage from '~/images/kethmar-salumets.jpg';
import markusMandImage from '~/images/markus-mand.jpg';
import mihhailVerhovtsovImage from '~/images/mihhail-verhovtsov.jpeg';
import oliverOravImage from '~/images/oliver-orav.jpg';
import raulNugisImage from '~/images/raul-nugis.jpeg';
import taivoTurnpu2Image from '~/images/taivo-turnpu-2.jpeg';
import taivoTurnpuImage from '~/images/taivo-turnpu.jpg';
import valterKunglaImage from '~/images/valter-kungla.jpeg';
import vladimirMorozovImage from '~/images/vladimir-morozov.jpg';

export type ScheduleItemPause = {
  type: 'pause';
  title: string;
};

export type ScheduleItemPresentation = {
  type: 'presentation';
  time: string;
  name: string;
  company?: {
    name: string;
    link: string;
  };
  title: string;
  image?: {
    image: string;
    className?: string;
  };
};

export type Speaker = {
  name: string;
  role: string;
  description?: string;
  image?: string;
};

export type AgendaItem = {
  title: string;
  speaker: string;
  description: string;
};

export type Events = typeof data;
export type Event = Events[number];
export type SpotlightEvent = Extract<Event, { variant: 'spotlight' }>;

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
        image: {
          image: alekseiSohhImage,
        },
      },
      {
        type: 'presentation',
        time: '16-17',
        name: 'Janar Männistu',
        title: 'Keep Sanity While Writing Frontend Tests',
        image: {
          image: janarMannistuImage,
        },
      },
      {
        type: 'presentation',
        time: '17:30-18:30',
        name: 'Gert Glükmann',
        title: 'Lets Remix Our Frontend',
        image: {
          image: gertGlukmannImage,
        },
      },
      {
        type: 'presentation',
        time: '18:30-19:30',
        name: 'Jan Joonas Parve',
        title: 'From Zero to Energy Hero',
        image: {
          image: janParveImage,
        },
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
        image: {
          image: vladimirMorozovImage,
        },
      },
      {
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        type: 'presentation',
        time: '16:30-17:30',
        name: 'Markus Mänd & Marek Läll',
        title:
          'Mastering Boost: Supercharging Spring on Kubernetes with Hazelcast',
        image: {
          image: markusMandImage,
        },
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
        image: {
          image: artjomSarapovImage,
        },
      },
    ] satisfies (ScheduleItemPause | ScheduleItemPresentation)[],
  },
  {
    id: 3,
    slug: 'sepikoda',
    date: '2024-10-17',
    time: '16:00',
    location: {
      title: 'Põhjala Sepikoja Gallery',
      link: 'https://www.pohjalatehas.ee/en/portfolio-item/sepikoja-gallery-2/',
    },
    meta: {
      title: 'BringIT @Sepikoda 17.10.2024',
      description: '',
    },
    partner: null,
    illustrationTexts: ['Ants&Tants!!!'],
    schedule: [
      {
        type: 'pause',
        title: '15:30 doors open',
      },
      {
        type: 'presentation',
        time: '16:00-16:45',
        name: 'Oliver Orav',
        company: {
          name: 'Playerbank',
          link: 'https://playerbank.io/',
        },
        title: 'GitOps & Playerbank',
        image: {
          image: oliverOravImage,
        },
      },
      {
        type: 'presentation',
        time: '16:45-17:30',
        name: 'Aleks Tatter',
        company: {
          name: 'RingIT',
          link: 'https://ringit.ee/',
        },
        title: 'Can OAuth 2.0 Be Secure on the Web? Let’s Find Out',
        image: {
          image: aleksTatterImage,
        },
      },
      {
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        type: 'presentation',
        time: '18:00-18:45',
        name: 'Kethmar Salumets',
        company: {
          name: 'Katana',
          link: 'https://katanamrp.com/',
        },
        title: 'Building a Component Library - If and How Should You Do It?',
        image: {
          image: kethmarSalumetsImage,
        },
      },
      {
        type: 'presentation',
        time: '18:45-19:30',
        name: 'Taivo Türnpu',
        company: {
          name: 'RingIT',
          link: 'https://ringit.ee/',
        },
        title: 'Securing Corporate Bank Data as a Credit Intermediary Partner',
        image: {
          image: taivoTurnpuImage,
        },
      },
      {
        type: 'pause',
        title: 'Afterparty with Ants&Tants',
      },
    ] satisfies (ScheduleItemPause | ScheduleItemPresentation)[],
  },
  {
    id: 4,
    slug: 'beach',
    date: '2025-04-22',
    time: '15:00',
    location: {
      title: 'Teras Beach',
      link: 'https://www.terasbeach.ee/en/',
    },
    meta: {
      title: 'BringIT @Beach 22.04.2025',
      description: '',
    },
    partner: {
      name: 'KPMG',
      link: 'https://home.kpmg/xx/en/home.html',
    },
    illustrationTexts: null,
    schedule: [
      {
        type: 'pause',
        title: '14:30 doors open',
      },
      {
        type: 'presentation',
        time: '15:00-15:45',
        name: 'Raul Nugis',
        company: {
          name: 'KPMG',
          link: 'https://kpmg.com/ee/et/home.html',
        },
        title:
          'ArchiMate organisatsiooniarhitektuuri näide – AI loob organisatsioonivaate',
        image: {
          image: raulNugisImage,
          // className: 'blur',
        },
      },
      {
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        type: 'presentation',
        time: '16:00-16:45',
        name: 'Valter Kungla',
        company: {
          name: 'Katana',
          link: 'https://katanamrp.com/',
        },
        title: 'Teadliku juhtimise tööriistakast',
        image: {
          image: valterKunglaImage,
          // className: 'blur',
        },
      },
      {
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        type: 'presentation',
        time: '17:00-17:45',
        name: 'Taivo Türnpu',
        company: {
          name: 'RingIT',
          link: 'https://ringit.ee/',
        },
        title:
          'Isikuandmed pilves: kellel on päriselt ligipääs? Kogemuslugu Euroopa suurpangaga liidestumisest.',
        image: {
          image: taivoTurnpu2Image,
          // className: 'blur',
        },
      },
      {
        type: 'pause',
        title: 'Snacks and drinks',
      },
    ] satisfies (ScheduleItemPause | ScheduleItemPresentation)[],
  },
  {
    id: 5,
    slug: 'ringit-x-cooppank',
    variant: 'spotlight' as const,
    date: '2026-05-28',
    time: '15:00',
    location: {
      title: 'Proto Avastustehas, Pantera Saal',
      link: 'https://www.prototehas.ee/',
    },
    meta: {
      title: 'BringIT x Coop Pank 28.05.2026',
      header: "Let's Talk Agentic Development: RingIT x Coop Pank",
      description:
        'An evening of talks with engineers from RingIT, Coop Pank, and Katana — covering agentic workflows, AI-assisted refactoring, and what it means to let anyone ship to production. The event is held in Estonian.',
    },
    partner: {
      name: 'Coop Pank',
      link: 'https://www.cooppank.ee/',
    },
    illustrationTexts: null,
    registerUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLScyIMLzPIz3A9qovkZ0K-E_-EswlgJo0wHTvn9DC68YiFWgvg/viewform?usp=sharing&ouid=112024818952525115288',
    schedule: [] satisfies (ScheduleItemPause | ScheduleItemPresentation)[],
    speakers: [
      {
        name: 'Mihhail Verhovtsov',
        role: 'Software Architect, RingIT',
        image: mihhailVerhovtsovImage,
      },
      {
        name: 'Anton Gramberg',
        role: 'Software Engineer, Coop Pank',
        image: antonGrambergImage,
      },
      {
        name: 'Kethmar Salumets',
        role: 'Lead Software Engineer, Katana',
        image: kethmarSalumetsImage2,
      },
      {
        name: 'Aleks Tatter',
        role: 'Senior Software Engineer, RingIT',
        image: aleksTatterImage,
      },
    ] satisfies Speaker[],
    agenda: [
      {
        title:
          'Agentic Workflows in Business Apps: Can LLMs Replace Process Engines?',
        speaker: 'Mihhail Verhovtsov',
        description:
          'Workflow engines like Camunda have been the backbone of business process automation for years. But LLM-powered agents challenge this model by replacing predefined flows with dynamic reasoning. This talk explores whether agentic workflows are a real alternative or just hype. Expect concrete examples, trade-offs, and a sober look at what breaks when you remove explicit process control.',
      },
      {
        title: 'Agentic Refactoring',
        speaker: 'Anton Gramberg',
        description: '',
      },
      {
        title:
          'The Great Unblocking: Letting Anyone Build — And Getting Engineers Out* of the Way',
        speaker: 'Kethmar Salumets',
        description:
          'What if your PMs and designers could ship to production themselves? No handoffs. No "can an engineer take a look?" We bet AI could put that power directly in their hands — and we tried it. Some of it worked. Some of it didn\'t. Some of it made us rethink everything. Come hear what happens to an engineering org when the people closest to the product finally get to contribute.',
      },
      {
        title: 'The New Workflow',
        speaker: 'Aleks Tatter',
        description:
          'The next shift in software may not come from a single tool, but from a new way of working. As AI becomes part of the process, teams will need to rethink how they build, decide, and collaborate.',
      },
    ] satisfies AgendaItem[],
  },
] as const;
