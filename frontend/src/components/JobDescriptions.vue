<template>
  <div id="job-descriptions">
    <career-banner />

    <md-card class="career-card">
      <md-card-header>
        <div class="md-title">Project Assistant</div>
        <router-link :to="{ name: 'team', params: { id: 3 } }">Sample & Project Management</router-link>
        <div class="md-body">Open!</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionSPMPA = true" class="md-accent">Learn More</md-button>
        <md-button href="mailto:genomics@mskcc.org?subject=IGO Project Asst" class="md-primary">Inquire</md-button>
      </md-card-actions>
    </md-card>

    <md-card class="career-card">
      <md-card-header>
        <div class="md-title">Research Technician</div>
        <router-link :to="{ name: 'team', params: { id: 4 } }">EXPAND</router-link>
        <div class="md-body">Open!</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionEXPANDRT = true" class="md-accent">Learn More</md-button>
        <md-button href="mailto:genomics@mskcc.org?subject=IGO Research Tech" class="md-primary">Inquire</md-button>
      </md-card-actions>
    </md-card>
    
    <md-dialog :md-active.sync="showJobDescriptionAA" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As an Administrative Assistant in the Sloan Kettering Institute, you will:</strong>
        <ul>
          <li>Perform general administrative work in support of SKI program activities as directed including ensuring the smooth flow of communication between investigators, members of the lab, institutional contacts, and external contacts</li>
          <li>Exhibit sound understanding of lab operations and manage day-to-day administrative operations for the manager and Principal Investigator (PI)</li>
          <li>Assist in the accurate preparation of complex documents and supervise the coordination and organization of timely grant submissions and similar projects</li>
          <li>Troubleshoot process/paperwork problems and proactively follow up on problem resolution</li>
          <li>Purchase capital equipment including laboratory and computer equipment, and maintain inventory and maintenance records</li>
          <li>Manage complex calendars and scheduling of meetings on the manager’s behalf</li>
          <li>Assist with clerical duties such as scheduling, attendance, payroll, and related records for lab members</li>
          <li>Develop agendas for visiting faculty, establish a detailed course of action for duties, demonstrate thoroughness and accuracy, and use written and verbal communication skills while using extensive discretion and judgment</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>High school degree and 4+ years administrative work experience or a bachelor's degree and 2-4 years of administrative work experience, experience in a healthcare environment preferred</li>
          <li>The ability to work proactively & independently and follow through on projects</li>
          <li>Excellent Microsoft Office software skills (Word, Excel, PowerPoint, Outlook) Experience with both PC and Mac software strong preferred & familiarity with FileMaker database is a plus</li>
          <li>Grant experience strongly preferred- Outstanding communication & interpersonal skills</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionAA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionAE" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As an Automation Engineer Assistant in IGO, you will:</strong>
        <ul>
          <li>Test and execute automated assays in both 96- and 384-well plates.</li>
          <li>Offer support to all lab members with their automation needs.</li>
          <li>Implement recovery methodologies as necessary.</li>
          <li>Train lab members to run robotic methods and help troubleshoot issues if any arise.</li>
          <li>Maintain a LEAN workflow for all processes.</li>
          <li>Support the Automation Engineer in all capacities as required.</li>
          <li>Collaborate with bioininformatics software engineers and become familiar with Laboratory Information Management Systems (LIMS) to integrate into the automation.</li>
          <li>Evaluate new equpiment and automated methodologies as required by the Automation Engineer.</li>
          <li>Communicate with vendor technical support and sales representatives if necessary.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>A Bachelor’s Degree in Biology or a related field with at least 3 years of relevant full-time experience or a Master's degree with 1 year full-time relevant experience.</li>
          <li>Knowledge and expertise in scripting languages is a plus (e.g. VBScript, JavaScript).</li>
          <li>Experience with Hamilton and Beckman equpiment, knowledge of basic Next Gen Sequencing workflows, and previous exposure to LIMS are welcome</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionAE = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionLM" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Lab Manager in IGO, you will:</strong>
        <ul>
          <li>Handle day-to-day activities such as ensuring operation of essential equimpment, making sure adequate supplies are available for routine procedures, and reviewing budgets</li>
          <li>Act as liaison between the lab and MSK safety and regulatory offices to ensure compliance with all applicable regulations</li>
          <li>Collaborate with financial groups and systems at MSK</li>
          <li>Establish and maintain relationships with IGO's vendors (Illumina, 10X Genomics, Agilent, Beckman Coulter, etc.)</li>
          <li>Work as a team with the operations manager to report on lab operations to the core director</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>Experience in lab management (ordering, procurement, inventory, repairs)</li>
          <li>A passion for efficiency (e.g., LEAN principles)</li>
          <li>Excellent interpersonal, written, and oral communication skills</li>
          <li>Genomics and molecular biology experience welcome</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionLM = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionDataSEII" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Bioinformatics Software Engineer II on the Data Team, you will:</strong>
        <ul>
          <li>Build fast, stable, and efficient delivery pipelines</li>
          <li>Use continuous delivery practices to deliver high-quality Java code</li>
          <li>Build user-friendly web applications using modern JavaScript frameworks (React, Vue.js), Node.js, and Python</li>
          <li>Clearly communicate project challenges and progress</li>
          <li>Ensure code is readable, maintainable, and stable through implementation of unit and end-to-end test</li>
          <li>Follow programming best practices and work collaboratively in-person and through GitHub</li>
        </ul>
        <strong>You have:</strong>
        <ul> 
          <li>3+ years of software development experience</li>
          <li>Experience working with two or more development languages including Java</li>
          <li>Experience with relational databases and/or non-relational databases (MySQL, MongoDB)</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionDataSEII = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionEXPANDRA" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Research Assistant in the Extraction Team, you will:</strong>
        <ul>
          <li>Extract nucleic acids from a variety of biomaterial (fresh frozen and formalin-fixed paraffin embedded tissue, cell line, blood, plasma, serum, saliva, nails, etc)</li>
          <li>Perform quality assurance and quality control of extracted material</li>
          <li>Process samples for droplet digital PCR projects. This includes assays design and optimization, sample processing and data curation.</li>
          <li>Prepare DNA libraries for NGS following established SOPs</li>
          <li>Work with your team to create workflow following LEAN principles.</li>
          <li>Communicate with vendor technical support and sales representatives.</li>
          <li>Operate liquid handlers and robotic instrument for high throughput processing</li>
          <li>Maintain accurate and detailed records in a Laboratory Information Management System (Examplar Sapio LIMS)</li>
          <li>Use iLAB for billing purposes</li>
        </ul>

        <strong>You have:</strong>
        <ul>
          <li>Bachelor's degree in a relevant field and 5-7 years of work experience in a biological laboratory environment or Masters degree in a science and 3-5 years of shown experience.</li>
          <li>Previous exposure to purifying nucleic acids for NGS platforms, knowledge of digital PCR and experience with cells and FFPE samples is preferable.</li>
          <li>Strong organizational, prioritization and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionEXPANDRA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionEXPANDRT" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Research Technician in the EXPAND Team, you will:</strong>
        <ul>
          <li>Extract nucleic acids from a variety of biomaterial (fresh frozen and formalin-fixed paraffin embedded tissue, cell line, blood, plasma, serum, saliva, nails, etc)</li>
          <li>Perform quality assurance and quality control of extracted material</li>
          <li>Process samples for droplet digital PCR projects. This includes assays design and optimization, sample processing and data curation.</li>
          <li>Prepare DNA libraries for NGS following established SOPs</li>
          <li>Work with your team to create workflow following LEAN principles.</li>
          <li>Communicate with vendor technical support and sales representatives.</li>
          <li>Operate liquid handlers and robotic instrument for high throughput processing</li>
          <li>Maintain accurate and detailed records in a Laboratory Information Management System (Examplar Sapio LIMS)</li>
          <li>Use iLab for billing purposes</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>A Bachelor’s Degree in a biology, chemistry, or science related field.</li>
          <li>Previous exposure to purifying nucleic acids or NGS is preferable.</li>
          <li>Strong organizational, prioritization, and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionEXPANDRT = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionNART" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Research Technician in the Library Preparation Team, you will:</strong>
        <ul>
          <li>Make NGS libraries from DNA and RNA libraries following established SOPs.</li>
          <li>Plan and pool NGS libraries to capture using requested gene panels.</li>
          <li>Load and run the liquid handlers according to pre-established robotic methods.</li>
          <li>Review every step in the automated and/or manual process to maintain the high-quality standard.</li>
          <li>Assist group leader to create an efficient and error-proof workflow – and troubleshoot accordingly.</li>
          <li>Communicate with vendor technical support and sales representatives.</li>
          <li>Maintain and coordinate documentation for assay tracking and results for review/reporting through iLabs and LIMS.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>A Bachelor’s Degree in a biology, chemistry, or science related field.</li>
          <li>Previous exposure to NGS library preparation and Illumina sequencer loading is preferable.</li>
          <li>Strong organizational, prioritization, and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionNART = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionNARA" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Research Technician in the Nucelic Acids team, you will:</strong>
        <ul>
          <li>Make NGS libraries from DNA and RNA libraries following established SOPs.</li>
          <li>Plan and pool NGS libraries to capture using requested gene panels.</li>
          <li>Load and run the liquid handlers according to pre-established robotic methods.</li>
          <li>Review every step in the automated and/or manual process to maintain high-quality standards.</li>
          <li>Assist group leader to create an efficient and error-proof workflow – and troubleshoot accordingly.</li>
          <li>Communicate with vendor technical support and sales representatives.</li>
          <li>Maintain and coordinate documentation for assay tracking and results for review/reporting through iLabs and LIMS.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field with at least 3 years of relevant full-time experience or a Master's degree with 1-2 years full-time relevant experience.</li>
          <li>Previous exposure to NGS library preparation and Illumina sequencer loading is preferable.</li>
          <li>Strong organizational, prioritization, and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionNARA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
 
    <md-dialog :md-active.sync="showJobDescriptionNASup" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Supervisor in the Library Prep team, you will:</strong>
        <ul>
          <li>Plan and discuss work priorties for the team.</li>
          <li>Oversee the daily functioning of lab personnel in terms of scheduling work and establishing timeframes, including providing guidance to staff as needed.</li>
          <li>Troubleshoot problems and resolve challenges at the bench.</li>
          <li>Supervise the team as well as participate in laboratory experiments to meet deadlines.</li>
          <li>Communicate effectively with the team and drive accountability.</li>
          <li>Assist the group leader to create and efficient and error-proof workflow.</li>
          <li>Maintain the high-quality standards IGO has for its services.</li>
          <li>Communicate with vendor technical support and sales representatives.</li>
          <li>Maintain and coordinate documentation for assay tracking and results for review/reporting through iLab and LIMS.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>Bachelor's degree in a relevant field and 4-7 years of work experience in a biological laboratory environment or Masters degree in a science and 1-2 years of relevant experience.</li>
          <li>Previous exposure to team supervision is preferable.</li>
          <li>Previous experience with NGS library preparation, manual and automated, is preferable.</li>
          <li>Strong leadership, prioritization, and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionNASup = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionRnDRT" :md-fullscreen="false" style="z-index: 400;">
          <md-dialog-content md-dynamic-height>
            <strong>As a Research Technician in the R&D Team, you will:</strong>
            <ul>
              <li>Assist in the desigh and implementation of experiments to test novel technologies</li>
              <li>Meticulously record experimental details</li>
              <li>Evaluate results and troubleshoot assays as required</li>
              <li>Optimize existing IGO assays</li>
              <li>Read scientific literature to develop a detailed understanding of your work</li>
              <li>Work with the production lab to transfer newly validated assays to a high throughput format</li>
              <li>Use the LIMS and iLab to track samples and experiments</li>
            </ul>
            <strong>You have:</strong>
            <ul>
              <li>A Bachelor’s Degree in a biology, chemistry, or science related field.</li>
              <li>An interest in the scientific principles behind the assays being developed</li>
              <li>The ability to work indepedently and collaborate with team members</li>
              <li>An affinity for math and stoichiometry, strong communication skills, and an ability to work in a fast-paced, deadline-oriented environment</li>
              <li>Undergraduate lab experience, a record of academic excellence, and strong references</li>
              <li>Previous molecular biology experience preferred</li>
              <li>Strong organizational, prioritization, and time management skills.</li>
            </ul>
          </md-dialog-content>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showJobDescriptionRnDRT = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog :md-active.sync="showJobDescriptionSCRA" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Research Assistant in the Single Cell team, you will:</strong>
        <ul>
          <li>Following established SOPs to make NGS libraries on a variety of single cell platforms.</li>
          <li>Load and run the liquid handlers according to pre-established robotic methods.</li>
          <li>Review every step in the automated and/or manual process to maintain high-quality standards.</li>
          <li>Assist group leader to create an efficient and error-proof workflow – and troubleshoot accordingly.</li>
          <li>Communicate with vendor technical support and sales representatives.</li>
          <li>Maintain and coordinate documentation for assay tracking and results for review/reporting through iLabs and LIMS.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>Bachelor's degree in a relevant field and 5-7 years of work experience in a biological laboratory environment or Masters degree in a science and 3-5 years of shown experience.</li>
          <li>Previous exposure to NGS library preparation or single cell applications are preferable.</li>
          <li>Strong organizational, prioritization, and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSCRA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

        <md-dialog :md-active.sync="showJobDescriptionSeqSRT" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Senior Research Technician in the Sequencing Team, you will:</strong>
        <ul>
          <li>QC NGS libraries following established SOPs.</li>
          <li>Plan and pool NGS libraries according to sequencing request.</li>
          <li>Load and run Illumina sequencers according to pre-established run plan.</li>
          <li>Review analysis of NGS runs in order to maintain the high-quality standards.</li>
          <li>Assist group leader to create an efficient and error-proof workflow – and troubleshoot data accordingly.</li>
          <li>Communicate with vendor technical support and sales representatives.</li>
          <li>Maintain and coordinate documentation for assay tracking and results for review/reporting through iLabs and LIMS.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field with at least 3 years of relevant full-time experience or a master’s degree with 1-2 years full-time relevant experience. </li>
          <li>Previous exposure to NGS library preparation and Illumina sequencer loading is preferable.</li>
          <li>Strong organizational, prioritization and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSeqSRT = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

        <md-dialog :md-active.sync="showJobDescriptionSeqRA" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Research Assistant in the Sequencing Team, you will:</strong>
        <ul>
          <li>QC NGS libraries following established SOPs.</li>
          <li>Plan and pool NGS libraries according to sequencing request.</li>
          <li>Load and run Illumina sequencers according to pre-established run plan.</li>
          <li>Review analysis of NGS runs in order to maintain the high-quality standards.</li>
          <li>Assist group leader to create an efficient and error-proof workflow – and troubleshoot data accordingly.</li>
          <li>Communicate with vendor technical support and sales representatives.</li>
          <li>Maintain and coordinate documentation for assay tracking and results for review/reporting through iLabs and LIMS.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>Bachelor's degree in a relevant field and 5-7 years of work experience in a biological laboratory environment or Masters degree in a science and 3-5 years of shown experience.</li>
          <li>Previous exposure to NGS library preparation and Illumina sequencer loading is preferable.</li>
          <li>Strong organizational, prioritization and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSeqRA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionSPMPA" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Project Assistant in the Sample & Project Management Team, you will:</strong>
        <ul>
          <li>Perform QC of samples received by the SPM team.</li>
          <li>Evaluate QC results and troubleshoot as the need arises.</li>
          <li>Use the Lab Information Management System (LIMS) and iLab to track samples and experiments.</li>
          <li>Meticulously record experimental details.</li>
          <li>Communicate with investigators by providing updates on sample attrition and coordinating downstream efforts.</li>
          <li>Read scientific literature to develop a detailed understanding of your work.</li>
          <li>Actively participate in weekly meetings by taking notes for the team or preparing presentation if required.</li>
          <li>Ultimately be able to review sophisticated genomic project submissions and identify any issues or technical inaccuracies.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field with undergrad lab experience preferred</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSPMPA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionSPMPM" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Project Manager in the Sample & Project Management Team, you will:</strong>
        <ul>
          <li>Effectively communicate the services and deliverables provided by IGO to MSK scientists.</li>
          <li>Use your strong practical background to interpret RNA and DNA QC results, using the QC to guide investigators to the right genomics assay for their samples.</li>
          <li>Understand how samples are accessioned into the Laboratory Information Management System (LIMS), how to search for records, and how to maintain a LEAN storage system for samples</li>
          <li>Proactively monitor the progress of samples to guarantee deadlines are met.</li>
          <li>Ensure junior lab members are performing RNA and DNA QC according to protocol and train them in how to interpret Bioanalyzer and Tapestation results and best practice at the bench and with liquid handlers.</li>
          <li>Coordinate with numerous teams and departments across the institution to assist in sample submission to IGO</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field + 3 years relevant bench experience</li>
          <li>A Master's Degree in  Biological, Chemistry, or Science related field + 1-2 years relevant bench experience</li>
          <li>Previous exposure to NGS platforms is welcome.</li>
          <li>Strong organizational, prioritization and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSPMPM = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionSPMSup" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Supervisor in the Sample & Project Management team, you will:</strong>
        <ul>
          <li>Oversee the daily activities of the SPM team which includes:</li>
            <ul>
              <li>QC of samples received by the SPM team, evaluate the QC results, and troubleshoot as required.</li>
              <li>Review incoming requests utilizing the Lab Information Management System (LIMS) and iLab.</li>
              <li>Meet investigators to receive incoming samples and confirm accuracy of the submission.</li>
              <li>Connect with investigators by providing updates on sample attrition and coordinate downstream efforts.</li>
              <li>Manage sample storage system and assist with sample returns to investigators.</li>
            </ul>
          <li>Hire and train new personnel on IGO processes and daily SPM activities.</li>
          <li>Supervise employee efficiency and provide feedback and mentorship.</li>
          <li>Lead weekly team meetings to improve the team's knowledge and to troubleshoot issues.</li>
          <li>Connect with IGO managers/leaders as needed with complex genomic project submissions.</li>
          <li>Attend weekly Operations Meeting to discuss issues or improvements on IGO processes.</li>
          <li>Maintain and coordinate documentations for SPM daily activities and reporting through iLab and LIMS.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>Bachelor's degree in a relevant field and 4-7 years of work experience in a biological laboratory environment or Master's degree in a science and 1-2 years of relevant experience.</li>
          <li>Previous exposure to team supervision is preferable.</li>
          <li>Previous experience with NGS processes is preferable.</li>
          <li>Strong leadership, prioritization, and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSPMSup = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionSTSup" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Spatial Transcriptomics Supervisor in the EXPAND team, you will:</strong>
        <ul>
          <li>Work closely with investigators seeking to use the 10X Visium and Nanostring GeoMx platforms.</li>
          <li>Assist in experimental design for investigator projects.</li>
          <li>Train and mentor spatial transcriptomics technicians.</li>
          <li>Supervise the team as well as participate in laboratory experiments to meet deadlines.</li>
          <li>Work with the vendors and technical professionals to ensure high quality data is delivered to our scientists.</li>
          <li>Help create an efficient and error-proof workflow.</li>
          <li>Maintain the high-quality standards IGO has for its services.</li>
          <li>Maintain and coordinate documentation for assay tracking and results for review/reporting through iLab and LIMS.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>Molecular biology skill and experience with sharp focus, attention to detail, and good decision-making skills.</li>
          <li>The ability to maintain detailed records of all experiments, drafts of technical procedures, and written summaries pertaining to research work.</li>
          <li>Strong time management, multitasking, planning, and prioritization skills.</li>
          <li>A strong background of mentorship, interest in the success of others, and willingness to evaluate performance and provide feedback as a supervisor.</li>
          <li>Excellent interpersonal, written and oral communication skills.</li>
          <li>A background in NGS and/or imaging is welcome.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSTSup = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
import CareerBanner from './CareerBanner.vue';

export default {
  name: 'JobDescriptions',
  components: { CareerBanner },
  data: function() {
    return {      
      // showJobDescriptionAA: false,
      // showJobDescriptionAE: false,
      // showJobDescriptionLM: false,
      // showJobDescriptionDataSEII: false,
      // showJobDescriptionEXPANDRA: false,
      showJobDescriptionEXPANDRT: false,
      // showJobDescriptionNART: false,
      // showJobDescriptionNARA: false,
      // showJobDescriptionNASup: false,
      // showJobDescriptionRnDRT: false,
      // showJobDescriptionSCRA: false,
      // showJobDescriptionSeqSRT: false,
      // showJobDescriptionSeqRA: false,
      showJobDescriptionSPMPA: false,
      // showJobDescriptionSPMPM: false,
      // showJobDescriptionSPMSup: false,
      // showJobDescriptionSTSup: false,
    };
  },
};
</script>

<style></style>
