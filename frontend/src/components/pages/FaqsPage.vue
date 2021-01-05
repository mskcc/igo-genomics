<template>
  <div>
    <!-- <reopen-faq></reopen-faq> -->
    <div id="faq-page" class="full-control">
      <div class="list">
        <md-list>
          <md-list-item md-expand>
            <md-icon>add</md-icon>
            <span class="md-list-item-text md-title">Sample Submission</span>
            <md-list slot="md-expand">
              <div class="full-control">
                <div class="list">
                  <md-list>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">I can’t get into the sample intake website. Who do I talk to?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            IGO’s Sample and Project Management Team team is standing by, ready to help.
                            <a
                              href="mailto:zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org?subject=Trouble accessing Sample Submission"
                            >
                              Send us an e-mail.
                            </a>
                            If we can’t resolve it immediately, we will get in touch with our Data Team to look deeper into the issue.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">I have one sample. Do I really need to submit on a plate?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Yes. Even if it is just for one sample, IGO requires samples to be submitted in plates or sometimes even
                            micronic tubes. IGO has optimized our processes for robotic handling so your samples are handled in an
                            automated, trackable fashion. Therefore, we need samples to be submitted in vessels that our robots can handle.
                            Please note that IGO provides these vessels.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">How do I find my iLab Service ID to enter into Sample Submission?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            An IGO Service ID is only generated when an iLabs request has been submitted. When creating an iLabs request,
                            iLabs will display IGO-0[CID]. Once the request is submitted to the core, and there are no issues, an IGO
                            Service ID will be generated.The IGO Service ID starts with “IGO-0” and then is followed by a 5-digit number.
                            This is the number entered into Sample Submission.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">Why am I not getting an iLab Service ID when I click “submit”?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            This issue is most commonly associated with funding issues. Please contact your Research Fund Manager (RFM) to
                            ensure the selected cost center/fund number (cc/fn) are available to you under the selected PI. IGO is not able
                            to help or accept samples without the iLabs submitted under the correct cc/fn.Note: whatever cc/fn is selected
                            at the time of iLabs submission, will be the cc/fn used for billing. So please make sure that the samples are
                            being submitted under the correct cc/fn in order to avoid delay of data and major funding issues downstream.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text"
                        >We are planning to collect blood over a long study period. What is the best way to submit the samples?</span
                      >
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            IGO is equipped to handle either large batches of samples (i.e., you have stored your bloods and submit them all
                            at once) or rolling extractions (you submit samples as they come and we store the extracted DNA until the set is
                            complete).
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">I don’t know the COVID19 status of my human samples. Can I submit them?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            We cannot accept human samples collected after December 2019 unless the patient has been screened for COVID19.
                            We offer RNA extraction specifically for COVID19 testing, which you can submit to determine status before
                            starting your project. Submission instructions are
                            <router-link :to="{ name: 'submission guidelines' }">here</router-link>.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                  </md-list>
                </div>
              </div>
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-icon>add</md-icon>
            <span class="md-list-item-text md-title">DNA/RNA Extraction</span>
            <md-list slot="md-expand">
              <div class="full-control">
                <div class="list">
                  <md-list>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">How should I submit my samples for RNA extraction?</span>
                      <md-list slot="md-expand">
                        <md-list-item class="md-inset">
                          <div>
                            We accept:
                            <ul>
                              <li>Cell pellets</li>
                              <li>Frozen tissue</li>
                              <li>OCT blocks</li>
                              <li>FFPE tissue</li>
                              <li>Cells in 1mL TRIzol</li>
                              <li>Cells in DMSO freezing media</li>
                              <li>Cells in Qiagen RLT buffer</li>
                              <li>Cells in Promega homogenization buffer</li>
                              <li>Cells sorted into 750μL TRIzol LS + 250μL PBS</li>
                            </ul>
                            <br />
                            In all cases, samples should be quickly frozen in liquid nitrogen or on dry ice and kept frozen at -80 before
                            submission to prevent RNA degradation.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">What is the lowest number of cells I can submit for RNA extraction?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Minimum cell numbers to achieve desired input for RNA-Seq applications can vary due to expression differences
                            between cell types. We recommend 1M cells for most applications if cell number is not a constraint. We have
                            experience handling samples as low as 500 cells; however, the final yield cannot be guaranteed. If your cell
                            number is very low, please contact us to discuss your options.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">How should tissue/cells be submitted for DNA extraction?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Tissue biopsies should be immediately frozen at -80 in a 1.5mL microcentrifuge tube; cells can be frozen in
                            DMEM/DMSO or washed 2X in PBS and then frozen as a cell pellet.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">How much blood do I need to submit for DNA or RNA extraction?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            We do not currently accept blood for RNA extraction, although we have a kit in testing.For DNA, the yield varies
                            based on the white blood cell count, the extraction method, and the elution volume. Typically, the range is
                            16-135μg/mL whole blood; 400mL is usually enough for downstream applications.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">How many cells are recommended for 100ng DNA?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            ~100K
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">Do you perform simultaneous extractions?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Yes. We recommend simultaneous extraction when samples are small and splitting them would decrease both RNA &
                            DNA yields. If you have enough material to split for separate extractions, you may still submit for simultaneous
                            and send the tissue in a single tube.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">Does simultaneous extraction favor either RNA or DNA?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Most of the time, the DNA yield is greater than the RNA yield. In the simultaneous process, the sample runs
                            through the DNA column first, which could reduce the RNA yield.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">How much DNA and RNA can we extract from bone marrow samples in DMSO?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            If the sample quality is good, 300K-1M cells typically yields ~1μg DNA and RNA.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">What is the best way to preserve my tissue for downstream processing?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Flash freezing them with minimum processing time.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text"
                        >How much tissue will I need to submit to get enough DNA for my downstream applications?</span
                      >
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Generally, a piece of tissue the size of a grain of rice is sufficient for all downstream applications,
                            including IMPACT, WES, and WGS.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">Should I submit my FFPE samples as blocks, slides, curls, or core punches?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            IGO can process any of those. Our Pathology team can section, stain an H&E slide, facilitate pathology review,
                            scrape slides, and/or macrodissect a region of tissue on a slide.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">How many FFPE slides should I submit?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            There is no specific answer. The number of slides needed depends on the tissue area, the thickness of the
                            section, and whether macrodissection is required. Generally, 5-8 slides are sufficent for >10mm, 10-15 slides
                            for 5-10mm, and 20-25 slides for 5mm or smaller. We prefer 10 micron sections for extraction; 5 micron is better
                            for H&E staining.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                  </md-list>
                </div>
              </div>
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-icon>add</md-icon>
            <span class="md-list-item-text md-title">Sample QC</span>
            <md-list slot="md-expand">
              <div class="full-control">
                <div class="list">
                  <md-list>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text"
                        >I just received my QC results, and some of my samples are “yellow”. Can I go forward anyway?</span
                      >
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Yes. We can go forward but cannot guarantee downstream success at either library prep or sequencing.We are
                            always happy to discuss your results and our recommendations. Reach out to us either by commenting on your QC
                            report.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text"
                        >My DNA/RNA passed QC, but now some of my libraries have failed. How does that happen?</span
                      >
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            DNA and RNA is passed based on quantity and/or DIN and RIN alone, but there are other factors that could inhibit
                            adaptor ligation or PCR amplification. Common issues include: inhibitory contaminants (could be biological, such
                            as melanin, or external, such as paraffin), RNA/DNA contamination, or DNA damage.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">Why is my RNA yield or quality so low? I gave you a lot of cells.</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Common reasons include:
                            <ul>
                              <li>Sample accidentally thawed and refrozen</li>
                              <li>The cells or tissue do not express much RNA</li>
                              <li>The sample was not suspended in the correct RNA-preserving solution</li>
                              <li>A necrotic region of tumor was biopsied</li>
                              <li>
                                Tissue dissection was not done in RNase-free conditions or on dry iceSample accidentally thawed and refrozen
                              </li>
                              <li>
                                Sample remained at room temperature for too long before freezing
                              </li>
                            </ul>
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                  </md-list>
                </div>
              </div>
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-icon>add</md-icon>
            <span class="md-list-item-text md-title">Sequencing</span>
            <md-list slot="md-expand">
              <div class="full-control">
                <div class="list">
                  <md-list>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">Can I make my own library and have IGO sequence it?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Yes. You can either use a commercial kit to make library, or design your own primers. If you do the latter, we
                            require you to submit the sequence or design of your library construct. Contact us for more information or to
                            have your construct verified.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                  </md-list>
                </div>
              </div>
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <md-icon>add</md-icon>
            <span class="md-list-item-text md-title">General Queries</span>
            <md-list slot="md-expand">
              <div class="full-control">
                <div class="list">
                  <md-list>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">I can’t find my data. Who should I reach out to?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            To access your FASTQ files, follow these instructions.<br />
                            From a PC:
                            <ul>
                              <li>Open File Explorer from the taskbar or the Start menu, or press the Windows logo key + E.</li>
                              <li>Select This PC from the left pane. Then, on the Computer tab, select Map network drive.</li>
                              <li>In the Drive list, select a drive letter. Any available letter will do.</li>
                              <li>In the Folder box, type \\bic.mskcc.org\[LABNAME]</li>
                              <li>When prompted enter your MSKCC username & password</li>
                              <li>Select Finish</li>
                            </ul>
                            From a Mac:
                            <ul>
                              <li>Click the Finder icon in the Dock to open a Finder window</li>
                              <li>From the menu bar at the top select “Go” and then “Connect to Server”</li>
                              <li>Enter the server address smb://bic.mskcc.org</li>
                              <li>From the popup select the share for your lab</li>
                              <li>When prompted enter your MSKCC username & password</li>
                            </ul>
                            <br />
                            If you cannot log in, want to understand about the data storage structure, or are having difficulties locating
                            your data,
                            <a href="mailto:zzPDL_SKI_IGO_DATA@mskcc.org?subject=Trouble accessing data">contact the Data Team.</a>
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">What genes are included in the targeted sequencing assays?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            <a href="https://cmo.mskcc.org/cmo/resources/gene-lists/impact-468" target="_blank">IMPACT468</a><br />
                            <a href="https://cmo.mskcc.org/cmo/resources/gene-lists/impact-505/" target="_blank">IMPACT505</a> <br />
                            <a href="https://cmo.mskcc.org/cmo/resources/gene-lists/hemepact_v4/" target="_blank">HemePACTv4</a><br />
                            <a class="white-link" href="https://cmo.mskcc.org/cmo/resources/gene-lists/m-impact_v1/" target="_blank"
                              >Mouse-IMPACT</a
                            ><br />
                            <a href="https://cmo.mskcc.org/cmo/resources/gene-lists/msk-access/" target="_blank">MSK-ACCESS</a><br />
                            <a href="https://one.mskcc.org/sites/pub/Pathology/Documents/Archer%20Pan%20Heme.xlsx" target="_blank"
                              >Archer Pan Heme</a
                            ><br />
                            <router-link :to="{ name: 'archer fusion' }">Archer Solid</router-link><br />
                            <router-link :to="{ name: 'ddpcr assays' }">ddPCR assays</router-link>
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">How should I store blood?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            PAXgene is the best choice for long-term blood storage, as the tubes are good up to 24 months or longer.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                  </md-list>
                </div>
              </div>
            </md-list>
          </md-list-item>
        </md-list>
      </div>
    </div>
  </div>
</template>

<script>
// import ReopenFaq from "../ReopenFaq.vue";

export default {
  // components: { ReopenFaq },
  name: 'FaqsPage',
};
</script>

<style></style>
