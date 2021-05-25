<template>
  <div>
    <div class="md-display-1">Data Delivery</div>
    <md-card class="data-delivery-card">
      <md-card-header>
        <div class="md-title">Instructions on accessing your FASTQ files</div>
      </md-card-header>
      <md-card-content
        ><div>
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
          <div class="md_subhead">On Juno:</div>
          <ul>
            <li>Navigate to /igo/delivery/share/[LABNAME]</li>
          </ul>
          <div class="md_subhead">On Lilac:</div>
          <ul>
            <li>On lilac-xfer01.mskcc.org, navigate to /igo/delivery/share/[LABNAME]</li>
            <li>Rsync the data to its final destination</li>
          </ul>
          <br />
          If you cannot access your data or need to grant access to a collaborator or data analyst (internal or external) or an MSKCC core, please fill out <a href="https://my.ilabsolutions.com/service_center/3276/?tab=services">the "Data Access Request" iLab form</a>
          <br />
          If you want to understand more about the data storage structure, are having difficulties locating your data, or have other questions
          <a href="mailto:zzPDL_SKI_IGO_DATA@mskcc.org?subject=Data questions">contact the Data Team.</a>
        </div>
      </md-card-content>
    </md-card>
    <md-card class="data-delivery-card">
      <md-card-header>
        <div class="md-title">Data delivery structure</div>
      </md-card-header>
      <md-card-content>
        <div class="md-subheading">Background</div>
        <p>
          Most of our Illumina sequencers run flow cells with multiple lanes, which allow us to load different pools of samples with
          overlapping indices on the same run. Exceptions are the MiSeq, which is a single lane, and the NextSeq, which has 4 lanes that are
          not able to be divided. Depending on the number of reads needed, a project may run on a single lane or across multiple lanes.
        </p>
        <p>
          All of our sequencers have names to distinguish them from one another for our databases, their servers, and ease of communication
          among lab members. The run ID, therefore, is the sequencer name followed by the run number; each run ID is unique. MiSeqs: TOMS,
          VIC, JOHNSAWYERS, AYYAN; NextSeq 500: SCOTT; NextSeq 2000: PEPE; HiSeq 2500: MOMO, KIM, LIZ; HiSeq 4000: PITT, JAX; NovaSeq: MICHELLE, DIANA.
        </p>
        <br />
        <div class="md-subheading">Former Data Structure</div>
        <p>
          Traditionally, we delivered two FASTQ files per sample for each paired-end sequencing run (R1 and R2) and one FASTQ file for single-read
          runs. An example of the structure below shows a PI data folder with multiple sequencing projects. In the selected project, there
          are data from two separate sequencing runs, JAX_0416 and PITT_0483.
        </p>
        <img src="../../assets/images/screenshots/current-file-structure.jpg" alt="current file path screenshot" />

        <br /><br />
        <div class="md-subheading">Current Data Structure</div>
        <p>
          As of 01/01/2021, IGO will no longer combine reads from different lanes of a sequencing run into a single file. Instead of
          just R1 and R2, for samples that were sequenced in multiple lanes, there will be a separate FASTQ file for each read and lane.
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
      </md-card-content>
    </md-card>
    <md-card class="data-delivery-card">
      <md-card-header>
        <div class="md-title">10X Genomics & MissionBio pipeline output</div>
      </md-card-header>
      <md-card-content>
        <div class="md-subheading">Now available on /igo/delivery/share/[LABNAME]/[PROJECTID]/pipeline</div>
        <p>
          For quality control purposes, IGO runs Cell Ranger (10X scRNA-Seq), Space Ranger (10X Visium), and the Tapestri pipeline (MissionBio) on data from projects initiated in IGO. We will now deliver output from those analytic pipelines to the project folder along with FASTQ files by default. Because of size constraints, pipeline data will remain available for <strong>3 months</strong> before being deleted.
        </p>
        <p>
          Deliverables for Cell Ranger & Space Ranger: run summary metrics (HTML, CSV), alignment files (BAM), feature barcode matrices (if applicable), Loupe Browser visualization files (cloupe), QC images and position information (JPG, PNG, CSV, JSON; Visium only), V(D)J analysis files (if applicable)
        </p>
        <p>
          Deliverables for MissionBio Tapestri: QC and metadata files (TXT, TSV, INFO, YAML, CSV, JSON), CellFinder plot (PDF), Tapestri Insights file (LOOM), alignment files (BAM), mapped reads by barcode (TXT), variant information (VCF)
        </p>
      </md-card-content>
    </md-card> 
  </div>
</template>

<script>
export default {};
</script>

<style></style>
