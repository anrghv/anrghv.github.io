---
layout: page
title: "Curriculum Vitae"
eyebrow: Curriculum Vitae
lead: "Education, research experience, and technical background."
description: "Curriculum Vitae — Anuj Raghav, Experimental HEP Physicist."
---

<div class="cv-toolbar">
  <a class="btn btn--primary" href="mailto:{{ site.email }}?subject=CV%20request%20%E2%80%94%20Anuj%20Raghav">
    {% include icon.html name="mail" %}<span>Request CV by email</span>
  </a>
  <button class="btn" type="button" data-print>
    {% include icon.html name="printer" %}<span>Print / save as PDF</span>
  </button>
</div>

<section class="cv-section">
  <h2 class="cv-section__title">Education</h2>

  <div class="cv-entry">
    <div class="cv-entry__row">
      <span class="cv-entry__title">Ph.D. Physics</span>
      <span class="cv-entry__date">2026 – Present</span>
    </div>
    <div class="cv-entry__place">University of Delhi</div>
  </div>

  <div class="cv-entry">
    <div class="cv-entry__row">
      <span class="cv-entry__title">M.Sc. Physics</span>
      <span class="cv-entry__date">2023 – 2025</span>
    </div>
    <div class="cv-entry__place">University of Delhi</div>
  </div>

  <div class="cv-entry">
    <div class="cv-entry__row">
      <span class="cv-entry__title">B.Sc. (Hons.) Physics</span>
      <span class="cv-entry__date">2020 – 2023</span>
    </div>
    <div class="cv-entry__place">University of Delhi</div>
  </div>
</section>

<section class="cv-section">
  <h2 class="cv-section__title">Research experience</h2>

  <div class="cv-entry">
    <div class="cv-entry__row">
      <span class="cv-entry__title">Higgs to WW Analysis</span>
      <span class="cv-entry__date">2025 – Present</span>
    </div>
    <div class="cv-entry__place">HSF-India Fellow, Princeton University</div>
    <p class="cv-entry__desc">Developing an open, reproducible H → WW → eν μν analysis pipeline using CMS 2016 UL NanoAOD Open Data. Analysis framework built on the Scikit-HEP ecosystem with Dask for distributed computing and CMS Combine for statistical inference.</p>
    <ul class="tags"><li class="tag">CMS Open Data</li><li class="tag">Scikit-HEP</li><li class="tag">HSF-India</li></ul>
  </div>

  <div class="cv-entry">
    <div class="cv-entry__row">
      <span class="cv-entry__title">Data Analysis of Drell-Yan Process at the CMS Experiment at the LHC</span>
      <span class="cv-entry__date">2024 – 2025</span>
    </div>
    <div class="cv-entry__place">M.Sc. Thesis, University of Delhi</div>
    <p class="cv-entry__desc">Analysed the Drell-Yan process γ*/Z → e⁺e⁻ using CMS Run-2 Monte Carlo data. Implemented event selection, background suppression, and signal extraction using a C++/ROOT pipeline.</p>
    <ul class="tags"><li class="tag">CMS Run 2</li><li class="tag">ROOT / C++</li><li class="tag">Drell-Yan</li></ul>
  </div>
</section>

<section class="cv-section">
  <h2 class="cv-section__title">Other experience</h2>

  <div class="cv-entry">
    <div class="cv-entry__row">
      <span class="cv-entry__title">Physics Mentor</span>
      <span class="cv-entry__date">2025</span>
    </div>
    <div class="cv-entry__place">NNIIT, India</div>
    <ul class="cv-entry__desc">
      <li>Delivered one-to-one physics instruction for NEET (medical) and JEE (engineering) aspirants, focusing on conceptual clarity and problem-solving.</li>
      <li>Designed customised lesson plans aligned with individual student learning goals and examination requirements.</li>
      <li>Conducted interactive problem-solving sessions to strengthen analytical thinking and application of physics concepts.</li>
    </ul>
  </div>
</section>

<section class="cv-section">
  <h2 class="cv-section__title">Talks &amp; conferences</h2>

  <div class="cv-entry">
    <div class="cv-entry__row">
      <span class="cv-entry__title">CHEP 2026 — Contributed Talk</span>
      <span class="cv-entry__date">May 2026</span>
    </div>
    <div class="cv-entry__place">Chulalongkorn University, Thailand</div>
    <p class="cv-entry__desc">Abstract: <em>"A Comprehensive Pedagogical Pipeline for the H → WW Search Using CMS Open Data"</em></p>
  </div>

  <div class="cv-entry">
    <div class="cv-entry__row">
      <span class="cv-entry__title">HSF-India Workshop on Research Software for Physics</span>
      <span class="cv-entry__date">15 – 19 Sep 2025</span>
    </div>
    <div class="cv-entry__place">Panjab University, India</div>
    <ul class="cv-entry__desc">
      <li>Participated in the sixth HSF-India workshop on research software collaborations in HEP.</li>
      <li>Covered Scientific Python, parallel computing (GPU), machine learning basics, and simulation frameworks.</li>
    </ul>
  </div>
</section>

<section class="cv-section">
  <h2 class="cv-section__title">Technical skills</h2>

  <div class="skill-row">
    <div class="skill-row__label">Programming</div>
    <ul class="tags"><li class="tag">Python</li><li class="tag">C++</li><li class="tag">C</li><li class="tag">Shell</li><li class="tag">LaTeX</li></ul>
  </div>
  <div class="skill-row">
    <div class="skill-row__label">HEP analysis</div>
    <ul class="tags"><li class="tag">uproot</li><li class="tag">awkward</li><li class="tag">vector</li><li class="tag">hist</li><li class="tag">mplhep</li><li class="tag">ROOT</li><li class="tag">CMS Combine</li><li class="tag">XRootD</li></ul>
  </div>
  <div class="skill-row">
    <div class="skill-row__label">Data science &amp; computing</div>
    <ul class="tags"><li class="tag">Dask</li><li class="tag">NumPy</li><li class="tag">SciPy</li><li class="tag">Matplotlib</li><li class="tag">JupyterLab</li></ul>
  </div>
  <div class="skill-row">
    <div class="skill-row__label">Development tools</div>
    <ul class="tags"><li class="tag">Git / GitHub</li><li class="tag">Linux</li><li class="tag">Conda / pip</li><li class="tag">MkDocs</li></ul>
  </div>
  <div class="skill-row">
    <div class="skill-row__label">Detector systems</div>
    <ul class="tags"><li class="tag">NaI(Tl)</li><li class="tag">Anthracene</li><li class="tag">GM Counters</li><li class="tag">NIM/CAMAC</li><li class="tag">DAQ</li></ul>
  </div>
</section>

<section class="cv-section">
  <h2 class="cv-section__title">Languages</h2>
  <ul class="tags"><li class="tag">English — Fluent</li><li class="tag">Hindi — Native</li></ul>
</section>

<p class="note">For the latest version of my CV, feel free to reach out directly.</p>
