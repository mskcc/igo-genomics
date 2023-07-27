export const news = [
  {
    title: "Remembering Tony Deblasio",
    date: 'July 27, 2023',
    imgSource: 'DSC_6969',
    categories: ['featured'],
    body: `<p align="left">
    Anthony “Tony” DeBlasio, a respected senior researcher at Memorial Sloan Kettering Cancer Center, whose encyclopedic knowledge and intellectual curiosity inspired and amazed his colleagues and friends, died unexpectedly on July 16. He was 65.<br />
    <br />
    “Every single day was a discovery to him,” said Andrea Farina, DeBlasio’s supervisor in the IGO lab. “His knowledge was impressive and always connected with other elements. I discovered on a daily basis how much he knew and how enthusiastic he was about so many topics.”<br />
    <br />
    Farina said he admired DeBlasio’s vast scientific knowledge, and how he could take what could have been a dry subject and interweave it with theories that turned it into a fascinating discussion.<br />
    <br />
    “Tony had an open mind and was always willing to try new things,” he said. “I would always leave his desk feeling better than I was before.”
    Agnes Viale, the director of Core Facilities at MSK, who hired Tony in 2013 in her then-role as IGO lab director, called him “a gentle soul who was so very smart.”<br />
    <br />
    “Tony was passionate about everything he did,” Viale said. “His mind was always working a mile a minute, and you could always count on Tony – there was nothing fake about him at all.”<br />
    <br />
    In his role in the IGO lab as a senior research assistant, DeBlasio specialized in RNA and DNA extraction. He had a special interest in working to help children and was particularly excited every Monday when the pediatric patient samples arrived at the lab for whole genome and RNA sequencing. “He was always so concerned about how he could work on the samples,” Farina said. “He wanted to make sure that the children were taken care of.”<br />
    <br />
    Cassidy Cobbs, a senior project manager who worked in the lab with DeBlasio, said he “enjoyed and was good at the physical work of making science happen.”
    “Tony was the first line of the process (in working with pediatric patient samples),” Cobbs said. “He did the extraction no matter what the sample type – blood, bone marrow, tissue, fingernails, or buccal swabs.”<br />
    <br />
    His colleagues say that DeBlasio’s death has left an irreplaceable void in the IGO lab and MSK as an organization.<br />
    <br />
    “We have lost a major point of reference in the lab,” Farina said.<br />
    <br />
    DeBlasio was preceded in death by his parents. He is survived by his loving wife, Eun Hee Choi, his older brother, Dan, and his stepson, Sam Seok Jun Hwang.<br />
    <br />
    <small><i>Thanks to Cathy Cobbs for helping us memorialize Tony with an obituary.</i></small>
    </p>`,
  },
  {
    title: "Archer Dx Platforms Discontinued",
    date: 'July 13, 2023',
    imgSource: 'IGO_210408_082',
    categories: [''],
    body: `<p>
    Effective immediately, Archer Dx products, including MSK Solid Tumor and Heme Fusion assays and Archer Immunoverse TCR and BCR sequencing, will no longer be processed in IGO.<br />
    <br />
    For fusion discovery, we will soon be debuting an RNA whole-transcriptome capture assay. For TCR sequencing, IGO's in-house assay provides data for both human and mouse samples.<br />
    <br />
    Investigators are also welcome to purchase Archer kits independently, and submit libraries to IGO for sequencing.
    </p>`,
  },
  {
    title: "New at IGO: Cell Ranger multi",
    date: 'May 11, 2023',
    imgSource: 'Viale_190612_001',
    categories: [''],
    body: `<p>
    Going forward, IGO will run the Cell Ranger multi pipeline as part of the QC of feature barcoding and cell hashing samples. As we do for gene expression and VDJ libraries, we will now deliver that pipeline output. Files will remain for 3 months.<br />
    <br />
    To help us facilitate this process, please fill out the template available on your iLab request with details of your Feature Barcode/CITE-Seq and/or Cell Hashing/Cell Multiplexing experiment.
    </p>`,
  },
  {
    title: "Changes to IGO's Data Retention Policy",
    date: 'April 20, 2023',
    imgSource: 'IGO_210408_177',
    categories: [''],
    body: `<p>
    As sequencing-heavy applications such as Whole Genome Sequencing and 10X Genomics Single Cell Sequencing continue to grow and usage of the Oxford Nanopore long-read sequencing platform increases, storage space is an ongoing challenge for IGO. To accommodate newer platforms and in anticipation of the arrival of the NovaSeqX sequencing instrument later this year, we are tweaking our policies to ensure we have sufficient space.<br />
    <br />
    Going forward, FASTQ file links will remain active in /igo/delivery/share for <b>36 months</b>. After 3 years, links will be deactivated and files will be moved into "cold" storage. <b>Nothing will be permanently deleted</b>. However, there will be both a delay and a charge to recover archived files.<br />
    <br />
    FAST5 files will only be kept for <b>30 days</b> after delivery (previously 6 months) and will not be recoverable after that point.<br />
    <br />
    Previous policies remain in place: BAM files for RNA-Seq will be linked for <b>6 months</b> and Cell Ranger, Space Ranger, Tapestri, and CRISPResso pipeline results will be available for <b>3 months</b>. After that time, they can be regenerated from FASTQ files for a fee.
    </p>`,
  },
  {
    title: "Meet IGO's Scientific Liaison",
    date: 'April 3, 2023',
    imgSource: 'Cobbs, Cassidy-230324-01lr',
    categories: [''],
    body: `<p>
    Cassidy Cobbs, who many of you have exchanged e-mails with in their role as IGO's Scientific Liaison, was recently profiled on OneMSK for Transgender Day of Visibility. Check it out <a href="https://mskcc.sharepoint.com/SitePages/Transgender-Day-of-Visibility--Meet-Cassidy-Cobbs.aspx" target="__blank">here!</a>
    </p>`,
  },
  {
    title: 'IGO Updates for 2023',
    date: 'January 23, 2023',
    imgSource: 'wheresciencegoesigo',
    categories: [''],
    body: `<p>
    The new year brings new platforms, discontinuations, platform development, and pricing changes:
    <ul>
      <li>Oxford Nanopore long read DNA and cDNA sequencing is now in production and samples can be submitted via iLab</li>
      <li>The HemePACT panel has been discontinued, but IGO will soon start running IMPACT-Heme, the same panel offered in the clinical lab</li>
      <li>Illumina has discontinued the EPIC Methyl Capture Seq platform -- IGO's R&D team is evaluating alternatives for methylation sequencing</li>
      <li>IGO will be onboarding Nanostring CosMx and 10X Genomics Xenium instruments to enable subcellular spatial RNA profiling</li>
      <li>We have implemented price increases to IMPACT tumor profiling, slide sectioning, scraping, and dissection, and some block sequencing read lengths</li>
      <li>We have decreased prices for PolyA RNA-Seq, standard read length sequencing (PE150, PE100, and 10X Genomics), and some block sequencing read lengths</li>
    </p>`,
  },
  {
    title: 'NEW at IGO: Oxford Nanopore Long Read Sequencing',
    date: 'December 13, 2022',
    imgSource: 'promethion',
    categories: [''],
    body: `<p>
    Long read sequencing on the Oxford Nanopore platform is now available for all investigators. We are offering PCR-free WGS and cDNA sequencing in production -- for other applications, please <a href="mailto:genomics.mskcc.org">contact the R&D team</a>.<br />
    <br />
    More information on long read sequencing <a href="https://genomics.mskcc.org/ONTposter" target="_blank">here</a>.<br />
    <br />
    <a href="https://genomics.mskcc.org/platforms/longreadsequencing">Pricing</a><br />
    <br />
    Pass/fail criteria and input recommendations for <a href="https://genomics.mskcc.org/criteria">DNA</a> and <a href="https://genomics.mskcc.org/criteria/rna">RNA</a>
    </p>`,
  },
  {
    title: "Changes to IGO's Sample Discard/Return Policy",
    date: 'October 7, 2022',
    imgSource: 'IGO_210408_014',
    categories: [''],
    body: `<p>
    Due to IGO's ever-expanding collection of stored samples, our freezers are now at full capacity. To alleviate the situation, IGO has worked with MSK leadership to implement the following:<br />
    <br />
    Leftover biomaterial (tissue, DNA, RNA) submitted to IGO for processing will be discarded <u><strong>24 months after submission of the project</strong></u>. You will have to <u><strong>proactively</u></strong> request your leftover material.<br />
    <br />
    For projects submitted prior to October 2020, you have until 12/15/22 to retrieve your samples.<br/>
    <br />
    To request your leftover material:<br/>
    <ol>
    <li>If you submitted in a barcoded plate (DNA/RNA), <a href="mailto:igosampleprojmgmt@mskcc.org">e-mail IGO</a> to schedule a pickup and provide the plate ID used in sample submission.</li>
    <li>If you provided tissue for extraction followed by a downstream sequencing request, <a href="mailto: igosampleprojmgmt@mskcc.org">e-mail IGO</a> to schedule a pickup and provide the project number your data were delivered under.</li>
    <li>Once you receive a pickup notification, you have 5 business days to pick up your material or it will be discarded.</li>
    </ol>
  </p>`,
  },
  {
    title: 'IGO price changes',
    date: 'September 1, 2022',
    imgSource: 'IGO_210408_127',
    categories: [''],
    body: `<p>
    In accordance with the changing cost of reagents and the evolution of protocols and workflows in IGO, we have adjusted the prices for a number of services. You will find a few price increases, especially for our block sequencing options. There are also small increases in extraction prices as well as simplification of the DNA, RNA, and dual extraction categories.

    Two major platforms have price decreases: RNA-Seq with SMARTer amplification has dropped about 10% in price, and fresh/frozen samples for human or mouse whole exome sequencing will see significant savings over FFPE.

    New pricing goes into effect for samples submitted September 1 and later.
  </p>`,
  },
  {
    title: 'Learn about libraries & ddPCR with IGO',
    date: 'August 1, 2022',
    imgSource: 'IGO_210408_021',
    categories: [''],
    body: `<p>
    As part of the MSK Core Facilities' 1st Annual Technology Day on September 14, IGO will present two separate workshops to help our investigators. Andrea Farina will present on ddPCR principles, workflow, advantages, and applications and Cassidy Cobbs will give an overview of the structure and components of Illumina sequencing libraries, including how to generate them specifically for the most cost-effective sequencing in IGO.

    You can find more information on Tech Day <a href="https://mskcc.sharepoint.com/sites/pub-CoreFacilities/SitePages/1st-Annual-Technology-Day-Details.aspx" target="_blank">here</a>, and register for workshops <a href="http://skitraining.mskcc.org/MSK/Index" target="_blank">here</a>.
  </p>`,
  },
  {
    title: 'Changes to data delivery and archiving',
    date: 'July 12, 2022',
    imgSource: 'IGO_210408_177',
    categories: [''],
    body: `<p>
    Beginning July 1, IGO will deliver BAM alignment files for all human and mouse RNA-Seq experiments in addition to the FASTQ files. Your data folder will now contain a 'pipeline' folder with these files. You can find more details on BAM generation on our Data & Delivery page.

    Additionally, on <b>September 1</b>, we will delete FASTQ files from 2017 and earlier. This will only apply to IGO-generated FASTQ files, not those generated by analysis groups such as BIC. Please make sure you have copied all files prior to September 1. While we will be able to regenerate the files if necessary after deletion, there will be a significant processing delay.
  </p>`,
  },
  {
    title: 'New barcoded label pilot for extraction material',
    date: 'May 23, 2022',
    imgSource: 'eppy_labels',
    categories: [''],
    body: `<p>
    In order to improve sample tracking and prevent sample swaps or handling errors, IGO has begun labeling all incoming Eppendorf tubes of cells or tissue for nucleic acid extraction with 2D barcodes. Currently, there is no need to do anything differently in the submission process -- our team will label the tubes at the time of drop-off while we test the logistics of this new method.
  </p>`,
  },
  {
    title: 'NEW at IGO: TCR sequencing',
    date: 'May 3, 2022',
    imgSource: 'IGO_210408_008',
    categories: [''],
    body: `<p>
    In collaboration with MSK's Computational Immuno-oncology group, IGO's R&D team has developed a homebrew, RNA-based, TCR&alpha;/&beta; sequencing platform appropriate for mouse and human samples. Priced at $225/sample, including analysis, this application fills a need for a low-cost service appriopriate for both large and small sample sets. More details about submission can be found in our Submission Guidelines and Sample Requirements sections. Contact genomics@mskcc.org with questions!
  </p>`,
  },
  {
    title: 'Adaptive no longer supports core use',
    date: 'April 29, 2022',
    imgSource: 'adaptive',
    categories: [''],
    body: `<p>
    Adaptive Biotech, makers of the immunoSEQ platform for DNA-based TCR sequencing, has announced that they will no longer offer human TCR&beta; kits for labs to process their own samples. Going forward, investigators in need of a DNA-based TCRSeq approach will need to coordinate directly with Adaptive to ship their samples to the company. From Adaptive: "To provide the best value to our customers, we would have needed to make a significant investment to expand our barcodes to more than one lot and validate compatibility on Illumina's patterened flow cells...Unfortunately, our business unit didn't have the financial, software and manufacturing resources required to complete this project."
  </p>`,
  },
  {
    title: 'NEW at IGO: Nanostring GeoMx Spatial Transcriptomics',
    date: 'December 22, 2021',
    imgSource: 'geomx',
    categories: [''],
    body: `<p>
    IGO is now accepting samples for Nanostring GeoMx, a probe-based, targeted RNA-Seq platform optimized for FFPE slides. GeoMx allows for morphologically-stained slides to be scanned and for specific regions of interest to be selected by the investigator for precise targeting of tumor or TME (including both cell types from the same region). Customization is available both for the morphological staining and the RNA targeted. See more information in our <a href="https://genomics.mskcc.org/single-cell-hub">Single Cell Hub</a>, and contact us at genomics@mskcc.org to discuss your experiment.
  </p>`,
  },
  {
    title: 'Coming Soon: Oxford Nanopore PromethION',
    date: 'November 29, 2021',
    imgSource: 'promethion',
    categories: [''],
    body: `<p>
    IGO's R&D team has recently begun validation efforts for Oxford Nanopore's PromethION instrument, which provides high-throughput sequencing of long reads, including direct molecule sequencing of DNA and RNA, with or without PCR. While the platform is still in early development, if you are interested in long-read sequencing, please contact genomics@mskcc.org to discuss your needs.
    </p>`,
  },
  {
    title: 'Welcome Neeman Mohibullah, new IGO Director!',
    date: 'November 1, 2021',
    imgSource: 'Mohibullah_Neeman',
    categories: [''],
    body: `<p>
    Neeman Mohibullah, formerly IGO's R&D Manager and Associate Director, has now taken over the Director's mantle. She succeeds Agnes Viale, who helmed IGO and its precursor for more than 20 years, and who is continuing her leadership role at MSK as Director of Core Facilities. Neeman earned her PhD at the Fred Hutch in Seattle, and was a postdoctoral researcher in the Keeney lab at MSK before joining IGO in 2016. Please join us in welcoming her into her new role!
    </p>`,
  },
  {
    title: "IGO's Open House Coming 10/29",
    date: 'October 11, 2021',
    // imgSource: 'IMG_20191031_112220',
    imgSource: 'OpenHouse2021-Flyer-Final-Landscape',
    categories: [''],
    body: `<p>
    It's time for IGO's (almost) annual Halloween Open House! Come join us on Friday, October 29 in ZRC 320 for a COVID-safe event to learn about the latest in our technology and services, take part in a host of games and activities, and grab plenty of candy to take home. Tour the lab, schedule consults on our common and new technologies, and play some science-themed games hosted by our costumed IGO staff to celebrate another year of genomics. Watch this space or email genomics@mskcc.org for more information.
  </p>`,
  },
  {
    title: 'Reservations have moved to Microsoft Bookings (10X Genomics, ATAC-Seq and more!)',
    date: 'October 22, 2021',
    imgSource: 'IGO_210408_002',
    categories: [''],
    body: `<p>
      IGO is happy to announce the launch of a new tool to
      book <a href="https://outlook.office365.com/owa/calendar/igo1@mskcc.onmicrosoft.com/bookings/" target="_blank">drop off appointments of fresh samples for 10X Genomics, DLP, and MissionBio</a>! All other sample drop-off appointments, including fresh samples for ATAC-Seq can be made <a href="https://outlook.office365.com/owa/calendar/IGOSPMReservations@mskcc.onmicrosoft.com/bookings/" target="__blank">here</a>.</p><p>Appointments previously scheduled through https://genomics.mskcc.org/reservations have been moved by an IGO Staff member to their respective Microsoft Bookings calendar. If you did not receive a new confirmation email please contact zzPDL_SKI_IGO_DATA@mskcc.org.
    </p>`,
  },
  {
    title: 'Welcome to the new IGO website!',
    date: 'January 15, 2021',
    imgSource: 'wheresciencegoesigo',
    categories: [''],
    body: `<p>
      In support of our ongoing efforts to provide excellent customer service alongside our cutting-edge technologies, IGO's
      Data Team has worked to upgrade our genomics.mskcc.org site. Executed in just over a month, the new site provides easier
      access to tools and information while increasing functionality. Please feel free to contact us at genomics@mskcc.org if
      you have any questions, comments, or suggestions for the website.
    </p>`,
  },
  {
    title: 'New project tracker, guidance for single cell applications, and changes to data delivery',
    date: 'December 3, 2020',
    imgSource: 'Viale_190612_083',
    categories: [''],
    body: `<p>
      IGO’s Data Team is pleased to roll out a new
      <a href="https://igo.mskcc.org/login/request-tracker"> request tracking application</a>. Use this tool for real-time
      visualization of IGO’s progress on your project, with detail to the sample level. Try it out in the IGO Marketplace today!
    </p>
    <p>
      As demand for single cell sequencing rises, IGO continues to invest in platforms to cover a wide variety of sample types
      and data needs. See which application is right for your sample set
      <a href="https://genomics.mskcc.org/single-cell-hub">here</a>.
    </p>
    <p>
      Currently, IGO’s data delivery consists of FASTQ files separated by sample, sequencer run, and read (forward vs reverse).
      <strong>Starting January 2021, there will be an additional layer of separation: by sequencer lane. </strong>
      <a href="https://genomics.mskcc.org/accessing-your-data">Click here for more information.</a>
    </p>`,
  },
  {
    title: 'New pricing for block sequencing',
    date: 'October 26, 2020',
    imgSource: 'Viale_190612_078',
    categories: [''],
    body: `<p>
    For investigators who make their own sequencing libraries to submit to IGO, we now have
    <a href="https://genomics.mskcc.org/block-pricing"
      >easy-to-understand block pricing</a
    >
    for our most commonly-requested read lengths and throughputs. We accept both individual user libraries and pre-pooled libraries to
    occupy a full flow cell or lane. Custom read lengths and coverages outside the block pricing will still be accepted;
    <a href="https://genomics.mskcc.org/contacts">contact us for more information.</a>
  </p>`,
  },
  {
    title: 'End of era in IGO + new website features',
    date: 'October 8, 2020',
    imgSource: 'IMG_20180918_173027',
    categories: [''],
    body: ` <p>
    After more than 6 months and over 46,000 samples, Friday, October 9 will be the last day of COVID-19 testing in IGO. While the
    core jumped at the opportunity to support our colleagues and city through the ongoing pandemic, we also look forward to turning
    our full attention back to our mission of supporting and enabling a broad range of research efforts at MSK. We will continue to
    provide
    <a href="https://genomics.mskcc.org/submission-guidelines">COVID-19 testing of research samples.</a>
  </p>
  <p>
    In addition to the
    <a href="https://genomics.mskcc.org/single-cell-hub">new 10X Genomics Visium platform</a>, we are improving our website
    resources for investigators. A searchable,
    <a href="https://genomics.mskcc.org/ddpcr">comprehensive list of our ddPCR assays</a> is now available and stay tuned
    for a project tracker, currently in beta testing!
  </p>`,
  },
  {
    title: 'COVID-19 testing continues in IGO',
    date: 'August 10, 2020',
    imgSource: 'COVIDInfographic_080720',
    categories: [''],
    body: ` <p>
    When all research operations halted, the IGO’s high-throughput automation and skilled technicians turned to meet a critical
    demand: expanding MSK’s COVID-19 testing capabilities. Now, with a clinically-compliant COVID-testing infrastructure in place, the
    core continues to contribute to MSK’s expansive and rapid testing program without sacrificing turnaround time on research
    applications.
  </p>`,
  },
  {
    title: 'NEW at IGO: 10X Genomics Visium Spatial Transcriptomics',
    date: 'July 30, 2020',
    imgSource: 'IGO_210408_044',
    categories: [''],
    body: `<p>
    Despite the disruption of the research shutdown and our personnel running hundreds of COVID-19 samples per day in parallel with
    our normal operations, IGO has brought into production a new spatial transcriptomics platform in collaboration with the
    <a href="https://one.mskcc.org/sites/pub/ski/CoreFacilities/Pages/Molecular-Cytology.aspx"> Molecular Cytology Core</a>. Learn
    more about <a href="https://genomics.mskcc.org/single-cell-hub">10x Genomics Visium</a> or
    <a href="https://genomics.mskcc.org/contacts">contact us</a> set up a meeting about your project.
  </p>`,
  },
  {
    title: 'Nanostring platform discontinued',
    date: 'July 20, 2020',
    imgSource: 'IGO_210408_127',
    categories: [''],
    body: `<p>
    Currently all IGO’s standard platform offerings are now available except for Nanostring. Additionally, we are offering COVID-19
    testing of fresh tissue or cell samples and are rolling out our new spatial transcriptomics option in collaboration with the
    <a href="https://one.mskcc.org/sites/pub/ski/CoreFacilities/Pages/Molecular-Cytology.aspx"> Molecular Cytology Core</a> using the
    <a href="https://genomics.mskcc.org/single-cell-hub">10X Genomics Visium platform</a>.
    </p><a href="https://genomics.mskcc.org/submission-guidelines">Submit for COVID19</a></br>
    <!-- <md-button class="md-raised md-primary" :to="{ name: 'reopen faq' }">Reopen FAQs</md-button> -->
    <a href="https://genomics.mskcc.org/igo-tutorials">IGO Tutorials</a>`,
  },
  // {
  //   title: '',
  //   date: '',
  //   imgSource: '',
  //   body: ``,
  // },
];

