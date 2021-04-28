<template>
    <div>
        <div class="md-display-1">Single Cell Sequencing hub</div>
        <p>
            Welcome to IGO's single cell hub -- here you'll find links to our pricing and submission information, as well as extra information about new and popular platforms.
        </p>
            <div>
                <md-button class="md-raised md-primary" :to="{ name: 'platforms & pricing' }">Pricing</md-button>
                <md-button class="md-raised md-primary" :to="{ name: 'submission guidelines' }">How to submit samples</md-button>
                <md-button class="md-raised md-primary" :to="{ name: 'reservations' }">Make a reservation for sample drop off</md-button>

            </div>
    <div class="md-display-1"></div>
        <md-card class="data-delivery-card">
        <div class="center-page">
            <md-card-header>
                <div class="md-display-1">Single Cell Platforms and Supported Sample types</div>
            </md-card-header>
            <md-card-content>
                <md-table md-card class="single-cell-table">
                    <md-table-row>
                        <md-table-head>Platform</md-table-head>
                        <md-table-head>RNA</md-table-head>
                        <md-table-head>DNA</md-table-head>
                        <md-table-head>Protein</md-table-head>
                        <md-table-head>Information</md-table-head>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell
                        ><a href="https://www.10xgenomics.com/products/single-cell-gene-expression" target="_blank"
                            >10X Genomics Gene Expression</a
                        ></md-table-cell
                        >
                        <md-table-cell>single cell suspension (fresh)</md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>gene expression (3' or 5' ends only)</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell
                        ><a href="https://www.10xgenomics.com/products/single-cell-immune-profiling" target="_blank"
                            >10X Genomics V(D)J Enrichment</a
                        ></md-table-cell
                        >
                        <md-table-cell>single cell suspenion (fresh)</md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>TCR clonality</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell><a href="https://www.biolegend.com/en-us/totalseq" target="_blank">10X Genomics Feature Barcoding</a></md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>single cell suspension (fresh)</md-table-cell>
                        <md-table-cell>protein expression</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell
                        ><a href="https://www.10xgenomics.com/products/single-cell-atac" target="_blank">10X Genomics ATAC-Seq</a></md-table-cell
                        >
                        <md-table-cell></md-table-cell>
                        <md-table-cell>single nuclei suspension</md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>chromatin accessibility</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell><a href="https://www.nature.com/articles/nprot.2014.006" target="_blank">PlateSeq</a></md-table-cell>
                        <md-table-cell>cells sorted into 96-well plate (frozen)</md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>gene expression (full length cDNA)</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell><a href="https://missionbio.com/" target="_blank">Mission Bio Tapestri</a></md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>fresh or frozen single cells/nuclei</md-table-cell>
                        <md-table-cell>fresh or frozen single cells/nuclei</md-table-cell>
                        <md-table-cell>mutation calling & CNV (targeted) & protein expression</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell><a href="https://www.ncbi.nlm.nih.gov/pubmed/31730858" target="_blank">DLP+</a></md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>fresh or frozen single cells/nuclei</md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>CNV</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell
                        ><a href="https://www.10xgenomics.com/products/spatial-gene-expression" target="_blank">10X Genomics Visium</a></md-table-cell
                        >
                        <md-table-cell>OCT-preserved tissue</md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>OCT-preserved tissue</md-table-cell>
                        <md-table-cell>gene & protein expression in spatial context</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell
                        ><a href="https://www.nanostring.com/products/geomx-digital-spatial-profiler/geomx-dsp" target="_blank"
                            >Nanostring Geomx</a
                        ></md-table-cell
                        >
                        <md-table-cell>FFPE or frozen tissue</md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>FFPE or frozen tissue</md-table-cell>
                        <md-table-cell>gene expression (targeted) and protein expression in spatial context</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell><a href="https://www.10xgenomics.com/products/single-cell-multiome-atac-plus-gene-expression" target="_blank">10 Genomics Multiome</a></md-table-cell>
                        <md-table-cell>single nuclei suspension</md-table-cell>
                        <md-table-cell>single nuclei suspension</md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell>nuclear gene expression & chromatin accessibility</md-table-cell>
                    </md-table-row>
                </md-table>
            </md-card-content>
        </div>
        </md-card>
        <md-card class="data-delivery-card">
        <div class="center-page">
            <md-card-header>
                <div class="md-title">10X Visium summary</div>
            </md-card-header>
            <md-card-content>
                <md-table md-card style="width: 50%;">
                    <md-table-row>
                        <md-table-head>Core</md-table-head>
                        <md-table-head>Processing Step</md-table-head>
                        <md-table-head>Cost</md-table-head>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell rowspan="2" style="background:#8fc7e8">MCC</md-table-cell>
                        <md-table-cell>Tissue freeze & OCT embed</md-table-cell>
                        <md-table-cell rowspan="4">QC $36*</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>Curls cut</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell rowspan="2" style="background:#f29934">IGO</md-table-cell>
                        <md-table-cell>RNA extraction</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>RIN check – > 7 to pass</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell rowspan="2" style="background:#8fc7e8">MCC</md-table-cell>
                        <md-table-cell>Preparation of tissue optimization slide</md-table-cell>
                        <md-table-cell rowspan="6">Permeabilization Optimization $900*</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>H&E stain + imaging</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell rowspan="3" style="background:#f29934">IGO</md-table-cell>
                        <md-table-cell>Tissue permeabilization (7 conditions)</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>cDNA synthesis</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>Tissue removal</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell rowspan="3" style="background:#8fc7e8">MCC</md-table-cell>
                        <md-table-cell>Fluorescent imaging</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>Experimental slide preparation</md-table-cell>
                        <md-table-cell rowspan="8">Spatial Transcriptomics $4,400/slide*</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>H&E stain + imaging</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell rowspan="8" style="background:#f29934">IGO</md-table-cell>
                        <md-table-cell>Tissue permeabilization</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>Reverse transcription</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>2nd strand synthesis</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>cDNA denaturation</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>qPCR to quantify cDNA yield</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>Library preparation</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>Sequencing</md-table-cell>
                        <md-table-cell rowspan="2">Data Generation up to $5,232/slide</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>SpaceRanger</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                        <!-- <md-table-cell></md-table-cell> -->
                        <md-table-cell colspan="3"><strong>*Price includes IGO charges only; MCC billed separately</strong></md-table-cell>
                    </md-table-row>
                </md-table>
            </md-card-content>
        </div>
        </md-card>
        <md-card class="data-delivery-card">
        <div class="center-page">
            <md-card-header>
                <div class="md-title">Nanostring GeoMx</div>
            </md-card-header>
            <md-card-content>

            </md-card-content>
        </div>
        </md-card>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
