<template>
  <div id="job-descriptions">
    <career-banner />
    <md-card class="career-card">
      <md-card-header>
        <div class="md-title">Manager</div>
        <router-link :to="{ name: 'team', params: { id: 7 } }">Research & Development</router-link>
        <div class="md-body">Open!</div>
        <!-- <div>Ref: 2021-48309</div> -->
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionRDM = true" class="md-accent">Learn More</md-button>
        <md-button href="https://careers.mskcc.org/jobs/job-details/2021-48309-manager-integrated-genomics-operations/" target="_blank" class="md-primary">Apply </md-button>
      </md-card-actions>
    </md-card>

    <md-card class="career-card">
      <md-card-header>
        <div class="md-title">Research Assistant</div>
        <router-link :to="{ name: 'team', params: { id: 3 } }">EXPAND Team</router-link>
        <div class="md-body">Open!</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionEXPANDRA = true" class="md-accent">Learn More</md-button>
        <md-button href="mailto:genomics@mskcc.org?subject=EXPAND Research Assistant" target="_blank" class="md-primary">Inquire </md-button>
      </md-card-actions>
    </md-card>

    <md-card class="career-card">
      <md-card-header>
        <div class="md-title">Research Assistant</div>
        <router-link :to="{ name: 'team', params: { id: 5 } }">Sequencing Team</router-link>
        <div class="md-body">Open!</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionSeqRA = true" class="md-accent">Learn More</md-button>
        <md-button href="https://careers.mskcc.org/jobs/job-details/2021-51799-research-assistant/" target="_blank" class="md-primary">Apply
        </md-button>
      </md-card-actions>
    </md-card>

    <md-card class="career-card">
      <md-card-header>
        <div class="md-title">Research Assistant</div>
        <router-link :to="{ name: 'team', params: { id: 4 } }">Nucleic Acid Team</router-link>
        <div class="md-body">Coming soon</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionNARA = true" class="md-accent">Learn More</md-button>
        <md-button href="mailto:genomics@mskcc.org?subject=NA Research Assistant" target="_blank" class="md-primary">Inquire </md-button>
      </md-card-actions>
    </md-card>

    <md-card class="career-card">
      <md-card-header>
        <div class="md-title">Senior Project Assistant</div>
        <router-link :to="{ name: 'team', params: { id: 2 } }">Sample & Project Mgmt Team</router-link>
        <div class="md-body">Coming soon</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionSPMSPA = true" class="md-accent">Learn More</md-button>
        <md-button href="mailto:genomics@mskcc.org?subject=SPM Senior Project Assistant" target="_blank" class="md-primary">Inquire </md-button>
      </md-card-actions>
    </md-card>

    <md-dialog :md-active.sync="showJobDescriptionNARA" :md-fullscreen="false" style="z-index: 400;">
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
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field with at least 3 years of relevant full-time experience or a Master's degree with 1-2 years full-time relevant experience.</li>
          <li>Previous exposure to NGS library preparation and Illumina sequencer loading is preferable.</li>
          <li>Strong organizational, prioritization, and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionNARA = false">Close</md-button>
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
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field.</li>
          <li>Previous exposure to NGS library preparation and Illumina sequencer loading is preferable.</li>
          <li>Strong organizational, prioritization, and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionNART = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionSPMSPA" :md-fullscreen="false" style="z-index: 400;">
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
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field.</li>
          <li>Experience handling DNA/RNA preferred.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSPMSPA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionRDM" :md-fullscreen="false" style="z-index: 400;">
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
          <li>A Ph.D. in molecular biology, biochemistry or a related discipline with at least 3 years of post-doctoral experience in an academic environment</li>
          <li>Experience working in experimental and computational genomic methodologies. A background in NGS assay development is highly desired. Experience with imaging technologies is a plus.</li>
          <li>Excellent interpersonal, written and oral communication skills</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionRDM = false">Close</md-button>
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
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field with at least 3 years of relevant full-time experience or a master’s degree with 1-2 years full-time relevant experience.</li>
          <li>Previous exposure to purifying nucleic acids for NGS platform, knowledge of digital PCR and experience with cells and FFPE samples is preferable.</li>
          <li>Strong organizational, prioritization and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionEXPANDRA = false">Close</md-button>
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
          <li>A Bachelor’s Degree in a Biological, Chemistry, or Science related field with at least 3 years of relevant full-time experience or a master’s degree with 1-2 years full-time relevant experience. </li>
          <li>Previous exposure to NGS library preparation and Illumina sequencer loading is preferable.</li>
          <li>Strong organizational, prioritization and time management skills.</li>
        </ul>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSeqRA = false">Close</md-button>
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
      showJobDescriptionSPMSPA: false,
      showJobDescriptionNARA: false,
      showJobDescriptionRDM: false,
      showJobDescriptionEXPANDRA: false,
      showJobDescriptionSeqRA: false,
      showJobDescriptionNART: false,
    };
  },
};
</script>

<style></style>
