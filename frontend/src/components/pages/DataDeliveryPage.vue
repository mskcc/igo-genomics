<template>
  <div id="data-delivery-page">
    <md-app style="text-align:left;">
      <md-app-drawer md-permanent="full">
        <md-list class="md-dense">
          <md-list-item :to="{ name: 'accessing your data' }"> Data Delivery</md-list-item>
          <md-list-item class="indent" href="#instructions">Instructions on accessing your FASTQ files</md-list-item>
          <md-list-item class="indent" href="#sharing">Sharing data with collaborators</md-list-item>
          <md-list-item class="indent" href="#data-delivery-structure">Data delivery structure</md-list-item>
          <md-list-item class="indent" href="#10x-and-missionbio">10X Genomics & MissionBio pipeline output</md-list-item>
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
          <li>Rsync the data to its final destination</li>
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
          For projects less than 200GB, you can transfer FASTQ files via Box, Gsuite, or Go-Anywhere. Please see the <a href="https://actg.mskcc.org/hpc/external-collaborators">ACTG website</a> for more information and links to request accounts.

          For larger requests, files can be transferred via QBio:
          <ul>
            <li>Fill out <a href="https://actg.mskcc.org/contact-data-sharing-form/">this form</a></li>
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

        <div class="md-title" id="10x-and-missionbio">10X Genomics & MissionBio pipeline output</div>
        <div class="md-subheading">Now available on /igo/delivery/share/[LABNAME]/[PROJECTID]/pipeline</div>
        <p>
          For quality control purposes, IGO runs Cell Ranger (10X scRNA-Seq), Space Ranger (10X Visium), and the Tapestri pipeline
          (MissionBio) on data from projects initiated in IGO. We will now deliver output from those analytic pipelines to the project
          folder along with FASTQ files by default. Because of size constraints, pipeline data will remain available for
          <strong>3 months</strong> before being deleted.
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

        <md-divider></md-divider>

        <div class="md-title" id="data-storage">Data Storage & FASTQ File Compression</div>
        <div class="md-subheading">What changes are being made?</div>
        <p>
          All FASTQ files from <strong>2014 and before</strong> will be converted to the fastq.ora format, compressing the file and allowing for additional storage space. Files generated since 2014 will remain in the fastq.gz format.
        </p>
        <div class="md-subheading">How can the files be processed?</div>
        <p>
          The Illumina DRAGEN pipeline accepts fastq.ora as input. They can also be decompressed with <a href="https://support.illumina.com/sequencing/sequencing_software/DRAGENDecompression/software-downloads.html" target="__blank">Orad</a>.
        </p>
        <div class="md-subheading">What commands would I use to run Orad?</div>
        <p>
          On Juno or Lilac, with Orad installed:<br />

          export ORA_REF_PATH=/opt/common/CentOS_7/DragenORAD/orad_2_5_5/oradata/ <br />
          /opt/common/CentOS_7/DragenORAD/orad_2_5_5/orad file.fastq.ora -c --raw | bwa mem humanref.fasta -> resu.sam

          Your output will be a SAM file.
        </p>
        
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
