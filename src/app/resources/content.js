import { InlineCode, Logo } from "@/once-ui/components";

const person = {
  firstName: "Vishal",
  lastName: "Subramani",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Manager | Marketing Technology",
  avatar: "/images/vishal.jpeg",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about management, technology, and share thoughts on the intersection of
      marketing, fintech and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vishal-subramani-92ab7528/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:vishal.subramani@hotmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineering Leader</>,
  subline: (
    <>
      I'm Vishal, a senior engineering leader with a demonstrated history of working in the information technology, <InlineCode>marketing techology</InlineCode>, <InlineCode>e-commerce</InlineCode>, <InlineCode>finance</InlineCode> and <InlineCode>healthcare</InlineCode> industry. I am currently a VP and Manager of Marketing Technology team at <InlineCode>Dimensional Fund Advisors</InlineCode>, where I lead
      <br /> the marketing technology team. I have a Masters in Computer Science for UT Arlington and currently pursuing my MBA from UT Austin with a gradualtion year of 2026.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/vishalrm56/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Vishal is a Senior Engineering Manager with a demonstrated history of working in the information technology, marketing techology, e-commerce, finance and 
        healthcare industry. Strong engineering professional with a MS focused in Computer Science from The University of Texas at Arlington.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Dimensional Fund Advisors",
        timeframe: "2023 - Present",
        role: "VP & Manager | Marketing Technology",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-04.png",
            alt: "Dimensional Public Website",
            width: 35,
            height: 24,
          }
        ]
      },
      {
        company: "Wayfair",
        timeframe: "2021-2023",
        role: "Senior Engineering Manager",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [// optional: leave the array empty if you don't want to display images
        {
          src: "/images/projects/project-01/cover-01.jpeg",
          alt: "Wayfair Professional Financing Launch",
          width: 22,
          height: 14,
        }],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "UT Austin | McCombs School of Business",
        description: <>MBA: 2024-2026</>
      },
      {
        name: "UT Arlington | College of Engineering",
        description: <>Masters in Computer Science: 2010-2012</>,
      },
      {
        name: "Mumbai University | DJ Sanghvi College of Engineering",
        description: <>Bachelors in Computer Science: 2006-2010</>,
      },
      {
        name: "National College | Mumbai University",
        description: <>Junior College Specialization in Computer Science: 2004-2006</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
