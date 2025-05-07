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
        <md-table-cell rowspan="4">10X Genomics Visium</md-table-cell>
        <md-table-cell>FFPE (CytAssist/HD)</md-table-cell>
        <md-table-cell rowspan="4" colspan="2" class="center-page">No quantity requirements</md-table-cell>
        <md-table-cell class="pass">DV200 > 30</md-table-cell>
        <md-table-cell rowspan="4" class="fail">No try range</md-table-cell>
        <md-table-cell rowspan="4">N/A</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Fixed Frozen (CytAssist/HD)</md-table-cell>
        <md-table-cell class="pass">DV200 > 50</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen (CytAssist/HD)</md-table-cell>
        <md-table-cell class="pass">RIN > 4</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen (v1)</md-table-cell>
        <md-table-cell class="pass">RIN > 7</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="3">ddPCR (per replicate)</md-table-cell>
        <md-table-cell>cDNA</md-table-cell>
        <md-table-cell rowspan="3" class="pass">1ng</md-table-cell>
        <md-table-cell class="try" rowspan="3">No fail range</md-table-cell>
        <md-table-cell colspan="2">No quality requirements</md-table-cell>
        <md-table-cell rowspan="3">9&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>FFPE</md-table-cell>
        <md-table-cell class="try">DV200 > 50</md-table-cell>
        <md-table-cell class="try" rowspan="2">No fail range</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">RIN &gt; 6</md-table-cell>
      </md-table-row>
      <md-table-row>
      <md-table-cell>Oxford Nanopore cDNA-Seq</md-table-cell>
        <md-table-cell>total RNA</md-table-cell>
        <md-table-cell class="pass">2,000ng | 2&#181;g</md-table-cell>
        <md-table-cell class="try">1,000ng | 1&#181;g</md-table-cell>
        <md-table-cell class="pass">RIN &GreaterEqual; 7, 260/230 & 260/280 &GreaterEqual; 1.7</md-table-cell>
        <md-table-cell class="try">RIN &GreaterEqual; 6, 260/230 & 260/280 &lt; 1.7<sup>a<md-tooltip v-if="footnotes.a" md-direction="right">{{ footnotes.a }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>10&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>RNA Capture</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell rowspan="2" class="pass">500ng</md-table-cell>
        <md-table-cell rowspan="2" class="try">100ng</md-table-cell>
        <md-table-cell rowspan="2" class="pass">RIN &GreaterEqual; 6</md-table-cell>
        <md-table-cell class="try">No fail range</md-table-cell>
        <md-table-cell>10&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>RNASeq-PolyA</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
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
        <md-table-cell class="pass">1,000ng | 1&#181;g</md-table-cell>
        <md-table-cell class="pass">DV200 &gt; 50</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">RNASeq-SMARTer</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">2ng</md-table-cell>
        <md-table-cell class="try">0.1ng | 100pg</md-table-cell>
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
        <md-table-cell>TCR-Seq (IGO)</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell class="try">700ng<sup>b<md-tooltip v-if="footnotes.b" md-direction="right">{{ footnotes.b }}</md-tooltip></sup></md-table-cell>
        <md-table-cell class="try">No fail range</md-table-cell>
        <md-table-cell class="try">RIN > 7</md-table-cell>
        <md-table-cell class="try">No fail range</md-table-cell>
        <md-table-cell>10&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell colspan="7">
          <sup>a</sup>For ratios &lt; 1.7, cleanup can be attempted. If ratio is > 1.3 post-cleanup, we can go ahead.
          <sup>b</sup>Number of clonotypes recovered is based on the number of T cells in the sample; recovery can be maximized by running multiple reactions/sample if material is sufficient.
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default { 
  name: 'RnaCriteria',
  data: function() {
    return {
      footnotes: {
        a: 'For ratios < 1.7, cleanup can be attempted. If ratio is > 1.3 post-cleanup, we can go ahead.',
        b: 'Number of clonotypes recovered is based on the number of T cells in the sample; recovery can be maximized by running multiple reactions/sample if material is sufficient.',
      },
    };
  },
};
</script>

<style></style>
