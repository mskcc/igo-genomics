<template>
  <div id="sample-guidelines">
    <!-- <div class="md-display-1">Submitting a Project</div> -->
    <md-card class="data-delivery-card">
      <md-card-content>
        <md-card-header>
          <div class="md-subheading">
            <p>If this is your first time submitting, please see our detailed instructions below.</p>
            To maintain social distancing and ensure the safety of our employees and users, we will use an alternative submission protocol
            until further notice. Please follow these directions and <strong>do not enter the lab space:</strong>
          </div>
        </md-card-header>
        <div>
          <div class="md-subheading">Prepare submission:</div>
          <ol>
            <li><a href="https://my.ilabsolutions.com/account/saml/mskcc">Submit an iLabs request</a> for the desired application.</li>
            <li>
              Pick up a sample container outside Z320 (if submitting DNA, RNA, or NGS Libraries/Pools).
              <div>
                Please visually check that the barcode of the plate matches your submission.
                <ul>
                  <li>MSK-DNA-XX#### for DNA</li>
                  <li>MSK-RNA-X####X for RNA</li>
                  <li>MSK-LIB-####XX for Libraries</li>
                  <li>CRISPR-XX#### for CRISPR Amplicons</li>
                </ul>
              </div>
            </li>
            <li>
              Complete the <a href="https://igo.mskcc.org/sample-submission">sample submission form</a> indicating the sample specific
              information.
            </li>
          </ol>
        </div>
        <div>
          <div class="md-subheading">Ready to drop off samples:</div>
          <ol>
            <li>
              <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Schedule Sample Dropoff"
                >Email the Sample and Project Management Team (SPM)
              </a>
              your iLab service ID to coordinate a sample drop off window. Do not bring your samples unless you have a confirmed time. If
              you are unable to make your appointment please email zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org to reschedule.
            </li>
            <li>
              Bring your samples to the 3rd floor of Zuckerman at your assigned time and place them in the marked area. Wait by the elevator
              bank while IGO staff confirms the sample set. If you are running late and a lab member is no longer at the receiving desk,
              please refrain from entering the lab and call 646-888-3856 to notify us of your presence.<br /><br />Any follow-up inquiries
              will be handled by e-mail or phone.
            </li>
            <div></div>
          </ol>
        </div>
        <!-- <md-button @click="toggle">Instructions for submitting COVID19 Requests</md-button>
        <covid-instructions-page v-if="covid"></covid-instructions-page> -->
        <div class="full-control">
          <div class="list">
            <md-list>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text md-title">Tissue, cells, slides, or other material for nucleic acid extraction</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for the appropriate application</li>
                      <ul>
                        <li>DNA Extraction</li>
                        <li>RNA Extraction</li>
                        <li>DNA/RNA Simultaneous Extraction</li>
                      </ul>
                      <li>
                        Submit the sample webform, selecting your <strong>downstream application</strong> (the type of sequencing or
                        analysis you’ll eventually need)
                      </li>
                      <li>
                        Wait for the e-mail from <a href="https://igo.mskcc.org/sample-qc">Sample QC</a> indicating your extraction and QC
                        is complete
                      </li>
                      <li>
                        Fill out an iLab form for your desired application (the one that you indicated on your sample webform), attaching
                        the provided Excel document with the IGO IDs of the samples moving on after extraction
                      </li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Samples to be moved downstream">
                          Email SPM </a
                        >to move your samples downstream
                      </li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text md-title">Tissue or cells for COVID screening</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Submit an iLab request for “RNA Extraction for COVID Screening”</li>
                      <li>
                        Complete the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting “COVID19” as your
                        application
                      </li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Samples to be moved downstream">
                          Email SPM </a
                        >to schedule a time to bring your samples
                      </li>
                      <ul>
                        <li><strong>Cells</strong> should be suspended in >250µL 100% PBS and dropped off Wednesday before 10am</li>
                        <li><strong>Tissue</strong> should be dropped off Tuesday before 11am</li>
                      </ul>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text md-title">Cells for ATAC-Seq</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>
                        <strong> If submitting fresh cells:</strong> e-mail patelr1@mskcc.org to schedule a time to bring your samples
                      </li>
                      <li>Fill out an iLab form for “Epigenetic Library Prep + Sequencing”</li>
                      <li>Submit the sample webform</li>
                      <li><strong>If submitting viably frozen cells:</strong> e-mail SPM to set up a time to bring your samples to IGO</li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text md-title">Cells for 10X Genomics single cell sequencing</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">World</md-list-item>
                  <md-list-item class="md-inset">Europe</md-list-item>
                  <md-list-item class="md-inset">South America</md-list-item>
                </md-list>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
// import CovidInstructionsPage from "./CovidInstructionsPage.vue";

export default {
  name: "SubmissionGuidelinesPage",
  data: function() {
    return {};
  },
  components: {},
  methods: {
    whatIsthis() {
      if (document.querySelector("#this-page")) {
        console.log(this);
      }
    },
    // toggle() {
    //   this.covid = !this.covid;
    // },
  },
};
</script>

<style></style>
