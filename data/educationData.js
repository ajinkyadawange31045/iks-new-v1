/**
 * Education Page Data — 5 Pillars with Dedicated Category Folders & Interactive Points
 * 
 * Image structure:
 * /images/education/research-projects/
 * /images/education/research-centre/
 * /images/education/study-centre/
 * /images/education/workshops/
 * /images/education/internships/
 */

export const educationPillars = [
  {
    id: 'research-projects',
    title: 'Research Projects',
    subtitle: 'Core Academic & Field Initiatives',
    badge: 'Focus Area',
    iconName: 'Hammer',
    folderPath: '/images/education/research-projects',
    coverImage: '/images/education/research-projects/cover.jpg',
    description:
      'Our research projects are designed to explore the rich cultural heritage of India. We are working to document traditional art forms, indigenous knowledge systems, and the living role they play in coastal and artisanal communities. This ongoing initiative brings together scholars, seafarers, and artisans to ensure intergenerational knowledge transmission.',
    points: [
      {
        id: 'art-forms',
        title: 'Documentary on chitrakathi paintings.',
        shortLabel: 'Chitrakathi Documentary',
        videoUrl: 'https://drive.google.com/file/d/1IkJQDQH4nk1OMPyJRdOIYciCWGGm4F6f/preview',
      },
      {
        id: 'developed-maharashtra-2047',
        title: 'Developed Maharashtra 2047',
        shortLabel: 'Developed Maharashtra 2047',
        image: '/images/education/research-projects/developed-maharashtra-2047.webp',
        pdfUrl: '/documents/developed-maharashtra-2047.pdf',
      },
      {
        id: 'traditional-practices',
        title: 'Documentation of traditional practices',
        shortLabel: 'Traditional Practices',
        unclickable: true,
      },
      {
        id: 'traditional-beliefs',
        title: 'Documentation of traditional beliefs',
        shortLabel: 'Traditional Beliefs',
        unclickable: true,
      },
    ],
  },
  {
    id: 'research-centre',
    title: 'Research Centre',
    subtitle: 'Collaborations & Fieldwork',
    badge: 'Collaborations',
    iconName: 'Users',
    folderPath: '/images/education/research-centre',
    coverImage: '/images/education/research-centre/cover.jpg',
    description:
      'This section highlights our active national and international engagements, academic collaborations, and guest lectures across global forums. By bridging field-based research with global scholarship, our team continuously disseminates findings on indigenous maritime history, visual culture, and traditional knowledge systems through panel discussions, international conferences, and consultative workshops.',
    points: [
      {
        id: 'icon-bharat',
        title: 'Dr. Chhaya Goswami at icon bharat.',
        shortLabel: 'Dr. Chhaya Goswami',
        videoUrl: 'https://www.youtube.com/watch?v=vR2yJ43C3r4',
      },
      {
        id: 'jnu-international-conference',
        title: 'JNU International Conference',
        shortLabel: 'JNU Conference',
        image: '/images/education/research-centre/jnu-conference-1.webp',
        images: [
          '/images/education/research-centre/jnu-conference-1.webp',
          '/images/education/research-centre/jnu-conference-2.webp',
        ],
      },
      {
        id: 'project-mausam',
        title: 'Project Mausam',
        shortLabel: 'Project Mausam',
        image: '/images/education/research-centre/minister-commendation.webp',
        images: [
          '/images/education/research-centre/minister-commendation.webp',
          '/images/education/research-centre/project-mausam.webp',
        ],
      },
      {
        id: 'minister-commendation',
        title: "Minister of Ports, Shipping and Waterways commending Dr. Goswami's work",
        shortLabel: "Minister's Commendation",
        videoUrl: 'https://www.facebook.com/watch/?v=993968316086129',
      },
    ],
  },
  {
    id: 'global-outreach',
    title: 'Global Outreach & Vision',
    subtitle: 'International Dialogues & Maritime Heritage',
    badge: 'Global Outreach',
    iconName: 'Globe',
    folderPath: '/images/education/study-centre',
    coverImage: '/images/education/study-centre/cover.jpg',
    description:
      'This section outlines our commitment to positioning India’s maritime legacy on the global stage. By participating in international conferences, hosting cross-border dialogues, and building diplomatic-academic exchanges, our Centre projects a research-driven narrative of Indian Ocean interconnectedness, traditional navigation, and transoceanic trade to the international scholarly community.',
    points: [
      {
        id: 'transoceanic-ports',
        title: 'Transoceanic ports converted agrarian surplus into capital.',
        shortLabel: 'Transoceanic Ports',
        image: '/images/education/study-centre/transoceanic-ports.webp',
      },
      {
        id: 'international-spice-route-conference',
        title: 'International Spice Route Conference',
        shortLabel: 'Spice Route Conference',
        image: '/images/education/study-centre/spice-route-conference-1.webp',
        images: [
          '/images/education/study-centre/spice-route-conference-1.webp',
          '/images/education/study-centre/spice-route-conference-2.webp',
          '/images/education/study-centre/spice-route-conference-3.webp',
        ],
      },
      {
        id: 'india-maritime-week-2025',
        title: 'India Maritime Week 2025',
        shortLabel: 'Maritime Week 2025',
        image: '/images/education/study-centre/india-maritime-week-1.webp',
        images: [
          '/images/education/study-centre/india-maritime-week-1.webp',
          '/images/education/study-centre/india-maritime-week-2.webp',
          '/images/education/study-centre/india-maritime-week-3.webp',
        ],
      },
      {
        id: 'zurich',
        title: 'Zurich',
        shortLabel: 'Zurich',
        description:
          'Immersive workshop on Indian Paintings and Chitrakathi preservation challenges in collaboration with the GBF Foundation in Zurich, led by Dr. Bhagyashree Bavare (March 2025).',
      },
    ],
  },
  {
    id: 'workshops',
    title: 'Workshops',
    subtitle: 'Hands-on & Immersive Learning',
    badge: 'Immersive Learning',
    iconName: 'GraduationCap',
    folderPath: '/images/education/workshops',
    coverImage: '/images/education/workshops/cover.jpg',
    description:
      'Learning here goes far beyond textbooks. Our immersive workshops have brought students face-to-face with ancient art forms and folk storytelling practices. From a 14-day hands-on workshop on Painting Traditions of India to sessions on temple architecture, each event opens up aesthetic worlds.',
    points: [
      {
        id: 'museum-visits',
        title: 'Museum visits',
        shortLabel: 'Museum Visits',
        image: '/images/education/workshops/museum-visits-1.webp',
        images: [
          '/images/education/workshops/museum-visits-1.webp',
          '/images/education/workshops/museum-visits-2.webp',
        ],
      },
      {
        id: 'workshop-canvas-painting',
        title: 'Workshop on Canvas Painting',
        shortLabel: 'Canvas Painting',
        image: '/images/education/workshops/canvas-painting-1.webp',
        images: [
          '/images/education/workshops/canvas-painting-1.webp',
          '/images/education/workshops/canvas-painting-2.webp',
          '/images/education/workshops/canvas-painting-3.webp',
        ],
      },
      {
        id: 'games-workshop',
        title: 'GAMES workshop',
        shortLabel: 'Games Workshop',
        image: '/images/education/workshops/games-workshop-1.webp',
        images: [
          '/images/education/workshops/games-workshop-1.webp',
          '/images/education/workshops/games-workshop-2.webp',
        ],
      },
      {
        id: 'workshop-on-sculptures',
        title: 'Workshop on sculptures',
        shortLabel: 'Sculptures Workshop',
        image: '/images/education/workshops/workshop-sculptures-1.webp',
        images: [
          '/images/education/workshops/workshop-sculptures-1.webp',
          '/images/education/workshops/workshop-sculptures-2.webp',
          '/images/education/workshops/workshop-sculptures-3.webp',
          '/images/education/workshops/workshop-sculptures-4.webp',
        ],
      },
    ],
  },
  {
    id: 'internships',
    title: 'Internships',
    subtitle: 'Co-creating Heritage Research',
    badge: 'Student Opportunities',
    iconName: 'Briefcase',
    folderPath: '/images/education/internships',
    coverImage: '/images/education/internships/cover.jpg',
    description:
      'Interns at the Centre do not just observe—they co-create. Whether interviewing a seasoned Malam, photographing port town architecture, or tagging paintings for our digital archive, student interns play a vital role. Over 85 students and research associates have already contributed.',
    points: [
      {
        id: 'history-hackathon',
        title: 'The History Hackathon: Coding the Past',
        shortLabel: 'History Hackathon',
        image: '/images/education/internships/history-hackathon.webp',
        linkUrl: 'https://forms.gle/4iXSy84bzqrkz3FB8',
      },
      {
        id: 'web-development-internship',
        title: 'Web development internship',
        shortLabel: 'Web Development',
        modalSubtitle: 'A digital repository for digitized maritime manuscripts and archival metadata.',
        image: '/images/education/internships/web-development-internship.webp',
        description:
          'Hands-on student internships in web development and digital humanities—building interactive repositories, digital archives, and visualization tools for Indian Knowledge Systems.',
      },
    ],
  },
];
