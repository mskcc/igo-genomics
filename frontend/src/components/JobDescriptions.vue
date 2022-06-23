<template>
  <div id="job-descriptions">
    <career-banner />

    <md-card class="career-card">
      <md-card-header>
        <div class="md-title">Operations Manager</div>
        <router-link :to="{ name: 'team', params: { id: 0 } }">Leadership</router-link>
        <div class="md-body">Open!</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionOM = true" class="md-accent">Learn More</md-button>
        <md-button href="https://careers.mskcc.org/vacancies/2022-59668-operations-manager-integrated-genomics-operation/" target="_blank" class="md-primary">Apply</md-button>
      </md-card-actions>
    </md-card>

    <md-card class="career-card">
      <md-card-header>
        <div class="md-title">Administrative Assistant</div>
        <router-link :to="{ name: 'team', params: { id: 1 } }">Lab Support</router-link>
        <div class="md-body">Open!</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionAA = true" class="md-accent">Learn More</md-button>
        <md-button href="https://careers.mskcc.org/vacancies/2022-62246-administrative-assistant-sloan-kettering-institute/" target="_blank" class="md-primary">Apply</md-button>
      </md-card-actions>
    </md-card>

    <md-card class="career-card">
      <md-card-header>
        <div class="md-title">Bioinformatics Software Engineer II</div>
        <router-link :to="{ name: 'team', params: { id: 8 } }">Data</router-link>
        <div class="md-body">Open!</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionDataSEII = true" class="md-accent">Learn More</md-button>
        <md-button href="https://careers.mskcc.org/vacancies/2022-62346-bioinformatics-software-engineer-ii/" target="_blank" class="md-primary">Apply</md-button>
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

    <!-- <md-dialog :md-active.sync="showJobDescriptionNARA" :md-fullscreen="false" style="z-index: 400;">
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
    </md-dialog> -->

    <!-- <md-dialog :md-active.sync="showJobDescriptionAE" :md-fullscreen="false" style="z-index: 400;">
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
    </md-dialog> -->
    
    <!-- <md-dialog :md-active.sync="showJobDescriptionNART" :md-fullscreen="false" style="z-index: 400;">
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
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field.</li>
          <li>Previous exposure to NGS library preparation and Illumina sequencer loading is preferable.</li>
          <li>Strong organizational, prioritization, and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionNART = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog> -->

    <!-- <md-dialog :md-active.sync="showJobDescriptionSPMPC" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Project Coordinator in the Sample & Project Management Team, you will:</strong>
        <ul>
          <li>Participate in meetings with investigators to understand the scope of projects and effectively communicate the services provided by IGO</li>
          <li>Review all submissions for correctness and completeness, and work with project managers to guide investigators through processing decisions that are in line with the goals of their projects.</li>
          <li>Analyze quantity and quality of samples using various instruments and communicate results electronically.</li>
          <li>Utilize the LIMS (Laboratory Information Management System) effectively to ensure the downstream processing team has relevant and up-to-date information.</li>
          <li>Investigate unexpected outputs and provide information to IGO leadership and investigators.</li>
          <li>Facilitate lab processing by maintaining freezer organization and storage in a LEAN way</li>
          <li>Receive samples from outside institutions and use liquid handling automation to aliquot nucleic acid materials.</li>
          <li>Work closely with staff from IGO and the CMO and maintain open and proactive lines of communication.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field + 2-4 years experience</li>
          <li>A Master's Degree in  Biological, Chemistry, or Science related field + 0-2 years experience</li>
          <li>Experience handling DNA/RNA preferred.</li>
          <li>Experience with genomics and NGS preferred.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSPMPC = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog> -->

    <!-- <md-dialog :md-active.sync="showJobDescriptionSPMPM" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Project Manager in the Sample & Project Management Team, you will:</strong>
        <ul>
          <li>Drive meetings with investigators to understand the scope of projects and effectively communicate the services provided by IGO</li>
          <li>Review all submissions for correctness and completeness, and work with investigators to guide them through processing decisions that are in line with the goals of their projects.</li>
          <li>Manage investigator expectations and facilitate professional interaction of team with investigators.</li>
          <li>Analyze sample data and communicate results electronically.</li>
          <li>Utilize the LIMS (Laboratory Information Management System) effectively to ensure the downstream processing team has relevant and up-to-date information.</li>
          <li>Proactively monitor the progress of samples to guarantee deadlines are met.</li>
          <li>Investigate unexpected outputs and provide information to IGO leadership and investigators.</li>
          <li>Facilitate lab processing by maintaining freezer organization and storage in a LEAN way</li>
          <li>Assist group leader with supporting junior team members including training.</li>
          <li>Work closely with staff from IGO and the CMO and maintain open and proactive lines of communication.</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field + 4-6 years experience</li>
          <li>A Master's Degree in  Biological, Chemistry, or Science related field + 2-4 years experience</li>
          <li>Experience with genomics and NGS preferred.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSPMPM = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog> -->

    <!-- <md-dialog :md-active.sync="showJobDescriptionRDM" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>You are:</strong>
        <ul>
          <li>A highly experienced and skilled molecular biologist with sharp focus, attention to detail and good decision-making skills</li>
          <li>Able to maintain detailed records of all experiments, drafts of technical procedures and written summaries pertaining to research work</li>
          <li>A quick learner and strong problem-solver who sees the forest and the trees and is able to quickly identify anomalies in data and uncover their source</li>
          <li>Adept at multitasking, planning, prioritizing and re-prioritizing work to meet goals and commitments with minimal direction in a multifaceted environment</li>
          <li> A highly motivated person capable of building positive relationships within the lab and with internal and external collaborators including data analysts</li>
          <li>Someone with a strong background of mentorship who is interested in the success of others and willing to evaluate performance and provide feedback as a manager</li>
          <li>An outstanding communicator and clear presenter, capable of determining how best to reach different audiences and executing communications based on that understanding whether it be internal lab meetings or institutional seminars</li>
          <li>A creative thinker who engages in thinking outside the box and has an appreciation for the “business” aspect of working at the core</li>
          <li>Consistently achieving results, even under tough circumstances</li>
        </ul>
        <strong>You need:</strong>
        <ul>
          <li>A Ph.D. in molecular biology, biochemistry or a related discipline, or a Masters' degree with a strong background in experimental and computational genomic methodologies and assay development</li>
          <li>A background in NGS assay development is highly desired. Experience with imaging technologies is a plus. Management experience is welcome.</li>
          <li>Excellent interpersonal, written and oral communication skills</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionRDM = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog> -->

    <!-- <md-dialog :md-active.sync="showJobDescriptionEXPANDRA" :md-fullscreen="false" style="z-index: 400;">
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
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field with at least 3 years of relevant full-time experience or a master’s degree with 1-2 years full-time relevant experience.</li>
          <li>Previous exposure to purifying nucleic acids for NGS platform, knowledge of digital PCR and experience with cells and FFPE samples is preferable.</li>
          <li>Strong organizational, prioritization and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionEXPANDRA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog> -->

    <!-- <md-dialog :md-active.sync="showJobDescriptionSeqRA" :md-fullscreen="false" style="z-index: 400;">
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
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field with at least 3 years of relevant full-time experience or a master’s degree with 1-2 years full-time relevant experience. </li>
          <li>Previous exposure to NGS library preparation and Illumina sequencer loading is preferable.</li>
          <li>Strong organizational, prioritization and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSeqRA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog> -->

    <!-- <md-dialog :md-active.sync="showJobDescriptionSeqSRT" :md-fullscreen="false" style="z-index: 400;">
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
    </md-dialog> -->

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

    <md-dialog :md-active.sync="showJobDescriptionOM" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As an Operations Manager, you will:</strong>
        <ul>
          <li>Provide leadership and management of the core facility</li>
          <li>Ensure the well-controlled production of next generation sequencing data</li>
          <li>Establish and maintain LEAN processes from R&D to production</li>
          <li>Ensure maximum sustainability and optimal use of funds, space and other resources</li>
          <li>Interact with clinical, translational and basic science researchers and leadership groups at MSKCC</li>
        </ul>
        <strong>You have:</strong>
        <ul>
          <li>A track record of strategizing and executing process improvements and ensuring best practices</li>
          <li>Excellent interpersonal, written and oral communication skills</li>
          <li>Experience in a genomics facility environment and experience with a large operation</li>
          <li>A passion for LEAN principles of management</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionOM = false">Close</md-button>
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
      // showJobDescriptionSPMPC: false,
      // showJobDescriptionNARA: false,
      // showJobDescriptionRDM: false,
      // showJobDescriptionEXPANDRA: false,
      // showJobDescriptionSeqRA: false,
      // showJobDescriptionNART: false,
      // showJobDescriptionSeqSRT: false,
      showJobDescriptionDataSEII: false,
      // showJobDescriptionAE: false,
      // showJobDescriptionSPMPM: false,
      showJobDescriptionOM: false,
      showJobDescriptionAA: false,
    };
  },
};
</script>

<style></style>
