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
                      <li>Fill out an iLab request for the appropriate application
                      <ul>
                        <li>DNA Extraction</li>
                        <li>RNA Extraction</li>
                        <li>DNA/RNA Simultaneous Extraction</li>
                      </ul></li>
                      <li><strong>FFPE curls/punches only:</strong> Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request AutoLys tubes.</li>
                      <li><strong>Tissue/cells in Eppendorf tubes only:</strong>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request Eppendorf tube labels</li>
                      <li>Submit the sample webform, selecting your <strong>downstream application</strong> (the type of sequencing or analysis you’ll eventually need)</li>
                      <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a>.</li>
                      <li>Wait for the e-mail from <a href="https://igo.mskcc.org/sample-qc">Sample QC</a> indicating your extraction and QC is complete</li>
                      <li>Fill out an iLab form for your desired downstream application (the one that you indicated on your sample webform), attaching the provided Excel document with the IGO IDs of the samples moving on after extraction</li>
                      <li><a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Samples to be moved downstream"> Email SPM </a>to move your samples downstream</li>
                    </ol>
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
                      <li>Fill out an iLab request for "ATAC Library Prep + Sequencing”</li>
                      <li><strong>If submitting viably frozen cells:</strong>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request Eppendorf tube labels</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a> indicating that you are submitting "Cells" for "ATACSeq"</li>
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
                <span class="md-list-item-text">Sorted cells for RNASeq-SMARTer</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for:
                        <ul>
                          <li>RNA Library Prep + Sequencing</li>
                        </ul></li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request a plate and reagents for your sort </li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting the appropriate application:
                        <ul>SMARTerAmpSeq</ul></li>
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
                      <li>Fill out an iLab request for:
                        <ul>
                          <li>Single Cell Library Prep + Sequencing</li>
                          <li>Direct Library Prep</li>
                        </ul></li>
                      <li><a :href="scCalendar" target="__blank">Make a reservation</a> for a time to bring your samples</li>
                      <li><strong>If submitting sorted cells for SmartSeq:</strong>
                        <ul>
                          <li><a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Reagents for PlateSeq">Contact SPM</a> to get 384-plates/reagents for sorting</li>
                        </ul></li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting the appropriate application:
                        <ul>
                          <!-- <li>96Well_SmartSeq2</li> -->
                          <li>10X_Genomics-GeneExpression-5 for 5' 10X, with or without VDJ/feature barcoding/cell hashing</li>
                          <li>10X_Genomics-GeneExpression-3 for 3' 10X, with or without feature barcoding/cell hashing</li>
                          <li>10X_Genomics_Multiome</li>
                          <li>DLP</li>
                          <li>SmartSeq</li>
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
                          <li>10X_Genomics_Visium</li>
                          <li>GeoMx</li>
                        </ul></li>
                      <li>Drop off your sample at MCC at the agreed-upon time</li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DNA for WES or Human/Mouse high-depth WGS</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for the appropriate application
                        <ul>
                          <li>Human Whole Exome Capture and Sequencing</li>
                          <li>Mouse Whole Exome Capture and Sequencing</li>
                          <li>Human or Mouse Whole Genome Library Prep + Sequencing</li>
                        </ul></li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request micronic barcoded tube(s).</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting the appropriate application:
                      <ul>
                        <li>WholeExomeSequencing</li>
                        <li>MouseWholeGenome</li>
                        <li>HumanWholeGenome</li>
                      </ul></li>
                      <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text">Cells or DNA for Cell Line Authentication</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                        <li>Fill out an iLab request for Cell Line Authentication & Fragment Analysis</li>
                        <li><strong>For DNA:</strong> Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request a plate.</li>
                        <li><strong>For cell pellets:</strong> Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request Eppendorf tube labels.</li>
                        <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting "CellLineAuthentication" as your application</li>
                        <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DNA for other applications</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for the appropriate application
                        <ul>
                          <li>ACCESS/CMO-CH & other UMI Library Prep for Capture</li>
                          <li>Amplicon Library Prep and Sequencing</li>
                          <li>Bacterial/yeast Whole Genome Library Prep and Sequencing for shotgun metagenomics or small-genome WGS</li>
                          <li>CRISPR Sequencing for IGO's CRISPRSeq service</li>
                          <li>ChIP/CUTandRUN Library Prep + Sequencing for library prep of immunoprecipitated DNA</li>
                          <li>IMPACT/Custom Capture and Sequencing</li>
                          <li>Mouse-IMPACT</li>
                          <li>Shallow Whole Genome Sequencing for Copy Number</li>
                          <li>Oxford Nanopore - Long Read DNA Seq</li>
                        </ul></li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request a plate.</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting the appropriate application:
                        <ul>
                          <li>AmpliconSeq</li>
                          <li>ChIPSeq</li>
                          <li>CRISPRSeq</li>
                          <li>CustomCapture</li>
                          <li>CustomFragmentAnalysis</li>
                          <li>CMO-CH</li>
                          <li>IMPACT505</li>
                          <li>M-IMPACT_v2</li>
                          <li>MSK-ACCESS_v1</li>
                          <li>ShallowWGS</li>
                          <li>WholeGenomeSequencing</li>
                          <li>ONT-LongReadDNASeq</li>
                        </ul></li>
                      <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">RNA for sequencing applications</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab request for the appropriate application
                        <ul>
                          <li>RNA Library Prep and Sequencing</li>
                          <li>TCRSeq-IGO</li>
                          <li>Oxford Nanopore - Long Read RNA/cDNA Sequencing</li>
                        </ul></li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request a plate.</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting the appropriate application:
                        <ul>
                          <li>RNASeq_PolyA</li>
                          <li>RNASeq_RiboDeplete</li>
                          <li>SMARTerAmpSeq</li>
                          <li>TCRSeq-IGO</li>
                          <li>ONT-DirectRNASeq</li>
                          <li>ONT-LongReadcDNASeq</li>
                          <li>RNA_Capture</li>
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
                      <li>Fill out an iLab request for "Investigator Prepared Libraries/Pools for Sequencing”</li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request a plate.</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting “DNA Library” as your material and choosing the application that best describes your platform.</li>
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
                      <li>Fill out an iLab request for “Investigator Prepared Libraries/Pools for Sequencing”</li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request micronic barcoded tube(s) for your pool(s)</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting “Pooled Library” as your material and choosing the application that best describes your platform.</li>
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
                          <li>Digital PCR</li>
                          <li>IMPACT/Custom Capture and Sequencing</li>
                          <li>Human Whole Exome Capture and Sequencing</li>
                          <li>Human or Mouse Whole Genome Library Prep & Sequencing</li>
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
                      <li>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request a micronic barcoded tube(s) for your positive control(s).</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a> for your positive control</li>
                      <li>E-mail farinaa@mskcc.org to coordinate sample drop off for your assay optimization</li>
                      <li>Follow the instructions under “DNA or RNA for ddPCR” <strong>or</strong> “Tissue, cells, slides, or other material for nucleic acid extraction”</li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DNA/RNA for ddPCR</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Make sure that your desired assay is in stock</li>
                      <li>Fill out an iLab request for “Digital PCR”</li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request a plate.</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a></li>
                      <li>Schedule a sample drop off time on the <a :href="spmCalendar" target="__blank">Sample Receiving & Project Management Calendar</a></li>
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
                      <li>Fill out an iLab request for “Quality Control for Nucleic Acids”</li>
                      <li>Schedule a <a :href="spmCalendar" target="__blank">'Sample Container Pick Up' appointment</a> to request a plate.</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a></li>
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
