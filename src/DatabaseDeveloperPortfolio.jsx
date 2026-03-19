import './DatabaseDeveloperPortfolio.css'
import profilePhoto from './assets/ava.png'

export default function DatabaseDeveloperPortfolio() {
  const skillIconByItem = {
    'SQL Server (T-SQL)': 'microsoftsqlserver-plain',
    'ERD, Normalization': 'microsoftsqlserver-plain',
    'Constraints & Data Integrity': 'microsoftsqlserver-plain',
    'Indexing & Query Tuning': 'microsoftsqlserver-plain',
    'Execution Plan Analysis (SQL Server Management Studio (SSMS))': 'microsoftsqlserver-plain',
    'ASP.NET Core Web API': 'dotnetcore-plain',
    'Entity Framework Core': 'dotnetcore-plain',
    'RESTful CRUD APIs': 'swagger-plain',
    'Delta Sync (LastModified)': 'dotnetcore-plain',
    'SQL Server Management Studio (SSMS)': 'microsoftsqlserver-plain',
    'Git / GitHub': 'github-original',
    'Visual Studio Code': 'vscode-plain',
  }

  const skillGroups = [
    {
      title: 'Database',
      items: [
        'SQL Server (T-SQL)',
        'ERD, Normalization',
        'Constraints & Data Integrity',
        'Indexing & Query Tuning',
        'Execution Plan Analysis (SQL Server Management Studio (SSMS))',
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
      items: ['SQL Server Management Studio (SSMS)', 'Git / GitHub', 'Visual Studio Code'],
    },
  ]

  const project = {
    name: 'Inventory Order Sync Management System',
    time: '12/2025 – 2/2026',
    tech: 'ASP.NET Core Web API • Entity Framework Core • SQL Server',
    summary:
      'A distribution & retail (DMS/ERP-like) backend project: catalog, inventory, and order workflows, plus Web/Mobile data sync and REST APIs for core business operations. Focused on clean relational design, query performance, and maintainable database documentation.',
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
    hqsoftMatch: [
      'Design tables + ERD and define PK/FK relationships',
      'Write SQL (SPs/Functions/Views) for business logic and performance',
      'Support .NET team with EF Core mapping and Web API data flows',
      'Check data integrity, fix issues, and tune slow queries (execution plans)',
      'Keep database docs updated (schema notes + Data Dictionary)',
    ],
    contributions: [
      'ERD + DDL scripts: tables, constraints (PK/FK/UNIQUE/CHECK), and indexes',
      'Stored procedures/views for key workflows (orders, inventory, lookups)',
      'Query tuning pass using execution plans + targeted indexing',
      'ASP.NET Core + EF Core CRUD APIs (validation, paging, search)',
      'Delta-sync endpoints (LastModified) + Data Dictionary documentation',
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
                <ul className="skillList">
                  {group.items.map((item) => (
                    <li key={item} className="skillRow">
                      <span className="skillLogo" aria-hidden="true">
                        {skillIconByItem[item] ? (
                          <i className={`devicon-${skillIconByItem[item]}`} />
                        ) : (
                          <span className="skillLogoFallback">•</span>
                        )}
                      </span>
                      <span className="skillLabel">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">My Projects</h2>
            <p className="sectionDesc">
              details
            </p>
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

              <h4 className="subTitle">Role Tasks</h4>
              <ul className="bulletList">
                {project.hqsoftMatch.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>

              <h4 className="subTitle">Selected Deliverables (Evidence)</h4>
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
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">About me</h2>
            <p className="sectionDesc">Short and relevant background.</p>
          </div>

          <div className="aboutSplit">
            <div className="aboutPhotoWrap">
              <img
                className="aboutPhoto"
                src={profilePhoto}
                alt="Huỳnh Bá Khang"
              />
            </div>

            <div className="aboutText">
              <h3 className="aboutTitle">Huỳnh Bá Khang — Database Developer Intern</h3>
              <p className="cardText">
                I focus on SQL Server database design and .NET backend development. I enjoy turning business workflows into clean relational schemas, consistent CRUD APIs, and maintainable documentation.
              </p>
              <p className="cardText">
                In projects, I work on constraints, indexing, and query tuning using execution plans to keep data accurate and performance stable.
              </p>

              <div className="aboutInfo">
                <div className="aboutInfoItem">
                  <span className="label">Email:</span> huynbakhang@gmail.com
                </div>
                <div className="aboutInfoItem">
                  <span className="label">Location:</span> Thu Duc, Ho Chi Minh City
                </div>
                <div className="aboutInfoItem">
                  <span className="label">Major:</span> Information Systems
                </div>
                <div className="aboutInfoItem">
                  <span className="label">Education:</span> University of Information Technology (UIT - Vietnam National University), 2022 - current
                </div>
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
