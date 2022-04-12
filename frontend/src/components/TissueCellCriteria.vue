<template>
  <div>
    <div class="md-subheading subpage-header">
      Requirements for tissue, cells, or other material submitted for extraction or a direct application. Please note: 
      <br />
      <br />
      <ul class="announcement-content">
        <li>If multiple tubes for the same sample are submitted, they will be charged as separate extractions.</li>
        <li>Cells in buffers other than those listed here may incur a $15 extra processing charge and additional turnaround time.</li>
        <li>Large tissue samples that require additional dissection may incur a $15 extra processing charge and additional turnaround time.</li>
        <li>Submissions of &gt;1M cells for RNA extraction will be downsampled and processed as multiple extractions.</li>
        <li>RNA yield can not be guaranteed from &lt;200K cells or tissue sections/pieces smaller than recommended.</li>
      </ul>
    </div>
    <br />
    <br />
    <md-table md-card class="criteria-table" id="pass-fail">
      <md-table-row>
        <md-table-head>Platform</md-table-head>
        <md-table-head>Sample Type</md-table-head>
        <md-table-head>Preservation</md-table-head>
        <md-table-head>Tube/Container</md-table-head>
        <md-table-head>Temperature</md-table-head>
        <md-table-head>Volume/Mass</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>10X Genomics Multiome</md-table-cell>
        <md-table-cell>Single nuclei suspension</md-table-cell>
        <md-table-cell>Diluted nuclei buffer<sup>a<md-tooltip v-if="footnotes.a" md-direction="right">{{ footnotes.a }}</md-tooltip></sup></md-table-cell>
        <md-table-cell rowspan="3">1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell rowspan="3">4&deg;C</md-table-cell>
        <md-table-cell>3230-8060 nuclei/&mu;L in 50&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">10X Genomics scRNA-Seq</md-table-cell>
        <md-table-cell>Single cell suspension</md-table-cell>
        <md-table-cell>PBS + 0.04% BSA</md-table-cell>
        <md-table-cell>700-1200 cells/&mu;L in > 50&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Single nuclei suspension</md-table-cell>
        <md-table-cell><a href="https://support.10xgenomics.com/single-cell-gene-expression/sample-prep/doc/demonstrated-protocol-single-cell-suspensions-from-cultured-cell-lines-for-single-cell-rna-sequencing" target="__blank">See protocol</a></md-table-cell>
        <md-table-cell>700-1200 nuclei/&mu;L in > 50&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>10X Genomics Visium</md-table-cell>
        <md-table-cell>Tissue</md-table-cell>
        <md-table-cell colspan="4" class="center-page">Contact MCC for sample details</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">ATAC-Seq</md-table-cell>
        <md-table-cell>Fresh cells</md-table-cell>
        <md-table-cell>PBS or preferred media</md-table-cell>
        <md-table-cell>1.5mL <strong>V-bottom</strong> Eppendorf tube</md-table-cell>
        <md-table-cell>4&deg;C</md-table-cell>
        <md-table-cell>50K cells in 300-350&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Frozen cells</md-table-cell>
        <md-table-cell>10% DMSO</md-table-cell>
        <md-table-cell>1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell>-80&deg;C to -20&deg;C</md-table-cell>
        <md-table-cell>50K cells in 300-500&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">cfDNA extraction</md-table-cell>
        <md-table-cell>Blood</md-table-cell>
        <md-table-cell colspan="2" class="center-page">Streck tubes</md-table-cell>
        <md-table-cell>RT</md-table-cell>
        <md-table-cell>4.5mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Plasma</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell>5-10mL tube</md-table-cell>
        <md-table-cell>-20&deg;C</md-table-cell>
        <md-table-cell>1-5mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">Direct Library Prep (DLP)</md-table-cell>
        <md-table-cell>Single cell suspension</md-table-cell>
        <md-table-cell>PBS + 0.04% BSA</md-table-cell>
        <md-table-cell rowspan="2">Cryovial</md-table-cell>
        <md-table-cell>4&deg;C</md-table-cell>
        <md-table-cell rowspan="2">> 100K cells</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Viably frozen cells</md-table-cell>
        <md-table-cell>10% DMSO/DMEM</md-table-cell>
        <md-table-cell>-80&deg;C</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="12">DNA extraction</md-table-cell>
        <md-table-cell rowspan="2">Cells</md-table-cell>
        <md-table-cell>Frozen pellets</md-table-cell>
        <md-table-cell>1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell rowspan="4">-20&deg;C</md-table-cell>
        <md-table-cell rowspan="2">up to 5M</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>DMSO/DMEM</md-table-cell>
        <md-table-cell>1.5mL Eppendorf or cryovial</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="4">Tissue</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell rowspan="2">1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell rowspan="2">10-15mg</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>OCT</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">FFPE</md-table-cell>
        <md-table-cell>Slides or blocks</md-table-cell>
        <md-table-cell rowspan="2">RT or 4&deg;C</md-table-cell>
        <md-table-cell rowspan="2">5-8 sections of 10mm; 10-15 sections of 5-10mm; 20-25 sections of&lt;5mm; 10&mu;m thick</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>curls/punches in AutoLys tubes</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Blood<sup>b<md-tooltip v-if="footnotes.b" md-direction="right" v-html="footnotes.b">{{ footnotes.b }}</md-tooltip></sup></md-table-cell>
        <md-table-cell colspan="2" class="center-page">EDTA tube</md-table-cell>
        <md-table-cell>RT to -20&deg;C</md-table-cell>
        <md-table-cell>1mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>PBMCs<sup>c<md-tooltip v-if="footnotes.c" md-direction="right" v-html="footnotes.c">{{ footnotes.c }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell>1.5mL Eppendorf or cryotube</md-table-cell>
        <md-table-cell rowspan="2">-20&deg;C</md-table-cell>
        <md-table-cell>200&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Fingernails</md-table-cell>
        <md-table-cell rowspan="2">Fresh or frozen</md-table-cell>
        <md-table-cell>Screw top container</md-table-cell>
        <md-table-cell>As many as possible</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Saliva</md-table-cell>
        <md-table-cell>15mL tube</md-table-cell>
        <md-table-cell>RT to -20&deg;C</md-table-cell>
        <md-table-cell>400&mu;L to 2mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Bone marrow aspirate</md-table-cell>
        <md-table-cell rowspan="2">Frozen</md-table-cell>
        <md-table-cell>Tube or syringe</md-table-cell>
        <md-table-cell rowspan="2">-20&deg;C</md-table-cell>
        <md-table-cell>Up to 200&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Buccal swabs</md-table-cell>
        <md-table-cell rowspan="4">1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell>1-5mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">MissionBio Tapestri</md-table-cell>
        <md-table-cell rowspan="3">Single cell suspension</md-table-cell>
        <md-table-cell>PBS + 0.04% BSA</md-table-cell>
        <md-table-cell>4&deg;C</md-table-cell>
        <md-table-cell rowspan="2">100K cells</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>10% DMSO</md-table-cell>
        <md-table-cell>-20&deg;C</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>MissionBio DNA + Protein</md-table-cell>
        <md-table-cell>PBS + 0.04% BSA</md-table-cell>
        <md-table-cell>4&deg;C</md-table-cell>
        <md-table-cell>2M cells</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>PlateSeq</md-table-cell>
        <md-table-cell>Sorted cells</md-table-cell>
        <md-table-cell>Lysis buffer<sup>a<md-tooltip v-if="footnotes.a" md-direction="right">{{ footnotes.a }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>96-well plate<sup>a<md-tooltip v-if="footnotes.a" md-direction="right">{{ footnotes.a }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>-80&deg;C to -20&deg;C</md-table-cell>
        <md-table-cell>1 to 100 cells/well</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell rowspan="11">RNA extraction</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="5">Cells</md-table-cell>
        <md-table-cell>Frozen pellet</md-table-cell>
        <md-table-cell rowspan="2">1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell rowspan="6">-80&deg;C to -20&deg;C</md-table-cell>
        <md-table-cell>200K-1M cells</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>TRIzol</md-table-cell>
        <md-table-cell>200K-1M cells in 1mL<sup>d<md-tooltip v-if="footnotes.d" md-direction="right">{{ footnotes.d }}</md-tooltip></sup></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>DMSO freezing medium</md-table-cell>
        <md-table-cell>1.5mL Eppendorf or cryovial</md-table-cell>
        <md-table-cell>200K-1M cells</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>TRIzol + PBS</md-table-cell>
        <md-table-cell rowspan="4">1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell>200K-1M cells in 750:250&mu;L TRIzol LS:PBS<sup>e<md-tooltip v-if="footnotes.e" md-direction="right">{{ footnotes.e }}</md-tooltip></sup></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>RLT buffer + 1% &szlig;-mercaptoethanol</md-table-cell>
        <md-table-cell>200K-1M cells in 350&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="4"
          >Tissue</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell rowspan="2">10-15mg</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>OCT</md-table-cell>
        <md-table-cell>-20&deg;C</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>FFPE slides</md-table-cell>
        <md-table-cell>Slides</md-table-cell>
        <md-table-cell>RT</md-table-cell>
        <md-table-cell rowspan="2">5-8 sections of 10mm; 10-15 sections of 5-10mm; 20-25 sections of &lt;5mm; 10&mu;m thick</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>FFPE curls/punches</md-table-cell>
        <md-table-cell>AutoLys tubes</md-table-cell>
        <md-table-cell>4&deg;C</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Blood</md-table-cell>
        <md-table-cell colspan="2" class="center-page">PAXgene tube</md-table-cell>
        <md-table-cell>fresh or -20&deg;C</md-table-cell>
        <md-table-cell>10mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell colspan="6"><sup>a</sup>Provided by IGO in advance. <sup>b</sup>If multiple tubes are submitted for one sample, multiple extractions will be
          charged. <sup>b</sup>Max volume for one blood extraction is 400&mu;L; higher volumes (up to 2mL) will incur additional charges. <sup>c</sup>Max volume for one buffy coat extraction is 200&mu;L. <sup>d</sup>A $15 charge will be added for topping up TRIzol volume. <sup>e</sup>A $15 charge will be added for adjusting TRIzol LS:PBS ratio. </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      footnotes: {
        a: 'Provided by IGO in advance.',
        b: 'Max volume for one blood extraction is 400&mu;L; higher volumes (up to 2mL) will incur additional charges.',
        c: 'Max volume for one buffy coat extraction is 200&mu;L.',
        d: 'A $15 charge will be added for topping up TRIzol volume.',
        e: 'A $15 charge will be added for adjusting TRIzol LS:PBS ratio.',
      },
    };
  },
};
</script>
