<template>
  <div>
    <div class="md-display-1">Metrics and Throughput</div>
    <div>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_SingleValue&oid=Q2WAJ0bUU5H6VvrvNWX4je81RBL6FpBswMl34LeDjwftbntREU86md93n1rleLhEogXprs8%5E_B8WrnYTtGEnIy1kv8JKzvgSyfGo3kdiBB4GiX7KHvamfqfKwWgYNk_Uv8g_Tj7LFzZJ9q4F3%5E8eH_f3DmgVRY6uvGdM6EC_sJLA"
      ></iframe>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_SingleValue&oid=7wKarMvR1CyTn6ycX5yp7bY2GW7gINgA5wlwS3QVnSOplfnMZ%5EBpktUHUwg7VfRQsORWL3ajbtcMgviYZ7Kq4rH8XgNoMjkIlzK%5ELAOBiKNRNKQ1IbIw9C%5EcrSJfZy8O%5EvOH%5E%5EwAN%5E8zH4dVlMtAgnaTIa63bme3S7FIK6Jr"
      ></iframe>
    </div>
    <div>
      <iframe
        id="top-requests"
        frameborder="0"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Popular_Services_By_Requests&oid=xwqKD5EajqPZUe3OvPGCGxWsIIpSYri3Hg3M%5EH5HIfdshINBzxk5zlUuzBsWBcKzthlrzklD3C313m2L8f6hUMLQUTrpSwVYHqzLnVogTIQDMmiyzO%5EnnnXNQOWi25noQ7x4XVPA3HxDc1PEZSGJ%5EOEmVoJ8B96KAJGHqybgeXDeXTiPnpB5ekg9Tyl0"
      ></iframe>

      <iframe
        id="top-requests-2"
        frameborder="0"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Popular_Services_By_Samples&oid=K%5EgCNZzWgBp84qneRfTzpWv0LSpWxnN1TgV2ak9rM3g1vPXTqJT1Q0hl5GNJG%5EwAOXyDvAvkdGRWQzNVGsz7Lc_yzEaRsD4u7_h4Ncy940sCTlefq7agap5ZcoiniX9acdKM0gZv63B5EvFsTh69G2d053yJHZ3dcjct41I7ZjUPLWODfHdJx4x"
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
          src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_Received&oid=eCsOEuLwJMyxaUJdUevS4kEYBs84AKFborB6lslGYqayxhbYfrPyf1SXuvrqjZm3RL0aYHAvrNlnLH7WGBMt8AucHgGKasnYbcg39nZBNnJglF3Yr0Ti9V67QB6Xrr6yj2mwVZN5j6LKe8Tu1D32hR6HG0zXQWrWqpsa%5EHGklybt"
        ></iframe>
      </div>

      <p>
        The number of requests (top) and samples (bottom) IGO receives per month, from January 2018 to present.
      </p>
      <div class="wrap">
        <iframe
          id="top-requests-graph"
          frameborder="0"
          src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_Received&oid=hgo435thvC93xrAn2zstVUNtlBbsCplIKvLAYVn6zonoQPiDOhaOIr3BkSVSLrWLSz3XrXLfAYQHxfkw_LpsGVhfGKy5NlWviOtltuwXF8XVmlmHDDASuNzBQ4iag_1ROnkdBw7TUW01lgQs6dJ1t9BHKFWdM%5Eqfi5CeKo"
        ></iframe>
      </div>
    </div>

    <div class="wrap">
      <iframe
        id="seq-capacity"
        frameborder="0"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Sequencer_Capacity&oid=sqUFRzpFTM0Kx9UKPGZhtEcJxn0yLHFUxa2lXd4V0q4gchgRxRt%5EevDN9MFLjZ50vQjBPVtGmFMm2MqaJRLu52y2Zj_5TLhJY0Sel%5EheZWkaHvALYiFW_XKWSgiGfofu0m90pAvTq49Vu88jTpicq%5ETdoXRyfg5ZgExoGQ0"
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
