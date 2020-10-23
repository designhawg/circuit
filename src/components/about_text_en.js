import React from "react"

import "./styles.css"

const AboutEN = ({ siteTitle }) => (
    <section className="about">
        <div className="about-text">

<h5 className="label">Mission Statement</h5>

<h1>A data-driven collaboration to investigate and reveal how Cook County’s courts work.</h1>

<p>The Circuit is an unparalleled collaborative journalism investigation that explores and exposes decades of overlooked data and their connecting patterns buried in the files of the Cook County courts.</p>

<p>Three Chicago-based news organizations — the Better Government Association, The Chicago Reporter and Injustice Watch — joined with civic tech consultants DataMade and spent more than a year gathering, organizing and analyzing more than 30 years of data from every division of the Cook County Circuit Court system. Our work was assisted by researchers from the Center for Survey Methodology at the University of Chicago’s Harris School of Public Policy.</p>

<p>We joined forces to conduct a first-of-its-kind examination of how the Cook County court system works. We aim to expose how different defendants charged with similar crimes are treated, dissect trends in how prosecutors have charged citizens, and study how well defendants have been represented by counsel. We will scrutinize systemic inequities and reveal biases in the fabric of the legal system that have been suspected for generations but never definitively proven.</p>

<p>The Cook County Circuit Court is the second largest unified court system in the world and has long served as a national indicator on issues of justice and equality. The Circuit project also comes at a time when issues of justice and fairness are taking center stage in the national discourse following years of criticism about biased treatment from law enforcement and the judicial system.
Gaining access and analyzing millions of records would have been impossible without this unprecedented collaboration in which news organizations, civic tech experts and researchers combined their distinctive expertises and missions to achieve a collective goal.</p>

<p>Moving forward, a key component of our work will be to engage other news organizations and community groups as we continue to analyze data and work on stories.</p>

<p>This work hasn’t been easy. Much of the data we extracted from the court system was complicated and disorganized, but we were able to arrange it in a usable way to answer long-standing questions about a court system that serves 5.2 million residents.</p>

<p>At a time when the local media is shrinking across the nation, including in  Chicago and Cook County, we hope our collaboration serves as a statement that despite our organizations’ varied missions, we share similar core values and goals to achieve a greater good: exposing institutional failures that obstruct justice, confronting racial and economic inequality, and providing greater transparency to make the court system more accountable.</p>

<p>And we’ve only just begun.</p>

<h3>Who We Are</h3>
<p>The Circuit is an ongoing collaborative journalism project by Chicago nonprofit news organizations — the Better Government Association, The Chicago Reporter and Injustice Watch — in partnership with the civic tech company DataMade and with the assistance of researchers from the Center for Survey Methodology at the University of Chicago’s Harris School of Public Policy. We developed a logo for this project, which is an image of circuit board lines overlaid atop an image of the Leighton Criminal Court Building at 26th Street and California Avenue. This work was funded through a grant from the Robert R. McCormick Foundation.</p>

<p><span className="bold">Reporters:</span> Jared Rutecki, Casey Toner (BGA); Josh McGhee (The Chicago Reporter); Abby Blachmann, Alejandro Fernández Sanabria, Emily Hoerner (Injustice Watch)</p>

<p><span className="bold">Data Analysis:</span> Jean Cochrane, Hannah Cushman, Forest Gregg, Bea Malsky, Jasmine Mithani (DataMade); Seiya Kawashima, Trina Reynolds-Tyler, Lea Washington (Harris); David Eads (The Chicago Reporter)</p>

<p><span className="bold">Engagement:</span> Charles Preston (Injustice Watch); Starlyn Matheny, Mia Sato, Olivia Obineme, Toni Shears (BGA); Asraa Mustafa (The Chicago Reporter) </p>

<p><span className="bold">Designer:</span> Chris Courtney</p>

<p><span className="bold">Illustrator:</span> Verónica Martínez</p>

<p><span className="bold">Translators:</span> Gisela Orozco, Jorge Mederos</p>

<p><span className="bold">Editors:</span> John Chase, David Kidwell (BGA); Adeshina Emmanuel, Jonah Newman, Rick Tulsky (Injustice Watch); Matt O’Connor; Fernando Diaz, Matt Kiefer (The Chicago Reporter)</p>

<p><span className="bold">Development/Project Coordinators:</span> Kate Walsh (BGA); Amanda Miley (Injustice Watch)</p>


<h3>How We Did This Work</h3>
<p>The data for The Circuit was gathered through terminal access to the Cook County Circuit Court’s mainframe information system.</p>

<p>Until 2019, electronic records of court cases were recorded into a mainframe information system. Members of the public and journalists could access this system through public, text-based terminals located in Cook County courthouses. In summer 2018, Injustice Watch requested and was granted remote access to the mainframe system.</p>

<p>Using software that emulated a mainframe terminal, Injustice Watch could access much of the same information available through the public terminals — but from a personal computer.</p>

<p>Injustice Watch hired the Chicago civic technology company DataMade to write a computer program to automatically access and record the case dockets and case management information for criminal cases. A case docket is a record of the motions, rulings and similar events in a case. The case management information includes details about the defendant, arresting agency and status of the case.
</p>

<p>The program ran between April and August 2019 at nights and weekends to ensure that this work did not interfere with other members of the public who were looking up cases. This initial extract was paid for by the Chicago Data Collaborative and Injustice Watch.</p>

<p>After we secured this initial data, we formed The Circuit collaborative to secure additional funds to organize and standardize the data and to write similar extraction programs for the other divisions of the court.</p>

<p>For each criminal case, DataMade’s program produced two files of text — one for the case docket and the second for case management information. DataMade wrote additional programs to extract the information from those text files into tables of data. These tables were loaded into PostgreSQL, an open source, relational database in which journalists could query the data.</p>

<p>Once in an organized format, journalists from The Circuit, DataMade staff and students from the University of Chicago’s Harris School of Public Policy documented what the data meant and how to use it.</p>

<p>The data had many data quality problems that The Circuit had to overcome: information about charges were not standardized; race, ethnicity and gender information was often missing; events were not always recorded in the right order in the dockets; motions and rulings that must have been made were sometimes missing; and typos were common in many fields. Preparing and standardizing the data has taken eight months, and there remains work to do.</p>







    </div>
    <div className="rail"></div>
</section>

)

export default AboutEN
