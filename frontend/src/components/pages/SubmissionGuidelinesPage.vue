<template>
  <div id="this-page">
    <!-- <div class="md-display-1">Submitting a Project</div> -->
    <md-card class="data-delivery-card">
      <md-card-content>
        <md-card-header>
          <div class="md-subheading">
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
                >Email the Sample and Project Management Team
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
        <md-button @click="toggle">Instructions for submitting COVID19 Requests</md-button>
        <covid-instructions-page v-if="covid"></covid-instructions-page>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import CovidInstructionsPage from "./CovidInstructionsPage.vue";

export default {
  name: "SubmissionGuidelinesPage",
  data: function() {
    return { covid: false };
  },
  components: { CovidInstructionsPage },
  methods: {
    whatIsthis() {
      if (document.querySelector("#this-page")) {
        console.log(this);
      }
    },
    toggle() {
      this.covid = !this.covid;
    },
  },
};
</script>

<style></style>
