window.renderOnePage = (DATA, ROOT, STYLE) => {
    STYLE.innerHTML = `
        body {
            background-color: #f1f5f9;
            color: #000000;
            font-family: "Times New Roman", Times, "TeX Gyre Termes", STIXGeneral, serif;
            margin: 0;
            padding: 1.5rem 0;
            line-height: 1.27;
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
            padding: 10mm 15mm 9mm 15mm;
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

        /* LaTeX Header (Exactly Sagar Farera Style) */
        .latex-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 6px;
        }

        .latex-name {
            font-size: 1.70rem;
            font-weight: 700;
            color: #000000;
            line-height: 1.1;
            margin: 0 0 3px 0;
            letter-spacing: -0.2px;
        }

        .latex-contact-left, .latex-contact-right {
            font-size: 0.81rem;
            line-height: 1.32;
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

        /* LaTeX Section Title */
        .latex-sec-title {
            font-size: 0.98rem;
            font-weight: 700;
            color: #000000;
            border-bottom: 1px solid #000000;
            margin: 6px 0 4px 0;
            padding-bottom: 1px;
        }

        /* Education Entry */
        .latex-edu-row1 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.83rem;
            font-weight: 700;
            color: #000000;
        }

        .latex-edu-row2 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.80rem;
            color: #000000;
        }

        .latex-edu-degree, .latex-edu-date {
            font-style: italic;
        }

        /* Skills Summary */
        .latex-skills-list {
            margin: 0;
            padding-left: 16px;
            font-size: 0.79rem;
            line-height: 1.30;
            list-style-type: disc;
        }

        .latex-skills-list li {
            margin-bottom: 1.5px;
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
            font-size: 0.84rem;
            font-weight: 700;
            color: #000000;
            margin-bottom: 1px;
        }

        .latex-role-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.80rem;
            color: #000000;
            margin-bottom: 1.5px;
        }

        .latex-role-title, .latex-role-date {
            font-style: italic;
        }
        .latex-role-title {
            font-weight: 700;
        }

        /* Sub-bullets */
        .latex-bullets {
            margin: 0;
            padding-left: 18px;
            font-size: 0.775rem;
            line-height: 1.28;
            list-style-type: circle;
        }

        .latex-bullets li {
            margin-bottom: 1.5px;
            text-align: justify;
        }

        /* Projects */
        .latex-project-row1 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.82rem;
            font-weight: 700;
            color: #000000;
        }

        .latex-project-row2 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.78rem;
            color: #000000;
            margin-bottom: 1.5px;
        }

        .latex-project-tech, .latex-project-link {
            font-style: italic;
        }

        .latex-project-link {
            color: #000000;
            text-decoration: none;
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

        /* Print Media Styles */
        @media print {
            @page {
                size: A4 portrait;
                margin: 6mm 12mm 6mm 12mm !important;
            }

            html, body {
                background: white !important;
                color: #000000 !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                height: auto !important;
                min-height: 0 !important;
                overflow: visible !important;
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
                height: auto !important;
            }

            .cv-sheet-onepage {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                min-height: 0 !important;
                max-height: none !important;
                padding: 0 !important;
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
                border-radius: 0 !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                page-break-after: avoid !important;
                break-after: avoid !important;
                overflow: visible !important;
                box-sizing: border-box !important;
                font-family: "Times New Roman", Times, serif !important;
            }

            #control-panel, .edit-trigger {
                display: none !important;
            }
        }
    `;

    const tcsJob = DATA.journey[0];
    const accSrAnalyst = DATA.journey[1];
    const accAnalyst = DATA.journey[2];
    const accAssociate = DATA.journey[3];

    ROOT.innerHTML = `
        <div class="cv-wrapper">
            <section class="cv-sheet-onepage">
                <!-- Header (Sagar Farera Layout) -->
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

                <!-- Education -->
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

                <!-- Skills Summary -->
                <div class="latex-sec-title">Skills Summary</div>
                <ul class="latex-skills-list">
                    <li><strong>• Languages :</strong> Java (8 / 11 / 17), SQL</li>
                    <li><strong>• Backend :</strong> Spring Boot, Spring MVC, Spring Data JPA, Hibernate, RESTful APIs, Microservices</li>
                    <li><strong>• Databases & Caching :</strong> MySQL, Oracle, Redis</li>
                    <li><strong>• DevOps & Cloud :</strong> Kubernetes, NGINX Ingress, Docker, Jenkins CI/CD, Git, Maven, Microsoft Azure (AZ-900)</li>
                    <li><strong>• Testing & Quality :</strong> JUnit, Mockito, SonarQube, Unit Testing, Debugging & Troubleshooting</li>
                    <li><strong>• Additional Knowledge :</strong> Apache Kafka, Elasticsearch, Distributed Systems Concepts, HLD & LLD</li>
                </ul>

                <!-- Work Experience -->
                <div class="latex-sec-title">Work Experience</div>

                <!-- TCS -->
                <div style="margin-bottom: 4px;">
                    <div class="latex-company-row">
                        <span>• Tata Consultancy Services — Software Development (Backend)</span>
                        <span>Pune, India</span>
                    </div>
                    <div class="latex-role-row">
                        <span class="latex-role-title">IT Analyst (Senior Backend Engineer)</span>
                        <span class="latex-role-date">Oct 2023 – Present</span>
                    </div>
                    <ul class="latex-bullets">
                        <li>Developed and maintained Java and Spring Boot backend services supporting enterprise business workflows.</li>
                        <li>Implemented REST APIs for application features, including request validation, exception handling, and database integration.</li>
                        <li>Worked with Spring Data JPA and Hibernate for database operations, and integrated Redis caching to reduce repetitive query load.</li>
                        <li>Deployed containerized backend services to Kubernetes clusters, configuring NGINX Ingress routing rules, endpoints, and health checks.</li>
                        <li>Investigated application defects, resolved backend issues through debugging, and authored JUnit/Mockito test suites.</li>
                    </ul>
                </div>

                <!-- Accenture -->
                <div style="margin-bottom: 4px;">
                    <div class="latex-company-row">
                        <span>• Accenture — Software Development (Backend)</span>
                        <span>Pune, India</span>
                    </div>
                    <div class="latex-role-row">
                        <span class="latex-role-title">Application Development Senior Analyst</span>
                        <span class="latex-role-date">Sept 2021 – Aug 2023</span>
                    </div>
                    <ul class="latex-bullets" style="margin-bottom: 3px;">
                        <li>Developed backend RESTful services using Java and Spring Boot to support wealth management business workflows.</li>
                        <li>Implemented and integrated REST APIs with internal backend modules and external financial service gateways.</li>
                        <li>Wrote and maintained database queries and entity mappings using Spring Data JPA and Hibernate for data processing.</li>
                    </ul>

                    <div class="latex-role-row">
                        <span class="latex-role-title">Application Development Analyst & Associate</span>
                        <span class="latex-role-date">Feb 2018 – Aug 2021</span>
                    </div>
                    <ul class="latex-bullets">
                        <li>Developed backend REST APIs using Java, Spring Boot, and JPA for order processing workflows with validation and error handling.</li>
                        <li>Developed core Java application modules and scheduled batch processing jobs; authored JUnit tests and resolved defect tickets.</li>
                    </ul>
                </div>

                <!-- Projects and Technical Systems -->
                <div class="latex-sec-title">Projects and Technical Systems</div>

                <div style="margin-bottom: 3px;">
                    <div class="latex-project-row1">
                        <span>• Parking Lot System — Object-Oriented Design & Backend Service</span>
                    </div>
                    <div class="latex-project-row2">
                        <span class="latex-project-tech">Java, Spring Boot, REST APIs, Design Patterns (Factory, Strategy)</span>
                        <a href="https://github.com/sfarera" target="_blank" class="latex-project-link">github.com/sfarera</a>
                    </div>
                    <ul class="latex-bullets">
                        <li>Implemented low-level design using Factory and Strategy patterns for parking spot allocation and dynamic fee calculation; exposed REST APIs for check-in/out and atomic spot reservation.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 3px;">
                    <div class="latex-project-row1">
                        <span>• Movie Ticket Booking System — Transaction Management & Booking Service</span>
                    </div>
                    <div class="latex-project-row2">
                        <span class="latex-project-tech">Java, Spring Boot, JPA, Concurrency & Seat Locking</span>
                        <a href="https://github.com/sfarera" target="_blank" class="latex-project-link">github.com/sfarera</a>
                    </div>
                    <ul class="latex-bullets">
                        <li>Engineered booking service with concurrency handling and transactional seat locking (@Transactional) to prevent double-booking.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 3px;">
                    <div class="latex-project-row1">
                        <span>• Expense Sharing Application — Domain Modeling & Split Engine</span>
                    </div>
                    <div class="latex-project-row2">
                        <span class="latex-project-tech">Java, Spring Boot, REST APIs, Domain Modeling</span>
                        <a href="https://github.com/sfarera" target="_blank" class="latex-project-link">github.com/sfarera</a>
                    </div>
                    <ul class="latex-bullets">
                        <li>Modeled split-expense domain logic supporting multiple split strategies (equal, exact, percentage); designed debt simplification logic to compute net balances.</li>
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
                        <span class="latex-edu-degree">Microsoft • Cloud Concepts, Azure Architecture, Security & Governance</span>
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