export const teams = [
  {
    id: 0,
    name: 'Leadership',
    description:
      'The leadership team oversees over 40 full-time staff from entry-level research technicians to senior experts. They not only ensure that everyone is working in concert to process thousands of projects each year, but also continue to bring on new technologies to keep IGO on the cutting edge of genome science.',
    members: [
      { name: 'Neeman Mohibullah', role: 'Director', photoName: 'Mohibullah_Neeman' },
      { name: 'Andrea Farina', role: 'Manager, EXPAND', photoName: 'Farina_Andrea' },
      { name: 'Angela Pepe-Caprio', role: 'Operations Manager', photoName: 'Pepe-Caprio_Angela' },
      { name: 'Blaise Robin', role: 'Supervisor, SPM', photoName: 'Robin_Blaise' },
      { name: 'David Mcmanamon', role: 'Manager, Data', photoName: 'Mcmanamon_David' },
      { name: 'Liping Sun', role: 'Manager, Sequencing', photoName: 'Sun_Liping' },
      { name: 'Ruchi Patel', role: 'Manager, Single Cell & Library Prep', photoName: 'Patel_Ruchi' }, 
      { name: 'Stephanie Chrysanthou', role: 'Manager, R&D', photoName: 'Chrysanthou_Stephanie' },
      // { name: 'Position Open!', role: 'Operations Manager' },     
    ],
  },
  {
    id: 1,
    name: 'Lab Support',
    description:
      'As a large, high-throughput facility constantly striving for technical excellence and exemplary customer service, IGO has several employees who work between and among teams and directly with investigators.',
    members: [      
      { name: 'Andrea John', role: 'Administrative Assistant II', photoName: 'John_Andrea' },
      { name: 'Cassidy Cobbs', role: 'Scientific Liaison', photoName: 'Cobbs_Cassidy' },
      { name: 'Meghanne Lomibao', role: 'Lab Manager', photoName: 'Lomibao_Meghanne' },
      // { name: 'Open Position!', role: 'Administrative Assistant' },
      // { name: 'Open Position!', role: 'Lab Manager' },
    ],
  },
  {
    id: 2,
    name: 'Automation',
    description:
      "In order to process hundreds of samples per day and maintain consistent protocols between batches, IGO operates 10 liquid handling robots. The Automation team is responsible for maintaining those instruments, training technicians in their use, and developing all programming for IGO's many platforms.",
    members: [
      { name: 'Alan Li', role: 'Senior Automation Engineer', photoName: 'Li_Alan' },
      { name: 'Elevit Perez', role: 'Automation Engineer', photoName: 'Perez_Elevit' },
    ],
  },
  {
    id: 3,
    name: 'SPM',
    description:
      'The Sample & Project Management team works with investigators to quickly and correctly accession and QC all samples that come into IGO, including helping with navigation of iLab, easing sample webform submissions, facilitating smooth processing, and providing updates to investigators.',
    members: [
      { name: 'Blaise Robin', role: 'Supervisor', photoName: 'Robin_Blaise' },
      { name: 'Allison Sexton', role: 'Project Assistant', photoName: 'Sexton_Allison' },
      { name: 'Kyriakos Chatzis', role: 'Project Assistant', photoName: 'Chatzis_Kyriakos' },
      { name: 'Tressa Octave', role: 'Senior Project Assistant', photoName: 'Octave_Tressa' },
      { name: 'Position Open!', role: 'Project Manager' },
      // { name: 'Position Open!', role: 'Supervisor' },
      // { name: 'Position Open!', role: 'Project Assistant' },
    ],
  },
  {
    id: 4,
    name: 'EXPAND',
    description:
      'The EXPAND team is the most diverse team in IGO -- responsible for integrating new platforms and advancing research technology to remain at the cutting edge for our users, they handle pathology, nucleic acid extraction, digital droplet PCR, and spatial transcriptomics.',
    members: [
      { name: 'Andrea Farina', role: 'Manager, IGO', photoName: 'Farina_Andrea' },
      { name: 'Dorothy Guzowski', role: 'Senior Research Assistant', photoName: 'Guzowski_Dorothy' },
      { name: 'Elijah Castro', role: 'Senior Research Technician', photoName: 'Castro_Elijah' },
      { name: 'Lauren Walsh', role: 'Intern', photoName:'Walsh_Lauren' },
      { name: 'Matthew Solowsky', role: 'Senior Research Technician', photoName: 'Solowsky_Matthew' },
      { name: 'Mohamed Abdelbaset', role: 'Senior Research Technician', photoName: 'Abdelbaset_Mohamed' },
      { name: 'Phung Hyunh', role: 'Research Technician', photoName: 'Huynh_Phung' },
      { name: 'Tony Deblasio', role: 'Senior Research Assistant', photoName: 'Deblasio_Tony' },
      // { name: 'Open Position!', role: 'Research Assistant' },
    ],
  },
  {
    id: 5,
    name: 'Single Cell',
    description:
      "The Single Cell team receives fresh and frozen samples for IGO's 10X Genomics and DLP platforms. They use a mix of manual and automated techniques to help investigators achieve the best single cell data possible. Additionally, the Single Cell team has expanded their expertise to take on Oxford Nanopore long read library preparation.",
    members: [
      { name: 'Ruchi Patel', role: 'Manager, IGO', photoName: 'Patel_Ruchi' },
      { name: 'Dooa Kim', role: 'Research Assistant', photoName:'Kim_Dooa' },
      { name: 'Justin Clarke', role: 'Senior Research Technician', photoName: 'Clarke_Justin' },
      { name: 'Ravi Shrivastav', role: 'Senior Research Technician', photoName: 'Shrivastav_Ravi' },
      { name: 'Satish Ramakrishnan', role: 'Senior Research Assistant', photoName: 'Ramakrishnan_Satish' },
      { name: 'Sophie Kleinberg', role: 'Intern', photoName: 'Kleinberg_Sophie' },
      { name: 'Yushi Wu', role: 'Research Assistant', photoName: 'Wu_Yushi' },   
      // { name: 'Open Position!', role: 'Research Assistant' },
    ],
  },
  {
    id: 6,
    name: 'Library Prep',
    description:
      "The Library Preparation team handles the bulk of IGO's sample processing, utilizing liquid-handling robots to automate many platforms.",
    members: [
      { name: 'Ruchi Patel', role: 'Manager, IGO', photoName: 'Patel_Ruchi' },
      { name: 'Kalliopi Chatzis', role: 'Research Assistant', photoName: 'Chatzis_Kalliopi' },
      { name: 'Katherine Allard', role: 'Senior Research Assistant', photoName: 'Allard_Katherine' },
      { name: 'Kiruthika Balasubramanian', role: 'Research Assistant', photoName: 'Balasubramanian_Kiruthika' },
      { name: 'Magdalena Alioto Grace', role: 'Research Technician', photoName: 'Alioto_Grace_Magdalena' },
      { name: 'Sophia Rust', role: 'Research Technician', photoName: 'Rust_Sophia' },
      // { name: 'Open Position!', role: 'Supervisor' },
      // { name: 'Open Position!', role: 'Research Technician' },
    ],
  },
  {
    id: 7,
    name: 'Sequencing',
    description:
      "The Sequencing Team performs all activities related to Illumina and Oxford Nanopore sequencing, including quantity and quality assessment of libraries, pooling, and preparation for sequencing. The team is also responsible for the care & feeding of IGO's 9 sequencing instruments.",
    members: [
      { name: 'Liping Sun', role: 'Manager, IGO', photoName: 'Sun_Liping' },
      { name: 'Desmond Lambe', role: 'Research Technician', photoName: 'Lambe_Desmond' },
      { name: 'Jim Chen', role: 'Research Assistant', photoName: 'Chen_Jim' },
      { name: 'Keumsil Hwang', role: 'Senior Research Assistant', photoName: 'Hwang_Keumsil' },
      { name: 'Medhini Mankale', role: 'Research Technician', photoName: 'Mankale_Medhini' },
      { name: 'Mingqiang Zhuang', role: 'Research Assistant', photoName: 'Zhuang_Mingqiang' },
      // { name: 'Open Position!', role: 'Research Assistant', },
    ],
  },
  {
    id: 8,
    name: 'Data',
    description:
      "The IGO Data Team is a group of bioinformaticians, software engineers, and computer scientists.  They work closely with IGO's investigators and wet-lab technicians to write multiple software applications from sample receiving and LIMS processing to post-sequencing stats tracking and data delivery.",
    members: [
      { name: 'David Mcmanamon', role: 'Manager, IGO', photoName: 'Mcmanamon_David' },
      { name: 'Cuijie Lu', role: 'Bioinfo. Software Engineer I', photoName: 'Lu_Cuijie' },
      { name: 'Darrell Nabors', role: 'Bioinformatics Engineer V', photoName: 'Nabors_Darrell' },
      { name: 'Fahimeh Mirhaj', role: 'Bioinfo. Software Engineer II', photoName: 'Mirhaj_Fahimeh' },
      { name: 'Stephanie DelBelso', role: 'Bioinfo. Software Engineer III', photoName: 'DelBelso_Stephanie' },
      // { name: 'Open Position!', role: 'Bioinformatics Software Engineer II' },
    ],
  },
  {
    id: 9,
    name: 'R&D',
    description:
      'The Research & Development team develops, tests, and implements new genomics platforms for the MSKCC community. In addition to testing off-the-shelf assays, our group works with MSK investigators to bring customized platforms to IGO.',
    members: [
      { name: 'Stephanie Chrysanthou', role: 'Manager, IGO', photoName: 'Chrysanthou_Stephanie' },
      { name: 'Juan Li', role: 'Scientific Research Lead', photoName: 'Li_Juan' },
      { name: 'Trishala Karmacharya', role: 'Research Assistant', photoName: 'Karmacharya_Trishala' },
      // { name: 'Open Position!', role: 'Research Technician' },
      
    ],
  },
  // {
  //   id: 8,
  //   name: 'IGO Alumni',
  //   description:
  //     'IGO technicians gain valuable skills and cutting-edge knowledge while working in a fast-paced environment. Many leverage that experience into advanced degrees and training to further their careers in science and medicine.',
  //   members: [
  //     { name: 'Denise Chen', role: 'Philadelphia College of Osteopathic Medicine', photoName: 'Chen_Denise' },
  //     { name: 'Desmond Lambe', role: 'Rensselaer Polytechnic Institute', photoName: 'Lambe_Desmond' },
  //     { name: "Josie D'Angelo", role: 'UC Berkeley ', photoName: 'Dangelo_Josie' },
  //     { name: 'Marisa Vanness', role: 'Geisinger Commonwealth School of Medicine', photoName: 'Vanness_Marisa' },
  //     { name: 'Michael Pantano', role: 'BU Questrom School of Business', photoName: 'Pantano_Michael' },
  //     { name: 'Rosie Wenrich', role: 'Rowan University', photoName: 'Wenrich_Rosie' },
  //     { name: 'Taylor Allen', role: 'Georgia Tech Dept. of Chemistry & Biochemistry', photoName: 'Allen_Taylor' },
  //   ],
  // },
];

