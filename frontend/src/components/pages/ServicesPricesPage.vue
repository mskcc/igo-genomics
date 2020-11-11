<template>
  <div>
    <!-- <span class="md-display-3">Services and Prices</span> -->
    <div class="prices-container">
      <div>
        <img
          src="http://genomics.mskcc.org/wp-content/uploads/2020/01/services1.png"
          alt="bulk logo"
        />
        <h3>Bulk Tissue and Cell-Free Sequencing</h3>
      </div>
      <div>
        <img
          src="http://genomics.mskcc.org/wp-content/uploads/2020/01/services2.png"
          alt="bulk logo"
        />
        <h3>Single Cell Sequencing</h3>
      </div>
      <div>
        <img
          src="http://genomics.mskcc.org/wp-content/uploads/2020/01/services3.png"
          alt="bulk logo"
        />
        <h3>Other Services and Platforms</h3>
      </div>

      <div>
        <div class="full-control">
          <div class="list">
            <md-list>
              <md-list-item md-expand>
                <span class="md-list-item-text">Whole Exome Sequencing</span>

                <md-list slot="md-expand">
                  <md-list-item>Description</md-list-item>
                  <md-list-item>Starting Material</md-list-item>
                  <md-list-item>Library Chemistry</md-list-item>
                  <md-list-item>Capture Chemistry</md-list-item>
                  <md-list-item>Sequencing Read Length</md-list-item>
                  <md-list-item>Sequencing Coverage</md-list-item>
                  <md-list-item>Deliverable</md-list-item>
                  <md-list-item>
                    <md-table>
                      <md-table-row>
                        <md-table-head md-numeric>ID</md-table-head>
                        <md-table-head>Name</md-table-head>
                        <md-table-head>Email</md-table-head>
                      </md-table-row>

                      <md-table-row>
                        <md-table-cell md-numeric>1</md-table-cell>
                        <md-table-cell>Shawna Dubbin</md-table-cell>
                        <md-table-cell>sdubbin0@geocities.com</md-table-cell>
                      </md-table-row>

                      <md-table-row>
                        <md-table-cell md-numeric>2</md-table-cell>
                        <md-table-cell>Odette Demageard</md-table-cell>
                        <md-table-cell>odemageard1@spotify.com</md-table-cell>
                      </md-table-row>

                      <md-table-row>
                        <md-table-cell md-numeric>3</md-table-cell>
                        <md-table-cell>Vera Taleworth</md-table-cell>
                        <md-table-cell>vtaleworth2@google.ca</md-table-cell>
                      </md-table-row>
                    </md-table>
                  </md-list-item>
                </md-list>
              </md-list-item>

              <md-list-item md-expand>
                <span class="md-list-item-text">Targeted Sequencing</span>

                <md-list slot="md-expand">
                  <md-list-item>Console</md-list-item>
                  <md-list-item>PC</md-list-item>
                  <md-list-item>Phone</md-list-item>
                </md-list>
              </md-list-item>

              <md-list-item md-expand>
                <span class="md-list-item-text">Transcriptome Sequencing</span>

                <md-list slot="md-expand">
                  <md-list-item>Humor</md-list-item>
                  <md-list-item>Music</md-list-item>
                  <md-list-item>Movies</md-list-item>
                  <md-list-item>TV Shows</md-list-item>
                </md-list>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
      <div>single prices</div>
      <div>other prices</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesPricesPage",
};
</script>

<style></style>
