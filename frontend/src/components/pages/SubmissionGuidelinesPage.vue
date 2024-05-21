<template>
  <div>
    <!-- <div class="md-display-1">Submitting a Project</div> -->
    <md-card class="data-delivery-card">
      <md-card-content>
        <md-card-header>
          <div class="md-subheading">
            <p>If this is your first time submitting, please see our detailed instructions below.</p>
            <p>Need more help? Please take a look at our <router-link :to="{ name: 'show video', params: { name: 'howToSubmit_v1' } }">How to Submit Samples video</router-link></p>
          </div>
        </md-card-header>
        <div>
          <div class="md-subheading">Prepare submission:</div>
          <ol>
            <li><a href="https://my.ilabsolutions.com/account/saml/mskcc" target="__blank">Submit an iLab request</a> for the desired application.</li>
            <li>If submitting DNA, RNA, library, amplicons, FFPE curls, or cells/tissue in Eppendorf tubes, schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to pick up a plate, micronic barcoded tubes, AutoLys tubes, or Eppendorf barcodes.</li>
            <li>Complete the <a href="https://igo.mskcc.org/sample-submission" target="__blank">sample submission form</a> indicating the sample specific information.</li>
          </ol>
        </div>
        <div>
          <div class="md-subheading">Ready to drop off samples:</div>
          <ol>
            <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a>.</li>
            <li>Bring your samples to the 7th floor of Schwartz at your scheduled time and place them in the marked area. Wait with the samples while IGO staff confirms the sample set. If you are running late and a lab member is no longer at the receiving desk, please refrain from entering the lab and call 212-639-2953 (212-639-2986 for fresh single cell) to notify us of your arrival.<br /><br />Any follow-up inquiries will be handled by e-mail or phone.</li>
            <div></div>
          </ol>
        </div>
        <!-- <md-button @click="toggle">Instructions for submitting COVID19 Requests</md-button>
        <covid-instructions-page v-if="covid"></covid-instructions-page> -->
        <div id="sample-guidelines">
          <div class="list">
            <md-list>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Tissue, cells, slides, or other material for nucleic acid extraction</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li><router-link :to="{ name: 'tissue' }">Check</router-link> our accepted preservation types and recommendations for DNA & RNA extraction</li>
                      <li>Fill out an iLab request for Nucleic Acid Extraction -- please note that you can now submit your material directly for most applications and select the extraction option on the iLab form, so extraction requests should only be used when you are picking up the material, testing yield or quality, have a dual extraction, are unsure of the downstream application, or plan to batch samples extracted at different times</li>
                      <li><strong>FFPE curls/punches only:</strong> Schedule a <a :href="spmCalendar" target="__blank">Sample Container Pick Up appointment</a> to request AutoLys tubes.</li>
                      <li><strong>Tissue/cells in Eppendorf tubes only:</strong> Schedule a <a :href="spmCalendar" target="__blank">Sample Container Pick Up appointment</a> to request Eppendorf tube labels</li>
                      <li>Submit the sample webform, selecting your <strong>downstream application</strong> (the type of sequencing or analysis you’ll eventually need) if you know it. If you do not know your downstream application, do not have a downstream application, or have multiple downstream applications, select the appropriate application:
                      <ul>
                        <li>cfDNA Extraction</li>
                        <li>DNA Extraction</li>
                        <li>Dual DNA/RNA Extraction</li>
                        <li>RNA Extraction</li>
                      </ul></li>
                      <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a>.</li></ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Cells for ATAC-Seq</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">Note: if you have never run ATAC-Seq on your cell type, please e-mail genomics@mskcc.org to discuss an optimization of the transposition conditions.</md-list-item>
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for <strong>ATAC Sequencing</strong></li>
                      <li><strong>If submitting viably frozen cells:</strong>Schedule a <a :href="spmCalendar" target="__blank">Sample Container Pick Up appointment</a> to request Eppendorf tube labels</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a> indicating that you are submitting <strong>Cells</strong> for <strong>ATAC Sequencing</strong></li>
                      <li><strong>If submitting fresh cells:</strong>
                        <ul>
                          <li><a :href="spmCalendar" target="__blank">Make a reservation</a> to bring your samples (Mondays only)</li>
                          <li>Bring 50-100K live cells suspended in 300-350&mu;L PBS or their favored medium in a 1.5mL <strong>V-bottom</strong> Eppendorf tube</li>
                        </ul></li>
                      <li><strong>If submitting viably frozen cells:</strong>
                        <ul>
                          <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                          <li>Freeze your 50-100K cells in 300-500&mu;L 10% DMSO in a 1.5mL Eppendorf tube</li>
                        </ul></li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text">Bulk RNASeq with SMARTer amplification directly from sorted cells</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for <strong>RNA Library Prep</strong></li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">Sample Container Pick Up appointment</a> to request a plate and reagents for your sort </li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, indicating that you are submitting <strong>Cells</strong> for <strong>SMARTer from Cells</strong></li>
                      <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Cells or nuclei for single cell sequencing</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for <strong>Single Cell Library Prep</strong></li>
                      <li><a :href="scCalendar" target="__blank">Make a reservation</a> for a time to bring your samples</li>
                      <li><strong>If submitting sorted cells for SmartSeq:</strong> <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Reagents for PlateSeq">Contact SPM</a> to get 384-plates/reagents for sorting</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting the appropriate application:
                        <ul>
                          <li>3' 10X scRNA-Seq for GEX analysis with or without feature barcoding/cell hashing</li>
                          <li>5' 10X scRNA-Seq for GEX analysis with or without VDJ/feature barcoding/cell hashing</li>
                          <li>10X Multiome</li>
                          <li>DLP+</li>
                          <li>SmartSeq (384-well)</li>
                        </ul></li>
                      <li><strong>If submitting nuclei for 10X Multiome:</strong> <a href="mailto:zzPDL_SKI_IGO_SingleCell@mskcc.org?subject=Nuclei buffer">Contact us</a> to get an aliquot of nuclei preservation buffer</li>
                      <li><strong>If submitting frozen cells for SmartSeq:</strong> Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Tissue for spatial transcriptomics</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li><a href="mailto:mccf@mskcc.org">Contact MCC</a> to discuss your sample preparation needs</li>
                      <li>Fill out an iLab request for Spatial Transcriptomics</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting the appropriate application:
                        <ul>
                          <li>Visium</li>
                          <li>GeoMx</li>
                        </ul></li>
                      <li>Drop off your sample at MCC at the agreed-upon time</li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DNA for WES, high-depth WGS, and/or PCR-free WGS</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for the appropriate application
                        <ul>
                          <li>Whole Exome Sequencing</li>
                          <li>Whole Genome Sequencing</li>
                        </ul></li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">Sample Container Pick Up appointment</a> to request micronic barcoded tubes</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting the appropriate application:
                      <ul>
                        <li>Whole Exome Sequencing</li>
                        <li>Mouse Whole Exome Sequencing</li>
                        <li>Whole Genome Sequencing (deep or PCR-free)</li>
                      </ul></li>
                      <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DNA or RNA for other applications</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for the appropriate application
                        <ul>
                          <li>DNA Library Preparation for amplicons, ChIP, CUT&RUN, and CRISPR</li>
                          <li>Fragment Analysis for cell line authentication, fingerprinting, or custom FA</li>
                          <li>Hybridization Capture for IMPACT, ACCESS, CMO-CH, or custom capture</li>
                          <li>Whole Genome Sequencing for metagenomics or shallow WGS</li>
                          <li>Nanopore Sequencing for long read or other ONT sequencing</li>
                          <li>RNA Library Prep for all RNA-Seq applications</li>
                          <li>TCR Sequencing</li>
                          <li>Digital Droplet PCR</li>
                        </ul></li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request a plate.</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting the appropriate application:
                        <ul>
                          <li>MSK-ACCESS</li>
                          <li>CMO-CH</li>
                          <li>Custom Capture</li>
                          <li>IMPACT</li>
                          <li>IMPACT-Heme</li>
                          <li>Mouse IMPACT</li>
                          <li>Amplicon Sequencing</li>
                          <li>ChIP Sequencing</li>
                          <li>CUT&RUN Sequencing</li>
                          <li>Single Cell CNV Sequencing</li>
                          <li>Custom Fragment Analysis</li>
                          <li>Tumor/Normal Fingerprinting</li>
                          <li>Nanopore Long Read DNA Sequencing</li>
                          <li>Nanopore Short Read DNA Sequencing</li>
                          <li>Metagenomic Sequencing</li>
                          <li>Shallow Whole Genome Sequencing</li>
                          <li>RNA Seq - PolyA</li>
                          <li>RNA Seq - RiboDeplete</li>
                          <li>RNA Seq - SMARTer</li>
                          <li>TCR Sequencing</li>
                          <li>Nanopore cDNA Sequencing</li>
                          <li>RNA Capture</li>
                          <li>ddPCR</li>
                        </ul></li>
                      <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Individual libraries for sequencing</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li><strong>If you are submitting for the first time or submitting a new construct:</strong> e-mail genomics@mskcc.org with your protocol, a link to your reference, your primer barcodes, or a schematic of your construct</li>
                      <li>Fill out an iLab request for <strong>User Prepared Libraries</strong></li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">Sample Container Pick Up appointment</a> to request a plate.</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting <strong>DNA/cDNA Library</strong> as your material and choosing the application that best describes your platform.</li>
                      <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Pooled libraries for sequencing</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li><strong>If you are submitting for the first time or submitting a new construct:</strong> e-mail genomics@mskcc.org with your protocol, a link to your reference, your primer barcodes, or a schematic of your construct</li>
                      <li>Fill out an iLab request for <strong>User Prepared Libraries</strong></li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">Sample Container Pick Up appointment</a> to request micronic barcoded tube(s) for your pool(s)</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting <strong>Pooled Library</strong> as your material and choosing the application that best describes your platform.</li>
                      <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DMP DNA or libraries for IGO processing</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission/#/sample-submission/dmp">DMP sample transfer webform</a></li>
                      <li>Complete the <a href="https://redcap.mskcc.org/surveys/?s=3MDAEWTYXK">MSKCC Tumor Genomic Profiling Project Proposal</a> using the transaction ID generated in step 1</li>
                      <li>
                        Fill out an iLab form
                        <ul>
                          <li>Digital Droplet PCR</li>
                          <li>Hybridization Capture for IMPACT, ACCESS, or custom capture</li>
                          <li>Whole Exome Sequencing</li>
                          <li>Whole Genome Sequencing</li>
                        </ul>
                      </li>
                      <li>Your CMO Project Manager will communicate your next steps based on your project!</li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Design or order a new assay for ddPCR</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for “Digital PCR Assay Design”, listing the assay(s) needed and/or attaching the appropriate design file</li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">Sample Container Pick Up appointment</a> to request a micronic barcoded tube(s) for your positive control(s).</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a> for your positive control</li>
                      <li>E-mail farinaa@mskcc.org to coordinate sample drop off for your assay optimization</li>
                      <li>Follow the instructions under “DNA or RNA for ddPCR” <strong>or</strong> “Tissue, cells, slides, or other material for nucleic acid extraction”</li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DNA/RNA/Library for quality control by Quant-it or Agilent BioAnalyzer or TapeStation</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for <strong>Quality Control for Nucleic Acids</strong></li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">Sample Container Pick Up appointment</a> to request a plate.</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>:
                      <ul>
                        <li>DNA QC</li>
                        <li>RNA QC</li>
                        <li>Library QC</li>
                        </ul></li>
                      <li>Schedule a sample drop off time on the<a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                    </ol>
                  </md-list-item>
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
import { SPM_CALENDAR, SC_CALENDAR } from './../../config.js';

export default {
  name: 'SubmissionGuidelinesPage',
  data: function() {
    return {
      spmCalendar: SPM_CALENDAR,
      scCalendar: SC_CALENDAR,
    };
  },
  components: {},
  methods: {
    // whatIsthis() {
    //   if (document.querySelector('#this-page')) {
    //     console.log(this);
    //   }
    // },
    // toggle() {
    //   this.covid = !this.covid;
    // },
  },
};
</script>

<style></style>
