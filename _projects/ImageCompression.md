---
layout: page
title: Dynamic Image Compression
description: Dynamic Image Compression using Singular Value Decomposition
img: assets/img/ImageCompressionPreview.jpg
importance: 1
category: Machine Learning
related_publications: false
---

You can see the Notebook [here](../../blog/2025/ImageCompression/)

The notebook demonstrates an image compression technique using Singular Value Decomposition (SVD). The core idea is to decompose an image into its constituent singular values and then reconstruct a compressed version using only the most significant singular values.

**Benefits:**

*   **Dynamic Compression:** The algorithm dynamically determines the optimal number of singular values (k) required to achieve a desired image quality (in this case, a PSNR greater than 30 dB).
*   **Reduced Storage:** By using a smaller number of singular values, the compressed image requires significantly less storage space compared to the original.
*   **Quantifiable Quality:** The use of PSNR provides a objective metric to evaluate the quality of the compressed image.

**Algorithm:**

1.  **Load and Convert Image:** The notebook loads an image and converts it to grayscale.
2.  **Perform SVD:** Singular Value Decomposition is applied to the grayscale image matrix, resulting in three matrices: U, S (singular values), and Vt.
3.  **Determine Optimal k:** The notebook iterates through different values of k (number of singular values) and calculates the PSNR for each reconstructed image. The minimum k that achieves a PSNR greater than the specified threshold (30 dB) is selected.
4.  **Reconstruct Image:** The compressed image is reconstructed using the truncated U, S, and Vt matrices based on the optimal k.
5.  **Evaluate Compression:** The compression ratio, final PSNR, and RMSE are calculated to assess the effectiveness of the compression.
6.  **Display Images:** The original and compressed images are displayed for visual comparison.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DynamicImageCompression.png" title="Compressed and Uncompressed Image Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Uncompressed Image | Right: 30 dB Compressed Image
</div>