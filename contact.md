---
layout: page
title: "Get in Touch"
eyebrow: Contact
lead: "Open to research collaborations, and conversations about open science and HEP computing."
description: "Contact — Anuj Raghav"
---

<div class="contact-list">
  {% for link in site.data.social %}
  <a class="contact-row" href="{{ link.url }}" {% unless link.url contains "mailto" %}target="_blank" rel="noopener"{% endunless %}>
    <span class="contact-row__label">{{ link.label }}</span>
    <span class="contact-row__value">{{ link.value }}</span>
  </a>
  {% endfor %}
</div>
