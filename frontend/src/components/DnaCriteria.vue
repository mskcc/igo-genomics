<template>
  <div>
    <div class="md-subheading">
      Required quantities and qualities of DNA, either extracted by IGO or submitted by the investigator, for DNA-based applications
    </div>
    <br />
    <br />

    <md-table id="pass-fail" md-card class="criteria-table">
      <md-table-row>
        <md-table-head>Platform</md-table-head>
        <md-table-head>Sample Type</md-table-head>
        <md-table-head>Mass to Pass</md-table-head>
        <md-table-head>Mass to Try</md-table-head>
        <md-table-head>Quality to Pass</md-table-head>
        <md-table-head>Quality to Try</md-table-head>
        <md-table-head>Maximum Submission Volume</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>AmpliconSeq</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="try">10ng</md-table-cell>
        <md-table-cell rowspan="2" class="pass">100-700bp</md-table-cell>
        <md-table-cell rowspan="2" class="try">100 > bp > 700</md-table-cell>
        <md-table-cell>55&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>ChIPSeq/CUT&RUN</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell class="pass">10ng</md-table-cell>
        <md-table-cell class="try">No fail range</md-table-cell>
        <md-table-cell>50&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell><a href="https://my.ilabsolutions.com/service_center/3276/?tab=services" target="__blank">CRISPRSeq</a></md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell class="pass">1&#181;g<sup>b<md-tooltip v-if="footnotes.b" md-direction="right">{{ footnotes.b }}</md-tooltip></sup></md-table-cell>
        <md-table-cell class="try">400ng</md-table-cell>
        <md-table-cell class="pass">200-280bp</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
        <md-table-cell>100&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="3">ddPCR (per assay)</md-table-cell>
        <md-table-cell>cDNA</md-table-cell>
        <md-table-cell class="pass">1ng</md-table-cell>
        <md-table-cell class="try" rowspan="3">No fail range</md-table-cell>
        <md-table-cell colspan="2" rowspan="3" class="center-page">No quality requirements</md-table-cell>
        <md-table-cell rowspan="3">9&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>cfDNA</md-table-cell>
        <md-table-cell class="pass" rowspan="2">20ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>gDNA</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">EPIC MethylCapture</md-table-cell>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell class="pass">700ng</md-table-cell>
        <md-table-cell class="try" rowspan="2">200ng</md-table-cell>
        <md-table-cell class="pass" rowspan="2">DIN > 2</md-table-cell>
        <md-table-cell class="fail" rowspan="2">No try range</md-table-cell>
        <md-table-cell rowspan="2">50&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">500ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="3">IMPACT<sup>c<md-tooltip v-if="footnotes.c" md-direction="right">{{ footnotes.c }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>cfDNA</md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="try">5ng</md-table-cell>
        <md-table-cell rowspan="3" colspan="2" class="center-page">No quality requirements</md-table-cell>
        <md-table-cell rowspan="3">55&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell class="pass">200ng</md-table-cell>
        <md-table-cell class="try">40ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="try">20ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">MSK-ACCESS</md-table-cell>
        <md-table-cell>cfDNA</md-table-cell>
        <md-table-cell class="pass">20ng</md-table-cell>
        <md-table-cell class="try">5ng</md-table-cell>
        <md-table-cell rowspan="2" colspan="2" class="center-page">No quality requirements</md-table-cell>
        <md-table-cell rowspan="2">55&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>PBMCs</md-table-cell>
        <md-table-cell class="pass">200ng</md-table-cell>
        <md-table-cell class="try">100ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Oxford Nanopore WGS</md-table-cell>
        <md-table-cell>gDNA</md-table-cell>
        <md-table-cell class="pass">2&#181;g</md-table-cell>
        <md-table-cell class="try" rowspan="2">500ng</md-table-cell>
        <md-table-cell rowspan="3" class="pass">DIN > 8, 260/280 = 1.8, 260/230 = 2-2.2, size > 25kb<sup>d<md-tooltip v-if="footnotes.d" md-direction="right">{{ footnotes.d }}</md-tooltip></sup></md-table-cell>
        <md-table-cell rowspan="3" class="fail">No try range</md-table-cell>
        <md-table-cell rowspan="3">50&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">Oxford Nanopore WGS (Multiplexed)</md-table-cell>
        <md-table-cell>2-4 barcodes</md-table-cell>
        <md-table-cell class="pass">1&#181;g</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>>4 barcodes</md-table-cell>
        <md-table-cell class="pass">400ng</md-table-cell>
        <md-table-cell class="try">200ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>STR Analysis</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell class="pass">10ng</md-table-cell>
        <md-table-cell class="try">No fail range</md-table-cell>
        <md-table-cell colspan="2" class="center-page">No quality requirements</md-table-cell>
        <md-table-cell>50ng/&#181;L</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell rowspan="3">Whole Exome Sequencing</md-table-cell>
        <md-table-cell>cfDNA</md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="try">5ng</md-table-cell>
        <md-table-cell colspan="2" class="center-page">No quality requirements</md-table-cell>
        <md-table-cell rowspan="3">55&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell class="pass">200ng</md-table-cell>
        <md-table-cell class="try">100ng</md-table-cell>
        <md-table-cell class="pass" rowspan="2">DIN > 4</md-table-cell>
        <md-table-cell class="try" rowspan="2">DIN > 3</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="try">20ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Whole Genome Sequencing (deep, PCR-free)</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">500ng</md-table-cell>
        <md-table-cell class="try">300ng</md-table-cell>
        <md-table-cell class="pass">DIN > 7</md-table-cell>
        <md-table-cell class="try">DIN > 6</md-table-cell>
        <md-table-cell>55&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">Whole Genome Sequencing (deep, PCR+)</md-table-cell>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell class="pass" rowspan="2">500ng</md-table-cell>
        <md-table-cell class="try">300ng</md-table-cell>
        <md-table-cell colspan="2" rowspan="2" class="center-page">No quality requirements</md-table-cell>
        <md-table-cell rowspan="2">55&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="try">100ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="3">Whole Genome Sequencing (shallow, bacteria, yeast)</md-table-cell>
        <md-table-cell>cfDNA</md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="try">5ng</md-table-cell>
        <md-table-cell colspan="2" class="center-page">No quality requirements</md-table-cell>
        <md-table-cell rowspan="3">55&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell class="pass">200ng</md-table-cell>
        <md-table-cell class="try">100ng</md-table-cell>
        <md-table-cell class="pass" rowspan="2">DIN > 5</md-table-cell>
        <md-table-cell class="try" rowspan="2">DIN > 3</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="try">20ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell colspan="7">
          <sup>a</sup>Guidelines given are based on survey depth (two replicates). For four replicates, multiply input requirements by two.
          <sup>b</sup>CRISPRSeq samples are <strong>not</strong> QC'd by IGO. Mass requirements are based on investigator QC.
          <sup>c</sup>Requirements also apply to custom capture projects.
          <sup>d</sup>Samples that do not pass quality requirements may be rescued with a gDNA cleanup or short fragment removal ($20/sample).
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'DnaCriteria',
  data: function() {
    return {
      footnotes: {
        a: 'For samples that are clonal, non-lymphoid, or with fewer than 100K T cells, survey is appropriate. For detection of rare clones or peripheral immune repertoire in samples with 100-200K T cells, deep resolution can be used. For 500-600K T cells, choose ultradeep.',
        b: "CRISPRSeq samples are not QC'd by IGO. Mass requirements are based on investigator QC.",
        c: 'Requirements also apply to custom capture projects.',
        d: 'Samples that do not pass quality requirements may be rescued with a gDNA cleanup or short fragment removal ($20/sample).',
      },
    };
  },
};
</script>

<style></style>
