<template>
    <div>
    <div class="md-subheading">Requirements for tissue, cells, or other material submitted for extraction or a direct application.</div>
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
            <md-table-cell>10X Genomics scATAC-Seq</md-table-cell>
            <md-table-cell>Single nuclei suspension</md-table-cell>
            <md-table-cell>Diluted nuclei buffer<sup>f</sup></md-table-cell>
            <md-table-cell rowspan="3">1.5mL Eppendorf tube</md-table-cell>
            <md-table-cell rowspan="3">On ice</md-table-cell>
            <md-table-cell>5000 nuclei/&mu;L</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell rowspan="2">10X Genomics scRNA-Seq</md-table-cell>
            <md-table-cell>Single cell suspension</md-table-cell>
            <md-table-cell>PBS + 0.04% BSA</md-table-cell>
            <md-table-cell>1000 cells/&mu;L</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>Single nuclei suspension</md-table-cell>
            <md-table-cell>Nuclei resuspension buffer<sup>f</sup></md-table-cell>
            <md-table-cell>2000 nuclei/&mu;L</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>10X Genomics Visium</md-table-cell>
            <md-table-cell>Tissue</md-table-cell>
            <md-table-cell>Fresh or OCT by MCC specifications</md-table-cell>
            <md-table-cell>N/A</md-table-cell>
            <md-table-cell>Ice to -20&deg;C</md-table-cell>
            <md-table-cell></md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell rowspan="2">ATAC-Seq</md-table-cell>
            <md-table-cell>Fresh cells</md-table-cell>
            <md-table-cell>PBS or preferred media</md-table-cell>
            <md-table-cell>1.5mL <strong>V-bottom</strong> Eppendorf tube</md-table-cell>
            <md-table-cell>On ice</md-table-cell>
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
            <md-table-cell colspan="2" style="text-align: center;">Streck tubes<sup>c</sup></md-table-cell>
            <md-table-cell>RT</md-table-cell>
            <md-table-cell>4.5mL</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>Plasma</md-table-cell>
            <md-table-cell>Frozen</md-table-cell>
            <md-table-cell>5-10mL tube<sup>c</sup></md-table-cell>
            <md-table-cell>-20&deg;C</md-table-cell>
            <md-table-cell>1-5mL</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>Direct Library Prep (DLP)</md-table-cell>
            <md-table-cell>Single cell suspension</md-table-cell>
            <md-table-cell>PBS</md-table-cell>
            <md-table-cell>1.5mL Eppendorf tube</md-table-cell>
            <md-table-cell>4&deg;C</md-table-cell>
            <md-table-cell></md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell rowspan="12">DNA extraction</md-table-cell>
            <md-table-cell rowspan="2">Cells</md-table-cell>
            <md-table-cell>Frozen pellets</md-table-cell>
            <md-table-cell rowspan="4">1.5mL Eppendorf tube</md-table-cell>
            <md-table-cell rowspan="4">-20&deg;C</md-table-cell>
            <md-table-cell rowspan="2">up to 5M</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>DMSO/DMEM</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell rowspan="4">Tissue<sup>b</sup></md-table-cell>
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
            <md-table-cell rowspan="2">5-8 sections of 10&mu;m; 10-15 sections of 5-10&mu;m; 20-25 sections of &lt;5&mu;m</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>curls/punches in 1.5mL Eppendorf tube</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>Blood<sup>d</sup></md-table-cell>
            <md-table-cell colspan="2" style="text-align: center;">EDTA tube<sup>c</sup></md-table-cell>
            <md-table-cell>RT to -20&deg;C</md-table-cell>
            <md-table-cell>1mL</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>PBMCs<sup>e</sup></md-table-cell>
            <md-table-cell>Frozen</md-table-cell>
            <md-table-cell>1.5mL Eppendorf or cryotube<sup>c</sup></md-table-cell>
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
            <md-table-cell>Single cell suspension</md-table-cell>
            <md-table-cell>Cell buffer<sup>f</sup></md-table-cell>
            <md-table-cell rowspan="2">1.5mL Eppendorf tube</md-table-cell>
            <md-table-cell rowspan="2">4&deg;C</md-table-cell>
            <md-table-cell>3-4000 cells/&mu;L</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>Single nuclei suspension</md-table-cell>
            <md-table-cell>Nuclei fixation solution<sup>f</sup></md-table-cell>
            <md-table-cell>3-4000 cells/&mu;L</md-table-cell>
        </md-table-row>


        <md-table-row>
            <md-table-cell>PlateSeq</md-table-cell>
            <md-table-cell>Sorted cells</md-table-cell>
            <md-table-cell>Lysis buffer<sup>f</sup></md-table-cell>
            <md-table-cell>96-well plate<sup>f</sup></md-table-cell>
            <md-table-cell>-80&deg;C to -20&deg;C</md-table-cell>
            <md-table-cell>1 to 100 cells/well</md-table-cell>
        </md-table-row>


        <md-table-row>
            <md-table-cell rowspan="10">RNA extraction</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell rowspan="4">Cells<sup>a</sup></md-table-cell>
            <md-table-cell>Frozen pellet</md-table-cell>
            <md-table-cell rowspan="6">1.5mL Eppendorf tube</md-table-cell>
            <md-table-cell rowspan="5">-80&deg;C to -20&deg;C</md-table-cell>
            <md-table-cell rowspan="4">200,000 cells</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>TRIzol</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>DMSO freezing medium</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>TRIzol + PBS</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell rowspan="4">Tissue<sup>b</sup></md-table-cell>
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
            <md-table-cell rowspan="2">5-8 sections of 10&mu;m; 10-15 sections of 5-10&mu;m; 20-25 sections of &lt;5&mu;m</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>FFPE curls/punches</md-table-cell>
            <md-table-cell>1.5mL Eppendorf tube</md-table-cell>
            <md-table-cell>4&deg;C</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell>Blood</md-table-cell>
            <md-table-cell colspan="2" style="text-align: center;">PAXgene tube<sup>c</sup></md-table-cell>
            <md-table-cell>fresh or -20&deg;C</md-table-cell>
            <md-table-cell>10mL</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell colspan="6"><sup>a</sup>RNA yield cannot be guaranteed on extractions from fewer cells. <sup>b</sup>Samples that require additional dissection will incur charges and a longer TAT. <sup>c</sup>If multiple tubes are submitted for one sample, multiple extractions will be charged. <sup>d</sup> Max volume for one blood extraction is 400&mu;L. <sup>e</sup> Max volume for one buffy coat extraction is 200&mu;L. <sup>f</sup> Provided by IGO in advance.</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell></md-table-cell>
        </md-table-row>


    </md-table>
</div>
</template>