---
layout: page
title: Research
eyebrow: Research
lead: "I am currently working on Higgs boson analyses with the CMS Experiment, using machine learning (BDTs) for signal–background separation. Earlier work includes an open-data H→WW pipeline and a Drell-Yan thesis."
description: "Research projects by Anuj Raghav — Higgs to gluon-gluon with BDTs, H→WW NanoAOD analysis, Drell-Yan at CMS, ML in HEP."
curious:
  - title: "AI &amp; ML in HEP"
    text: "How machine learning is reshaping signal extraction, anomaly detection, and the future of BSM searches at the LHC."
  - title: "Open science"
    text: "Democratising collider physics through open data, reproducible pipelines, and tools accessible to researchers without full collaboration access."
  - title: "Beyond the Standard Model"
    text: "New physics searches — extended Higgs sectors, dark matter mediators, and precision measurements probing BSM effects."
  - title: "HEP computing"
    text: "Next-generation columnar analysis tools, distributed computing with Dask, and the HL-LHC data challenge."
---

{%- assign projects = site.research | sort: "order" -%}

<div class="project-list">
  {%- for project in projects %}
  <article class="project" data-reveal>
    <header class="project__head">
      <span class="project__eyebrow">{{ project.eyebrow }}</span>
      <h2 class="project__title">{{ project.title }}</h2>
      <p class="project__subtitle">{{ project.subtitle }}</p>
      {%- if project.status %}
      <span class="badge{% if project.status == 'Ongoing' %} badge--live{% endif %}">{{ project.status }}</span>
      {%- endif %}
      {%- if project.links %}
      <ul class="project__links">
        {%- for link in project.links %}
        <li>
          <a class="btn btn--sm" href="{{ link.url }}" target="_blank" rel="noopener">
            <span>{{ link.label }}</span>{% include icon.html name="arrow-up-right" %}
          </a>
        </li>
        {%- endfor %}
      </ul>
      {%- endif %}
    </header>

    <div class="project__body">
      <p class="project__overview">{{ project.overview }}</p>

      {%- if project.highlights %}
      <h3 class="project__label">Analysis highlights</h3>
      <ul class="bullets">
        {%- for item in project.highlights %}
        <li>
          <span class="bullets__label">{{ item.label }}</span>
          <span class="bullets__text">{{ item.text }}</span>
        </li>
        {%- endfor %}
      </ul>
      {%- endif %}

      {%- if project.implementation %}
      <h3 class="project__label">Technical implementation</h3>
      <ul class="bullets bullets--plain">
        {%- for item in project.implementation %}
        <li>
          {%- if item.label %}<span class="bullets__label">{{ item.label }}</span>{% endif %}
          <span class="bullets__text">{{ item.text }}</span>
        </li>
        {%- endfor %}
      </ul>
      {%- endif %}

      {%- if project.tags %}
      <ul class="tags">
        {%- for tag in project.tags %}<li class="tag">{{ tag }}</li>{% endfor %}
      </ul>
      {%- endif %}
    </div>
  </article>
  {%- endfor %}
</div>

<section class="section">
  <div class="section__head">
    <h2 class="section__title">What I'm curious about</h2>
  </div>
  <div class="grid grid--2">
    {%- for item in page.curious %}
    <article class="card" data-reveal>
      <h3 class="card__title">{{ item.title }}</h3>
      <p class="card__text">{{ item.text }}</p>
    </article>
    {%- endfor %}
  </div>
</section>
