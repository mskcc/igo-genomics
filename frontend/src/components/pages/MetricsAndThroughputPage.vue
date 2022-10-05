<template>
  <div>
    <div class="md-display-1">Metrics and Throughput</div>
    <div>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/app/msk_is_igo/report?sid=scheduler__mirhajf_bXNrX2lzX2lnbw__RMD530a954525e3a7dc7_at_1664942400_65226_A69FC099-7EFC-4F0D-9586-C6E0A697737E&s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_SingleValue"
      ></iframe>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/app/msk_is_igo/report?sid=scheduler__mirhajf_bXNrX2lzX2lnbw__RMD53d4c8f6a16f673e8_at_1664942400_35426_47E5C73B-C856-4312-B334-29BD0C36636C&s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_SingleValue"
      ></iframe>
    </div>
    <div>
      <iframe
        id="top-requests"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/app/msk_is_igo/report?sid=scheduler__mirhajf_bXNrX2lzX2lnbw__RMD5ea4ad7f8a03760dd_at_1664942400_65229_A69FC099-7EFC-4F0D-9586-C6E0A697737E&s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Popular_Services_By_Requests"
      ></iframe>

      <iframe
        id="top-requests-2"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/app/msk_is_igo/report?sid=scheduler__mirhajf_bXNrX2lzX2lnbw__RMD5d38572c8da4e88df_at_1664942400_9051_FC08293D-3C22-49AA-91A9-603F031BBD92&s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Popular_Services_By_Samples"
      ></iframe>
      <p>
        Top request types by request number (left) and sample number (right), 2022
      </p>
    </div>

    <div>
      <div class="wrap">
        <iframe
          id="top-requests-graph"
          frameborder="0"
          src="https://splunkp.mskcc.org/en-US/app/msk_is_igo/report?sid=scheduler__mirhajf_bXNrX2lzX2lnbw__RMD5a580f1412b5d0870_at_1664942400_9048_FC08293D-3C22-49AA-91A9-603F031BBD92&s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_Received"
        ></iframe>
      </div>

      <p>
        The number of requests (top) and samples (bottom) IGO receives per month, from January 2020 to present.
      </p>
      <div class="wrap">
        <iframe
          id="top-requests-graph"
          frameborder="0"
          src="https://splunkp.mskcc.org/en-US/app/msk_is_igo/report?sid=scheduler__mirhajf_bXNrX2lzX2lnbw__RMD59b00aabd726273f6_at_1664942400_67806_CC0E325F-57E2-479A-96F8-45273BADE8E9&s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_Received"
        ></iframe>
      </div>
    </div>

    <div class="wrap">
      <iframe
        id="seq-capacity"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/app/msk_is_igo/report?sid=scheduler__mirhajf_bXNrX2lzX2lnbw__RMD584d4910661ba011f_at_1664942400_65243_A69FC099-7EFC-4F0D-9586-C6E0A697737E&s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Sequencer_Capacity"
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
          <td>RUTH</td>
          <td>NovaSeq 6000</td>
        </tr>
        <tr>
          <td>JAX (retired)</td>
          <td>HiSeq 4000</td>
        </tr>
        <tr>
          <td>PITT (retired)</td>
          <td>HiSeq 4000</td>
        </tr>
        <tr>
          <td>LIZ (retired)</td>
          <td>HiSeq 2500</td>
        </tr>
        <tr>
          <td>KIM (retired)</td>
          <td>HiSeq 2500</td>
        </tr>
        <tr>
          <td>MOMO (retired)</td>
          <td>HiSeq 2500</td>
        </tr>
        <tr>
          <td>SCOTT</td>
          <td>NextSeq 500</td>
        </tr>
        <tr>
          <td>PEPE</td>
          <td>NextSeq 2000</td>
        </tr>
        <tr>
          <td>JOHNSAWYERS</td>
          <td>MiSeq</td>
        </tr>
        <tr>
          <td>TOMS (retired)</td>
          <td>MiSeq</td>
        </tr>
        <tr>
          <td>VIC (retired)</td>
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
