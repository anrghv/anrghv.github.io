---
layout: page
title: "Publications & Talks"
eyebrow: Publications
lead: "Selected talks, theses, and academic contributions."
description: "Talks and publications by Anuj Raghav."
permalink: /publications/
---

<div class="pub-group__title">Talks</div>
{% assign talks = site.talks | sort: 'year' | reverse %}
{% for t in talks %}
<div class="pub-item">
  <div class="pub-item__year">{{ t.date_label | default: t.year }}</div>
  <div>
    <div class="pub-item__title">{{ t.title }}</div>
    <div class="pub-item__meta">{{ t.authors }} — {{ t.venue }}</div>
    <div class="tags">
      <span class="tag">{{ t.type }}</span>
      {% for tag in t.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
      {% if t.upcoming %}<span class="tag">Upcoming</span>{% endif %}
    </div>
  </div>
</div>
{% endfor %}

<div class="pub-group__title">Theses</div>
{% assign pubs = site.publications | sort: 'year' | reverse %}
{% for p in pubs %}
<div class="pub-item">
  <div class="pub-item__year">{{ p.year }}</div>
  <div>
    <div class="pub-item__title">{{ p.title }}</div>
    <div class="pub-item__meta">{{ p.authors }} — {{ p.venue }}</div>
    <div class="tags">
      <span class="tag">{{ p.type }}</span>
      {% for tag in p.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
    </div>
  </div>
</div>
{% endfor %}

<p style="margin-top:2.5rem; color:var(--ink-soft); font-size:0.92rem;">More publications and preprints will be listed here as the CHEP proceedings and HSF-India reports become available.</p>
