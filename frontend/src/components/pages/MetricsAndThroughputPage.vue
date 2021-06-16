<template>
  <div>
    <div class="md-display-1">Metrics and Throughput</div>
    <div>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_SingleValue&oid=Wm0PUyYZOke%5EmlbW%5EVECIFAWnHA0zRF0P03m6AW0QcVMX3TRUHFdvgDrnIAQITfAImppakChIP%5EEszEOhDoRzB6mYyOQVoj8TiU_BO6qxift20rU4ZBS6T8cRJ0FCxMCo%5EXqQcZnJyPzyWAIlftkiTnMJmDlP_O22vVLy8sEWFS"
      ></iframe>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_SingleValue&oid=qefvbmkPqIH_ZbBVtH1vNBZcjJJSSoYKcCHXkGiQO3F4kTfd4nKpHlXGxokxYeY8%5EJev_z6Y743OWPdFQU407Vv25fXf74Z08GJoHn17JGbsmp%5E3c3keu32eln37fMK77rP6IElGh53Dkv1hImW0SM0EA0pNNt5CEvNJcMfBRFr"
      ></iframe>
    </div>
    <div>
      <iframe
        id="top-requests"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Popular_Services_By_Requests&oid=poyXhTD1CpIM1CkgA%5Evd_Ji2geV67YS6LGmOe5olRCbx9_TXcUU1Eohq5OornNjAAtYOIXrNJZJD2bOjSh73GYoL8xaB0%5EBuVRrgRSCfHX3F6_dvogMg9pM0oonVyOp6y2RZchw7uTVySaJo5aCTcduzBe7cPYGSFU_BKbK9th0AAp6rg5q_PN"
      ></iframe>

      <iframe
        id="top-requests-2"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Popular_Services_By_Samples&oid=iZ2iFI3KDyT9KRTIjs0JQXxSwhzeNZ2GM_uqowhN_9PoFIzfmufnxK1ASLeyGkstXdC1aWY0DcUKsInXl5FAHCUEOGIWnECKDE7iOWSx2nZzP4JZJ6DBamAVXCkA2BNXkS_%5EQBElZGJqbtGubZ7rIeAisgzJ8bX4CpvFhR4H1b3JOMBR28fcyY8ojAF"
      ></iframe>
      <p>
        Top request types by request number (left) and sample number (right), 2020
      </p>
    </div>

    <div>
      <div class="wrap">
        <iframe
          id="top-requests-graph"
          frameborder="0"
          src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_Received&oid=1fabgPv25SN_e5pm%5EEerDHtuHGhiBilTK7YflJARxMECmYg9kr%5E3%5ECu3BjOlz3fwPczgf69gaSa%5E7kcWt9hrm8UzsM0r9tD4pAeJBi66S7l%5E8tdCG1iiSvitHYivPoOEToaUOtNswNGhmdj5N%5ETLb02NT8EGMHK9AbSpycF0YF"
        ></iframe>
      </div>

      <p>
        The number of requests (top) and samples (bottom) IGO receives per month, from January 2018 to present.
      </p>
      <div class="wrap">
        <iframe
          id="top-requests-graph"
          frameborder="0"
          src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_Received&oid=zX_vcCGVS08cAxqdWv0yjP5I_c_HYJbWGNKYldfr6ad59Ve2k3B_0ovnU40HuO8tkTyfxVnIrFSUc2mAf7G8OPHhYU527yIrM_os%5ERu_g2Y0N1NdHLF8xRw8JJIoNosZl7eX6MN6nD092xcQ8H4TJv8Hnt_IqhOLHfa"
        ></iframe>
      </div>
    </div>

    <div class="wrap">
      <iframe
        id="seq-capacity"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Sequencer_Capacity&oid=rKi6asYYuf0lAsDjIhBu6C%5E_yegvbaqyn1mb2KFPr6NDU4M%5EZj6VCI_P0EW1W1wmbCWIKzov4%5E1Y7N3Ypa0UZhlw9msR8WW2OIfW2kBWOPPQu88Ygp7L9eBzxMVixs19Z93moDRrIVYOyRzjVnanKCrDI3As1upSXi4Tgrm8AXo"
      ></iframe>
    </div>

    <div>
      Sequencer occupancy -- each bar represents an interval of time that the named sequencer was in operation.<br /><br /><br />
      <table>
        <tr>
          <th>Sequencer Name</th>
          <th>Sequencer type</th>
        </tr>
        <tr>
          <td>DIANA</td>
          <td>NovaSeq 6000</td>
        </tr>
        <tr>
          <td>MICHELLE</td>
          <td>NovaSeq 6000</td>
        </tr>
        <tr>
          <td>JAX</td>
          <td>HiSeq 4000</td>
        </tr>
        <tr>
          <td>PITT</td>
          <td>HiSeq 4000</td>
        </tr>
        <tr>
          <td>LIZ</td>
          <td>HiSeq 2500</td>
        </tr>
        <tr>
          <td>KIM</td>
          <td>HiSeq 2500</td>
        </tr>
        <tr>
          <td>MOMO</td>
          <td>HiSeq 2500</td>
        </tr>
        <tr>
          <td>SCOTT</td>
          <td>NextSeq 500</td>
        </tr>
        <tr>
          <td>JOHNSAWYERS</td>
          <td>MiSeq</td>
        </tr>
        <tr>
          <td>TOMS</td>
          <td>MiSeq</td>
        </tr>
        <tr>
          <td>VIC</td>
          <td>MiSeq</td>
        </tr>
        <tr>
          <td>AYYAN</td>
          <td>MiSeq</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetricsAndThroughputPage',
};
</script>

<style></style>
