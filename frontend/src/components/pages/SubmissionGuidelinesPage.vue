<template>
  <div>
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
              <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Container Pick Up"
                >E-mail the Sample & Project Management team
              </a>
              or call 646-888-3856 to pick up a plate or micronic barcoded tubes outside Z320 for submission.
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
        <div id="sample-guidelines" class="full-control">
          <div class="list">
            <md-list>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Tissue, cells, slides, or other material for nucleic acid extraction</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li><router-link :to="{ name: 'tissue' }">Check</router-link> our accepted preservation types and recommendations for DNA & RNA extraction</li>
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
                        E-mail <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Schedule Sample Dropoff">the Sample and Project Management Team</a> to schedule a time to bring your samples to IGO
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
                <span class="md-list-item-text ">Tissue or cells for COVID screening</span>
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
                        >to schedule a time to bring your samples -- note that COVID screening is only run on Wednesdays
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
                <span class="md-list-item-text ">Cells for ATAC-Seq</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">Note: if you have never run ATAC-Seq on your cell type, please e-mail genomics@mskcc.org to discuss an optimization of the transposition conditions.</md-list-item>
                  <md-list-item class="md-inset">
                    <ol>
                      <li>Fill out an iLab form for “Epigenetic Library Prep + Sequencing”</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a> indicating that you are submitting "Cells" for "ATACSeq"</li>
                      <li><strong>If submitting fresh cells:</strong> 
                      <ul>
                        <li><router-link :to="{ name: 'reservations' }"> Make a reservation</router-link> to bring your samples (Thursdays only)</li>
                        <li>Bring 50K live cells suspended in 300-350&mu;L PBS or their favored medium in a 1.5mL <strong>V-bottom</strong> Eppendorf tube</li>
                      </ul>
                      </li>
                      <li>
                        <strong>If submitting viably frozen cells:</strong>
                      <ul>
                        <li><a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org"> email SPM </a>to set up a time to bring your samples to IGO</li>
                        <li>Freeze your 50K cells in 300-500&mu;L 10% DMSO in a 1.5mL Eppendorf tube</li>
                      </ul>
                      </li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Cells for 10X Genomics single cell sequencing</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>
                        <a href="https://genomics.mskcc.org/reservations">Make a reservation</a> for a time to bring your samples – the
                        system will block off three hours for processing<br /><strong>Note:</strong> 10X ATAC projects should select morning
                        drop-offs only
                      </li>
                      <li>Fill out an iLab request for “Single Cell Library Prep + Sequencing”</li>
                      <li>
                        Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting the appropriate 10X
                        Genomics application
                        <ul>
                          <li>10X_Genomics-Expression+VDJ</li>
                          <li>10X_Genomics-GeneExpression-5</li>
                          <li>10X_Genomics-GeneExpression-3</li>
                          <li>10X_Genomics-ATAC</li>
                        </ul>
                      </li>
                      <li>Bring your single-cell or single-nuclei suspension to IGO at the designated time</li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Tissue for 10X Genomics Visium</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset"
                    ><ol>
                      <li>Contact MCC to discuss your needs to schedule your sample drop off</li>
                      <li>Fill out an iLab form for “10x Visium – Spatial Transcriptomics”</li>
                      <li>
                        Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a> with “10X_Genomics-Visium” as your
                        application
                      </li>
                      <li>Drop off your sample at MCC at the agreed-upon time</li>
                    </ol></md-list-item
                  >
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DNA for WES or Human/Mouse WGS</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset"
                    ><ol>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Container Pick Up"
                          >E-mail the Sample & Project Management team
                        </a>
                        or call 646-888-3856 to pick up micronic barcoded tubes outside Z320 for submission.
                      </li>
                      <li>
                        Fill out an iLab request for the appropriate application
                        <ul>
                          <li>Whole Exome Capture and Sequencing</li>
                          <li>Human or Mouse – Whole Genome Sequencing</li>
                        </ul>
                      </li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a></li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org"> Email SPM </a>to schedule a time to bring
                        your samples
                      </li>
                    </ol></md-list-item
                  >
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DNA for other applications</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset"
                    ><ol>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Container Pick Up"
                          >E-mail the Sample & Project Management team </a
                        >or call 646-888-3856 to pick up a plate outside Z320 for submission.
                      </li>
                      <li>
                        Fill out an iLab request for the appropriate application
                        <ul>
                          <li>Adaptive immunoSEQ</li>
                          <li>CRISPR Sequencing</li>
                          <li>EPIC MethylCapture Seq</li>
                          <li>Epigenetic Library Prep + Sequencing</li>
                          <li>IMPACT/HemePACT/Custom Capture and Sequencing</li>
                          <li>Library Prep and Illumina Next-Gen Sequencing</li>
                          <li>Mouse-IMPACT</li>
                          <li>Shallow Whole Genome Sequencing for Copy Number</li>
                          <li>Digital PCR</li>
                          <li>Fragment Analysis</li>
                        </ul>
                      </li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a></li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org"> Email SPM </a>to schedule a time to bring
                        your samples
                      </li>
                    </ol></md-list-item
                  >
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">RNA for sequencing applications</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset"
                    ><ol>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Container Pick Up"
                          >E-mail the Sample & Project Management team </a
                        >or call 646-888-3856 to pick up a plate outside Z320 for submission.
                      </li>
                      <li>
                        Fill out an iLab request for the appropriate application
                        <ul>
                          <li>Archer Panel Sequencing</li>
                          <li>RNA Library Prep and Sequencing</li>
                        </ul>
                      </li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a></li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org"> Email SPM </a>to schedule a time to bring
                        your samples
                      </li>
                    </ol></md-list-item
                  >
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Individual libraries for sequencing</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset"
                    ><ol>
                      <li>
                        <strong>If you are submitting for the first time or submitting a new construct:</strong> e-mail genomics@mskcc.org
                        with your protocol, a link to your reference, your primer barcodes, or a schematic of your construct
                      </li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Container Pick Up"
                          >E-mail the Sample & Project Management team </a
                        >or call 646-888-3856 to pick up a plate outside Z320 for submission.
                      </li>
                      <li>
                        Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting “DNA Library” as your
                        material
                      </li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org"> Email SPM </a>to schedule a time to bring
                        your samples
                      </li>
                    </ol></md-list-item
                  >
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Pooled libraries for sequencing</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset">
                    <ol>
                      <li>
                        <strong>If you are submitting for the first time or submitting a new construct:</strong> e-mail genomics@mskcc.org
                        with your protocol, a link to your reference, your primer barcodes, or a schematic of your construct
                      </li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org"> Email SPM </a>to get a micronic tube for
                        your pool
                      </li>
                      <li>Fill out an iLab request for “User Libraries for Sequencing”</li>
                      <li>
                        Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting “Pooled Library” as your
                        material
                      </li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org"> Email SPM </a>to schedule a time to bring
                        your samples
                      </li>
                    </ol>
                  </md-list-item>
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DMP libraries for capture</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset"
                    ><ol>
                      <li>
                        Fill out an iLab form
                        <ul>
                          <li>IMPACT/HemePACT/Custom Capture and Sequencing</li>
                          <li>Whole Exome Capture and Sequencing</li>
                        </ul>
                      </li>
                      <li>
                        Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a>, selecting DNA Library” as your
                        material
                      </li>
                      <li>E-mail your CMO Project Manager to initiate sample transfer from the DMP</li>
                    </ol></md-list-item
                  >
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">Design or order a new assay for ddPCR</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset"
                    ><ol>
                      <li>
                        Fill out an iLab request for “Digital PCR Assay Design”, listing the assay(s) needed and/or attaching the
                        appropriate design file
                      </li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org">Email SPM</a> to get a micronic tube for your
                        positive control(s)
                      </li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a> for your positive control</li>
                      <li>E-mail farinaa@mskcc.org to coordinate sample drop off for your assay optimization</li>
                      <li>
                        Follow the instructions under “DNA or RNA for ddPCR” <strong>or</strong> “Tissue, cells, slides, or other material
                        for nucleic acid extraction”
                      </li>
                    </ol></md-list-item
                  >
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text ">DNA/RNA for ddPCR</span>
                <md-list slot="md-expand">
                  <md-list-item class="md-inset"
                    ><ol>
                      <li>Make sure that your desired assay is in stock</li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Container Pick Up"
                          >E-mail the Sample & Project Management team </a
                        >or call 646-888-3856 to pick up a plate outside Z320 for submission.
                      </li>
                      <li>Fill out an iLab request for “Digital PCR”</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a></li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org"> Email SPM </a>to schedule a time to bring
                        your samples
                      </li>
                    </ol></md-list-item
                  >
                </md-list>
              </md-list-item>
              <md-list-item md-expand>
                <md-icon>add</md-icon>
                <span class="md-list-item-text "
                  >DNA/RNA/Library for quality control by Quant-it or Agilent BioAnalyzer or TapeStation</span
                >
                <md-list slot="md-expand">
                  <md-list-item class="md-inset"
                    ><ol>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Container Pick Up"
                          >E-mail the Sample & Project Management team </a
                        >or call 646-888-3856 to pick up a plate outside Z320 for submission.
                      </li>
                      <li>Fill out an iLab request for “Quality Control for Nucleic Acids”</li>
                      <li>Submit the <a href="https://igo.mskcc.org/sample-submission">sample webform</a></li>
                      <li>
                        <a href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org"> Email SPM </a>to schedule a time to bring
                        your samples
                      </li>
                    </ol></md-list-item
                  >
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
export default {
  name: 'SubmissionGuidelinesPage',
  data: function() {
    return {};
  },
  components: {},
  methods: {
    whatIsthis() {
      if (document.querySelector('#this-page')) {
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
