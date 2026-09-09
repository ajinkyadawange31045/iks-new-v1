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
        title: 'Documentation of traditional art forms',
        shortLabel: 'Traditional Art Forms',
        image: '/images/education/research-projects/art-forms.jpg',
        description:
          'Visual and stylistic documentation of ancient storytelling traditions like Chitrakathi from Pinguli, Paithan scrolls, and temple iconography across Western and Southern India.',
      },
      {
        id: 'traditional-knowledge',
        title: 'Documentation of traditional knowledge',
        shortLabel: 'Traditional Knowledge',
        image: '/images/education/research-projects/traditional-knowledge.jpg',
        description:
          'Cataloging traditional boatwright engineering, timber selection, joinery craftsmanship, and celestial navigation methodologies practiced by Malams across the Indian Ocean seaboard.',
      },
      {
        id: 'traditional-practices',
        title: 'Documentation of traditional practices',
        shortLabel: 'Traditional Practices',
        image: '/images/education/research-projects/traditional-practices.jpg',
        description:
          'Recording lived ethnographic practices, shipyard hierarchies, apprenticeship systems, and community governance assemblies such as Malam Ni Baithak.',
      },
      {
        id: 'traditional-beliefs',
        title: 'Documentation of traditional beliefs',
        shortLabel: 'Traditional Beliefs',
        image: '/images/education/research-projects/traditional-beliefs.jpg',
        description:
          'Preserving sacred coastal geography, pre-voyage rituals at Ashapura Mata and Sikotar Maa temples, and mythic lore mapping ancient lore onto the maritime coastline.',
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
      'Research at our Centre thrives on meaningful collaboration—with historians, local communities, engineers, and students working together to unearth untold stories. From shipyards in Kachchh to picture scrolls in Pinguli, our fieldwork bridges oral traditions, archival sources, and living heritage.',
    points: [
      {
        id: 'fieldwork-communities',
        title: 'Fieldwork with local communities',
        shortLabel: 'Community Fieldwork',
        image: '/images/education/research-centre/fieldwork-communities.jpg',
        description:
          'Engaging directly with coastal families, shipwright guilds, and elder navigators to record oral histories and lived cultural heritage in port towns.',
      },
      {
        id: 'rare-archives',
        title: 'Digitization of rare archives',
        shortLabel: 'Archive Digitization',
        image: '/images/education/research-centre/rare-archives.jpg',
        description:
          'Scanning and indexing rare manuscripts, port manifests, monastery registers, and navigational charts to build an open-access digital heritage repository.',
      },
      {
        id: 'interdisciplinary-teams',
        title: 'Interdisciplinary research teams',
        shortLabel: 'Interdisciplinary Teams',
        image: '/images/education/research-centre/interdisciplinary-teams.jpg',
        description:
          'Uniting students and scholars across engineering, history, linguistics, and the arts to approach Indian Knowledge Systems with multidisciplinary rigor.',
      },
      {
        id: 'living-heritage',
        title: 'Living heritage documentation',
        shortLabel: 'Living Heritage',
        image: '/images/education/research-centre/living-heritage.jpg',
        description:
          'Preserving dynamic, living practices that continue to evolve in modern times through high-resolution photography, audio testimonies, and video archives.',
      },
    ],
  },
  {
    id: 'study-centre',
    title: 'Study Centre',
    subtitle: 'Courses & Open Digital Resources',
    badge: 'Courses & Resources',
    iconName: 'BookOpen',
    folderPath: '/images/education/study-centre',
    coverImage: '/images/education/study-centre/cover.jpg',
    description:
      'We believe traditional knowledge belongs in the classroom—and we are bringing it there. Our faculty have developed elective courses like Maritime History of India, Navigation and Shipbuilding, and Ancient Indian Iconography, offered across liberal arts, science, and engineering programs.',
    points: [
      {
        id: 'maritime-history',
        title: 'Maritime History of India',
        shortLabel: 'Maritime History',
        image: '/images/education/study-centre/maritime-history.jpg',
        description:
          'An academic curriculum module tracing ancient trans-oceanic trade networks, coastal kingdoms, and historical interactions between India, Africa, and Southeast Asia.',
      },
      {
        id: 'navigation-shipbuilding',
        title: 'Navigation and Shipbuilding',
        shortLabel: 'Shipbuilding Courses',
        image: '/images/education/study-centre/navigation-shipbuilding.jpg',
        description:
          'Engineering and liberal arts elective introducing students to traditional celestial reckoning, hull hydrodynamics, and indigenous shipbuilding joinery.',
      },
      {
        id: 'ancient-iconography',
        title: 'Ancient Indian Iconography',
        shortLabel: 'Iconography Studies',
        image: '/images/education/study-centre/ancient-iconography.jpg',
        description:
          'Visual analysis of temple motifs, sacred symbols, narrative picture scrolls, and maritime reliefs in coastal architectural heritage.',
      },
      {
        id: 'open-resources',
        title: 'Open digital resources',
        shortLabel: 'Digital Learning',
        image: '/images/education/study-centre/open-resources.jpg',
        description:
          'Providing students, researchers, and global educators with open-access course notes, glossary databases, and visual archives.',
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
        id: 'art-storytelling-workshops',
        title: 'Hands-on art & storytelling workshops',
        shortLabel: 'Art Workshops',
        image: '/images/education/workshops/art-storytelling-workshops.jpg',
        description:
          'Intensive studio sessions where students learn traditional pigment preparation, brush techniques, and narrative recitation from master artisans.',
      },
      {
        id: 'guest-lectures',
        title: 'Guest lectures by artists & scholars',
        shortLabel: 'Scholar Lectures',
        image: '/images/education/workshops/guest-lectures.jpg',
        description:
          'Engaging dialogues with eminent maritime historians, cultural anthropologists, and traditional practitioners sharing real-world insights.',
      },
      {
        id: 'field-visits',
        title: 'Field visits to heritage sites',
        shortLabel: 'Heritage Field Visits',
        image: '/images/education/workshops/field-visits.jpg',
        description:
          'Experiential field trips to coastal shipyards, archaeological ports, and sacred shrines to study living heritage in its natural environment.',
      },
      {
        id: 'indian-aesthetics',
        title: 'Interactive sessions on Indian aesthetics',
        shortLabel: 'Aesthetic Sessions',
        image: '/images/education/workshops/indian-aesthetics.jpg',
        description:
          'Explorations of Rasa theory, symbolism in Indian paintings, and regional artistic philosophies applied to classical and folk art.',
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
        id: 'internship-interviews',
        title: 'Field interviews & oral histories',
        shortLabel: 'Oral History Interviews',
        image: '/images/education/internships/internship-interviews.jpg',
        description:
          'Conducting and transcribing structured field interviews with veteran sailors, craftspeople, and coastal settlement elders.',
      },
      {
        id: 'digital-tagging',
        title: 'Digital archiving & tagging',
        shortLabel: 'Archive Tagging',
        image: '/images/education/internships/digital-tagging.jpg',
        description:
          'Metadata classification, high-resolution scanning, and semantic tagging of field recordings and historical documents.',
      },
      {
        id: 'site-documentation',
        title: 'Heritage site documentation',
        shortLabel: 'Site Documentation',
        image: '/images/education/internships/site-documentation.jpg',
        description:
          'Mapping architectural layouts, recording nautical motifs on domestic buildings, and creating photographic inventories of port structures.',
      },
      {
        id: 'faculty-mentorship',
        title: 'Research with faculty & experts',
        shortLabel: 'Expert Mentorship',
        image: '/images/education/internships/faculty-mentorship.jpg',
        description:
          'Close one-on-one research mentorship with university faculty leading to academic publications, symposium presentations, and digital exhibitions.',
      },
    ],
  },
];