export const bulkServices = [
  {
    id: 0,
    name: 'Whole Exome Sequencing',
    description: 'A capture-based assay to assess the entire exome.',
    startingMaterial: 'DNA or DMP Library',
    libraryChemistry: 'KAPA Hyper',
    captureChemistry: 'xGen v2.0 from IDT (human); SinglePlex Mouse Exome from Twist (mouse)',
    sequencingReadLength: 'PE100',
    sequencingCoverage: 'Varies (see below)',
    deliverable: 'FASTQ; Pipeline analysis options available from CMO or BIC with additional charges',
    tableHeaders: ['sampleCoverage', 'sampleCostFrozen', 'sampleCostFfpe'],
    table: [
      { sampleCoverage: 30, sampleCostFrozen: 230, sampleCostFfpe: 458 },
      { sampleCoverage: 70, sampleCostFrozen: 289, sampleCostFfpe: 580 },
      { sampleCoverage: 100, sampleCostFrozen: 334, sampleCostFfpe: 668 },
      { sampleCoverage: 150, sampleCostFrozen: 408, sampleCostFfpe: 808 },
      { sampleCoverage: 200, sampleCostFrozen: 482, sampleCostFfpe: 966 },
      { sampleCoverage: 250, sampleCostFrozen: 556, sampleCostFfpe: 1106 },
    ],
  },
  {
    id: 1,
    name: 'Targeted Sequencing',
    description: 'Capture-based assays to assess specific genes within the exome.',
    startingMaterial: 'DNA or DMP Library',
    libraryChemistry: 'KAPA Hyper',
    captureChemistry: 'Custom probes',
    sequencingReadLength: 'PE100',
    sequencingCoverage: '500X T/250X N (IMPACT); 60M reads (ACCESS); 30M reads (CMO-CH)',
    deliverable: 'cBioPortal instance (IMPACT), pipeline analysis (ACCESS, M-IMPACT); in development (CMO-CH)',
    tableHeaders: ['panel', 'sampleType', 'sampleCostWet', 'sampleCostDry', 'totalCost' ],
    table: [
      { panel: 'IMPACT', sampleType: 'Tumor', sampleCostWet: 323, sampleCostDry: 227, totalCost: 550 },
      { panel: 'IMPACT', sampleType: 'Normal', sampleCostWet: 191, sampleCostDry: 59, totalCost: 250 },
      { panel: 'IMPACT', sampleType: 'Pooled Normal', sampleCostWet: '-', sampleCostDry: 59, totalCost: 59 },
      { panel: 'Mouse IMPACT', sampleType: '', sampleCostWet: 380, sampleCostDry: 145, totalCost: 525 },
      // { panel: 'HemePACT', sampleType: 'Tumor', sampleCostWet: 420, sampleCostDry: 153, totalCost: 573 },
      // { panel: 'HemePACT', sampleType: 'Normal', sampleCostWet: 270, sampleCostDry: 80, totalCost: 350 },
      { panel: 'ACCESS', sampleType: 'Tumor', sampleCostWet: 490, sampleCostDry: 110, totalCost: 600 },
      { panel: 'ACCESS', sampleType: 'Normal', sampleCostWet: 260, sampleCostDry: 40, totalCost: 300 },
      { panel: 'CMO-CH', sampleType: '', sampleCostWet: 287, sampleCostDry: 80, totalCost: 367 },
    ],
  },
  {
    id: 2,
    name: 'Transcriptome Sequencing',
    description: 'Techniques to enrich RNA and assess expressed transcripts',
    startingMaterial: 'RNA or cells (SMARTer only)',
    libraryChemistry: 'TruSeq stranded mRNA (polyA), TruSeq stranded total (Ribodepletion), SMART-Seq v4 + KAPA Hyper (SMARTer)',
    sequencingReadLength: 'PE100',
    sequencingCoverage: '10-100M+',
    deliverable: 'FASTQ + BAM; analysis options from BIC at an additonal cost',
    tableHeaders: ['libraryType', 'readNumber', 'sampleCost'],
    table: [
      { libraryType: 'PolyA', readNumber: '10-20', sampleCost: 250 },
      { libraryType: 'PolyA', readNumber: '20-30', sampleCost: 300 },
      { libraryType: 'PolyA', readNumber: '30-40', sampleCost: 350 },
      { libraryType: 'PolyA', readNumber: '40-50', sampleCost: 375 },
      { libraryType: 'PolyA', readNumber: '50-60', sampleCost: 400 },
      { libraryType: 'PolyA', readNumber: '60-80', sampleCost: 450 },
      { libraryType: 'PolyA', readNumber: '80-100', sampleCost: 500 },
      { libraryType: 'PolyA', readNumber: '100+', sampleCost: 550 },
      { libraryType: 'RiboDepletion', readNumber: '10-20', sampleCost: 300 },
      { libraryType: 'RiboDepletion', readNumber: '20-30', sampleCost: 350 },
      { libraryType: 'RiboDepletion', readNumber: '30-40', sampleCost: 400 },
      { libraryType: 'RiboDepletion', readNumber: '40-50', sampleCost: 450 },
      { libraryType: 'RiboDepletion', readNumber: '50-60', sampleCost: 500 },
      { libraryType: 'RiboDepletion', readNumber: '60-80', sampleCost: 600 },
      { libraryType: 'RiboDepletion', readNumber: '80-100', sampleCost: 700 },
      { libraryType: 'RiboDepletion', readNumber: '100+', sampleCost: 800 },
      { libraryType: 'SMARTer amplification', readNumber: '10-20', sampleCost: 300 },
      { libraryType: 'SMARTer amplification', readNumber: '20-30', sampleCost: 350 },
      { libraryType: 'SMARTer amplification', readNumber: '30-40', sampleCost: 400 },
      { libraryType: 'SMARTer amplification', readNumber: '40-50', sampleCost: 450 },
      { libraryType: 'SMARTer amplification', readNumber: '50-60', sampleCost: 500 },
      { libraryType: 'SMARTer amplification', readNumber: '60-80', sampleCost: 625 },
      { libraryType: 'SMARTer amplification', readNumber: '80-100', sampleCost: 650 },
      { libraryType: 'SMARTer amplification', readNumber: '100+', sampleCost: 750 },
    ],
  },
  {
    id: 3,
    name: 'Whole Genome Sequencing',
    description: 'Assess the entire genome using PCR-free methods, minimal PCR cycles, or a shallow sequencing for CNV.',
    startingMaterial: 'DNA',
    libraryChemistry: 'KAPA Hyper',
    sequencingReadLength: 'PE150 (deep WGS); PE100 (shallow/bacterial WGS)',
    sequencingCoverage: 'Varies; see below',
    deliverable: 'FASTQ',
    tableHeaders: ['sampleCoverage', 'sampleCostFrozen', 'sampleCostFfpe'],
    table: [
      { sampleCoverage: 10, sampleCostFrozen: 487, sampleCostFfpe: 561 },
      { sampleCoverage: 30, sampleCostFrozen: 1067, sampleCostFfpe: 1263 },
      { sampleCoverage: 40, sampleCostFrozen: 1324, sampleCostFfpe: 1655 },
      { sampleCoverage: 50, sampleCostFrozen: 1557, sampleCostFfpe: 2046 },
      { sampleCoverage: 60, sampleCostFrozen: 1769, sampleCostFfpe: 2437 },
      { sampleCoverage: 70, sampleCostFrozen: 1999, sampleCostFfpe: 2828 },
      { sampleCoverage: 80, sampleCostFrozen: 2229, sampleCostFfpe: 3219 },
      { sampleCoverage: 100, sampleCostFrozen: 3017, sampleCostFfpe: 4002 },
      { sampleCoverage: 120, sampleCostFrozen: 3414, sampleCostFfpe: 4784 },
      { sampleCoverage: 'shallow', sampleCostFrozen: 182, sampleCostFfpe: 182 },
      { sampleCoverage: 'bacterial/yeast', sampleCostFrozen: 182, sampleCostFfpe: 182 },
    ],
  },
  {
    id: 4,
    name: 'Epigenome Sequencing',
    description: 'Various methods to assess the epigenetic structure of the genome',
    startingMaterial: 'Cells - no more than 24 samples/batch (ATAC), Transposed DNA (ChIP)',
    libraryChemistry: 'Nextera XT (ATAC), KAPA HTP (ChIP)',
    sequencingReadLength: 'PE100',
    sequencingCoverage: '40-50M (ATAC), 10M (ChIP; more reads can be requested)',
    deliverable: 'FASTQ',
    tableHeaders: ['platform', 'sampleCost'],
    table: [
      { platform: 'ATAC-Seq', sampleCost: 450 },
      { platform: 'ChIP-Seq/CUT&RUN', sampleCost: 250 },
    ],
  },
  {
    id: 5,
    name: 'TCR Sequencing',
    description: 'Methods to enrich T-cell receptor sequences',
    startingMaterial: 'Cells (10X Genomics), RNA (IGO-TCR)',
    deliverable: 'FASTQ + Pipeline output',
    tableHeaders: ['platform', 'sampleCost'],
    table: [
      { platform: '10X Genomics V(D)J Enrichment', sampleCost: 2368 },
      { platform: 'IGO-TCR', sampleCost: 300 },
    ],
  },
  {
    id: 6,
    name: 'Other Bulk Sequencing',
    description: 'Please email us if your sequencing needs do not fit in one of these categories.',
    tableHeaders: ['platform', 'sequencingDetails', 'deliverable', 'cost'],
    table: [
      { platform: 'Amplicon Sequencing', sequencingDetails: 'additional cost', deliverable: 'FASTQ', cost: '$159' },
      {
        platform: 'CRISPR Cut Site Sequencing',
        sequencingDetails: '75K reads',
        deliverable: 'FASTQ + CRISPRESSO analysis',
        cost: '$70',
      },
      { platform: 'Investigator Library Sequencing', sequencingDetails: 'see Sequencing Only link above', deliverable: 'FASTQ', cost: '$40' },
    ],
  },
];

