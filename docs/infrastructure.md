---
layout: page
title: "Infrastructure"
description: "HPC computing resources for InTraC"
nav_order: 8
icon: "🏗️"
---

All InTraC computational workflows run on institutional High-Performance Computing (HPC) infrastructure, providing scalable resources for large-scale omics analyses.

![HPC Infrastructure overview](/assets/images/hpc-infrastructure.svg)

## Computing Resources

- **HPC Cluster** — Centralised computing infrastructure with dedicated allocations for InTraC projects
- **SLURM Scheduler** — Fair-share job scheduling with priority queues for time-sensitive analyses
- **GPU Support** — NVIDIA A100 and B200 GPUs available for machine learning workloads and accelerated data processing

## Software Stack

- **Nextflow** — Workflow orchestrator for reproducible, scalable pipeline execution
- **Singularity / Docker** — Full containerisation ensuring reproducibility and portability across environments
- **Conda / Mamba** — Package management for development and testing environments

## Containerisation

All production workflows run in Singularity containers built from Docker images. This ensures:

- **Reproducibility** — Identical software environments across runs and users
- **Portability** — Workflows can be reproduced on any system supporting Singularity or Docker
- **Security** — No root access required on shared HPC infrastructure

{% include callout.html type="tip" title="Getting access" content="InTraC researchers can request HPC access through their project PI. Contact Z01 for initial setup and orientation." %}
