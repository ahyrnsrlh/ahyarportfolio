import React, { useState } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  FileText,
  Mail,
  Menu,
  X,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Progress } from "./components/ui/progress";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Portfolio", href: "#portfolio" },
  { icon: FileText, label: "Resume", href: "#resume" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "UI/UX Design", level: 85 },
];

const projects = [
  {
    title: "StriveX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/agrofarm.svg",
    link: "#",
  },
  {
    title: "SehatKita",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/Sehatkitaa.svg",
    link: "#",
  },
  {
    title: "Greenland",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/Greenland.svg",
    link: "#",
  },
  {
    title: "StriveX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/StriveXXXX.svg",
    link: "#",
  },
  {
    title: "Dompet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/dompet.svg",
    link: "#",
  },
  {
    title: "Lampoeng",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/lampoeng.svg",
    link: "#",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" style={{ color: "#257180" }}>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex justify-center h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-colors hover:text-foreground/80 ${
                    activeSection === item.label
                      ? "text-foreground"
                      : "text-foreground/60"
                  }`}
                  onClick={() => setActiveSection(item.label)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm"
                onClick={() => {
                  setActiveSection(item.label);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main
        className="container mx-auto px-4 py-8"
        style={{ color: "#257180" }}
      >
        <section id="home" className="py-16 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img
              src="profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-2" style={{ color: "#257180" }}>
            Akhyar Nasrullah Adilian
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Frontend Dev & UI/UX Designer
          </p>
          <p className="max-w-2xl mx-auto mb-8">
            I am Computer Science student at the University of Lampung with an
            interest in UI/UX Design and Web Development. I focus on creating
            innovative and user-friendly digital solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/CV.pdf" download="CV.pdf">
              <Button>Download CV</Button>
            </a>
            <Button variant="outline">Contact Me</Button>
          </div>
        </section>

        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Hello! I'm a Frontend Dev and UI/UX designer based in Lampung. I
                have a passion for creating intuitive and dynamic user
                experiences, and I love bringing ideas to life in the browser.
              </p>
              <p className="mb-4">
                With a background in computer science and experience in the tech
                industry, I've had the opportunity to work on a wide range of
                projects, from small business websites to large-scale web
                applications.
              </p>
              <p>
                I am dedicated to delivering high-quality digital solutions that
                make an impact. I aim to combine design and development skills
                to create practical, user-friendly experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2">
                <li>🎓 Computer Science Student at University of Lampung</li>
                <li>💼 2 years of professional experience</li>
                <li>🌟 Specialized in Figma and Tailwind CSS</li>
                <li>🌱 Constantly learning and exploring new technologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="w-full" />
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <p>{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href={project.link}>View Project</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="resume" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Resume</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                Web Development And UI/UX Design at Infinite Learning
              </CardTitle>
              <CardDescription>Sep 2024 - Saat ini</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Learn the essentials of HTML, CSS, and JavaScript to build
                  responsive interfaces, along with backend fundamentals using
                  Node.js and Express for data handling and business logic.
                </li>
                <li>
                  Explore the foundations of usability and user-centered design
                  while gaining hands-on experience with design tools like
                  Figma.
                </li>
                <li>
                  Develop skills in creating accessible designs that enhance
                  user interactions, ensuring inclusivity and ease of use for
                  all users.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Information Media Staff at Himakom Unila</CardTitle>
              <CardDescription>Feb 2023 - Des 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Capturing high-quality photos of events, activities, and
                  members to document key moments for our platforms, reflecting
                  our organization's spirit.
                </li>
                <li>
                  Designing visually appealing promotional materials, social
                  media content, and event banners that align with our branding
                  goals.
                </li>
                <li>
                  Planning, shooting, and producing videos for event recaps,
                  promotions, and interviews, using lighting, framing, and audio
                  techniques to create engaging content.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Communication and Information Staff at BEM Unila
              </CardTitle>
              <CardDescription>Feb 2023 - Jan 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Lead and coordinate a team in developing creative concepts and
                  promotional materials for various events/programs organized by
                  BEM Unila.
                </li>
                <li>
                  Designing engaging visuals for promotional materials, social
                  media, event banners, and digital content that align with our
                  branding goals.
                </li>
                <li>
                  Creating videos for organizational needs, including event
                  recaps, promos, and interviews, using lighting, framing, and
                  audio techniques for high-quality content.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                I'm always open to new opportunities and collaborations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input id="name" className="w-full p-2 border rounded" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border rounded"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 ahyrnsrlh. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="www.linkedin.com/in/ahyrnsrlh" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="www.linkedin.com/in/ahyrnsrlh" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="www.linkedin.com/in/ahyrnsrlh" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