export const singleServices = [
  {
    id: 0,
    name: '10x Genomics Single Cell',
    description: 'Single-cell platforms to interrogate gene expression, immune repertoire, and/or protein expression.',
    startingMaterial: 'Single cell or nuclei suspension',
    libraryChemistry: 'Chromium Single Cell',
    sequencingReadLength: 'PE28/91',
    sequencingCoverage: '20K reads/cell (GEX), 5K reads/cell (V(D)J & cell hashing)',
    deliverable: 'FASTQ, Cell Ranger output',
    tableHeaders: ['xGenomicsPlatform', 'sampleCostLibrary', 'cellCostSequencing'],
    table: [
      { xGenomicsPlatform: '5′ OR 3′ Gene Expression', sampleCostLibrary: 2068, cellCostSequencing: '$0.02' },
      { xGenomicsPlatform: 'V(D)J Enrichment', sampleCostLibrary: 300, cellCostSequencing: '$0.005' },
      { xGenomicsPlatform: 'Feature Barcoding/Cell Hash Add-on', sampleCostLibrary: 300, cellCostSequencing: '$0.005' },
    ],
  },
  {
    id: 1,
    name: '10x Genomics Multiome',
    description: 'Single-cell ATAC-Seq + RNA-Seq from the same nucleus.',
    startingMaterial: 'Single nuclei suspension',
    libraryChemistry: 'Chromium Single Cell',
    sequencingReadLength: 'PE 28/90 (GEX), PE50 (ATAC)',
    sequencingCoverage: '20K reads/cell (GEX), 25K reads/cell (ATAC)',
    deliverable: 'FASTQ, Cell Ranger output',
    libraryCost: '$3,000/sample',
    sequencingCost: '$0.044/nucleus',
  },
  {
    id: 2,
    name: '10x Genomics Visium',
    description: 'Transcriptome sequencing of 1-10 cells along with spatial information.',
    startingMaterial: 'Fresh or FFPE tissue',
    libraryChemistry: 'Visium Spatial Gene Expression',
    sequencingReadLength: 'PE28/90',
    sequencingCoverage: '25-50K reads/1-10 cells',
    deliverable: 'FASTQ, Space Ranger output',
    tissueOptimizationCost: '$900 (once/tissue; frozen only)',
    libraryCost: '$4,421/$16,074 (frozen) or $5,796/$20,286 (FFPE) per 1 slide/4 slides + $1,100/slide',
    sequencingCost: '$500 (frozen) or $250 (FFPE) x %Area of square covered',
  },
  // {
  //   id: 3,
  //   name: 'Mission Bio Tapestri',
  //   description: 'A targeted single-cell platform to detect SNVs and CNVs in off-the-shelf or custom panels.',
  //   startingMaterial: 'Single cell or nuclei suspension',
  //   sequencingReadLength: 'PE150',
  //   sequencingCoverage: 'Panel dependent',
  //   deliverable: 'FASTQ + Tapestri Platform output',
  //   cost: '$2,800/sample',
  // },
  // {
  //   id: 4,
  //   name: 'PlateSeq',
  //   description:
  //     'A single- or low-cell Smart-seq 2 method to accommodate projects without enough cells for 10X Genomics, or users interested in capturing the entire body of the gene.',
  //   startingMaterial: 'Sorted cells',
  //   libraryChemistry: 'SMART-Seq + Nextera XT',
  //   sequencingReadLength: 'PE50',
  //   sequencingCoverage: '~4M reads/cell',
  //   deliverable: 'FASTQ',
  //   libraryCost: '$1,680/plate',
  //   sequencingCost: '$1,020/plate',
  // },
  {
    id: 5,
    name: 'DLP',
    description: 'A method to detect CNV in single cells.',
    startingMaterial: 'Single nuclei suspension',
    libraryChemistry: 'Custom protocol',
    sequencingReadLength: 'PE150',
    sequencingCoverage: '2M reads/cell',
    deliverable: 'FASTQ',
    libraryCost: '$2,300/up to 800 nuclei',
    sequencingCost: '$2/nuclei',
  },
  {
    id: 6,
    name: 'Nanostring GeoMx',
    description: 'A spatial transcriptomics platform allowing for targeted RNA-seq of manually selected regions of interest.',
    startingMaterial: 'FFPE slides',
    sequencingCoverage: 'variable',
    deliverable: 'FASTQ; GeoMx pipeline output',
    tissueOptimizationCost: '$435',
    libraryCost: '$1,775 (Cancer atlas) or $2,275 (Whole transcriptome) per slide + $52/ROI',
    sequencingCost: '$60-250 per area of interest',
  },
];

