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
              <md-list-item v-for="(service, index) in bulkServices" :key="index" md-expand>
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
                      <md-table-row
                        ><md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('libraryType')"
                          >Library Type</md-table-head
                        >
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('readNumber')"
                          >Read Number (M)</md-table-head
                        >
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostPe50')"
                          >Cost Per Sample (PE50)</md-table-head
                        >
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostPe100')"
                          >Cost Per Sample (PE100)</md-table-head
                        >
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('panel')">Panel</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleType')"
                          >Sample Type</md-table-head
                        >
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCoverage')"
                          >Sample Coverage (X)</md-table-head
                        >
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostFrozen')"
                          >Cost Per Sample (Frozen Tissue)</md-table-head
                        >
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostFfpe')"
                          >Cost Per Sample (FFPE Tissue)</md-table-head
                        >
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('platform')">Platform</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sequencingDetails')"
                          >Sequencing Details</md-table-head
                        >
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('deliverable')"
                          >Deliverable</md-table-head
                        >
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('cost')">Cost Per Sample</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCost')"
                          >Cost Per Sample</md-table-head
                        >
                      </md-table-row>
                      <md-table-row v-for="(row, j) in service.table" :key="j">
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('libraryType')">{{
                          row.libraryType
                        }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('readNumber')">{{
                          row.readNumber
                        }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostPe50')"
                          >${{ row.sampleCostPe50 }}</md-table-cell
                        >
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostPe100')"
                          >${{ row.sampleCostPe100 }}</md-table-cell
                        >
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('panel')">{{ row.panel }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sampleType')">{{
                          row.sampleType
                        }}</md-table-cell>
                        <md-table-cell md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCoverage')">{{
                          row.sampleCoverage
                        }}</md-table-cell>
                        <md-table-cell md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostFrozen')"
                          >${{ row.sampleCostFrozen }}</md-table-cell
                        >
                        <md-table-cell md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostFfpe')"
                          >${{ row.sampleCostFfpe }}</md-table-cell
                        >
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('platform')">{{
                          row.platform
                        }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sequencingDetails')">{{
                          row.sequencingDetails
                        }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('deliverable')">{{
                          row.deliverable
                        }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('cost')">{{ row.cost }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sampleCost')"
                          >${{ row.sampleCost }}</md-table-cell
                        >
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
              <md-list-item v-for="(service, index) in bulkServices" :key="index" md-expand>
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
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('panel')">Panel</md-table-head>
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCoverage')"
                          >Sample Coverage (X)</md-table-head
                        >
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCost')"
                          >Cost Per Sample</md-table-head
                        >
                      </md-table-row>
                      <md-table-row v-for="(row, j) in service.table" :key="j">
                        <md-table-cell md-numeric>{{ row.sampleCoverage }}</md-table-cell>
                        <md-table-cell>${{ row.sampleCost }}</md-table-cell>
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
              <md-list-item v-for="(service, index) in bulkServices" :key="index" md-expand>
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
import { bulkServices } from "./../../data.js";

export default {
  name: "ServicesPricesPage",
  data: function() {
    return { bulkServices: bulkServices };
  },
};
</script>

<style></style>
