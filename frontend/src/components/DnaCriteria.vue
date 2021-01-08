<template>
  <div>
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
        <md-table-cell rowspan="5">Adaptive immunoSEQ<sup>1</sup></md-table-cell>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell class="pass">25&#181;m</md-table-cell>
        <md-table-cell class="try">&lt;5 curls</md-table-cell>
        <md-table-cell rowspan="5" colspan="2">No quality requirements</md-table-cell>
        <md-table-cell rowspan="5">50&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Lymphoid tissue</md-table-cell>
        <md-table-cell class="pass">650ng</md-table-cell>
        <md-table-cell class="try">175ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>PBMCs</md-table-cell>
        <md-table-cell class="pass">1.1&#181;g</md-table-cell>
        <md-table-cell class="try">275ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>T cells</md-table-cell>
        <md-table-cell class="pass">400ng</md-table-cell>
        <md-table-cell class="try">100ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Whole Blood/BMMCs</md-table-cell>
        <md-table-cell class="pass">1.6&#181;g</md-table-cell>
        <md-table-cell class="try">400ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Other/FFPE</md-table-cell>
        <md-table-cell class="pass">3&#181;g</md-table-cell>
        <md-table-cell class="try">1&#181;g</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>AmpliconSeq</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="try">10ng</md-table-cell>
        <md-table-cell colspan="2">No quality requirements</md-table-cell>
        <md-table-cell>55&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>ChIPSeq/CUT&RUN</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell class="pass">10ng</md-table-cell>
        <md-table-cell class="try">No fail range</md-table-cell>
        <md-table-cell class="pass">100-700bp</md-table-cell>
        <md-table-cell class="try">100 > bp > 700</md-table-cell>
        <md-table-cell>50&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell
          ><a href="https://my.ilabsolutions.com/service_center/3276/?tab=services" target="__blank">CRISPRSeq</a></md-table-cell
        >
        <md-table-cell></md-table-cell>
        <md-table-cell class="pass">1&#181;g</md-table-cell>
        <md-table-cell class="try">400ng</md-table-cell>
        <md-table-cell class="pass">200-280bp</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
        <md-table-cell>100&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">ddPCR (per assay)</md-table-cell>
        <md-table-cell>cfDNA</md-table-cell>
        <md-table-cell class="pass" rowspan="2">20ng</md-table-cell>
        <md-table-cell class="try">No fail range</md-table-cell>
        <md-table-cell colspan="2" rowspan="2">No quality requirements</md-table-cell>
        <md-table-cell rowspan="2">9&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Other</md-table-cell>
        <md-table-cell class="try">9ng</md-table-cell>
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
        <md-table-cell rowspan="3">IMPACT/HemePACT<sup>3</sup></md-table-cell>
        <md-table-cell>cfDNA</md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="try">5ng</md-table-cell>
        <md-table-cell rowspan="3" colspan="2">No quality requirements</md-table-cell>
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
        <md-table-cell rowspan="2" colspan="2">No quality requirements</md-table-cell>
        <md-table-cell rowspan="2">55&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>PBMCs</md-table-cell>
        <md-table-cell class="pass">200ng</md-table-cell>
        <md-table-cell class="try">100ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>STR Analysis</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell class="pass">10ng</md-table-cell>
        <md-table-cell class="try">No fail range</md-table-cell>
        <md-table-cell colspan="2">No quality requirements</md-table-cell>
        <md-table-cell>50ng/&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="3">Whole Exome Sequencing</md-table-cell>
        <md-table-cell>cfDNA</md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="try">5ng</md-table-cell>
        <md-table-cell colspan="2">No quality requirements</md-table-cell>
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
        <md-table-cell colspan="2" rowspan="2">No quality requirements</md-table-cell>
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
        <md-table-cell colspan="2">No quality requirements</md-table-cell>
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
          <sup>1</sup>Guidelines given are based on survey depth (two replicates). For six replicates, multiply input requirements by three.
          <sup>2</sup>CRISPRSeq samples are <strong>not</strong> QC'd by IGO. Mass requirements are based on investigator QC.
          <sup>3</sup>Requirements also apply to custom capture projects.
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default { name: 'DnaCriteria' };
</script>

<style></style>
