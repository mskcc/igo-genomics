<template>
  <div id="job-descriptions">
    <md-card class="news-card">
      <md-card-header>
        <div class="md-title">Supervisor</div>
        <router-link :to="{ name: 'team', params: { id: 7 } }">Research & Development</router-link>
        <div class="md-body">Open!</div>
        <!-- <div>Ref: 2021-48309</div> -->
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionRDM = true" class="md-accent">Learn More</md-button>
        <md-button
          href="https://careers.mskcc.org/jobs/job-details/2021-48309-manager-integrated-genomics-operation/?returnUrl=%2fjobs%3fkeyword%3digo%26department%3d%26location%3d"
          target="_blank"
          class="md-primary"
          >Apply
        </md-button>
      </md-card-actions>
    </md-card>

    <md-card class="news-card">
      <md-card-header>
        <div class="md-title">Research Assistant</div>
        <router-link :to="{ name: 'team', params: { id: 4 } }">Library Preparation Team</router-link>
        <div class="md-body">Open!</div>
        <!-- <div>Ref: 2021-48368</div> -->
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionERA = true" class="md-accent">Learn More</md-button>
        <md-button
          href="https://careers.mskcc.org/jobs/job-details/2021-48368-research-assistant-integrated-genomics-operation/?returnUrl=%2fjobs%3fkeyword%3digo%26department%3d%26location%3d"
          target="_blank"
          class="md-primary"
          >Apply
        </md-button>
      </md-card-actions>
    </md-card>

    <md-card class="news-card">
      <md-card-header>
        <div class="md-title">Research Assistant</div>
        <router-link :to="{ name: 'team', params: { id: 3 } }">Extraction Team</router-link>
        <div class="md-body">Available soon!</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescription42946 = true" class="md-accent">Learn More</md-button>
        <md-button
          disabled
          href="https://internaltalent-mskcc.icims.com/jobs/48368/research-assistant---integrated-genomics-operation/job"
          target="_blank"
          class="md-primary"
          >Apply
        </md-button>
      </md-card-actions>
    </md-card>

    <md-card class="news-card">
      <md-card-header>
        <div class="md-title">Senior Project Assistant</div>
        <router-link :to="{ name: 'team', params: { id: 2 } }">Sample & Project Mgmt Team</router-link>
        <div class="md-body">Available soon!</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="showJobDescriptionSPA = true" class="md-accent">Learn More</md-button>
        <md-button
          disabled
          href="https://internaltalent-mskcc.icims.com/jobs/47699/senior-research-project-manager---center-for-molecular-oncology/job"
          target="_blank"
          class="md-primary"
          >Apply
        </md-button>
      </md-card-actions>
    </md-card>

    <md-dialog :md-active.sync="showJobDescriptionERA" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Research Assistant in the Library Preparation Team, you will:</strong>
        <ul>
          <li>Prepare DNA and RNA libraries for NGS following established SOPs.</li>
          <li>Prepare reagents and set up runs for robots.</li>
          <li>Assist group leader to create an efficient and error-proof workflow – and troubleshoot data accordingly.</li>
          <li>Maintain the high-quality standards that IGO has for its services.</li>
          <li>Communicate with vendor technical support and sales representatives.</li>
          <li>Maintain and coordinate documentation for assay tracking and results for review/reporting through iLabs and LIMS.</li>
        </ul>

        <strong>You have:</strong>
        <ul>
          <li>
            A Bachelor’s Degree in a Biological, Chemistry, or Science related field with at least 3 years of relevant full-time experience
            or a master’s degree with 1-2 years full-time relevant experience.
          </li>
          <li>Previous exposure to making libraries for NGS platform, manually and automated is preferable.</li>
          <li>Strong organizational, prioritization and time management skills.</li>
        </ul>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionERA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionSPA" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Senior Research Project Assistant, you will:</strong>
        <ul>
          <li>
            Participate in meetings with investigators to understand the scope of projects and effectively communicate the services provided
            by IGO
          </li>
          <li>
            Review all submissions for correctness and completeness, and work with project managers to guide investigators through
            processing decisions that are in line with the goals of their projects.
          </li>
          <li>Analyze quantity and quality of samples using various instruments and communicate results electronically.</li>
          <li>
            Utilize the LIMS (Laboratory Information Management System) effectively to ensure the downstream processing team has relevant
            and up-to-date information.
          </li>
          <li>Investigate unexpected outputs and provide information to IGO leadership and investigators.</li>
          <li>Receive samples from outside institutions and use liquid handling automation to aliquot nucleic acid materials.</li>
          <li>Work closely with staff from IGO and the CMO and maintain open and proactive lines of communication.</li>
        </ul>

        <strong>You have:</strong>
        <ul>
          <li>
            A Bachelor’s Degree in a Biological, Chemistry, or Science related field.
          </li>
          <li>Experience handling DNA/RNA preferred.</li>
        </ul>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionSPA = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescriptionRDM" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>You are:</strong>
        <ul>
          <li>
            A highly experienced and skilled molecular biologist with sharp focus, attention to detail and good decision-making skills
          </li>
          <li>
            Able to maintain detailed records of all experiments, drafts of technical procedures and written summaries pertaining to
            research work
          </li>
          <li>
            A quick learner and strong problem-solver who sees the forest and the trees and is able to quickly identify anomalies in data
            and uncover their source
          </li>
          <li>
            Adept at multitasking, planning, prioritizing and re-prioritizing work to meet goals and commitments with minimal direction in a
            multifaceted environment
          </li>
          <li>
            A highly motivated person capable of building positive relationships within the lab and with internal and external collaborators
            including data analysts
          </li>
          <li>
            Someone with a strong background of mentorship who is interested in the success of others and willing to evaluate performance
            and provide feedback as a manager
          </li>
          <li>
            An outstanding communicator and clear presenter, capable of determining how best to reach different audiences and executing
            communications based on that understanding whether it be internal lab meetings or institutional seminars
          </li>
          <li>
            A creative thinker who engages in thinking outside the box and has an appreciation for the “business” aspect of working at the
            core
          </li>
          <li>Consistently achieving results, even under tough circumstances</li>
        </ul>

        <strong>You need!</strong>
        <ul>
          <li>
            A Ph. D. in molecular biology, biochemistry or a related discipline with at least 3 years of post-doctoral experience in an
            academic environment
          </li>
          <li>
            Experience working in experimental and computational genomic methodologies. A background in NGS assay development is highly
            desired. Experience with imaging technologies is a plus.
          </li>
          <li>Excellent interpersonal, written and oral communication skills</li>
        </ul>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescriptionRDM = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showJobDescription42946" :md-fullscreen="false" style="z-index: 400;">
      <md-dialog-content md-dynamic-height>
        <strong>As a Research Assistant in the Extraction Team, you will:</strong>
        <ul>
          <li>
            Extract nucleic acids from a variety of biomaterial (fresh frozen and formalin-fixed paraffin embedded tissue, cell line, blood,
            plasma, serum, saliva, nails, etc)
          </li>
          <li>Perform quality assurance and quality control of extracted material</li>
          <li>
            Process samples for droplet digital PCR projects. This includes assays design and optimization, sample processing and data
            curation.
          </li>
          <li>Prepare DNA libraries for NGS following established SOPs</li>
          <li>Work with your team to create workflow following LEAN principles.</li>
          <li>Communicate with vendor technical support and sales representatives.</li>
          <li>Operate liquid handlers and robotic instrument for high throughput processing</li>
          <li>Maintain accurate and detailed records in a Laboratory Information Management System (Examplar Sapio LIMS)</li>
          <li>Use iLAB for billing purposes</li>
        </ul>

        <strong>You have:</strong>
        <ul>
          <li>
            A Bachelor’s Degree in a Biological, Chemistry, or Science related field with at least 3 years of relevant full-time experience
            or a master’s degree with 1-2 years full-time relevant experience.
          </li>
          <li>
            Previous exposure to purifying nucleic acids for NGS platform, knowledge of digital PCR and experience with cells and FFPE
            samples is preferable.
          </li>
          <li>Strong organizational, prioritization and time management skills.</li>
        </ul>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescription42946 = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: 'JobDescriptions',
  data: function() {
    return {
      showJobDescriptionERA: false,
      showJobDescriptionSPA: false,
      showJobDescriptionRDM: false,
      showJobDescription42946: false,
    };
  },
};
</script>

<style></style>
