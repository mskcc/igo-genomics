<template>
  <div>
    <div class="md-display-1">Metrics and Throughput</div>
    <div id="wrap">
      <iframe
        id="scaled-frame"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Popular_Services_By_Requests&oid=xwqKD5EajqPZUe3OvPGCGxWsIIpSYri3Hg3M%5EH5HIfdshINBzxk5zlUuzBsWBcKzthlrzklD3C313m2L8f6hUMLQUTrpSwVYHqzLnVogTIQDMmiyzO%5EnnnXNQOWi25noQ7x4XVPA3HxDc1PEZSGJ%5EOEmVoJ8B96KAJGHqybgeXDeXTiPnpB5ekg9Tyl0"
      ></iframe>
    </div>
    <div>
      Top request types by request number (left) and sample number (right), 2020
    </div>
    <div id="wrap">
      <iframe
        id="scaled-frame"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Popular_Services_By_Samples&oid=K%5EgCNZzWgBp84qneRfTzpWv0LSpWxnN1TgV2ak9rM3g1vPXTqJT1Q0hl5GNJG%5EwAOXyDvAvkdGRWQzNVGsz7Lc_yzEaRsD4u7_h4Ncy940sCTlefq7agap5ZcoiniX9acdKM0gZv63B5EvFsTh69G2d053yJHZ3dcjct41I7ZjUPLWODfHdJx4x"
      ></iframe>
    </div>

    <!-- <div class="metrics-iframe left-align-grid">
      <iframe
        style="height:150;width:480;"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_SingleValue&oid=K65TjnRQLqSpLH1XYtSViudKUv9njZtgbDx_TzIWmn9WldkQgKUpOt5wZSbPsqvCwOpm92h_I9cn_MkyympLv1pzl243MR8YyitZTXn%5EiU3yBqgYDOzLHgIgrIE4mM6LeZ7vRjW7W0mro4RpYd4DiQGp7Nbjd8CLW90ukf94weDONo0"
      ></iframe
      ><br /><iframe
        style="height:150;width:480;"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_SingleValue&oid=33UcBahl9XrtsjYIzSln9Y9uGFL11Jw3EodwbSMKslQq_gSpxZ%5EUas7Kphiegvww7xoi5tkVVWyaCxwZZ35MKra4Yn1xyzI%5Eo65a5x%5EnJ0wBLmd3rdk6ZilDTyyE8jkzgHZIvNVJumJJcvPvcNbFQl5QLtGtvwSMUJGgjrxLmC"
      ></iframe>
    </div>

    <div class="metrics-text right-align-text" style="text-align:center;">Requests (top) and samples (bottom) to date 2020 vs 2019</div> -->

    <div>
      <iframe
        height="700"
        width="1200"
        frameborder="0"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_Received&oid=eCsOEuLwJMyxaUJdUevS4kEYBs84AKFborB6lslGYqayxhbYfrPyf1SXuvrqjZm3RL0aYHAvrNlnLH7WGBMt8AucHgGKasnYbcg39nZBNnJglF3Yr0Ti9V67QB6Xrr6yj2mwVZN5j6LKe8Tu1D32hR6HG0zXQWrWqpsa%5EHGklybt"
      ></iframe>
    </div>

    <div>
      The number of requests (top) and samples (bottom) IGO receives per month, from January 2018 to present.
    </div>

    <div>
      <iframe
        style="height:700;width:1200;"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_Received&oid=hgo435thvC93xrAn2zstVUNtlBbsCplIKvLAYVn6zonoQPiDOhaOIr3BkSVSLrWLSz3XrXLfAYQHxfkw_LpsGVhfGKy5NlWviOtltuwXF8XVmlmHDDASuNzBQ4iag_1ROnkdBw7TUW01lgQs6dJ1t9BHKFWdM%5Eqfi5CeKo"
      ></iframe>
    </div>

    <div>
      <iframe
        style="height:336;width:1200;"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Sequencer_Capacity&oid=sqUFRzpFTM0Kx9UKPGZhtEcJxn0yLHFUxa2lXd4V0q4gchgRxRt%5EevDN9MFLjZ50vQjBPVtGmFMm2MqaJRLu52y2Zj_5TLhJY0Sel%5EheZWkaHvALYiFW_XKWSgiGfofu0m90pAvTq49Vu88jTpicq%5ETdoXRyfg5ZgExoGQ0"
      ></iframe>
    </div>

    <div>
      Sequencer occupancy -- each bar represents an interval of time that the named sequencer was in operation.<br /><br /><br />
      <p>
        <strong>Sequencer Name</strong> <strong>Sequencer type</strong><span>DIANA</span> <span>NovaSeq 6000</span> <span>MICHELLE</span>
        <span>NovaSeq 6000</span><span>JAX</span> <span>HiSeq 4000</span><span>PITT</span> <span>HiSeq 4000</span> <span>LIZ</span>
        <span>HiSeq 2500</span><span>KIM</span> <span>HiSeq 2500</span> <span>MOMO</span> <span>HiSeq 2500</span><span>SCOTT</span>
        <span>NextSeq 500</span> <span>JOHNSAWYERS</span> <span>MiSeq</span> <span>TOMS</span> <span>MiSeq</span><span>VIC</span>
        <span>MiSeq</span><span>AYYAN</span> <span>MiSeq</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetricsAndThroughputPage",
};
</script>

<style></style>
