<template>
  <div>
    <div class="md-subheading">
      Required quantities and qualities of RNA, either extracted by IGO or submitted by the investigator, for RNA-based applications
    </div>
    <br />
    <br />
    <md-table md-card class="criteria-table">
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
        <md-table-cell rowspan="2">10X Genomics Visium</md-table-cell>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell rowspan="2" colspan="2" class="pass center-page">No quantity requirements</md-table-cell>
        <md-table-cell class="pass">DV200 > 50</md-table-cell>
        <md-table-cell rowspan="2" class="fail">No try range</md-table-cell>
        <md-table-cell rowspan="2">N/A</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">RIN > 7</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">Archer FusionPlex</md-table-cell>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell class="pass">250ng</md-table-cell>
        <md-table-cell class="try">20ng</md-table-cell>
        <md-table-cell rowspan="2" class="pass">RIN &gt; 6</md-table-cell>
        <md-table-cell rowspan="2" class="try">No fail range</md-table-cell>
        <md-table-cell rowspan="2">20&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">20ng</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">Archer Immunoverse</md-table-cell>
        <md-table-cell>PBMCs</md-table-cell>
        <md-table-cell class="pass">20ng</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
        <md-table-cell rowspan="2" class="pass">RIN &gt; 7</md-table-cell>
        <md-table-cell rowspan="2" class="try">RIN &gt; 5</md-table-cell>
        <md-table-cell rowspan="2">20&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Other</md-table-cell>
        <md-table-cell class="pass">400ng</md-table-cell>
        <md-table-cell class="try">20ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="3">ddPCR (per assay)</md-table-cell>
        <md-table-cell>cDNA</md-table-cell>
        <md-table-cell class="pass">1ng</md-table-cell>
        <md-table-cell class="try" rowspan="3">No fail range</md-table-cell>
        <md-table-cell colspan="2">No quality requirements</md-table-cell>
        <md-table-cell>9&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell class="try">2ng</md-table-cell>
        <md-table-cell class="try">DV200 > 50</md-table-cell>
        <md-table-cell class="try" rowspan="2">No fail range</md-table-cell>
        <md-table-cell rowspan="2">18&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">2ng</md-table-cell>
        <md-table-cell class="pass">RIN &gt; 6</md-table-cell>
      </md-table-row>
      <md-table-row>
        <!-- <md-table-cell rowspan="3">Oxford Nanopore RNA-Seq</md-table-cell>
        <md-table-cell>total RNA</md-table-cell>
        <md-table-cell class="pass">5&#181;g</md-table-cell>
        <md-table-cell class="try">3&#181;g</md-table-cell>
        <md-table-cell rowspan="2" class="pass">RIN > 7, 260/280 = 2, 260/230 = 2-2.2</md-table-cell>
        <md-table-cell rowspan="3" class="fail">No try criteria</md-table-cell>
        <md-table-cell rowspan="3">25&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>mRNA (polyadenylated)</md-table-cell>
        <md-table-cell rowspan="2" class="pass">200ng</md-table-cell>
        <md-table-cell rowspan="2" class="try">100ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>cDNA</md-table-cell>
        <md-table-cell class="pass">DIN > 8, 260/280 = 1.8, 260/230 = 2-2.2</md-table-cell>
      </md-table-row>
      <md-table-row> -->
        <md-table-cell>RNASeq-PolyA</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">500ng</md-table-cell>
        <md-table-cell class="try">100ng</md-table-cell>
        <md-table-cell class="pass">RIN &GreaterEqual; 6</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
        <md-table-cell>50&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">RNASeq-RiboDepletion</md-table-cell>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell class="try">1&#181;g</md-table-cell>
        <md-table-cell rowspan="2" class="try">500ng</md-table-cell>
        <md-table-cell class="try">No pass range</md-table-cell>
        <md-table-cell rowspan="2" class="try">DV200 &gt; 30</md-table-cell>
        <md-table-cell rowspan="2">10&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">1&#181;g</md-table-cell>
        <md-table-cell class="pass">DV200 &gt; 50</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">RNASeq-SMARTer</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">2ng</md-table-cell>
        <md-table-cell class="try">100pg</md-table-cell>
        <md-table-cell class="pass">RIN &gt; 8</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
        <md-table-cell>9.5&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>cDNA</md-table-cell>
        <md-table-cell class="pass">10ng</md-table-cell>
        <md-table-cell class="try">2ng</md-table-cell>
        <md-table-cell class="pass">Normal profile</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">TCR-Seq (IGO)</md-table-cell>
        <md-table-cell>Blood/PBMCs/Lymphoid Tissue</md-table-cell>
        <md-table-cell class="pass">100ng</md-table-cell>
        <md-table-cell class="fail" rowspan="2">No try range</md-table-cell>
        <md-table-cell rowspan="2" colspan="2" class="center-page">No quality requirements</md-table-cell>
        <md-table-cell rowspan="2">10&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Non-lymphoid tissue</md-table-cell>
        <md-table-cell class="pass">1.2&#181;g</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default { name: 'RnaCriteria' };
</script>

<style></style>