export const otherServices = [
  {
    id: 0,
    name: 'Digital PCR',
    description:
      'PCR-based services for mutation detection, fusion detection, viral detection, or CNV. Hundreds of assays have been validated commercially or in house, but if your gene of interest is not on the list, IGO offers design & optimization services.',
    startingMaterial: 'DNA, RNA, Library',
    deliverable: 'Report',
    tableHeaders: ['service', 'cost'],
    table: [
      { service: 'New Assay Design & Optimization', cost: 200 },
      { service: 'New Assay Order (CNV/GEX)', cost: 200 },
      { service: 'New Assay Order (mutation)', cost: 375 },
      { service: 'Digital PCR (per reaction)', cost: 9.5 },
    ],
  },
  {
    id: 1,
    name: 'Tissue and Bulk Extraction',
    description: 'Manual and automated methods for purifying RNA, DNA, or both from a variety of starting materials and sample types.',
    startingMaterial: 'See below. Other? Contact us.',
    deliverable: 'Nucleic acid + QC report',
    tableHeaders: ['startingMaterial', 'extractionOutput', 'sampleCost'],
    table: [
      { startingMaterial: 'Plasma', extractionOutput: 'cfDNA', sampleCost: 50 },
      { startingMaterial: 'Non-FFPE', extractionOutput: 'DNA', sampleCost: 43 },
      { startingMaterial: 'FFPE', extractionOutput: 'DNA', sampleCost: 46 },
      { startingMaterial: 'Oxford Nanopore', extractionOutput: 'HMW DNA', sampleCost: 50 },
      { startingMaterial: 'Non-FFPE', extractionOutput: 'RNA', sampleCost: 43 },
      { startingMaterial: 'FFPE', extractionOutput: 'RNA', sampleCost: 48 },
      { startingMaterial: 'Non-FFPE', extractionOutput: 'DNA + RNA (simultaneous extraction)', sampleCost: 67 },
      { startingMaterial: 'FFPE', extractionOutput: 'DNA + RNA (simultaneous extraction)', sampleCost: 55 },
      { startingMaterial: 'Special processing', extractionOutput: 'DNA/RNA', sampleCost: 15 },
    ],
  },
  // {
  //   id: 3,
  //   name: 'Investigator Prepared Libraries',
  //   description: 'Illumina sequencing of user-prepared libraries.',
  //   startingMaterial: 'DNA libraries',
  //   sequencingReadLength: 'Varies (see below); contact us for additional options',
  //   sequencingCoverage: 'Varies (see below); contact us for additional options',
  //   deliverable: 'FASTQ',
  //   tableHeaders: ['totalReads', 'pe50', 'pe100', 'pe150', 'special28'],
  //   // table: [
  //   //   { totalReads: '120M', pe50: 1092, pe100: 1746, pe150: 1746, special28: 1092 },
  //   //   { totalReads: '350M', pe50: 1414, pe100: 2035, pe150: 2820, special28: 2035 },
  //   //   { totalReads: '350M Rush', pe50: 3287, pe100: 4623, pe150: 5467, special28: 4623 },
  //   //   { totalReads: '1800M', pe50: 4881, pe100: 6613, pe150: 7727, special28: 6613 },
  //   // ],
  // },
  {
    id: 2,
    name: 'QC & Pathology',
    description: 'Other services offered by IGO.',
    tableHeaders: ['serviceType', 'serviceSubType', 'price'],
    table: [
      { serviceType: 'QC Service', serviceSubType: 'BioAnalyzer or TapeStation QC', price: '$11/sample' },
      { serviceType: 'QC Service', serviceSubType: 'Qubit/Quant-it', price: '$6.50/sample' },
      { serviceType: 'QC Service', serviceSubType: '%Human for PDX', price: '$19/sample' },
      { serviceType: 'QC Service', serviceSubType: 'Cell Line Authentication', price: '$30/sample' },
      { serviceType: 'QC Service', serviceSubType: 'Custom Fragment Analysis', price: '$5/sample' },
      { serviceType: 'Pathology Service', serviceSubType: 'Block Sectioning', price: '$20/sample' },
      { serviceType: 'Pathology Service', serviceSubType: 'FFPE slides', price: '$3.50/slide' },
      { serviceType: 'Pathology Service', serviceSubType: 'H&E Staining', price: '$12/slide' },
      { serviceType: 'Pathology Service', serviceSubType: 'Slide scraping', price: '$2.50/slide' },
      { serviceType: 'Pathology Service', serviceSubType: 'Macrodissection', price: '$4.50/slide' },
    ],
  },
  {
    id: 3,
    name: 'Long Read Sequencing',
    description: 'Long-read WGS or cDNA-Seq on the Oxford Nanopore platform',
    startingMaterial: 'DNA, RNA, mRNA',
    deliverable: 'FAST5 + FASTQ',
    tableHeaders: ['serviceType', 'service', 'sampleCost'],
    table: [
      { serviceType: 'Library Prep', service: 'ONT cDNA-Seq Library', sampleCost: '315' },
      { serviceType: 'Library Prep', service: 'ONT cDNA-Seq Library (Multiplexed)', sampleCost: '285' },
      { serviceType: 'Library Prep', service: 'ONT WGS Library', sampleCost: '235' },
      { serviceType: 'Library Prep', service: 'ONT WGS Library (Multiplexed)', sampleCost: '210' },
      { serviceType: 'Sequencing', service: 'ONT - PromethION (100Gb)', sampleCost: '1405' },
      { serviceType: 'Lib + Seq', service: 'Long Read cDNA-Seq 30-40M reads', sampleCost: '1715' },
      { serviceType: 'Lib + Seq', service: 'Long Read WGS 30-40X', sampleCost: '1640' },
    ],
  },
];

