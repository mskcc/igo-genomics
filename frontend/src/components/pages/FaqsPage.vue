<template>
  <div>
    <!-- <reopen-faq></reopen-faq> -->
    <div id="faq-page">
      <div class="list">
        <md-list>
          <md-list-item md-expand>
            <md-icon>add</md-icon>
            <span class="md-list-item-text md-title">Sample Submission</span>
            <md-list slot="md-expand">
              <div>
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
                            An IGO Service ID is only generated when an iLabs request has been submitted. When creating an iLab request,
                            iLab will display IGO-0[CID]. Once the request is submitted to the core, and there are no issues, an iLab
                            Service ID will be generated. The iLab Service ID starts with “IGO-0” and then is followed by a 5-digit number.
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
                            This issue is most commonly associated with funding problems. Please contact your Research Fund Manager (RFM) to
                            ensure the selected cost center/fund number (cc/fn) are available to you under the selected PI. IGO is not able
                            to help or accept samples without the iLab request submitted under the correct cc/fn.
                            Note: whatever cc/fn is selected at the time of iLab submission, will be the cc/fn used for billing. So please make sure that the samples are being submitted under the correct cc/fn in order to avoid delay of data and major funding issues downstream.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">Does IGO do bulk pricing for large requests?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            IGO services are priced for bulk and automated processing to provide the best price for projects of most sizes. However, if you have over 300 samples, please contact us for information about potentially lower prices.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">I want to sequence a tumor sample for a patient. How do I know if there is a normal available?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            If you have a patient <strong>MRN</strong>:<br>
                            <ol>
                              <li>Query the <a href="https://ddp.mskcc.org/search" target="__blank">Darwin Digital Platform</a></li>
                              <li>Link to the sample data in the <a href="https://cbioportal.mskcc.org" target="__blank">cBioPortal</a></li>
                              <li>Go to the patient's EMR within the Pathology folder and view the DMP Path results</li>
                            </ol><br>
                            If you have a <strong>DMP Patient ID</strong>:
                            <ol>
                              <li>Ensure the ID is in the format P-#######</li>
                              <li>Query the <a href="https://cbioportal.mskcc.org" target="__blank">cBioPortal</a></li>
                            </ol><br>
                            If you have a <strong>Molecular Accession Number</strong>:
                            <ol>
                              <li>Ensure the Number is in the format M##-#####</li>
                              <li>Submit a <a href="https://dataline.mskcc.org/DataLine/login?dest=createRequest" target="__blank">Dataline query</a> following the guidelines <a href="https://mskcc.sharepoint.com/sites/pub-td/sitepages/dataline.aspx" target="__blank">here</a></li>
                            </ol>
                            or:
                            <ol>
                              <li>Query <a href="https://ddp.mskcc.org/search" target="__blank">Darwin</a> to get an MRN</li>
                              <li>Follow the MRN instructions above</li>
                            </ol><br>
                            If the patient has had <strong>cfDNA banked</strong>:
                            <ol>
                              <li>E-mail the cfDNA lab (zzpdl_lab_cfdna_lab@mskcc.org) to inquire if a matching buffy coat has been banked.</li>
                            </ol>
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">How much material should I request from the DMP?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            See the chart below for the required mass for various applications:
                            <br />
                            <br />
                            <md-table md-card class="criteria-table">
                              <md-table-row>
                                <md-table-head>Sample Type</md-table-head>
                                <md-table-head>Application</md-table-head>
                                <md-table-head>Mass (ng)</md-table-head>
                                <md-table-head>Min. Concentration (ng/&#181;L)</md-table-head>
                                <md-table-head>Min. Volume (&#181;L)</md-table-head>
                              </md-table-row>
                              <md-table-row>
                                <md-table-cell rowspan="3">DMP Library</md-table-cell>
                                <md-table-cell>IMPACT/IMPACT-Heme</md-table-cell>
                                <md-table-cell rowspan="2">475</md-table-cell>
                                <md-table-cell rowpan="2">6</md-table-cell>
                                <md-table-cell rowspan="9">5</md-table-cell>
                              </md-table-row>
                              <md-table-row>
                                <md-table-cell>WES</md-table-cell>
                              </md-table-row>
                              <md-table-row>
                                <md-table-cell>ddPCR</md-table-cell>
                                <md-table-cell>55 + 25/addtional assay</md-table-cell>
                                <md-table-cell rowspan="2">1</md-table-cell>
                              </md-table-row>
                              <md-table-row>
                                <md-table-cell rowspan="6">gDNA</md-table-cell>
                                <md-table-cell>IMPACT/IMPACT-Heme (FFPE)</md-table-cell>
                                <md-table-cell>250</md-table-cell>
                              </md-table-row>
                              <md-table-row>
                                <md-table-cell>IMPACT/IMPACT-Heme (non-FFPE)</md-table-cell>
                                <md-table-cell>150</md-table-cell>
                                <md-table-cell>0.5</md-table-cell>
                              </md-table-row>
                              <md-table-row>
                                <md-table-cell>WES (FFPE)</md-table-cell>
                                <md-table-cell>250</md-table-cell>
                                <md-table-cell>1</md-table-cell>
                              </md-table-row>
                              <md-table-row>
                                <md-table-cell>WES (non-FFPE)</md-table-cell>
                                <md-table-cell>150</md-table-cell>
                                <md-table-cell>0.5</md-table-cell>
                              </md-table-row>
                              <md-table-row>
                                <md-table-cell>hWGS</md-table-cell>
                                <md-table-cell>550</md-table-cell>
                                <md-table-cell>6</md-table-cell>
                              </md-table-row>
                              <md-table-row>
                                <md-table-cell>ddPCR</md-table-cell>
                                <md-table-cell>50 + 25/additonal assay</md-table-cell>
                                <md-table-cell>1</md-table-cell>
                              </md-table-row>
                            </md-table>
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
              <div>
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
                              <li>FFPE tissue (slides or curls or punches in AutoLys tubes)</li>
                              <li>Cells in 1mL TRIzol</li>
                              <li>Cells in DMSO freezing media</li>
                              <li>Cells sorted into 750μL TRIzol LS + 250μL PBS</li>
                              <li>Blood in a PAXgene tube</li>
                            </ul>
                            <br />
                            In all cases (except FFPE), samples should be quickly frozen in liquid nitrogen or on dry ice and kept frozen at -80 before
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
                            between cell types. We recommend 200K cells for most applications if cell number is not a constraint. We have
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
                        <md-list-item class="md-inset">
                          <div>
                            We accept:
                            <ul>
                              <li>Cell pellets</li>
                              <li>Cells in DMSO/DMEM freezing medium</li>
                              <li>Frozen tissue</li>
                              <li>OCT tissue (blocks or curls)</li>
                              <li>FFPE tissue (slides, blocks, or curls or punches in AutoLys tubes)</li>
                              <li>Blood in EDTA tubes</li>
                              <li>Blood in Streck tubes (for cfDNA)</li>
                              <li>PBMCs/buffy coats in micronic tubes</li>
                              <li>Fingernails</li>
                              <li>Saliva</li>
                              <li>Bone marrow aspirate (tube or syringe)</li>
                              <li>Plasma frozen in 1-5mL tubes</li>
                              <li>Buccal swabs frozen in 1.5mL tubes</li>
                            </ul>
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
                          <ul>
                            <li>Blood in EDTA tubes for DNA extraction: 400&mu;L</li>
                            <li>Blood in Streck tubes for cfDNA extraction: 4.5mL</li>
                            <li>Blood in PAXgene tubes for RNA extraction: 10mL</li>
                          </ul>
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
                            Yes. We accept:
                            <ul>
                              <li>Cell pellets</li>
                              <li>Cells in DMEM/DMSO freezing medium</li>
                              <li>Frozen tissue</li>
                              <li>OCT tissue</li>
                              <li>FFPE tissue (slides, curls, or punches)</li>
                            </ul>
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
                            Generally, a piece of tissue the size of a grain of rice (2-3mm; 10-15mg) is sufficient for all downstream applications,
                            including IMPACT, WES, and WGS. Samples that need additonal cutting may incur additional charges.
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
                            scrape slides, and/or macrodissect a region of tissue on a slide. However, we do not extract RNA from blocks.
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
              <div>
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
                            Yes. We can go forward but cannot guarantee downstream success at either library prep or sequencing. We are
                            always happy to discuss your results and our recommendations. Reach out to us by commenting on your QC report.
                            You can find a reference range for pass/fail criteria
                            <router-link :to="{ name: 'sample requirements' }">here.</router-link>
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
                            DNA and RNA are passed based on quantity and/or DIN and RIN alone, but there are other factors that could inhibit
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
                                Tissue dissection was not done in RNase-free conditions or on dry ice</li>
                                <li>Sample accidentally thawed and refrozen
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
              <div>
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
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">What is the difference between the CRISPRSeq service and a CRISPR screen?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            CRISPR screens are used to analyze cells transduced with sgRNA libraries to determine the identity and quantity of guides remaining after phenotypic selection. This method usually requires ~30M reads per sample (though coverage varies based on the number of sgRNAs in the library), to get 500-1000X coverage per guide. This is the method standard to a pooled screen.
                            <br />
                            <br />
                            CRISPRSeq as offered by IGO is for evaluating single guide sequences (such as in an arrayed screen). It is a high-throughput (>75K reads) alternative to Sanger sequencing-based evaluation of editing events.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">Do I need to sequence a matched normal sample for IMPACT?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Matched normals are highly recommended. If there is a normal sample that has been sequenced clinically in the DMP, the data can be used for your research sample <strong>only</strong> if the same IMPACT assay was used. You can find the assay by searching the DMP patient ID in MSK cBioPortal, clicking on the "Clinical Data" tab, and checking the "Gene Panel" and "Somatic Status" columns. The latter will say "Matched" if a normal was processed. The former will tell you which panel version was used. Currently we are using IMPACT505 in the research and clinical setting.
                            <br>
                            <br>
                            If no appropriate normal is available, your sample will be run against the pooled normal, and no copy number results will be given as part of the standard output. 
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">I'm interested in long read sequencing. What do I need to know?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            We offer long reads on the Oxford Nanopore platform. Currently, PCR-free WGS and PCR-free cDNA sequencing are in production, and PCR+ workflows, direct RNA sequencing, amplicons, and other applications may be available in the R&D setting. We also provide high molecular weight DNA extraction services.<br />
                            <br />
                            The mass and quality requirements are quite high for both <a href="https://genomics.mskcc.org/criteria/">DNA</a> and <a href="https://genomics.mskc.org/criteria/rna">RNA</a> applications. Unlike our other RNA-based applications, you can submit mRNA or cDNA for ONT. It should be DNase treated and in RNase-free water. DNA should be submitted in buffer EB.<br />
                            <br />
                            We have a few ancillary services that may help DNA samples that fail QC. We can clean-up to improve purity (and increase ligation efficiency), shear samples to maximize the flow cell output, or eliminate short fragments to improve the N50. If your sample could benefit from these services, we will recommend them at QC.
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
              <div>
                <div class="list">
                  <md-list>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">I can’t find my data. Who should I reach out to?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Please see our <router-link :to="{ name: 'data & delivery' }">data access instructions</router-link>.
                            <br />
                            If you cannot log in or need access for a collaborator or data analyst, please fill out the "Data Access Request" <a href="https://my.ilabsolutions.com/service_center/3276/?tab=services">iLab form</a>
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
                            <a href="http://cmo.mskcc.org/wp-content/uploads/2022/04/IMPACT505_Gene_list_detailed.xlsx" target="_blank">IMPACT 505</a><br />
                            <a href="http://cmo.mskcc.org/wp-content/uploads/2022/09/M-IMPACT_v2__DESIGN_A_2021-06-30.xlsx" target="_blank">M-IMPACT v2</a><br />
                            <a href="http://cmo.mskcc.org/wp-content/uploads/2022/04/HemePACT_v4.xlsx" target="_blank">HemePACT v4</a><br />
                            <a href="http://cmo.mskcc.org/wp-content/uploads/2022/04/CMOWebsite_MSK-ACCESS_gene_list.xlsx" target="_blank">MSK-ACCESS</a><br />
                            <a href="http://cmo.mskcc.org/index.php/technology-in-development/#cmo-ch-panel" target="_blank">CMO-CH</a><br />
                            <a href="http://cmo.mskcc.org/wp-content/uploads/2022/04/CV4_ARCHER_SOLID.xlsx" target="_blank">Archer Solid Tumor</a><br />
                            <a href="http://cmo.mskcc.org/wp-content/uploads/2022/04/ARCHER_Heme_CV2.xlsx" target="_blank">Archer Heme</a><br />
                            <router-link :to="{ name: 'ddpcr assays' }">ddPCR assays</router-link><br />
                            <br />
                            For older versions of the panels, please see the <a href="http://cmo.mskcc.org/index.php/gene-panels" target="_blank">CMO website.</a>
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
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">How long does IGO keep FASTQ files?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            Currently we will leave FASTQ files linked to the project folder for <b>3 years</b>. After that time, we will be able to regenerate FASTQ files upon request, but there will be a charge and a processing delay. BAM files and pipeline output are kept for 3 months.
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-list-item>
                    <md-list-item md-expand class="md-inset">
                      <md-icon>add</md-icon>
                      <span class="md-list-item-text">Does IGO provide methods for publication?</span>
                      <md-list slot="md-expand">
                        <md-list-item>
                          <div>
                            We do not provide boilerplate methods, because there can be processing differences between projects for the same application. To request personalized methods for specific projects/samples for publication, please contact genomics@mskcc.org. For accuracy, we recommend not not referencing an earlier publication, but instead checking with us about any processing differences, as instruments, kits, and protocols change regularly. You can find the current chemistries and software versions in use in IGO on our <router-link :to="{ name: 'chemistry timeline' }">Chemistry Timeline</router-link>.
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
