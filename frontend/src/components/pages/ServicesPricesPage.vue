<template>
  <div>
    <!-- <span class="md-display-3">Services and Prices</span> -->
    <div class="prices-container">
      <div>
        <img src="http://genomics.mskcc.org/wp-content/uploads/2020/01/services1.png" alt="bulk logo" />
        <h3>Bulk Tissue and Cell-Free Sequencing</h3>
      </div>
      <div>
        <img src="http://genomics.mskcc.org/wp-content/uploads/2020/01/services2.png" alt="bulk logo" />
        <h3>Single Cell Sequencing</h3>
      </div>
      <div>
        <img src="http://genomics.mskcc.org/wp-content/uploads/2020/01/services3.png" alt="bulk logo" />
        <h3>Other Services and Platforms</h3>
      </div>

      <div>
        <div class="full-control">
          <div class="list">
            <md-list>
              <md-list-item v-for="(service, index) in services" :key="index" md-expand>
                <span class="md-list-item-text">{{ service.name }}</span>
                <md-list slot="md-expand">
                  <md-list-item>
                    <table class="services-table">
                      <tr>
                        <th>Description:</th>
                        <td>{{ service.description }}</td>
                      </tr>
                      <tr>
                        <th>Starting Material:</th>
                        <td>{{ service.startingMaterial }}</td>
                      </tr>
                      <tr>
                        <th>Library Chemistry:</th>
                        <td>{{ service.libraryChemistry }}</td>
                      </tr>
                      <tr>
                        <th>Capture Chemistry:</th>
                        <td>{{ service.captureChemistry }}</td>
                      </tr>
                      <tr>
                        <th>Sequencing Read Length:</th>
                        <td>{{ service.sequencingReadLength }}</td>
                      </tr>
                      <tr>
                        <th>Sequencing Coverage:</th>
                        <td>{{ service.sequencingCoverage }}</td>
                      </tr>
                      <tr>
                        <th>Deliverable:</th>
                        <td>{{ service.deliverable }}</td>
                      </tr>
                    </table></md-list-item
                  >
                  <md-list-item
                    ><md-table>
                      <md-table-row>
                        <!-- {{ service.tableHeaders }} -->
                        <md-table-head md-numeric>Sample Coverage (X)</md-table-head>
                        <md-table-head>Cost Per Sample</md-table-head>
                      </md-table-row>
                      <md-table-row v-for="(row, j) in service.table" :key="j">
                        <md-table-cell md-numeric>{{ row.coverage }}</md-table-cell>
                        <md-table-cell>${{ row.cost }}</md-table-cell>
                      </md-table-row>
                    </md-table>
                  </md-list-item>
                </md-list>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
      <div>
        <div class="full-control">
          <div class="list">
            <md-list>
              <md-list-item v-for="(service, index) in services" :key="index" md-expand>
                <span class="md-list-item-text">{{ service.name }}</span>
                <md-list slot="md-expand">
                  <md-list-item>
                    <table class="services-table">
                      <tr>
                        <th>Description:</th>
                        <td>{{ service.description }}</td>
                      </tr>
                      <tr>
                        <th>Starting Material:</th>
                        <td>{{ service.startingMaterial }}</td>
                      </tr>
                      <tr>
                        <th>Library Chemistry:</th>
                        <td>{{ service.libraryChemistry }}</td>
                      </tr>
                      <tr>
                        <th>Capture Chemistry:</th>
                        <td>{{ service.captureChemistry }}</td>
                      </tr>
                      <tr>
                        <th>Sequencing Read Length:</th>
                        <td>{{ service.sequencingReadLength }}</td>
                      </tr>
                      <tr>
                        <th>Sequencing Coverage:</th>
                        <td>{{ service.sequencingCoverage }}</td>
                      </tr>
                      <tr>
                        <th>Deliverable:</th>
                        <td>{{ service.deliverable }}</td>
                      </tr>
                    </table></md-list-item
                  >
                  <md-list-item
                    ><md-table>
                      <md-table-row>
                        <!-- {{ service.tableHeaders }} -->
                        <md-table-head md-numeric>Sample Coverage (X)</md-table-head>
                        <md-table-head>Cost Per Sample</md-table-head>
                      </md-table-row>
                      <md-table-row v-for="(row, j) in service.table" :key="j">
                        <md-table-cell md-numeric>{{ row.coverage }}</md-table-cell>
                        <md-table-cell>${{ row.cost }}</md-table-cell>
                      </md-table-row>
                    </md-table>
                  </md-list-item>
                </md-list>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
      <div>
        <div class="full-control">
          <div class="list">
            <md-list>
              <md-list-item v-for="(service, index) in services" :key="index" md-expand>
                <span class="md-list-item-text">{{ service.name }}</span>
                <md-list slot="md-expand">
                  <md-list-item>
                    <table class="services-table">
                      <tr>
                        <th>Description:</th>
                        <td>{{ service.description }}</td>
                      </tr>
                      <tr>
                        <th>Starting Material:</th>
                        <td>{{ service.startingMaterial }}</td>
                      </tr>
                      <tr>
                        <th>Library Chemistry:</th>
                        <td>{{ service.libraryChemistry }}</td>
                      </tr>
                      <tr>
                        <th>Capture Chemistry:</th>
                        <td>{{ service.captureChemistry }}</td>
                      </tr>
                      <tr>
                        <th>Sequencing Read Length:</th>
                        <td>{{ service.sequencingReadLength }}</td>
                      </tr>
                      <tr>
                        <th>Sequencing Coverage:</th>
                        <td>{{ service.sequencingCoverage }}</td>
                      </tr>
                      <tr>
                        <th>Deliverable:</th>
                        <td>{{ service.deliverable }}</td>
                      </tr>
                    </table></md-list-item
                  >
                  <md-list-item
                    ><md-table>
                      <md-table-row>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('cost')">Cost</md-table-head>

                        <!-- {{ service.tableHeaders }} -->
                        <!-- <md-table-head md-numeric>Sample Coverage (X)</md-table-head> -->
                        <md-table-head>Cost Per Sample</md-table-head>
                      </md-table-row>
                      <md-table-row v-for="(row, j) in service.table" :key="j">
                        <md-table-cell md-numeric>{{ row.coverage }}</md-table-cell>
                        <md-table-cell>${{ row.cost }}</md-table-cell>
                      </md-table-row>
                    </md-table>
                  </md-list-item>
                </md-list>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
      <!-- <div>single prices</div>
      <div>other prices</div> -->
    </div>
  </div>
</template>

<script>
import { services } from "./../../data.js";

export default {
  name: "ServicesPricesPage",
  data: function() {
    return { services: services };
  },
};
</script>

<style></style>
