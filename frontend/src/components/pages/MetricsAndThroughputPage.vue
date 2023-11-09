<template>
  <div>
    <div class="md-display-1">Metrics and Throughput</div>
    <div>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_SingleValue&oid=NLHxk5BQ8ipCsbirSp0MN3hcVLY_D_60uJvC2vT1XN8pKhVzZ1bYYYqdyyyOHfVO1WUB0IeeAmqmjTbAcBAqB87NMY1DVfk47MWdBjfRRV9ruNBGBHThKZnG9AdOSPgv%5EmT8FWGK6ZytbjW36MRjnAQW_KAqLa1Y_HtT6fhH1c7"
      ></iframe>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_SingleValue&oid=BC_qU7wK5_NDTKTqnIwGXz8rXbF_DctNM5i5pXYHHKCyyDrKATuPSzzm1B8m9bCrOFEoW_A600ORpHGy3uVDBTVzzX%5EaB95P4Cfh7FjEql3i_QplsChCBZdw7NzcH4Ln4bAhK1fu5uc%5EviSjx1q6VnzDGXlTUDQlmQcZj1AjnN"
      ></iframe>
    </div>
    <div>
      <iframe
        id="top-requests"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Popular_Services_By_Requests&oid=q%5EU3TSOEZXWoanCyvPX2fS9E3rwh5rMi5y674pwdM%5E3ttiy0GbKtUPPgF%5ECGZJnNTWED9F_gSMA%5ExQHexpRYq_A547Lxy12xpVvpO7Tby9J32guJ3bFYMelbmmpRG5knSRMe9xF7Nx_rhqO6V7urh5n1iKyKefUw7d8egXrjCfDs2776c%5EN"
      ></iframe>

      <iframe
        id="top-requests-2"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Popular_Services_By_Samples&oid=o4VmfJsUe43A7tZgP0zC5TLtvgN9%5EmkG6vs5ValWcYHYGS1KDQ5ypXxA9pAqGKl%5E8NG9rtUwKbK%5EYDoY3sD9y5RNKMuw15rbvypW9FoAMZr64DVvNiVtGf8hkRmcZThXhWHa3TYmFobWF7Fwu2C58HZ963AgB1ML6dEvgf4BKYU93Sd2BKw0Co"
      ></iframe>
      <p>
        Top request types by request number (left) and sample number (right), 2023
      </p>
    </div>

    <div>
      <div class="wrap">
        <iframe
          id="top-requests-graph"
          frameborder="0"
          src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_Received&oid=MMesGONqQ2b%5ErYMXSxWXrA5fIshBlzDGtOA6lejFLOrO6Ghwz4T0KSNru77ogL0hCezmIincnhxnpb2mcvc56W17O0XdCd%5EoEXgExbI4F_YgZVDazmRHkgepN7sn_3_dDBRah7edVNXnFOFAKV8uX4tuLmjcYtizcRgAwUfA"
        ></iframe>
      </div>

      <p>
        The number of requests (top) and samples (bottom) IGO receives per month, from January 2020 to present.
      </p>
      <div class="wrap">
        <iframe
          id="top-requests-graph"
          frameborder="0"
          src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_Received&oid=Fs7rgt49YPm_KR9R0CXx9db9Hk9MCrBIHzsSNUDZvQeIGr_BPvttacrejwGZiBWW5Q7Gtn0j85iBA3EBvodo4gtKn0tJbkIZku7bT18Uhao_bsRmvyLc%5EwsNmjZXRZ7LUSC8YN4e%5EUl01fvn1pa9Y7_FRfK26UPf58qrHtS"
        ></iframe>
      </div>
    </div>

    <!-- <div class="wrap">
      <iframe
        id="seq-capacity"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Sequencer_Capacity&oid=p80AzuaEWGzaBro%5EPGfxx6EfM1dukKgCiTOzJclOHXrqwLKNJY9mX36Q3v0cVnKEGbjH_F5HrSBv92MKHx98n28juEKlUVaeTQGNAapYpB83u3gYw7tRteKmeyfq_cU2axLR_Eb3w%5Eh%5EK0mYa23TjY6GfybKs9ZXAKYEo2AU"
      ></iframe>
    </div> -->

    <!-- <div>
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
          <td>MICHELLE (retired)</td>
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
          <td>AMELIE</td>
          <td>NextSeq 1000</td>
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'MetricsAndThroughputPage',
};
</script>

<style></style>
