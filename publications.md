---
layout: page
title: "Talks & Publications"
eyebrow: "Talks & Publications"
lead: "Talks, theses, and academic contributions."
description: "Talks and publications by Anuj Raghav."
permalink: /publications/
---

{%- assign talks = site.talks | sort: "date" | reverse -%}
{%- assign pubs = site.publications | sort: "year" | reverse -%}

{% if talks.size > 0 %}
<section class="section section--tight">
  <div class="section__head">
    <h2 class="section__title">Talks</h2>
    <span class="section__count">{{ talks.size }}</span>
  </div>
  <ol class="pub-list">
    {% for talk in talks %}
    <li class="pub-item" data-reveal>
      <div class="pub-item__year">{{ talk.date_label | default: talk.year | strip }}</div>
      <div class="pub-item__body">
        <p class="pub-item__title">{{ talk.title }}</p>
        <p class="pub-item__meta">{{ talk.authors }} — {{ talk.venue }}</p>
        <ul class="tags">
          <li class="tag tag--accent">{{ talk.type }}</li>
          {% for tag in talk.tags %}<li class="tag">{{ tag }}</li>{% endfor %}
          {% if talk.upcoming %}<li class="tag tag--live">Upcoming</li>{% endif %}
        </ul>
      </div>
    </li>
    {% endfor %}
  </ol>
</section>
{% endif %}

{% if pubs.size > 0 %}
<section class="section section--tight">
  <div class="section__head">
    <h2 class="section__title">Theses</h2>
    <span class="section__count">{{ pubs.size }}</span>
  </div>
  <ol class="pub-list">
    {% for pub in pubs %}
    <li class="pub-item" data-reveal>
      <div class="pub-item__year">{{ pub.year }}</div>
      <div class="pub-item__body">
        <p class="pub-item__title">{{ pub.title }}</p>
        <p class="pub-item__meta">{{ pub.authors }} — {{ pub.venue }}</p>
        <ul class="tags">
          <li class="tag tag--accent">{{ pub.type }}</li>
          {% for tag in pub.tags %}<li class="tag">{{ tag }}</li>{% endfor %}
        </ul>
      </div>
    </li>
    {% endfor %}
  </ol>
</section>
{% endif %}

<p class="note">More publications and preprints will be listed here as the CHEP proceedings and HSF-India reports become available.</p>
