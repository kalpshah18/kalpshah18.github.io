---
layout: page
title: projects
permalink: /projects/
description: Research and projects.
nav: true
nav_order: 2
display_categories: [research, projects]
horizontal: false
---

<div class="projects">
  {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{ category }}</h2>
    </a>
    {% assign sorted_projects = site.projects | where: "category", category | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
