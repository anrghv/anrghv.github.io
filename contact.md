---
layout: page
title: "Get in Touch"
eyebrow: Contact
lead: "Open to collaborations, and conversations about open science and HEP."
description: "Contact — Anuj Raghav"
---

<ul class="contact-list">
  {% for link in site.data.social %}
  <li>
    <a class="contact-row" href="{{ link.url }}"{% unless link.url contains "mailto" %} target="_blank" rel="noopener"{% endunless %}>
      <span class="contact-row__icon">{% include icon.html name=link.icon %}</span>
      <span class="contact-row__body">
        <span class="contact-row__label">{{ link.label }}</span>
        <span class="contact-row__value">{{ link.value }}</span>
      </span>
      <span class="contact-row__arrow">{% include icon.html name="arrow-up-right" %}</span>
    </a>
  </li>
  {% endfor %}
</ul>

<div class="panel">
  <div class="panel__row">
    <span class="panel__label">Affiliation</span>
    <span class="panel__value">{{ site.identity.affiliation }} · {{ site.identity.experiment }}</span>
  </div>
  <div class="panel__row">
    <span class="panel__label">Location</span>
    <span class="panel__value">{{ site.identity.location }}</span>
  </div>
  <div class="panel__row">
    <span class="panel__label">ORCID</span>
    <span class="panel__value"><a href="https://orcid.org/{{ site.identity.orcid }}">{{ site.identity.orcid }}</a></span>
  </div>
</div>
