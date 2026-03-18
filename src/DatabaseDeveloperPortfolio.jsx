import './DatabaseDeveloperPortfolio.css'

export default function DatabaseDeveloperPortfolio() {
  const skillGroups = [
    {
      title: 'Database',
      items: [
        'SQL Server (T-SQL)',
        'ERD, Normalization',
        'Constraints & Data Integrity',
        'Indexing & Query Tuning',
        'Execution Plan Analysis (SSMS)',
      ],
    },
    {
      title: 'Back-end',
      items: [
        'ASP.NET Core Web API',
        'Entity Framework Core',
        'RESTful CRUD APIs',
        'Delta Sync (LastModified)',
      ],
    },
    {
      title: 'Tools',
      items: ['SSMS', 'Git / GitHub'],
    },
  ]

  const project = {
    name: 'Inventory Order Sync Management System',
    time: '12/2025 – 2/2026',
    tech: 'ASP.NET Core Web API • Entity Framework Core • SQL Server',
    summary:
      'Backend system for inventory and order workflows with a SQL Server schema, REST APIs, and delta-sync endpoints, supported by health checks and database documentation.',
    links: [
      {
        label: 'Backend Repository',
        href: 'https://github.com/boakang/Inventory_OrderSyncManagementSystem_backend',
      },
      {
        label: 'Frontend Repository',
        href: 'https://github.com/boakang/Inventory_OrderSyncManagementSystem_frontend',
      },
      {
        label: 'Database Repository',
        href: 'https://github.com/boakang/Inventory_OrderSyncManagementSystem_sqlserver',
      },
    ],
    contributions: [
      'Designed ERD + Data Dictionary; defined PK/FK and naming conventions',
      'Implemented SQL Server schema with constraints and indexes for common queries',
      'Built REST CRUD APIs (ASP.NET Core + EF Core) with validation rules',
      'Implemented delta sync endpoints based on LastModified for incremental updates',
      'Added health-check APIs (DB connectivity + sample query execution)',
      'Profiled and tuned slow queries using execution plans (indexing/rewrites)',
    ],
  }

  function onContactSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const email = new FormData(form).get('email')?.toString().trim()
    const notes = new FormData(form).get('notes')?.toString().trim()

    const subject = 'Portfolio Contact'
    const bodyLines = [
      email ? `From: ${email}` : undefined,
      notes ? `Message:\n${notes}` : undefined,
    ].filter(Boolean)

    const body = bodyLines.join('\n\n')
    const mailto = `mailto:huynbakhang@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <div className="page">
      <header className="nav">
        <div className="navInner">
          <a className="brand" href="#home">
            Huỳnh Bá Khang
          </a>
          <nav className="navLinks" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#about">About me</a>
            <a href="#contact">Contact me</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="heroInner">
          <p className="pill">Intern Database Developer Portfolio</p>
          <h1 className="heroTitle">Huỳnh Bá Khang</h1>
          <p className="heroSubtitle">
            Database-focused Backend Developer (.NET + SQL Server)
          </p>
          <p className="heroLead">
            Information Systems student focused on SQL Server data modeling and performance-driven APIs.
          </p>
          <div className="heroActions">
            <a className="btn btnPrimary" href="#projects">
              View Projects
            </a>
            <a
              className="btn btnSecondary"
              href="https://github.com/boakang"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="heroWave" aria-hidden="true" />
      </section>

      <main>
        <section id="skills" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">My Skills</h2>
            <p className="sectionDesc">
              Database-first backend skills for internship roles.
            </p>
          </div>

          <div className="skillGroups">
            {skillGroups.map((group) => (
              <div key={group.title} className="card">
                <h3 className="cardTitle">{group.title}</h3>
                <ul className="list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">My Projects</h2>
            <p className="sectionDesc">Featured project with real database work.</p>
          </div>

          <div className="projectGrid">
            <div className="card cardPadded">
              <div className="projectTop">
                <div>
                  <h3 className="projectTitle">{project.name}</h3>
                  <p className="projectTech">{project.tech}</p>
                </div>
                <div className="tag">{project.time}</div>
              </div>

              <p className="cardText">{project.summary}</p>

              <h4 className="subTitle">Key Contributions</h4>
              <ul className="bulletList">
                {project.contributions.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>

            <div className="card cardSoft cardPadded">
              <h3 className="cardTitle">Project Links</h3>
              <div className="linkList">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    className="linkCard"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="miniCard">
                <h4 className="miniTitle">Database focus</h4>
                <p className="cardText">
                  ERD, normalization, constraints, indexing, query tuning, and health-check flows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">About me</h2>
            <p className="sectionDesc">Short and relevant background.</p>
          </div>

          <div className="aboutGrid">
            <div className="card cardPadded">
              <h3 className="cardTitle">Summary</h3>
              <p className="cardText">
                I enjoy designing relational schemas, enforcing data integrity, and building backend APIs that reflect real business workflows.
              </p>
            </div>
            <div className="card cardPadded">
              <h3 className="cardTitle">Quick Info</h3>
              <div className="infoList">
                <p>
                  <span className="label">Email:</span> huynbakhang@gmail.com
                </p>
                <p>
                  <span className="label">GitHub:</span> github.com/boakang
                </p>
                <p>
                  <span className="label">Location:</span> Thu Duc, Ho Chi Minh City
                </p>
                <p>
                  <span className="label">Major:</span> Information Systems
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Contact me</h2>
            <p className="sectionDesc">
              Send me a message (opens your email app).
            </p>
          </div>

          <div className="card cardPadded">
            <form className="contactForm" onSubmit={onContactSubmit}>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" placeholder="you@example.com" />
              </label>
              <label className="field">
                <span>Notes</span>
                <textarea
                  name="notes"
                  placeholder="Write a short message..."
                  rows={5}
                />
              </label>
              <button className="btn btnPrimary" type="submit">
                Contact Me Now
              </button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div className="footerInner">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About me</a>
            <a href="#contact">Contact me</a>
          </div>
        </footer>
      </main>
    </div>
  )
}
