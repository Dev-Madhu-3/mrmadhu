import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Palette,
  Zap,
  Menu,
  X
} from 'lucide-react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ]

  const skills = [
    { name: 'React', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', level: 90, icon: <Zap className="w-5 h-5" /> },
    { name: 'JavaScript', level: 92, icon: <Code className="w-5 h-5" /> },
    { name: 'TypeScript', level: 88, icon: <Code className="w-5 h-5" /> },
    { name: 'MongoDB', level: 85, icon: <Database className="w-5 h-5" /> },
    { name: 'PostgreSQL', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'Tailwind CSS', level: 90, icon: <Palette className="w-5 h-5" /> },
    { name: 'Express.js', level: 88, icon: <Zap className="w-5 h-5" /> },
  ]

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'JavaScript', 'PostgreSQL', 'Socket.io', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduled posting, and performance tracking.',
      technologies: ['React', 'Node.js', 'Chart.js', 'MySQL', 'Redis'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Real-time Chat Application',
      description: 'A scalable chat application with end-to-end encryption, file sharing, and video calling capabilities.',
      technologies: ['Socket.io', 'WebRTC', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ]

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications using React and Node.js. Mentored junior developers and implemented best practices.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects, focusing on performance optimization and user experience.'
    },
    {
      title: 'Frontend Developer',
      company: 'WebCraft Studios',
      period: '2018 - 2020',
      description: 'Specialized in React development, creating responsive and interactive user interfaces for various web applications.'
    }
  ]

  const Badge = ({ children, variant = 'default' }) => {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
    const variantClasses = {
      default: 'bg-blue-100 text-blue-800',
      secondary: 'bg-gray-100 text-gray-800',
      outline: 'border border-gray-200 text-gray-800'
    }
    return <span className={`${baseClasses} ${variantClasses[variant]}`}>{children}</span>
  }

  const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'
    const variantClasses = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900',
      ghost: 'hover:bg-gray-100 hover:text-gray-900'
    }
    const sizeClasses = {
      default: 'h-10 py-2 px-4',
      lg: 'h-11 px-8',
      sm: 'h-9 px-3'
    }
    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }

  const Card = ({ children, className = '' }) => {
    return (
      <div className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}>
        {children}
      </div>
    )
  }

  const CardHeader = ({ children }) => {
    return <div className="flex flex-col space-y-1.5 p-6">{children}</div>
  }

  const CardTitle = ({ children, className = '' }) => {
    return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
  }

  const CardDescription = ({ children }) => {
    return <p className="text-sm text-gray-500">{children}</p>
  }

  const CardContent = ({ children }) => {
    return <div className="p-6 pt-0">{children}</div>
  }

  const Separator = () => {
    return <div className="shrink-0 bg-gray-200 border-0 h-[1px] my-8" />
  }

  const Avatar = ({ children, className = '' }) => {
    return (
      <div className={`relative flex shrink-0 overflow-hidden rounded-full ${className}`}>
        {children}
      </div>
    )
  }

  const AvatarImage = ({ src, alt }) => {
    return <img src={src} alt={alt} className="aspect-square h-full w-full" />
  }

  const AvatarFallback = ({ children }) => {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-100">
        {children}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Madhu Uppala
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors text-left py-2"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Full Stack Developer</Badge>
              <Badge variant="outline">React Specialist</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Madhu Uppala
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              I craft powerful web applications with React and Node.js, turning ideas into scalable digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => window.location = 'mailto:mr.madhu.uppala@gmail.com'}
                size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
              <Button
                onClick={() => window.location = 'https://github.com/Dev-Madhu-3'}
                size="lg" variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                View GitHub
              </Button>
              <Button
                onClick={() => window.location = 'https://www.linkedin.com/in/madhu-uppala'}
                size="lg" variant="outline" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Avatar className="w-64 h-64 md:w-80 md:h-80">
              <AvatarImage src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1756040679/IMG_20240328_152915_832_guz9xj.jpg" alt="Madhu Uppala" />
              <AvatarFallback className="text-4xl">AJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      <Separator />

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            Passionate developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                My Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with over 6 years of experience building web applications.
                My journey started with frontend development, and I quickly fell in love with React's component-based architecture.
                As I grew as a developer, I expanded my expertise to include backend technologies, particularly Node.js,
                allowing me to create complete, end-to-end solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                What I Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                I specialize in creating scalable, performant web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
                I'm passionate about clean code, best practices, and creating exceptional user experiences.
                Whether it's a startup MVP or an enterprise application, I bring the same level of dedication and expertise to every project.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">
            Technologies I specialize in
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            A showcase of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100" />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600">
            My professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-blue-600">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600">
            I'm always interested in new opportunities and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">mr.madhu.uppala@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 (998) 985-7197</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Andhra Pradesh, India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>
                Feel free to reach out for collaborations or just a friendly hello
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full gap-5">
              <Button
                onClick={() => window.location = 'mailto:mr.madhu.uppala@gmail.com'}
                className="w-full gap-2">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
              <Button variant="outline"
                onClick={() => window.location = 'https://github.com/Dev-Madhu-3'}
                className="w-full gap-2 my-2">
                <Github className="w-4 h-4" />
                View GitHub Profile
              </Button>
              <Button
                onClick={() => window.location = 'https://www.linkedin.com/in/madhu-uppala'}
                variant="outline" className="w-full gap-2">
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Madhu Uppala. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App