---
layout: page
title: "Workflows"
description: "Standardised, reproducible analysis workflows for all major sequencing technologies"
nav_order: 2
---

{% include callout.html type="warning" title="Under Development" content="This web resource is still under active development. Content may be incomplete or subject to change." %}

<p style="font-size: 1.15em;">Support for selecting, setting up, and running analysis workflows — from pipeline configuration and custom parameterisation to integration into your project.</p>

&nbsp;

<p style="text-align: center;"><a href="{{ '/docs/training' | relative_url }}">Training</a> &middot; <a href="{{ '/docs/services' | relative_url }}">Services</a></p>

---

## Bulk Sequencing

&nbsp;

### RNA-Seq & miRNA-Seq

<table style="width: 100%; table-layout: fixed;">
  <colgroup>
    <col style="width: 70%;">
    <col style="width: 30%;">
  </colgroup>
  <thead>
    <tr><th>Pipeline</th><th>Version</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://nf-co.re/rnaseq/3.22.2/">nf-core/rnaseq</a></td><td>3.22.2</td></tr>
  </tbody>
</table>

&nbsp;

### Immunoglobulin Assembly

<table style="width: 100%; table-layout: fixed;">
  <colgroup>
    <col style="width: 70%;">
    <col style="width: 30%;">
  </colgroup>
  <thead>
    <tr><th>Tool</th><th></th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://github.com/ohkawalab/igfinder">igfinder</a></td><td></td></tr>
  </tbody>
</table>

&nbsp;

### ChIP-Seq & CUT&RUN

<table style="width: 100%; table-layout: fixed;">
  <colgroup>
    <col style="width: 70%;">
    <col style="width: 30%;">
  </colgroup>
  <thead>
    <tr><th>Pipeline</th><th>Version</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://nf-co.re/chipseq/2.1.0/">nf-core/chipseq</a></td><td>2.1.0</td></tr>
    <tr><td><a href="https://nf-co.re/cutandrun/">nf-core/cutandrun</a></td><td>3.2.2</td></tr>
  </tbody>
</table>

&nbsp;

### ATAC-Seq

<table style="width: 100%; table-layout: fixed;">
  <colgroup>
    <col style="width: 70%;">
    <col style="width: 30%;">
  </colgroup>
  <thead>
    <tr><th>Pipeline</th><th>Version</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://nf-co.re/atacseq/2.1.2/">nf-core/atacseq</a></td><td>2.1.2</td></tr>
  </tbody>
</table>

&nbsp;

### WGS Variant Calling

<table style="width: 100%; table-layout: fixed;">
  <colgroup>
    <col style="width: 70%;">
    <col style="width: 30%;">
  </colgroup>
  <thead>
    <tr><th>Pipeline</th><th>Version</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://nf-co.re/sarek/3.7.1/">Sarek</a></td><td>3.7.1</td></tr>
    <tr><td><a href="https://nf-co.re/raredisease/2.6.0/">nf-core/raredisease</a></td><td>2.6.0</td></tr>
  </tbody>
</table>

&nbsp;

### Methyl-Seq

<table style="width: 100%; table-layout: fixed;">
  <colgroup>
    <col style="width: 70%;">
    <col style="width: 30%;">
  </colgroup>
  <thead>
    <tr><th>Pipeline</th><th>Version</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://nf-co.re/methylseq/4.2.0/">nf-core/methylseq</a></td><td>4.2.0</td></tr>
  </tbody>
</table>

&nbsp;

### CRISPR-Seq

<table style="width: 100%; table-layout: fixed;">
  <colgroup>
    <col style="width: 70%;">
    <col style="width: 30%;">
  </colgroup>
  <thead>
    <tr><th>Pipeline</th><th>Version</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://nf-co.re/crisprseq/2.3.0/">nf-core/crisprseq</a></td><td>2.3.0</td></tr>
  </tbody>
</table>

---

## Single Cell Sequencing

&nbsp;

### 10x Genomics

- scRNA-seq
- scATAC-seq
- Multiome (RNA + ATAC)

&nbsp;

### Variant Calling & Genomic Demultiplexing

<table style="width: 100%; table-layout: fixed;">
  <colgroup>
    <col style="width: 100%;">
  </colgroup>
  <thead>
    <tr><th>Tool</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://vireosnp.readthedocs.io/en/latest/">Vireo</a></td></tr>
    <tr><td><a href="https://github.com/KChen-lab/Monopogen">Monopogen</a></td></tr>
  </tbody>
</table>

&nbsp;

### Parse Biosciences

- Split-pool combinatorial barcoding scRNA-seq

---

## Long Read Sequencing

&nbsp;

### Nanopore Single Cell

<table style="width: 100%; table-layout: fixed;">
  <colgroup>
    <col style="width: 70%;">
    <col style="width: 30%;">
  </colgroup>
  <thead>
    <tr><th>Pipeline</th><th>Version</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://nf-co.re/scnanoseq/">nf-core/scnanoseq</a></td><td>1.2.1</td></tr>
  </tbody>
</table>

&nbsp;

### Parse Biosciences Long Read

- Full-length transcript and isoform-level analysis at single-cell resolution

&nbsp;
