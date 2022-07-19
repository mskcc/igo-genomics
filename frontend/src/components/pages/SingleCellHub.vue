<template>
  <div class="single-cell-hub">
    <md-app style="text-align:left;">
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
          <md-list-item class="indent" href="#dlp">Direct Library Prep (DLP)</md-list-item>
          <md-list-item class="indent" href="#visium">10X Genomics Visium</md-list-item>
          <md-list-item class="indent" href="#geomx">Nanostring GeoMx</md-list-item>
          <md-list-item :to="{ name: 'platforms & pricing' }">Pricing</md-list-item>
          <md-list-item :to="{ name: 'submission guidelines' }">How to submit samples</md-list-item>
          <md-list-item><a :href="scCalendar" target="__blank">Make a reservation for sample drop off</a></md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <p id="overview">
          Welcome to IGO's single cell and spatial transcriptomics hub -- here you'll find links to our pricing and submission information,
          as well as extra information about new and popular platforms.
        </p>

        <single-cell-table id="sample-types" />

        <md-divider></md-divider>

        <div class="md-title" id="scrnaseq">10X Genomics scRNA-Seq</div>
        <ul>
          <li>Input: Single cell suspension</li>
          <li>Output: FASTQ, Cell Ranger pipeline output</li>
          <li>
            Information type: Single-cell resolution of gene expression (either 3'-mRNA or 5'-mRNA-based) with optional TCR enrichment (5'
            only). Protein data can also be recovered with Feature Barcoding technology.
          </li>
          <li>
            Considerations:
            <ul>
              <li>>50K cells needed for best results</li>
              <li>Cell viability and having a debris-free suspension is of the utmost importance, and the most common cause of sample failure</li>
              <li>
                It is recommended that data analysis is arranged in advance, as IGO can provide only basic pipeline output without
                customization
              </li>
              <li>10X Genomics recommends 20K reads/cell; if you need higher coverage, please let us know in advance</li>
              <li>
                Feature Barcoding vs Cell Hashing vs CITE-Seq: "CITE-Seq" is a specific method of enrichment that is not supported by IGO
                with 10X kits; if you are looking at protein expression alongside your gene expression, use the term "feature barcoding". If
                you are using oligo-tagged antibodies to multiplex samples prior to submission to IGO, you are "cell hashing". You can do
                both!
              </li>
              <li>BioLegend information:
                <ul>
                  <li>TotalSeq-A: used for generic poly-A based methods. <strong>Not compatible with 10X Genomics in IGO</strong></li>
                  <li>TotalSeq-B: used for <strong>3' gene expression experiments</strong></li>
                  <li>TotalSeq-C: used for <strong>5' gene expression experiments</strong></li>
                  <li>TotalSeq-D: used for MissionBio DNA-based methods. <strong>Not compatible with 10X Genomics in IGO</strong></li>
                </ul>
              </li>
              <li>Please bring your cells in at least 50uL of 800-1200 cells/&mu;L PBS + 0.04% BSA</li>
              <li>Recovery of 10K cells for analysis can never be guaranteed</li>
            </ul>
          </li>
        </ul>

        <md-divider></md-divider>

        <div class="md-title" id="plateseq">PlateSeq</div>
        <ul>
          <li>Input: 96-well plate with 1-100 sorted cells/well</li>
          <li>Output: FASTQ</li>
          <li>
            Considerations:
            <ul>
              <li>PlateSeq is an in-house-developed, SMART-Seq-based, single- or low-cell RNA Sequencing platform</li>
              <li>
                10X Genomics is a more cost effective platform with higher throughput, but PlateSeq is a better choice for primarily a)
                investigators who do not have 50K cells to work with and need something that is tolerant of low throughput or b) investigators
                who require full-length cDNA, which is not available with 10X Genomics' methods
              </li>
              <li>After sorting, plates can be frozen, so immediate processing by IGO is not required</li>
              <li>1-5M reads/cell recommended for good saturation</li>
            </ul>
          </li>
        </ul>

        <md-divider></md-divider>

        <div class="md-title" id="multiome">10X Genomics Multiome</div>
        <ul>
          <li>
            Input: Single nuclei suspension (IGO will provide nuclei resuspension buffer; we <strong>do not</strong> provide nuclei
            isolation services)
          </li>
          <li>Output: FASTQ (RNA-Seq & ATAC-Seq), Cell Ranger pipeline output</li>
          <li>
            Considerations:
            <ul>
              <li>150-400K nuclei needed for best results</li>
              <li>
                Nuclei quality is the most important factor for quality data -- the prep should not have live cells, the nuclei should be
                intact, and aggregates, clumps, and debris should be avoided
              </li>
              <li>DNA intercalating dyes can affect ATAC results -- only 7AAD is approved for use by 10X Genomics</li>
              <li>
                Recovery depends on many factors, including those inherent to the nuclei and things like debris in the suspension, so 10K
                nuclei for analysis cannot be guaranteed
              </li>
              <li>Please ensure you are following 10X Genomics-validated nuclei isolation protocols for Multiome</li>
              <li>It is recommended that data analysis be arranged in advance, as IGO can provide only basic pipeline output without customization</li>
              <li>
                10X Genomics recommends 20K reads/cell for the RNA-Seq portion and 25K reads/cell for the ATAC-Seq portion. Please let us
                know in advance if you need higher coverage
              </li>
              <li>RNA-Seq reads are nuclear only and may not be comparable to whole-cell RNA-Seq</li>
              <li>Feature barcoding and cell hashing are <strong>not compatible</strong> with Multiome (while customized methods to hash nuclei exist, we do not offer them in IGO)</li>
            </ul>
          </li>
        </ul>

        <md-divider></md-divider>

        <div class="md-title" id="mbtapestri">MissionBio Tapestri</div>
        <ul>
          <li>Input: Single cell or nuclei suspension</li>
          <li>Output: FASTQ, Tapestri pipeline output</li>
          <li>
            Considerations:
            <ul>
              <li>DNA-based gene enrichment single cell platform for SNV, indel, CNV, LOH, and translocation interrogation</li>
              <li>
                IGO offers the Tumor Hotspot panel in stock, but can also process other off-the-shelf or custom DNA panels from MissionBio
              </li>
              <li>If you are using a custom panel, please provide IGO with the panel BED file from MissionBio at sample submission</li>
              <li>DNA+Protein available using TotalSeq-D antibodies from BioLegend</li>
              <li>Up to 10K cells analyzed</li>
              <li>IGO requests 100K (for DNA only) or 2M (for DNA+Protein) cells for processing</li>
              <li>For DNA+Protein, IGO will handle antibody staining</li>
            </ul>
          </li>
        </ul>

        <md-divider></md-divider>

        <div class="md-title" id="dlp">Direct Library Prep (DLP)</div>
        <ul>
          <li>Input: Viably frozen cells (10% DMSO/DMEM)</li>
          <li>Output: FASTQ</li>
          <li>
            Considerations:
            <ul>
              <li>
                While we do accept fresh cells by appointment, viably frozen cells are preferred, and our experience so far is that they
                perform just as well
              </li>
              <li>At least 100K cells should be submitted for processing</li>
              <li>We spot 800-1000 cells per experiment</li>
              <li>Currently, DLP is offered on a collaborative basis only; please contact us if you are considering an experiment.</li>
            </ul>
          </li>
        </ul>

        <md-divider></md-divider>

        <div class="md-title" id="visium">10X Genomics Visium</div>
        <ul>
          <li>Input: Frozen or FFPE blocks</li>
          <li>Output: FASTQ, Space Ranger count output</li>
          <li>
            Considerations:
            <ul>
              <li>Each slide has four squares available for tissue sections, each 6.5x6.5mm -- we recommend tissues are processed in duplicate, at two samples per slide</li>
              <ul>
                <li>Note: Investigators can choose to buy slides in packs of 1 (4 reactions) or 4 (16 reactions). They will be billed at project initiation for those reagents, and have at least 3 months to use them.</li>
              </ul>
              <li>We strongly recommend test stainings to ensure structures are visible and cells of interest are part of the usable section.</li>
              <li>IGO works in collaboration with MCC to prepare these samples and MCC bills services separately from IGO.</li>
              <li>Permeabilization optimization is only necessary with frozen tissue.</li>
              <li>From frozen tissue, all polyadenylated mRNA can be captured by the poly-dT primers; for FFPE a whole transcriptome (human or mouse) probeset is used to capture RNA.</li>
              <li>FFPE requires about half the reads of frozen, so sequencing costs will be reduced for FFPE (see below for a cost breakdown).</li>
            </ul>
          </li>
        </ul>

        <ten-x-table />

        <md-divider></md-divider>

        <div class="md-title" id="geomx">Nanostring GeoMx</div>
        <ul>
          <li>Input: FFPE slides</li>
          <li>Output: FASTQ + GeoMx pipeline</li>
          <li>Considerations:
            <ul>
              <li>We require that slides be test-stained and visualized before beginning a GeoMx experiment, to ensure that regions of interest are distinct and present</li>
              <li>While Nanostring-validated morphological staining panels need little optimization, custom panels likely will</li>
              <li>If selected regions are too small and not enough RNA can be collected, library prep will fail, so we have a 200 micron minimum for ROI circumference</li>
              <li>ROI size may need to be increased if the targeted cell type (CD45+, for instance) is rarer in the region</li>
              <li>Multiple areas of interest can be harvested from a single region: for example, from a single ROI, CD45+, tumor, and TME cells can be separately harvested for 3 AOIs</li>
              <li>Sequencing depth is based on Nanostring recommendations for each panel, but experimental needs can vary</li>
            </ul>
          </li>
        </ul>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import SingleCellTable from '../SingleCellTable.vue';
import TenXTable from '../TenXTable.vue';
// import { SC_CALENDAR } from './../../config.js';

export default {
  components: { SingleCellTable, TenXTable },
  data: function() {
    return {
      scCalendar: 'https://outlook.office365.com/owa/calendar/igo1@mskcc.onmicrosoft.com/bookings/',
    };
  },
};
</script>

<style></style>
