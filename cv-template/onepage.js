window.renderOnePage = (DATA, ROOT, STYLE) => {
    STYLE.innerHTML = `
        body {
            background-color: #f1f5f9;
            color: #000000;
            font-family: "Times New Roman", Times, "TeX Gyre Termes", STIXGeneral, serif;
            margin: 0;
            padding: 1.5rem 0;
            line-height: 1.24;
            -webkit-font-smoothing: antialiased;
        }

        .cv-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .cv-sheet-onepage {
            background: #ffffff;
            width: 210mm;
            min-height: 297mm;
            max-height: 297mm;
            height: 297mm;
            padding: 9mm 13mm 8mm 13mm;
            box-sizing: border-box;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            overflow: hidden;
            font-family: "Times New Roman", Times, "TeX Gyre Termes", STIXGeneral, serif;
            color: #000000;
        }

        /* LaTeX Header (Sagar Farera Style: 2-column justified, compact) */
        .latex-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 4px;
        }

        .latex-header-left {
            display: flex;
            flex-direction: column;
        }

        .latex-name {
            font-size: 1.55rem;
            font-weight: 700;
            color: #000000;
            line-height: 1.05;
            margin: 0 0 2px 0;
            letter-spacing: -0.2px;
        }

        .latex-contact-left, .latex-contact-right {
            font-size: 0.79rem;
            line-height: 1.28;
            color: #000000;
        }

        .latex-contact-right {
            text-align: right;
        }

        .latex-contact-left a, .latex-contact-right a {
            color: #000000;
            text-decoration: none;
        }

        .latex-contact-left a:hover, .latex-contact-right a:hover {
            text-decoration: underline;
        }

        /* LaTeX Section Title: Bold with 1px black underline */
        .latex-sec-title {
            font-size: 0.94rem;
            font-weight: 700;
            color: #000000;
            border-bottom: 1px solid #000000;
            margin: 4.5px 0 3px 0;
            padding-bottom: 1px;
            letter-spacing: 0.1px;
        }

        /* Education Entry */
        .latex-edu-row1 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.81rem;
            font-weight: 700;
            color: #000000;
        }

        .latex-edu-row2 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.78rem;
            color: #000000;
        }

        .latex-edu-degree, .latex-edu-date {
            font-style: italic;
        }

        /* Skills Summary */
        .latex-skills-list {
            margin: 0;
            padding-left: 15px;
            font-size: 0.77rem;
            line-height: 1.25;
            list-style-type: disc;
        }

        .latex-skills-list li {
            margin-bottom: 1.2px;
            text-align: justify;
        }

        .latex-skills-list strong {
            font-weight: 700;
            color: #000000;
        }

        /* Work Experience */
        .latex-company-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.82rem;
            font-weight: 700;
            color: #000000;
            margin-bottom: 0.5px;
        }

        .latex-role-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.785rem;
            color: #000000;
            margin-bottom: 1px;
        }

        .latex-role-title {
            font-weight: 700;
            font-style: italic;
        }

        .latex-role-date {
            font-style: italic;
        }

        /* Sub-bullets with open circle ◦ */
        .latex-bullets {
            margin: 0;
            padding-left: 16px;
            font-size: 0.765rem;
            line-height: 1.23;
            list-style-type: circle;
        }

        .latex-bullets li {
            margin-bottom: 1.2px;
            text-align: justify;
        }

        /* Projects */
        .latex-project-row1 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.80rem;
            font-weight: 700;
            color: #000000;
        }

        .latex-project-row2 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.765rem;
            color: #000000;
            margin-bottom: 0.5px;
        }

        .latex-project-tech, .latex-project-link {
            font-style: italic;
        }

        .latex-project-link {
            color: #000000;
            text-decoration: none;
        }

        .latex-project-link:hover {
            text-decoration: underline;
        }

        .cv-sheet-footer-onepage {
            margin-top: auto;
            padding-top: 2px;
            border-top: 0.5px solid #cccccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.65rem;
            color: #555555;
            font-family: "Times New Roman", Times, serif;
        }

        /* Print Media Styles - Zero Rasterization, Pure Vector Text, Strict 1 Page */
        @media print {
            @page {
                size: A4 portrait;
                margin: 7mm 11mm 6mm 11mm !important;
            }

            html, body {
                background: white !important;
                color: #000000 !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                height: 100% !important;
                min-height: 0 !important;
                overflow: hidden !important;
                font-family: "Times New Roman", Times, serif !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            #app-root, .cv-wrapper {
                padding: 0 !important;
                margin: 0 !important;
                gap: 0 !important;
                display: block !important;
                width: 100% !important;
                height: 100% !important;
            }

            .cv-sheet-onepage {
                width: 100% !important;
                max-width: 100% !important;
                height: 100% !important;
                min-height: 0 !important;
                max-height: 100% !important;
                padding: 0 !important;
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
                border-radius: 0 !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                page-break-after: avoid !important;
                break-after: avoid !important;
                overflow: hidden !important;
                box-sizing: border-box !important;
                font-family: "Times New Roman", Times, serif !important;
            }

            #control-panel, .edit-trigger {
                display: none !important;
            }
        }
    `;

    ROOT.innerHTML = `
        <div class="cv-wrapper">
            <section class="cv-sheet-onepage">
                <!-- Header (Exact Sagar Farera Layout) -->
                <header class="latex-header">
                    <div class="latex-header-left">
                        <div class="latex-name">${DATA.profile.name}</div>
                        <div class="latex-contact-left">
                            LinkedIn: <a href="https://www.linkedin.com/in/shubham-farera-343b5111b" target="_blank">www.linkedin.com/in/shubham-farera-343b5111b</a><br>
                            GitHub: <a href="https://github.com/sfarera" target="_blank">github.com/sfarera</a>
                        </div>
                    </div>
                    <div class="latex-contact-right">
                        Email: <a href="mailto:${DATA.profile.contact.email}">${DATA.profile.contact.email}</a><br>
                        Mobile: ${DATA.profile.contact.phone}<br>
                        Location: ${DATA.profile.contact.location}
                    </div>
                </header>

                <!-- Education (Sagar Farera Layout) -->
                <div class="latex-sec-title">Education</div>
                <div>
                    <div class="latex-edu-row1">
                        <span>• Shri Govindram Seksaria Institute of Technology and Science (SGSITS)</span>
                        <span>Indore, Madhya Pradesh, India</span>
                    </div>
                    <div class="latex-edu-row2">
                        <span class="latex-edu-degree">Bachelor of Engineering in Information Technology | GPA: 7.10/10</span>
                        <span class="latex-edu-date">July 2013 – June 2017</span>
                    </div>
                </div>

                <!-- Skills Summary (Sagar Farera Layout) -->
                <div class="latex-sec-title">Skills Summary</div>
                <ul class="latex-skills-list">
                    <li><strong>• Languages :</strong> Java (8 / 11 / 17), SQL</li>
                    <li><strong>• Backend Frameworks :</strong> Spring Boot, Spring MVC, Spring Data JPA, Hibernate, RESTful APIs, Microservices</li>
                    <li><strong>• Databases & Caching :</strong> MySQL, Oracle DB, PostgreSQL, Redis (In-Memory Caching & Session Management)</li>
                    <li><strong>• Cloud & DevOps :</strong> Kubernetes, NGINX Ingress, Docker Containers, Jenkins CI/CD, Git, Maven, Microsoft Azure (AZ-900)</li>
                    <li><strong>• Testing & Quality :</strong> JUnit 5, Mockito, SonarQube, Unit & Integration Testing, Application Debugging & Profiling</li>
                    <li><strong>• Core Engineering :</strong> Object-Oriented Design (OOD), Design Patterns, Low-Level & High-Level System Design, REST API Standards</li>
                </ul>

                <!-- Work Experience (All 4 Progressive Roles with Dense Technical Depth) -->
                <div class="latex-sec-title">Work Experience</div>

                <!-- Tata Consultancy Services -->
                <div style="margin-bottom: 3px;">
                    <div class="latex-company-row">
                        <span>• Tata Consultancy Services — Software Development (Backend)</span>
                        <span>Pune, India</span>
                    </div>
                    <div class="latex-role-row">
                        <span class="latex-role-title">IT Analyst (Senior Backend Engineer)</span>
                        <span class="latex-role-date">Oct 2023 – Present</span>
                    </div>
                    <ul class="latex-bullets">
                        <li>Developed and maintained enterprise backend microservices using Java 17 and Spring Boot, handling high-volume transaction processing workflows.</li>
                        <li>Engineered secure RESTful APIs implementing request payload validation, consistent HTTP status mapping, and structured centralized error handling.</li>
                        <li>Configured Spring Data JPA and Hibernate for database persistence; integrated Redis caching for frequently accessed data to reduce database load.</li>
                        <li>Managed containerized microservice deployments on Kubernetes clusters; configured NGINX Ingress routing rules, endpoints, and health probes.</li>
                        <li>Authored comprehensive JUnit and Mockito test suites, participated in peer code reviews, and conducted production defect triage using log analysis.</li>
                    </ul>
                </div>

                <!-- Accenture: 3 Progressive Roles Nested (Identical to Sagar's Pazcare Progression) -->
                <div style="margin-bottom: 3px;">
                    <div class="latex-company-row">
                        <span>• Accenture — Software Development (Backend)</span>
                        <span>Pune, India</span>
                    </div>
                    
                    <!-- Role 1: Senior Analyst -->
                    <div class="latex-role-row">
                        <span class="latex-role-title">Application Development Senior Analyst</span>
                        <span class="latex-role-date">Sept 2021 – Aug 2023</span>
                    </div>
                    <ul class="latex-bullets" style="margin-bottom: 2px;">
                        <li>Engineered backend RESTful services using Java and Spring Boot for wealth management domain applications, supporting client portfolio processing.</li>
                        <li>Integrated secure REST APIs with external financial gateways and internal banking services, implementing authentication and payload validation.</li>
                        <li>Designed relational database schemas, optimized complex SQL queries, and configured Hibernate entity mappings to streamline transaction processing.</li>
                        <li>Collaborated in an Agile Scrum environment, conducting peer code reviews, sprint planning, and backlog grooming to maintain software quality.</li>
                    </ul>

                    <!-- Role 2: Analyst -->
                    <div class="latex-role-row">
                        <span class="latex-role-title">Application Development Analyst</span>
                        <span class="latex-role-date">May 2020 – Aug 2021</span>
                    </div>
                    <ul class="latex-bullets" style="margin-bottom: 2px;">
                        <li>Developed backend REST APIs using Java, Spring Boot, and JPA for order processing workflows with validation, logging, and error handling.</li>
                        <li>Maintained relational database interactions, tuned SQL queries, and resolved backend defects identified during functional QA testing cycles.</li>
                    </ul>

                    <!-- Role 3: Associate -->
                    <div class="latex-role-row">
                        <span class="latex-role-title">Associate Software Engineer</span>
                        <span class="latex-role-date">Feb 2018 – Apr 2020</span>
                    </div>
                    <ul class="latex-bullets">
                        <li>Developed core Java application modules and scheduled batch processing jobs for public assistance case management systems.</li>
                        <li>Authored automated unit tests with JUnit and Mockito to validate business logic and maintain regression test coverage across CI pipelines.</li>
                    </ul>
                </div>

                <!-- Projects and Technical Systems (Sagar Farera Layout) -->
                <div class="latex-sec-title">Projects and Technical Systems</div>

                <div style="margin-bottom: 2.5px;">
                    <div class="latex-project-row1">
                        <span>• Parking Lot System — Object-Oriented Design & Backend Service</span>
                        <a href="https://github.com/sfarera" target="_blank" class="latex-project-link">github.com/sfarera</a>
                    </div>
                    <div class="latex-project-row2">
                        <span class="latex-project-tech">Java, Spring Boot, REST APIs, Design Patterns (Factory, Strategy)</span>
                    </div>
                    <ul class="latex-bullets">
                        <li>Implemented low-level design using Factory and Strategy patterns for parking spot allocation and dynamic fee calculation; exposed REST APIs for check-in/out and atomic spot reservations.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 2.5px;">
                    <div class="latex-project-row1">
                        <span>• Movie Ticket Booking System — Transaction Management & Booking Service</span>
                        <a href="https://github.com/sfarera" target="_blank" class="latex-project-link">github.com/sfarera</a>
                    </div>
                    <div class="latex-project-row2">
                        <span class="latex-project-tech">Java, Spring Boot, JPA, Concurrency & Seat Locking (@Transactional)</span>
                    </div>
                    <ul class="latex-bullets">
                        <li>Engineered booking service with concurrency handling and transactional seat locking (@Transactional) to eliminate double-booking; implemented catalog browsing and checkout workflows.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 2.5px;">
                    <div class="latex-project-row1">
                        <span>• Expense Sharing Application — Domain Modeling & Split Engine</span>
                        <a href="https://github.com/sfarera" target="_blank" class="latex-project-link">github.com/sfarera</a>
                    </div>
                    <div class="latex-project-row2">
                        <span class="latex-project-tech">Java, Spring Boot, REST APIs, Domain Modeling, Debt Simplification</span>
                    </div>
                    <ul class="latex-bullets">
                        <li>Modeled split-expense domain logic supporting multiple split strategies (equal, exact, percentage); designed debt simplification graph logic to compute minimal net cash settlements.</li>
                    </ul>
                </div>

                <!-- Certifications -->
                <div class="latex-sec-title">Certifications</div>
                <div>
                    <div class="latex-edu-row1">
                        <span>• Microsoft Certified: Azure Fundamentals (AZ-900)</span>
                        <span>Certified, 2023</span>
                    </div>
                    <div class="latex-edu-row2">
                        <span class="latex-edu-degree">Microsoft • Cloud Concepts, Azure Architecture, Security, Governance & Compliance</span>
                    </div>
                </div>

                <div class="cv-sheet-footer-onepage">
                    <span>${DATA.profile.name} — Senior Java Backend Developer</span>
                    <span>1-Page Executive Resume</span>
                </div>
            </section>
        </div>
    `;
};
