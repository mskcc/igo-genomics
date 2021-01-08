<template>
  <div>
    <div class="md-display-1">Contact Us</div>
    <div class="team-image">
      <md-content class="md-elevation-24 lab-photo">
        <img src="../../assets/images/lab/Viale_190612_150.jpg" alt="At the bench" />
      </md-content>
    </div>
    <md-list>
      <md-list-item>
        <div class="md-list-item-text">
          <span>For immediate assistance</span>
        </div>
      </md-list-item>
      <md-list-item>
        <md-icon class="md-primary">email</md-icon>
        <span class="md-list-item-text">genomics@mskcc.org </span>
      </md-list-item>
      <md-list-item>
        <md-icon class="md-primary">phone</md-icon>
        <span class="md-list-item-text">(646) 888-3765</span>
      </md-list-item>
    </md-list>

    <md-list class="md-triple-line ">
      <md-list-item>
        <!-- <md-avatar>
          <img :src="'Viale_Agnes' | memberImage" alt="Viale_Agnes" />
        </md-avatar> -->
        <md-icon class="md-primary">email</md-icon>
        <div class="md-list-item-text">
          <span>Dr. Agnes Viale</span>
          <span>Director</span>
          <span>vialea@mskcc.org</span>
        </div>
      </md-list-item>
      <md-divider class="md-inset"></md-divider>
      <md-list-item>
        <!-- <md-avatar>
          <img :src="'Mohibullah_Neeman' | memberImage" alt="Mohibullah_Neeman" />
        </md-avatar> -->
        <md-icon class="md-primary">email</md-icon>
        <div class="md-list-item-text">
          <span>Dr. Neeman Mohibullah</span><span>Associate Director</span><span>mohibuln@mskcc.org</span>
        </div>
      </md-list-item>
      <md-divider class="md-inset"></md-divider>
      <md-list-item>
        <!-- <md-avatar>
          <img :src="'Huberman_Kety' | memberImage" alt="Huberman_Kety" />
        </md-avatar> -->
        <md-icon class="md-primary">email</md-icon>
        <div class="md-list-item-text">
          <span>Kety Huberman</span><span>Operations Manager</span><span>hubermak@mskcc.org</span>
        </div></md-list-item
      >
      <md-divider class="md-inset"></md-divider>
      <md-list-item>
        <!-- <md-avatar>
          <img :src="'Cobbs_Cassidy' | memberImage" alt="Cobbs_Cassidy" />
        </md-avatar> -->
        <md-icon class="md-primary">email</md-icon>
        <div class="md-list-item-text">
          <span>Cassidy Cobbs</span><span>Scientific Liaison</span><span>cobbsc@mskcc.org</span>
        </div></md-list-item
      >
      <md-divider class="md-inset"></md-divider>
      <md-list-item>
        <!-- <md-avatar>
          <img :src="'Dunigan_Marisa' | memberImage" alt="Dunigan_Marisa" />
        </md-avatar> -->
        <md-icon class="md-primary">email</md-icon>
        <div class="md-list-item-text">
          <span>Marisa Dunigan</span><span>Group Leader, Sample & Project Management</span><span>duniganm@mskcc.org</span>
        </div></md-list-item
      >
    </md-list>
  </div>
</template>

<script>
export default { name: 'ContactsPage' };
</script>

<style scoped>
.md-list {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}
</style>
