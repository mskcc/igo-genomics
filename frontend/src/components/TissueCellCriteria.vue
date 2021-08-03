<template>
  <div>
    <div class="md-subheading">
      Requirements for tissue, cells, or other material submitted for extraction or a direct application.
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
        <md-table-cell rowspan="2">Single nuclei suspension</md-table-cell>
        <md-table-cell rowspan="2">Diluted nuclei buffer<sup>a<md-tooltip v-if="footnotes.a" md-direction="right">{{ footnotes.a }}</md-tooltip></sup></md-table-cell>
        <md-table-cell rowspan="4">1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell rowspan="4">4&deg;C</md-table-cell>
        <md-table-cell>3230-8060 nuclei/&mu;L in 50&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>10X Genomics scATAC-Seq</md-table-cell>
        <md-table-cell>5000 nuclei/&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">10X Genomics scRNA-Seq</md-table-cell>
        <md-table-cell>Single cell suspension</md-table-cell>
        <md-table-cell>PBS + 0.04% BSA</md-table-cell>
        <md-table-cell>700-1200 cells/&mu;L in > 50&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Single nuclei suspension</md-table-cell>
        <md-table-cell><a href="https://support.10xgenomics.com/single-cell-gene-expression/sample-prep/doc/demonstrated-protocol-isolation-of-nuclei-for-single-cell-rna-sequencing" target="__blank">See protocol</a></md-table-cell>
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
        <md-table-cell colspan="2" class="center-page">Streck tubes<sup>b<md-tooltip v-if="footnotes.b" md-direction="right">{{ footnotes.b }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>RT</md-table-cell>
        <md-table-cell>4.5mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Plasma</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell>5-10mL tube<sup>b<md-tooltip v-if="footnotes.b" md-direction="right">{{ footnotes.b }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>-20&deg;C</md-table-cell>
        <md-table-cell>1-5mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">Direct Library Prep (DLP)</md-table-cell>
        <md-table-cell>Single cell suspension</md-table-cell>
        <md-table-cell>PBS + 0.04% BSA</md-table-cell>
        <md-table-cell rowspan="2">1.5mL Eppendorf tube</md-table-cell>
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
        <md-table-cell rowspan="4">1.5mL Eppendorf tube<sup>b<md-tooltip v-if="footnotes.b" md-direction="right">{{ footnotes.b }}</md-tooltip></sup></md-table-cell>
        <md-table-cell rowspan="4">-20&deg;C</md-table-cell>
        <md-table-cell rowspan="2">up to 5M</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>DMSO/DMEM</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="4">Tissue<sup>d<md-tooltip v-if="footnotes.d" md-direction="right">{{ footnotes.d }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
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
        <md-table-cell>curls/punches in 1.5mL Eppendorf tube</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Blood<sup>e<md-tooltip v-if="footnotes.e" md-direction="right" v-html="footnotes.e">{{ footnotes.d }}</md-tooltip></sup></md-table-cell>
        <md-table-cell colspan="2" class="center-page">EDTA tube<sup>b<md-tooltip v-if="footnotes.b" md-direction="right">{{ footnotes.b }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>RT to -20&deg;C</md-table-cell>
        <md-table-cell>1mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>PBMCs<sup>f<md-tooltip v-if="footnotes.f" md-direction="right" v-html="footnotes.f">{{ footnotes.e }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell>1.5mL Eppendorf or cryotube<sup>b<md-tooltip v-if="footnotes.b" md-direction="right">{{ footnotes.b }}</md-tooltip></sup></md-table-cell>
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
        <md-table-cell>1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell>1-5mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>MissionBio Tapestri</md-table-cell>
        <md-table-cell rowspan="2">Single cell suspension</md-table-cell>
        <md-table-cell rowspan="2">PBS + 0.04% BSA</md-table-cell>
        <md-table-cell rowspan="2">1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell rowspan="2">4&deg;C</md-table-cell>
        <md-table-cell>100K cells</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>MissionBio DNA + Protein</md-table-cell>
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
        <md-table-cell rowspan="5">Cells<sup>g<md-tooltip v-if="footnotes.g" md-direction="right">{{ footnotes.g }}</md-tooltip></sup><sup>h<md-tooltip v-if="footnotes.h" md-direction="right">{{ footnotes.h }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>Frozen pellet</md-table-cell>
        <md-table-cell rowspan="7">1.5mL Eppendorf tube<sup>b<md-tooltip v-if="footnotes.b" md-direction="right">{{ footnotes.b }}</md-tooltip></sup></md-table-cell>
        <md-table-cell rowspan="6">-80&deg;C to -20&deg;C</md-table-cell>
        <md-table-cell>200K-1M cells<sup>i<md-tooltip v-if="footnotes.i" md-direction="right">{{ footnotes.i }}</md-tooltip></sup></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>TRIzol</md-table-cell>
        <md-table-cell>200K-1M cells<sup>i<md-tooltip v-if="footnotes.i" md-direction="right">{{ footnotes.i }}</md-tooltip></sup> in 1mL<sup>j<md-tooltip v-if="footnotes.j" md-direction="right">{{ footnotes.j }}</md-tooltip></sup></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>DMSO freezing medium</md-table-cell>
        <md-table-cell>200K-1M cells<sup>i<md-tooltip v-if="footnotes.i" md-direction="right">{{ footnotes.i }}</md-tooltip></sup></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>TRIzol + PBS</md-table-cell>
        <md-table-cell>200K-1M cells<sup>i<md-tooltip v-if="footnotes.i" md-direction="right">{{ footnotes.i }}</md-tooltip></sup> in 750:250&mu;L TRIzol LS:PBS<sup>j<md-tooltip v-if="footnotes.j" md-direction="right">{{ footnotes.j }}</md-tooltip></sup></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>RLT buffer + 1% &szlig;-mercaptoethanol</md-table-cell>
        <md-table-cell>200K-1M cells<sup>i<md-tooltip v-if="footnotes.i" md-direction="right">{{ footnotes.i }}</md-tooltip></sup> in 350&mu;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="4"
          >Tissue<sup>d<md-tooltip v-if="footnotes.d" md-direction="right">{{ footnotes.d }}</md-tooltip></sup></md-table-cell>
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
        <md-table-cell>1.5mL Eppendorf tube</md-table-cell>
        <md-table-cell>4&deg;C</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Blood</md-table-cell>
        <md-table-cell colspan="2" class="center-page">PAXgene tube<sup>b<md-tooltip v-if="footnotes.b" md-direction="right">{{ footnotes.b }}</md-tooltip></sup></md-table-cell>
        <md-table-cell>fresh or -20&deg;C</md-table-cell>
        <md-table-cell>10mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell colspan="6"><sup>a</sup>Provided by IGO in advance. <sup>b</sup>If multiple tubes are submitted for one sample, multiple extractions will be
          charged. <sup>c</sup>$15 processing charge per sample. <sup>d</sup> Samples that require additional dissection will incur a $15 charge and a longer TAT. <sup>e</sup> Max volume for one blood extraction is 400&mu;L; higher volumes (up to 2mL) will incur additional charges. <sup>f</sup>Max volume for one buffy coat extraction is 200&mu;L. <sup>g</sup>RNA yield cannot be guaranteed on extractions from fewer cells. <sup>h</sup>Submissions of more than 1M cells will require and be charged for additional extractions.<sup>i</sup>A $15 charge will be added for tropping up TRIzol volume. <sup>j</sup>Cells submitted in alternative buffers will incur a $15 processing charge per sample. </md-table-cell>
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
        b: 'If multiple tubes are submitted for one sample, multiple extractions will be charged.',
        c: '$15 processing charge per sample.',
        d: 'Samples that require additional dissection will incur a $15 charge and a longer TAT.',
        e: 'Volume for one blood extraction is 400&mu;L; higher volumes (up to 2mL) will incur additional charges.',
        f: 'Max volume for one buffy coat extraction is 200&mu;L.',
        g: 'RNA yield cannot be guaranteed on extractions from fewer cells.',
        h: 'Cells submitted in alternative buffers will incur a $15 processing charge per sample.',
        i: 'Submissions of more than 1M cells will require and be charged for additional extractions.',
        j: 'A $15 charge will be added for topping up TRIzol volume.',
      },
    };
  },
};
</script>