export const customBlockPrices = [
  { readsBlock: 100, '100Cycles': '', '200Cycles': 900, '300Cycles': 1500 },
  { readsBlock: 400, '100Cycles': '$900', '200Cycles': 1000, '300Cycles': 1100 },
  { readsBlock: 800, '100Cycles': '$1800', '200Cycles': 1990, '300Cycles': 2150 },
  { readsBlock: 1800, '100Cycles': '$4032', '200Cycles': 4464, '300Cycles': 4842 },
  { readsBlock: 2750, '100Cycles': '', '200Cycles': 6820, '300Cycles': 7398 },
  { readsBlock: 3600, '100Cycles': '$8064', '200Cycles': 8928, '300Cycles': 9684 },
  { readsBlock: 11000, '100Cycles': '', '200Cycles': 14300, '300Cycles': 16000 },
];

export const archerFusionGenes = [
  ['ACVR2A', 'AKT1', 'ALK', 'AR', 'ARAF'],
  ['ARHGAP26', 'BCOR', 'BCORL1', 'BRAF', 'BRD4'],
  ['CAMTA1', 'CCNB3', 'CIC', 'CSF1', 'DNAJB1'],
  ['EGFR', 'EPC1', 'ERBB2', 'ERBB3', 'ERBB4'],
  ['ERG', 'ESR1', 'ETV1', 'ETV4', 'ETV5'],
  ['ETV6', 'EWSR1', 'FGF1', 'FGFR1', 'FGFR2'],
  ['FGFR3', 'FGFR4', 'FGR', 'FLT1', 'FLT3'],
  ['FOS', 'FOSB', 'FOXO1', 'FOXR2', 'FUS'],
  ['NCOA1', 'NCOA2', 'NCOA3', 'NFATC2', 'NFE2L2'],
  ['NOTCH1', 'NOTCH2', 'NR4A3', 'NRG1', 'NTRK1'],
  ['NTRK2', 'NTRK3', 'NUTM1', 'NUTM2A', 'NUTM2B'],
  ['PAX3', 'PAX5', 'PAX7', 'PDGFB', 'PDGFD'],
  ['PDGFRA', 'PDGFRB', 'PGR', 'PHF1', 'PIK3CA'],
  ['PLAG1', 'PPARG', 'PRB3', 'PRKACA', 'PRKACB'],
  ['PRKCA', 'PRKCB', 'PRKD1', 'PRKD2', 'PRKD3'],
  ['PTCH1', 'PTPN1', 'RAD51B', 'RAF1', 'RELA'],
  ['RET', 'RLF', 'ROS1', 'RSPO2', 'RSPO3'],
  ['SRF', 'SS18', 'SS18L1', 'STAT6', 'TAF15'],
  ['TCF12', 'TERT', 'TFE3', 'TFEB', 'TFG'],
  ['THADA', 'TMPRSS2', 'USP6', 'VGLL2', 'VGLL3'],
  ['WWTR1', 'YAP1', 'YWHAE'],
];

