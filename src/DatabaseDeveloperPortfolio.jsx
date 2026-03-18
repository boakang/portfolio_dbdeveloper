import './DatabaseDeveloperPortfolio.css'

export default function DatabaseDeveloperPortfolio() {
  const skills = [
    'SQL Server',
    'Database Design (ERD, Normalization)',
    'Stored Procedures, Functions, Views',
    'ASP.NET Core Web API',
    'Entity Framework Core',
    'C# / OOP',
    'Query Optimization',
    'Execution Plan Analysis',
    'SSMS',
    'Git / GitHub',
  ]

  const highlights = [
    {
      title: 'Relational Database Design',
      desc: 'Designed database schema for Products, Customers, Orders, Inventory, and Suppliers with clear relationships and normalization.',
    },
    {
      title: 'Backend API Development',
      desc: 'Built ASP.NET Core Web API with Entity Framework Core and SQL Server for CRUD operations and data synchronization.',
    },
    {
      title: 'Performance & Integrity',
      desc: 'Optimized SQL queries using execution plans and enforced data integrity with constraints and validation rules.',
    },
  ]

  const projectFeatures = [
    'Designed ERD and implemented relational database schema',
    'Built CRUD APIs for products, customers, orders, inventory, categories, and suppliers',
    'Developed delta synchronization based on LastModified',
    'Optimized SQL queries using execution plans',
    'Created health-check APIs to verify database connectivity and query execution',
    'Prepared database documents including ERD and Data Dictionary',
  ]

  return (
    <div className="page">
      <section className="section sectionHero">
        <div className="heroGrid">
          <div>
            <p className="pill">
              Intern Database Developer Portfolio
            </p>
            <h1 className="title">
              Huỳnh Bá Khang
            </h1>
            <p className="subtitle">
              Database-focused Backend Developer (.NET + SQL Server)
            </p>
            <p className="lead">
              I am an Information Systems student with a strong interest in database design and backend development. I build database-driven systems using SQL Server, Entity Framework Core, and ASP.NET Core Web API, with focus on data integrity, query optimization, and real-world business workflows.
            </p>

            <div className="actions">
              <a
                href="mailto:huynbakhang@gmail.com"
                className="btn btnPrimary"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/boakang"
                target="_blank"
                rel="noreferrer"
                className="btn btnSecondary"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="sideCards">
            <div className="card">
              <h2 className="cardKicker">
                Quick Info
              </h2>
              <div className="infoList">
                <p>
                  <span className="label">Email:</span>{' '}
                  huynbakhang@gmail.com
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
                <p>
                  <span className="label">GPA:</span> 3.2 / 4.0
                </p>
                <p>
                  <span className="label">English:</span> IELTS 5.5
                </p>
              </div>
            </div>

            <div className="card cardDark">
              <h2 className="cardKicker cardKickerDark">
                Career Focus
              </h2>
              <p className="cardTextDark">
                Seeking an internship to apply SQL Server and .NET skills in designing, optimizing, and maintaining database-backed systems for real enterprise use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionTight">
        <div className="card cardPadded">
          <div className="sectionHeader">
            <div>
              <h2 className="sectionTitle">Core Skills</h2>
              <p className="sectionDesc">
                Tools and knowledge areas aligned with database and backend internship roles.
              </p>
            </div>
          </div>

          <div className="skillsGrid">
            {skills.map((skill) => (
              <div
                key={skill}
                className="skillPill"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="highlightsGrid">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="card"
            >
              <h3 className="cardTitle">{item.title}</h3>
              <p className="cardText">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card cardPadded">
          <div className="projectHeader">
            <div>
              <p className="cardKicker">
                Featured Project
              </p>
              <h2 className="sectionTitle">
                Inventory Order Sync Management System
              </h2>
              <p className="sectionDesc">
                ASP.NET Core Web API • Entity Framework Core • SQL Server
              </p>
            </div>
            <div className="tag">
              12/2025 – 2/2026
            </div>
          </div>

          <div className="projectGrid">
            <div>
              <p className="cardText">
                A backend project for managing products, customers, orders, inventory, and suppliers with database-driven workflows, synchronization endpoints, and database documentation for maintainability.
              </p>

              <div className="projectListWrap">
                <h3 className="cardTitle">Key Contributions</h3>
                <ul className="projectList">
                  {projectFeatures.map((feature) => (
                    <li key={feature} className="projectListItem">
                      <span className="dot" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card cardSoft">
              <h3 className="cardTitle">Project Links</h3>
              <div className="linkList">
                <a
                  href="https://github.com/boakang/Inventory_OrderSyncManagementSystem_backend"
                  target="_blank"
                  rel="noreferrer"
                  className="linkCard"
                >
                  Backend Repository
                </a>
                <a
                  href="https://github.com/boakang/Inventory_OrderSyncManagementSystem_frontend"
                  target="_blank"
                  rel="noreferrer"
                  className="linkCard"
                >
                  Frontend Repository
                </a>
                <a
                  href="https://github.com/boakang/Inventory_OrderSyncManagementSystem_sqlserver"
                  target="_blank"
                  rel="noreferrer"
                  className="linkCard"
                >
                  Database Repository
                </a>
              </div>

              <div className="miniCard">
                <h4 className="miniTitle">Database Focus</h4>
                <p className="cardText">
                  ERD, normalization, constraints, stored procedures, query tuning, and database health-check flows tailored for business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card cardPadded">
          <h2 className="sectionTitle">Why Me</h2>
          <div className="whyGrid">
            <div className="miniCard miniCardSoft">
              <h3 className="miniTitle">Database-Oriented Mindset</h3>
              <p className="cardText">
                Comfortable with relational data, schema design, normalization, and keeping business data accurate and maintainable.
              </p>
            </div>
            <div className="miniCard miniCardSoft">
              <h3 className="miniTitle">Real Project Experience</h3>
              <p className="cardText">
                Built a project that combines SQL Server, backend APIs, synchronization logic, and database documentation instead of only classroom exercises.
              </p>
            </div>
            <div className="miniCard miniCardSoft">
              <h3 className="miniTitle">Learning Attitude</h3>
              <p className="cardText">
                Proactive, detail-oriented, and eager to learn from real enterprise systems and experienced developers.
              </p>
            </div>
            <div className="miniCard miniCardSoft">
              <h3 className="miniTitle">Team Collaboration</h3>
              <p className="cardText">
                Able to collaborate with backend developers, accept feedback, and support system integration work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card cardDark cardPadded">
          <h2 className="sectionTitle sectionTitleDark">Contact</h2>
          <p className="cardTextDark">
            I am looking for an internship opportunity in database and backend development, where I can contribute, learn, and gain hands-on enterprise experience.
          </p>
          <div className="actions">
            <a
              href="mailto:huynbakhang@gmail.com"
              className="btn btnLight"
            >
              huynbakhang@gmail.com
            </a>
            <a
              href="https://github.com/boakang"
              target="_blank"
              rel="noreferrer"
              className="btn btnOutlineLight"
            >
              github.com/boakang
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
