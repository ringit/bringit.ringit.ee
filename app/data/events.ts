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
  id: string;
  type: 'pause';
  title: string;
};

export type ScheduleItemPresentation = {
  id: string;
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
        id: '980fbca7-f717-4a2f-a4a1-508a7ea30caa',
        type: 'presentation',
        time: '15-16',
        name: 'Aleksei Šohh',
        title: 'Race Condition When Refreshing Tokens',
        image: {
          image: alekseiSohhImage,
        },
      },
      {
        id: '13d10026-64b9-4c11-978f-43ff8af94707',
        type: 'presentation',
        time: '16-17',
        name: 'Janar Männistu',
        title: 'Keep Sanity While Writing Frontend Tests',
        image: {
          image: janarMannistuImage,
        },
      },
      {
        id: '62b787cd-bc66-4936-b758-7421b7166e2c',
        type: 'presentation',
        time: '17:30-18:30',
        name: 'Gert Glükmann',
        title: 'Lets Remix Our Frontend',
        image: {
          image: gertGlukmannImage,
        },
      },
      {
        id: '56a8022f-4101-40ae-91a5-756d9eb89bc0',
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
        id: '7d2a070b-90a2-4b9f-829e-ab2d7a54eb04',
        type: 'presentation',
        time: '15:00-16:00',
        name: 'Vladimir Morozov',
        title: 'Is my computer - an artist?',
        image: {
          image: vladimirMorozovImage,
        },
      },
      {
        id: '3909fc89-a2dc-4db2-8ba4-cb50db0816be',
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        id: '18c9120f-67f6-4aa9-a035-627740b9e312',
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
        id: '9d997383-914a-430b-8df8-77a9423c6cca',
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        id: 'd7e47e86-19fe-453b-bf8d-d3adaa62fe3a',
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
        id: '5840890e-e7ec-4152-b3f9-3cb211ca1af8',
        type: 'pause',
        title: '15:30 doors open',
      },
      {
        id: 'e91d4499-2880-40bc-8e47-33d8ef01f264',
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
        id: 'ec3a3e05-d99b-4a3d-9b0b-7907a45e407d',
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
        id: '71c6b8f6-4ea5-4efa-9fdb-f073d74fe08c',
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        id: 'b987cba2-47ef-4b2c-9d11-b9f8587b7e92',
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
        id: 'ecb41b8d-ac51-459f-854e-050557634b20',
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
        id: '46a75ddd-0de9-4c54-abe5-dbd892fe430d',
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
        id: 'fd7571b6-632c-4eb6-9ef4-91fd4d798369',
        type: 'pause',
        title: '14:30 doors open',
      },
      {
        id: 'be03e8e5-dffd-4fd3-a584-447bcfcf0e33',
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
        id: '1731fe7d-07b4-4652-be55-e87d232004be',
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        id: '65c99014-45ee-4cf8-90c2-b3a39070b06e',
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
        id: '00b15f6c-5572-4b66-9a09-367deb8c7ccc',
        type: 'pause',
        title: 'Snacks and drinks',
      },
      {
        id: '305006f8-0ff7-4db1-9af5-f41a89f088f9',
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
        id: '138514f3-ccc3-4dd7-93be-3f346b1fbef3',
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
    showRegisterButton: false,
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
        title: 'Changing Seats: Moving from Coder to Co-Driver',
        speaker: 'Anton Gramberg',
        description:
          'AI is a fast driver, but crashes if fed ambiguous requirements. At Coop Pank, we started moving to the "co-driver" seat, shifting from writing code to orchestrating intent. This is a field report on our ongoing learnings and the messy reality of agentic coding where, to quote an Estonian classic: "sometimes win, always lose."',
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