export const tutorials = [
  {
    slug: 'ilabs_sample_sub',
    title: 'IGO’s iLab and Sample Submission Process',
    speakers: 'Marisa Dunigan and Lisa Wagner',
    date: 'May 5, 2020',
    screenshot: 'ilab_sample_submission',
  },
  {
    slug: 'howToSubmit_v1',
    title: 'How to Submit Samples',
    speakers: '',
    date: 'June 15, 2023',
    screenshot: 'submit_samples_howto',
  },
  {
    slug: 'splunk_webinar',
    title: 'Splunk: a Data Visualization Tool used for Operational Insight',
    speakers: 'Anna Patruno',
    date: 'May 12, 2020',
    screenshot: 'splunk',
  },
  {
    slug: 'why_igo_says_no',
    title: 'Why IGO says ‘No!’',
    speakers: 'Liping Sun and Ruchi Patel',
    date: 'May 21, 2020',
    screenshot: 'igo_alternatives',
  },
  {
    slug: 'DRAGEN',
    title: 'DRAGEN platform: accurate, ultra-rapid secondary analysis of sequencing data',
    speakers: 'Rami Mehio from Illumina',
    date: 'May 28, 2020',
    screenshot: 'dragen',
  },
];

export const bookingDetails = [
  { application: '10x Genomics,', formPrompts: { name: null, email: null, sampleNumber: null, chemustry: null } },
];
