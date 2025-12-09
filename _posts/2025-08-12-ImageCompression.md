---
layout: post
title: Dynamic Image Compression
date: 2025-08-12 12:05:00-0000
description: Dynamic Image Compression using Singular Value Decomposition
tags:
categories: Machine Learning, Math, Python, Computer Vision
giscus_comments: false
related_posts: false
---

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/DynamicImageCompression.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/DynamicImageCompression.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}