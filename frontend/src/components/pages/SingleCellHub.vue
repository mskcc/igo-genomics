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
          <md-list-item class="indent" href="#plateseq">SmartSeq v3 (384-well)</md-list-item>
          <md-list-item class="indent" href="#multiome">10X Genomics Multiome</md-list-item>
          <md-list-item class="indent" href="#dlp">Direct Library Prep (DLP)</md-list-item>
          <md-list-item class="indent" href="#visium">10X Genomics Visium HD</md-list-item>
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
            Information type: Single-cell resolution of gene expression (either 3'-mRNA or 5'-mRNA-based) with optional TCR or BCR enrichment (5'
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
              <li>Lo-bind tubes are recommended for best results</li>
              <li>Recovery of 20K cells for analysis can never be guaranteed</li>
            </ul>
          </li>
          <li>If you are interested in 10x Genomics Flex for fixed or FFPE samples or scRNA-Seq with on-chip multiplexing, please contact us at genomics@mskcc.org.</li>
        </ul>

        <md-divider></md-divider>

        <div class="md-title" id="plateseq">SmartSeq v3 (384-well)</div>
        <ul>
          <li>Input: 384-well plate with 1-100 sorted cells/well</li>
          <li>Output: FASTQ</li>
          <li>
            Considerations:
            <ul>
              <li>SmartSeq v3 (384-well) is an in-house-developed, SMART-Seq-based, single- or low-cell RNA Sequencing platform</li>
              <li>
                10X Genomics is a more cost effective platform with higher throughput, but plate-based SmartSeq is a better choice for primarily a)
                investigators who do not have 50K cells to work with and need something that is tolerant of low throughput or b) investigators
                who require full-length cDNA, which is not available with 10X Genomics' methods
              </li>
              <li>After sorting, plates can be frozen, so immediate processing by IGO is not required</li>
              <li>1-5M reads/cell recommended for good saturation</li>
              <li>Investigators with only a handful of samples and 100-1000 cells/sample (who do not want to use a full 384-well plate) could use our standard SMARTer RNA-Seq chemistry starting with cells as input on a 96-well plate</li>
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
              <li>Lo-bind tubes are recommended for best results</li>
            </ul>
          </li>
        </ul>

        <md-divider></md-divider>

        <div class="md-title" id="dlp">Direct Library Prep (DLP)</div>
        <ul>
          <li>Input: Single nuclei suspension</li>
          <li>Output: FASTQ</li>
          <li>
            Considerations:
            <ul>
              <li>
                Currently, we are only accepting nuclei suspensions for DLP, as whole-cell performance has been inconsistent.
              </li>
              <li>At least 100K nuclei should be submitted for processing</li>
              <li>We spot 800-1600 nuclei per experiment</li>
              <li>Currently, DLP is offered on a collaborative basis only; please <a href="mailto:genomics@mskcc.org">contact us</a> if you are considering an experiment.</li>
            </ul>
          </li>
        </ul>

        <md-divider></md-divider>

        <div class="md-title" id="visium">10X Genomics Visium & Visium HD</div>
        <ul>
          <li>Input: Frozen (for v1 or CytAssist), FFPE (CytAssist or HD), or PFA Fixed Frozen (CytAssist) tissue</li>
          <li>Output: FASTQ, Space Ranger count output</li>
          <li>
            Considerations:
            <ul>
              <li>Each slide has two squares available for tissue sections, each 6.5x6.5mm or 11x11mm (Visium CytAssist only)</li>
              <li>We strongly recommend test stainings to ensure structures are visible and cells of interest are part of the usable section.</li>
              <li>IGO works in collaboration with MCC to prepare these samples and MCC bills services separately from IGO.</li>
              <li>Permeabilization optimization is only necessary with frozen tissue for Visium -- there is no tissue optimization step for Visium HD, even if tissue samples are frozen.</li>
              <li>From frozen tissue for Visium, all polyadenylated mRNA can be captured by the poly-dT primers; for FFPE and Visium HD, a whole transcriptome (human or mouse) probeset is used to capture RNA.</li>
              <li>FFPE requires about half the reads of frozen, so sequencing costs will be reduced for FFPE (see below for a cost breakdown).</li>
            </ul>
          </li>
        </ul>
        <md-table md-card>
          <md-table-row>
            <md-table-cell></md-table-cell>
            <md-table-cell>v1</md-table-cell>
            <md-table-cell colspan="3" class="center-page">CytAssist</md-table-cell>
            <md-table-cell>Protein Co-detection</md-table-cell>
            <md-table-cell>HD</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Sample Type</md-table-cell>
            <md-table-cell colspan="2" class="center-page">Fresh Frozen</md-table-cell>
            <md-table-cell>Fixed Frozen</md-table-cell>
            <md-table-cell colspan="3" class="center-page">FFPE</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>QC Requirements</md-table-cell>
            <md-table-cell>RIN &GreaterEqual; 7</md-table-cell>
            <md-table-cell>RIN &GreaterEqual; 4</md-table-cell>
            <md-table-cell>DV200 > 50%</md-table-cell>
            <md-table-cell colspan="3">DV200 > 30%</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Section Size</md-table-cell>
            <md-table-cell colspan="3" class="center-page">10 &micro;m</md-table-cell>
            <md-table-cell colspan="3" class="center-page">5 &micro;m</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Enrichment</md-table-cell>
            <md-table-cell>PolyA</md-table-cell>
            <md-table-cell colspan="5" class="center-page">Probes (v2)</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell rowspan="2">Capture Area</md-table-cell>
            <md-table-cell>6.5mm&sup2; (5K spots)</md-table-cell>
            <md-table-cell colspan="4" class="center-page">6.5mm&sup2; (5K spots) or 11mm&sup2; (14K spots)</md-table-cell>
            <md-table-cell>6.5mm&sup2; (10M+ spots)</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>4 capture areas/slide</md-table-cell>
            <md-table-cell colspan="5" class="center-page">2 capture areas/slide</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Spot Size</md-table-cell>
            <md-table-cell colspan="5" class="center-page">55&micro;m diameter</md-table-cell>
            <md-table-cell>2&micro;m&sup2;</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Resolution</md-table-cell>
            <md-table-cell colspan="5" class="center-page">1-10 cells</md-table-cell>
            <md-table-cell>single cell</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>10X Kit Price</md-table-cell>
            <md-table-cell>$5,450/slide</md-table-cell>
            <md-table-cell colspan="3" class="center-page">$7,100/2 6.5mm&sup2; slides or $7,300/11mm&sup2; slide</md-table-cell>
            <md-table-cell>CytAssist price + $1,995/slide</md-table-cell>
            <md-table-cell>$12,400/2 slides</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>IGO Processing Costs</md-table-cell>
            <md-table-cell>$1,100/slide</md-table-cell>
            <md-table-cell colspan="5" class="center-page">$700/slide</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Sequencing Requirements</md-table-cell>
            <md-table-cell>50K reads/spot</md-table-cell>
            <md-table-cell colspan="4" class="center-page">25K reads/spot</md-table-cell>
            <md-table-cell>20K reads/spot</md-table-cell>
          </md-table-row>
        </md-table>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import SingleCellTable from '../SingleCellTable.vue';
import { SC_CALENDAR } from './../../config.js';

export default {
  components: { SingleCellTable },
  data: function() {
    return {
      scCalendar: SC_CALENDAR,
    };
  },
};
</script>

<style></style>
