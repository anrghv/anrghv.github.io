---
layout: page
title: Research
eyebrow: Research
lead: I am currently working on Higgs boson measurements at the LHC, using CMS Open Data and modern Python-based analysis frameworks.
description: "Research projects by Anuj Raghav — H→WW NanoAOD analysis, Drell-Yan at CMS, ML in HEP."
---

<div class="project" markdown="1">
  <div class="project__eyebrow">Project 01 · HSF-India Project</div>
  <h2 class="project__title">Higgs to WW Analysis</h2>
  <p class="project__subtitle">Using CMS 2016 Ultra-Legacy NanoAOD Open Data</p>

  <div class="project__links">
    <a href="https://github.com/anrghv/H-to-WW-NanoAOD-analysis" class="btn" target="_blank" rel="noopener">GitHub</a>
    <a href="https://h-to-ww-nanoaod-analysis.readthedocs.io/" class="btn" target="_blank" rel="noopener">Docs</a>
  </div>

  **Overview**

  Developing a complete analysis pipeline for the Higgs boson decaying into two W bosons in the opposite-sign, different-flavour (electron-muon) final state via the ggH production channel. The project uses CMS 2016 Ultra-Legacy Open Data to probe Standard Model physics while demonstrating the scope of CERN Open Data for education and research.

  **Analysis Highlights**

  - **Analysis Pipeline** — End-to-end reconstruction of H → WW → e±μ∓ (ggH) using CMS Open Data, from trigger selection to final-state object definition.
  - **Object Reconstruction** — Lepton identification, isolation criteria, and missing transverse energy (MET) reconstruction for neutrino inference.
  - **Signal Extraction** — Kinematic and topological selections applied to isolate signal from dominant backgrounds (top and Drell-Yan).
  - **Statistical Analysis** — Signal significance estimation with evaluation of statistical uncertainties in the low signal-to-background regime.
  - **Reproducible Workflow** — Documented and modular analysis chain for HSF-India, emphasizing transparency, corrections, and known limitations.

  **Technical Pipeline**

  - **Core Stack** — Uproot (I/O), Awkward Array (jagged structures), Vector (4-vector arithmetic), Hist (yield accumulation).
  - **Distributed Computing** — Dask for scalable parallel processing of millions of NanoAOD events.
  - **Statistical Inference** — CMS Combine for simultaneous profile likelihood fits.
  - **Scale Factors** — HLT trigger, lepton ID, and isolation corrections applied to simulation weights.

  <div class="tags">
    <span class="tag">Python</span><span class="tag">uproot</span><span class="tag">awkward-array</span>
    <span class="tag">Dask</span><span class="tag">CMS</span><span class="tag">NanoAOD</span><span class="tag">HSF-India</span>
  </div>
</div>

<div class="project" markdown="1">
  <div class="project__eyebrow">Project 02 · M.Sc. Thesis</div>
  <h2 class="project__title">Drell-Yan Process at CMS</h2>
  <p class="project__subtitle">Data Analysis of Z → e⁺e⁻ at the CMS Experiment</p>

  <div class="project__links">
    <a href="https://github.com/anrghv/Drell-Yan-analysis" class="btn" target="_blank" rel="noopener">GitHub</a>
  </div>

  **Overview**

  Master's thesis centred on the Drell-Yan process at the LHC, working with Run 2 Monte Carlo data from the CMS experiment to study Standard Model processes. The analysis focused on the Z → e⁺e⁻ channel, isolating a clean Z boson signal from dominant backgrounds.

  **Analysis Highlights**

  - **Signal Extraction** — Precision reconstruction of the Z → e⁺e⁻ peak (60–120 GeV) using CMS Open Data with MVA-based electron identification (Fall17 V2).
  - **Event Selection** — Optimised kinematic cuts and lepton isolation criteria to enhance signal purity and data quality.
  - **Background Suppression** — Projected MET algorithm exploiting lepton–MET angular correlations to suppress tt̄ and diboson backgrounds.
  - **Analysis Framework** — C++/ROOT-based pipeline using TChain and TLorentzVector with custom data slimming for efficient multi-file processing.
  - **Validation** — Shape-based comparison with six MC backgrounds (tt̄, WW, WZ, ZZ) via normalized data–simulation overlays.

  **Technical Implementation**

  C++-based ROOT scripts for event filtering, selection, and histogram production.

  <div class="tags">
    <span class="tag">C++</span><span class="tag">ROOT</span><span class="tag">CMS Run 2</span>
    <span class="tag">Monte Carlo</span><span class="tag">Drell-Yan</span>
  </div>
</div>

<h2>What I'm Curious About</h2>

- **AI & ML in HEP** — How machine learning is reshaping signal extraction, anomaly detection, and the future of BSM searches at the LHC.
- **Open Science** — Democratising collider physics through open data, reproducible pipelines, and tools accessible to researchers without full collaboration access.
- **Beyond Standard Model** — New physics searches — extended Higgs sectors, dark matter mediators, and precision measurements probing BSM effects.
- **HEP Computing** — Next-generation columnar analysis tools, distributed computing with Dask, and the HL-LHC data challenge.
