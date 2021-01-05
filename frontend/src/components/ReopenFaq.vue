<template>
  <!-- <div>
    <div class="md-display-1">Re-opening FAQ</div>
    <md-card class="data-delivery-card">
      <md-card-header>
        <div class="md-title">What platforms will IGO offer?</div>
      </md-card-header>
      <md-card-content>
        Currently IGO is offering all of our normal platforms except for Nanostring.
      </md-card-content>
      <md-card-header>
        <div class="md-title">How do I submit samples?</div>
      </md-card-header>
      <md-card-content>
        Our guidelines for sample submission during Phase III re-opening can be found
        <router-link :to="{ name: 'submission guidelines' }">here</router-link>. Plates for samples can be picked up outside ZRC320 at any
        time, but please do not enter the lab space for any reason.
      </md-card-content>
      <md-card-header>
        <div class="md-title">Can my project be rushed? I have a publication/grant/deadline…</div>
      </md-card-header>
      <md-card-content>
        Sadly, until we are operating at 100% capacity, we will not be able to rush your project. Everything will be processed on a
        first-come, first-serve basis. For any other questions, please
        <a href="mailto:genomics@mskcc.org?subject=Question about IGO reopening">contact us</a>.
      </md-card-content>
    </md-card>
  </div> -->
  <div>
    <md-card class="data-delivery-card">
      <md-card-header>
        <div class="md-title">Reopening FAQ</div>
      </md-card-header>
      <md-card-content>
        <div class="md-subheading">What platforms will IGO offer?</div>
        <div>
          Currently IGO is offering all of our normal platforms except for Nanostring.
        </div>
      </md-card-content>

      <md-card-content>
        <div class="md-subheading">How do I submit samples?</div>
        <div>
          Our guidelines for sample submission during Phase III re-opening can be found
          <router-link :to="{ name: 'submission guidelines' }">here</router-link>. Plates for samples can be picked up outside ZRC320 at any
          time, but please do not enter the lab space for any reason.
        </div>
      </md-card-content>

      <md-card-content>
        <div class="md-subheading">Can my project be rushed? I have a publication/grant/deadline…</div>
        <div>
          Sadly, until we are operating at 100% capacity, we will not be able to rush your project. Everything will be processed on a
          first-come, first-serve basis. For any other questions, please
          <a href="mailto:genomics@mskcc.org?subject=Question about IGO reopening">contact us</a>.
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default { name: 'ReopenFaq' };
</script>

<style></style>
