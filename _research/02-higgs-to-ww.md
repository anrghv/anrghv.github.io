---
order: 2
eyebrow: "Project 02 · HSF-India fellowship"
title: "Higgs to WW Analysis"
subtitle: "Using CMS 2016 Ultra-Legacy NanoAOD Open Data"
status: "Completed"
links:
  - label: "GitHub"
    url: "https://github.com/anrghv/H-to-WW-NanoAOD-analysis"
  - label: "Docs"
    url: "https://h-to-ww-nanoaod-analysis.readthedocs.io/"
overview: "Developed a complete analysis pipeline for the Higgs boson decaying into two W bosons in the opposite-sign, different-flavour (electron–muon) final state via the ggH production channel. The project uses CMS 2016 Ultra-Legacy Open Data to probe Standard Model physics while demonstrating the scope of CERN Open Data for education and research."
highlights:
  - label: "Analysis pipeline"
    text: "End-to-end reconstruction of H → WW → e±μ∓ (ggH) using CMS Open Data, from trigger selection to final-state object definition."
  - label: "Object reconstruction"
    text: "Lepton identification, isolation criteria, and missing transverse energy (MET) reconstruction for neutrino inference."
  - label: "Signal extraction"
    text: "Kinematic and topological selections applied to isolate signal from dominant backgrounds (top and Drell-Yan)."
  - label: "Statistical analysis"
    text: "Signal significance estimation with evaluation of statistical uncertainties in the low signal-to-background regime."
  - label: "Reproducible workflow"
    text: "Documented and modular analysis chain for HSF-India, emphasizing transparency, corrections, and known limitations."
implementation:
  - label: "Core stack"
    text: "Uproot (I/O), Awkward Array (jagged structures), Vector (4-vector arithmetic), Hist (yield accumulation)."
  - label: "Distributed computing"
    text: "Dask for scalable parallel processing of millions of NanoAOD events."
  - label: "Statistical inference"
    text: "CMS Combine for simultaneous profile likelihood fits."
  - label: "Scale factors"
    text: "HLT trigger, lepton ID, and isolation corrections applied to simulation weights."
tags: ["Python", "uproot", "awkward-array", "Dask", "CMS", "NanoAOD", "HSF-India"]
---
