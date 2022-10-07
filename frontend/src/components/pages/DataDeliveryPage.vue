<template>
  <div id="data-delivery-page">
    <md-app style="text-align:left;">
      <md-app-drawer md-permanent="full">
        <md-list class="md-dense">
          <md-list-item :to="{ name: 'data & delivery' }"> Data & Delivery</md-list-item>
          <md-list-item class="indent" href="#instructions">Instructions on accessing your FASTQ files</md-list-item>
          <md-list-item class="indent" href="#sharing">Sharing data with collaborators</md-list-item>
          <md-list-item class="indent" href="#data-delivery-structure">Data delivery structure</md-list-item>
          <md-list-item class="indent" href="#deliverables">Deliverables</md-list-item>
          <md-list-item class="indent" href="#data-storage">Data Storage</md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div class="md-title" id="instructions">Instructions on accessing your FASTQ files</div>
        <p>
          You must have an HPC ID before you will be able to mount the share drive. For investigators who do not need to use the cluster or other HPC resources, this ID is still required, but is limited to allowing you to map a network drive. If you aren't sure if you have this ID, please <a href="mailto:genomics@mskcc.org">contact us</a>. The instructions below <i>will not work</i> without this step.
        </p>
        <div class="md-subheading">From a PC:</div>
        <ul>
          <li>Open File Explorer from the taskbar or the Start menu, or press the Windows logo key + E.</li>
          <li>Select This PC from the left pane. Then, on the Computer tab, select Map network drive.</li>
          <li>In the Drive list, select a drive letter. Any available letter will do.</li>
          <li>In the Folder box, type \\igo-share03.mskcc.org\igo_delivery\share\[LABNAME]</li>
          <li>When prompted enter your MSKCC username & password</li>
          <li>Select Finish</li>
        </ul>
        <div class="md-subheading">From a Mac:</div>
        <ul>
          <li>Click the Finder icon in the Dock to open a Finder window</li>
          <li>From the menu bar at the top select “Go” and then “Connect to Server”</li>
          <li>Enter the server address smb://igo-share04.mskcc.org/igo_delivery/share/[LABNAME]</li>
          <li>From the popup select the share for your lab</li>
          <li>When prompted enter your MSKCC username & password</li>
        </ul>
        <div class="md-subheading">On Juno:</div>
        <ul>
          <li>Navigate to /igo/delivery/share/[LABNAME]</li>
        </ul>
        <div class="md-subheading">On Lilac:</div>
        <ul>
          <li>On lilac-xfer01.mskcc.org, navigate to /igo/delivery/share/[LABNAME]</li>
          <li>Rsync the data to its final destination -- your command should look like: rsync --copy-links -avz [SOURCE] [DEST]</li>
        </ul>
        <p>
          If you need to grant access to a collaborator or data analyst (internal or external) or an MSKCC core,
          please see the section below on data sharing.
        </p>
        <p>
          If you want to understand more about the data storage structure, are having difficulties locating your data, or have other
          questions
          <a href="mailto:zzPDL_SKI_IGO_DATA@mskcc.org?subject=Data questions">contact the Data Team.</a>
        </p>
        
        <md-divider></md-divider>

        <div class="md-title" id="sharing">Sharing your data with collaborators</div>
        <div class="md-subheading">Before submission:</div>
        <p>
          The mskcc.org e-mail addresses of all internal collaborators or lab members who need to be able to access your FASTQ files or pipeline results (if applicable) should be included in the "Data Access" section of your iLab request.
        </p>
        <p>
          If you plan to request analysis services from the Bioinformatics Core, please make sure you have selected the "Institutional Support" option on your iLab request.
        </p>
        <p>
          If your data will be shared externally, please notify Sample & Project Management at drop-off so that arrangements can be made.
        </p>
        <div class="md-subheading">Internal collaborators:</div>
        <ul>
          <li>Include mskcc.org e-mail addresses in the "Data Access" field in iLab </li>
          <li>After data delivery, request retrospective access <a href="https://my.ilabsolutions.com/service_center/3276/?tab=services">in iLab</a> under the "Post-processing services" heading</li>
        </ul>
        <div class="md-subheading">External collaborators:</div>
        <p>
          We encourage investigators to share FASTQ files via Box (accounts can be request through The Spot), as the sharing is then entirely under your control. There is a 15GB file size limit, which is sufficient for almost all sequencing requests.

          For larger requests or when an HPC approach is preferred, files can be transferred via QBio:
          <ul>
            <li>Fill out <a href="http://actg.mskcc.org/contact-data-sharing-form/">this form</a></li>
            <li>Under Data Management, check "IGO will be uploading the data to qbio"</li>
            <li>Indicate that Darrell Nabors, naborsd@mskcc.org, will be managing the data</li>
            <li>If you're unsure of the amount of data to share, please contact us</li>
          </ul>
        </p>
        
        <md-divider></md-divider>

        <div class="md-title" id="data-delivery-structure">Data delivery structure</div>
        <div class="md-subheading">Background</div>
        <p>
          Most of our Illumina sequencers run flow cells with multiple lanes, which allow us to load different pools of samples with
          overlapping indices on the same run. Exceptions are the MiSeq, which is a single lane, and the NextSeq, which has 4 lanes that are
          not able to be divided. Depending on the number of reads needed, a project may run on a single lane or across multiple lanes.
        </p>
        <p>
          All of our sequencers have names to distinguish them from one another for our databases, their servers, and ease of communication
          among lab members. The run ID, therefore, is the sequencer name followed by the run number; each run ID is unique. MiSeqs: TOMS,
          VIC, JOHNSAWYERS, AYYAN; NextSeq 500: SCOTT; NextSeq 2000: PEPE; HiSeq 2500: MOMO, KIM, LIZ; HiSeq 4000: PITT, JAX; NovaSeq:
          MICHELLE, DIANA, RUTH.
        </p>
        <div class="md-subheading">Former Data Structure</div>
        <p>
          Traditionally, we delivered two FASTQ files per sample for each paired-end sequencing run (R1 and R2) and one FASTQ file for
          single-read runs. An example of the structure below shows a PI data folder with multiple sequencing projects. In the selected
          project, there are data from two separate sequencing runs, JAX_0416 and PITT_0483.
        </p>
        <img src="../../assets/images/screenshots/current-file-structure.jpg" alt="current file path screenshot" />
        <br /><br />
        <div class="md-subheading">Current Data Structure</div>
        <p>
          As of 01/01/2021, IGO will no longer combine reads from different lanes of a sequencing run into a single file. Instead of just R1
          and R2, for samples that were sequenced in multiple lanes, there will be a separate FASTQ file for each read and lane.
        </p>
        <img src="../../assets/images/screenshots/future-file-structure.jpg" alt="future file path screenshot" />
        <br /><br />
        <div class="md-subheading">What Does This Mean?</div>
        <p>
          For investigators that request analysis through CAS (IMPACT/HemePACT) or BIC, there will be no change aside from how you see your
          files in your drive. Lane splitting is an industry standard, and most pipelines for processing your data will be already set up to
          handle files in this structure. If you or your collaborator run a custom analysis, you may need to tweak it to accept files split
          by lane. Alternatively, you can concatenate your R1 & R2 files (see
          <a href="https://stackoverflow.com/questions/8005114/fast-concatenation-of-multiple-gzip-files" target="_blank">this guide</a>)
          prior to processing.
        </p>
        <p>
          If you have any questions or concerns about this change, please contact us at
          <a href="mailto:genomics@mskcc.org?subject=Question about accessing data">genomics@mskcc.org</a>.
        </p>

        <md-divider></md-divider>

        <div class="md-title" id="deliverables">Deliverables - FASTQ, BAM, & pipeline</div>
        <div class="md-subheading">FASTQ files</div>
        <p>
          FASTQ files are our standard deliverable for all applications. We base our target output one of two ways: requested read number (RNA-Seq, ChIP seq, ATAC seq, shallow WGS, shotgun metagenomics, user libraries, UMI-based platforms) or coverage (WES, non-UMI targeted sequencing, WGS). Reads for 10X Genomics and coverage for MissionBio applications is calculated by their respective pipelines; we aim for the recommended numbers unless you request otherwise. <strong>Coverage for WES, WGS, IMPACT, HemePACT, or custom capture applications is calculated by DRAGEN v3.10 and may differ from coverages calculated with other algorithms.</strong>
        </p>
        <p>
          We always strive to meet or exceed read number or coverage requests, however sometimes samples are delivered under those targets, typically due to sample quality or quantity.
        </p>
        <div class="md-subheading">BAM files</div>
        <p>
          Beginning July 1, 2022, BAM files will be part of the deliverable for RNA-Seq projects. They will be deposited in the directory /igo/delivery/share/[LABNAME]/[PROJECTID]/pipeline. We plan to gradually expand BAM delivery to other experiment types.
        </p> 
        <p>
          BAMs are generated in Dragen v3.10 with a command like:
          <pre>
            <code>
              dragen -f -r /staging/ref/hg38_alt_masked_graph_v2+cnv_graph_rna-1644018559
              --fastq0list {RUN}/Reports/fastq_list.csv
              --fastq-list-sample-id {SAMPLE-NAME}
              -a {https://www.gencodegenes.org/human/ ALL GTF File}
              --enable-map-align true --enable-sort=true --enable-bam-indexing true
              --enable-map-align-output true --output-format=BAM --enable-rna=true
              --enable-duplicate-marking true --enable-rna-quantification true
              --output-file-prefix {SAMPLE_NAME}
              --output-directory {OUTPUT_DIR}
           </code>
           </pre>
        </p>
        <p>
          The reference genomes are: <a href="https://support.illumina.com/sequencing/sequencing_software/dragen-bio-it-platform/product_files.html" target="_blank">hg38-alt-masked-v2 for human</a> or <a href="https://useast.ensembl.org/Mus_musculus/Info/Index" target="_blank">GRCm39 for mouse</a>. GTF files for human come from <a href="https://gencodegenes.org/human" target="_blank">Gencode</a>; for mouse we use the same Ensembl link above. For more information on the accuracy of DRAGEN compared to BWA-MEM see <a href="https://gatk.broadinstitute.org/hc/en-us/articles/4410953761563-Introducing-DRAGMAP-the-new-genome-mapper-in-DRAGEN-GATK" target="_blank">Introducing DRAGMAP, the new genome mapper in DRAGEN-GATK</a> and <a href="https://www.illumina.com/science/genomics-research/articles/dragen-demystifying-reference-genomes.html" target="_blank">Demystifying the Versions of GRCh38/hg38 Reference Genomes, How They are Used in Dragen and Their Impact on Accuracy</a>.
        </p>
        <div class="md-subheading">Cell Ranger, Space Ranger, and Tapestri</div>
        <p>
          For quality control purposes, IGO runs Cell Ranger (10X scRNA-Seq, VDJ, & Multiome), Space Ranger (10X Visium), and the Tapestri pipeline
          (MissionBio) on data from projects initiated in IGO. We deliver output from those analytic pipelines to /igo/delivery/share/[LABNAME]/[PROJECTID]/pipeline along with FASTQ files by default. Because of size constraints, pipeline data will remain available for
          <strong>3 months</strong> before being deleted. To request regeneration of older pipeline files, submit a request <a href="https://my.ilabsolutions.com/sc/3276/integrated-genomics-operation?tab=services">in iLab</a> using the "Regeneration of FASTQ, BAM, or pipeline files" form under Post-processing services.
        </p>
        <p>
          Deliverables for Cell Ranger & Space Ranger: run summary metrics (HTML, CSV), alignment files (BAM), feature barcode matrices (if
          applicable), Loupe Browser visualization files (cloupe), QC images and position information (JPG, PNG, CSV, JSON; Visium only),
          V(D)J analysis files (if applicable)
        </p>
        <p>
          Deliverables for MissionBio Tapestri: QC and metadata files (TXT, TSV, INFO, YAML, CSV, JSON), CellFinder plot (PDF), Tapestri
          Insights file (LOOM), alignment files (BAM), mapped reads by barcode (TXT), variant information (VCF)
        </p>
        <p>
          Please note that Cell Ranger count output will not take feature barcoding or cell hashing information into account.
        </p>
        <div class="md-subheading">CRISPresso</div>
        <p>
          CRISPResso2 output is delivered for CRISPRSeq projects that have selected that option. We run with default parameters and the information provided in iLab, so the pipeline isn't necessarily tailored for your experiment. You can learn more about CRISPResso2, the available parameters, and run your FASTQ files yourself by visiting <a href="http://crispresso.pinellolab.org/submission" target="_blank">crispresso.pinellolab.org</a>.
        </p>
        <div class="md-subheading">Customization</div>
        <p>
          IGO does <b>not</b> provide custom alignment or pipeline runs. We provide these files as a courtesy to our investigators because we generate them for QC purposes. If you need experiment-specific, more complex, or additional downstream analysis, you should reach out to MSK's <a href="http://bic.mskcc.org/bic/" target="_blank">Bioinformatics Core</a>. Please note that our Cell Ranger count and vdj output <b>does not</b> take Feature Barcoding or Cell Hashing information into account.
        </p>
        <md-divider></md-divider>

        <div class="md-title" id="data-storage">Data Storage</div>
        <div class="md-subheading">How long does IGO keep FASTQ files?</div>
        <p>
          Currently we will leave FASTQ files linked to the project folder for <b>5 years</b>. After that time, we will be able to regenerate FASTQ files upon request, but there will be a charge and a processing delay. FASTQs from 2017 and earlier can be requested <a href="https://my.ilabsolutions.com/sc/3276/integrated-genomics-operation?tab=services">in iLab</a> using the "Regeneration of FASTQ, BAM, or pipeline files" form under Post-processing services.
        </p>
        
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
