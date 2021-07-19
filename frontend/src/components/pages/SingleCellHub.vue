<template>
  <div>
    <md-empty-state
      v-if="env === 'prod'"
      class="md-primary"
      md-rounded
      md-icon="flight_takeoff"
      md-label="We're almost there!"
      md-description="Stay tuned for something amazing">
    </md-empty-state>
    <md-app v-else>
      <md-app-drawer md-permanent="full">
        <!-- <md-toolbar class="md-transparent" md-elevation="0">
          <span :to="{ name: 'single cell hub' }">Single Cell Sequencing & Spatial Transcriptomics Hub</span>
        </md-toolbar> -->

        <md-list class="md-dense">
          <md-list-item :to="{ name: 'single cell hub' }">Single Cell Sequencing & Spatial Transcriptomics Hub</md-list-item>
          <md-list-item class="indent" href="#overview">Overview</md-list-item>
          <md-list-item class="indent" href="#sample-types">SC/ST Platforms and Supported Sample Types</md-list-item>
          <md-list-item class="indent" href="#scrnaseq">10X Genomics scRNA-Seq</md-list-item>
          <md-list-item class="indent" href="#plateseq">PlateSeq</md-list-item>
          <md-list-item class="indent" href="#multiome">10X Genomics Multiome</md-list-item>
          <md-list-item class="indent" href="#mbtapestri">Mission Bio Tapestri</md-list-item>
          <md-list-item class="indent" href="dlp">Direct Library Prep (DLP)</md-list-item>
          <md-list-item class="indent" href="#visium">10X Visium Processing & Price Summary</md-list-item>
          <!-- <md-list-item class="indent" href="#geomx">Nanostring GeoMx</md-list-item> -->
          <md-list-item :to="{ name: 'platforms & pricing' }">Pricing</md-list-item>
          <md-list-item :to="{ name: 'submission guidelines' }">How to submit samples</md-list-item>
          <md-list-item :to="{ name: 'reservations' }">Make a reservation for sample drop off</md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <p id="overview">
          Welcome to IGO's single cell and spatial transcriptomics hub -- here you'll find links to our pricing and submission information,
          as well as extra information about new and popular platforms.
        </p>
        <span class="md-title" id="sample-types">SC/ST Platforms and Supported Sample Types</span>
        <single-cell-table />
        <br />
        <hr>
        <br/>
        <span class="md-title" id="scrnaseq">10 Genomics scRNA-Seq</span>
          <ul style="text-align:left;">
            <li>Input: Single cell suspension</li>
            <li>Output: FASTQ, Cell Ranger pipeline output</li>
            <li>Information type: Single-cell resolution of gene expression (either 3'-mRNA or 5'-mRNA-based) with optional TCR enrichment (5' only). Proteomics data can also be recovered with Feature Barcoding technology.</li>
            <li>Considerations:<ul>
              <li>>50K cells needed for best results</li>
              <li>Cell viability is of the utmost importance, and the most common cause of sample failure</li>
              <li>It is recommended that data analysis is arranged in advance, as IGO can provide only basic pipeline output without customization</li>
              <li>10X Genomics recommends 20K reads/cell; if you need higher coverage, please let us know in advance</li>
              <li>Feature Barcoding vs Cell Hashing vs CITE-Seq: "CITE-Seq" is a specific method of enrichment that is not supported by IGO with 10X kits; if you are looking at protein expression alongside your gene expression, use the term "feature barcoding". If you are using oligo-tagged antibodies to multiplex samples prior to submission to IGO, you are "cell hashing". You can do both! BioLegend information:<ul>
                <li>TotalSeq-A: used for generic poly-A based methods. <strong>Not compatible with 10X Genomics in IGO</strong></li>
                <li>TotalSeq-B: used for <strong>3' gene expression experiments</strong></li>
                <li>TotalSeq-C: used for <strong>5' gene expression experiments</strong></li>
                <li>TotalSeq-D: used for MissionBio DNA-based methods. <strong>Not compatible with 10X Genomics in IGO</strong></li>
                </ul></li>
              <li>Please bring your cells in at least 50uL of 800-1200 cells/&mu;L PBS + 0.04% BSA</li>
              <li>Recovery of 10K cells for analysis can never be guaranteed</li>
              </ul></li>
          </ul>
        <br />
        <hr>
        <br />
        <span style="text-align:left;">PlateSeq</span>
        <ul style="text-align:left;">
          <li>Input: 96-well plate with 1-100 sorted cells/well</li>
          <li>Output: FASTQ</li>
          <li>Considerations:<ul>
            <li>PlateSeq is an in-house-developed, SMART-Seq-based, single- or low-cell RNA Sequencing platform</li>
            <li>10X Genomics is a more cost effective platform with higher throughput, but PlateSeq is a better choice for primarily a) investigators who do not 50K cells to work with and need something that is tolerant of low throughput or b) investigators who require full-length cDNA, which is not available with 10X Genomics' methods</li>
            <li>After sorting, plates can be frozen, so immediate processing by IGO is not required</li>
            <li>1-5M reads/cell recommended for good saturation</li>
            </ul></li>
        </ul>
        <br />
        <hr>
        <br />
        <span class="md-title" id="multiome">10X Genomics Multiome</span>
        <ul style="text-align:left;">
          <li>Input: Single nuclei suspension (IGO will provide nuclei resuspension buffer; we <strong>do not</strong> provide nuclei isolation services)</li>
          <li>Output: FASTQ (RNA-Seq & ATAC-Seq), Cell Ranger pipeline output</li>
          <li>Considerations:<ul>
            <li>150-400K nuclei needed for best results</li>
            <li>Nuclei quality is the most important factor for quality data -- the prep should not have live cells, the nuclei should be intact, and aggregates, clumps, and debris should be avoided</li>
            <li>DNA intercalating dyes can affect ATAC results -- only 7AAD is approved for use by 10X Genomics</li>
            <li>Recovery depends on many factors, including those inherent to the nuclei and things like debris in the suspension, so 10K nuclei for analysis cannot be guaranteed</li>
            <li>Please ensure you are following 10X Genomics-validated nuclei isolation protocols for Multiome</li>
            <li>It is recommended that data anlysis, as IGO can provide only basic pipeline output without customization</li>
            <li>10X Genomics recommends 20K reads/cell for the RNA-Seq portion and 25K reads/cell for the ATAC-Seq portion. Please let us know in advance if you need higher coverage</li>
            <li>RNA-Seq reads are nuclear only and may not be comparable to whole-cell RNA-Seq</li>
            <li>Feature barcoding and cell hashing are <strong>not compatible</strong> with Multiome</li>
            </ul></li>
        </ul>
        <br />
        <hr>
        <br />
        <span class="md-title" id="mbtapestri">MissionBio Tapestri</span>
        <ul style="text-align:left;">
          <li>Input: Single cell or nuclei suspension</li>
          <li>Output: FASTQ, Tapestri pipeline output</li>
          <li>Considerations:<ul>
            <li>DNA-based gene enrichment single cell platform for SNV, indel, CNV, LOH, and translocation interrogation</li>
            <li>IGO offers the Tumor Hotspot panel in stock, but can also process other off-the-shelf or custom DNA panels from MissionBio</li>
            <li>DNA+Protein available using TotalSeq-D antibodies from BioLegend</li>
            <li>Up to 10K cells analyzed</li>
            <li>IGO requests 100K (for DNA only) or 2M (for DNA+Protein) cells for processing</li>
            <li>For DNA+Protein, IGO will handle antibody staining</li>
            </ul></li>
        </ul>
        <br />
        <hr>
        <br />
        <span class="md-title" id="dlp">Direct Library Prep (DLP)</span>
        <ul style="text-align:left;">
          <li>Input: Viably frozen cells (10% DMSO/DMEM)</li>
          <li>Output: FASTQ</li>
          <li>Considerations:<ul>
            <li>While we do accept fresh cells by appointment, viably frozen cells are preferred, and our experience so far is that they perform just as well</li>
            <li>At least 100K cells are recommended for processing</li>
            <li>Each chip can accommodate 800 cells</li>
            <li>Currently, DLP is offered on a collaborative basis only; please contact us if you are considering an experiment.</li>
            </ul></li>
        </ul>
        <br />
        <hr>
        <br />
        <span class="md-title" id="visium">10X Visium Processing & Price Summary</span>
        <ten-x-table />
        <br />
        <hr>
        <br/>
        <!-- <span class="md-list-item-text md-title" id="geomx">Nanostring GeoMx</span>
        <md-list slot="md-expand">
          <md-list-item>
            <div class="md-layout md-gutter">
              <div class="md-layout-item">Sample type</div>
              <div class="md-layout-item">Info type</div>
            </div>
          </md-list-item>
        </md-list> -->
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { ENV } from './../../config.js';
import SingleCellTable from '../SingleCellTable.vue';
import TenXTable from '../TenXTable.vue';

export default {
  components: { SingleCellTable, TenXTable },
  data: function() {
    return {
      env: ENV
    }
  }
};
</script>

<style></style>
