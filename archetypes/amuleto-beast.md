---
date: "{{ .Date }}"
draft: false
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
description: 'Resumo da criatura...'
categories:
  - criaturas
  - monstros
tags:
  - amuleto-montanha-mutilada
  - XDV
links:
  - title: Licença
    description: Copyright © 2024 - Alexandre Katz
    website: https://www.oraculocinzento.com/post/o-amuleto-na-montanha-mutilada
params:
  stats:
    in: '+2'
    ca: '14'
    dv:
      dice: 'd8'
      number: 5
      extra: '+40'
      recommended: 80
    na: 1
    attacks:
      - name: Bico
        damage: '1d6'
    bn: '+1'
    jdp:
      v: 10
      r: 11
      m: 14
    vs: '-'
    mv:
      base: '30'
      extra:
        - name: 'voando'
          value: '60'
        - name: 'nadando'
          value: '20'
        - name: 'escalando'
          value: '20'
    ml: '-'
    tm: 'Médio'
    tt:
      name: 'I'
      ref: '/post/guia-do-aventureiro/tabela-tesouro/'
    xp: 60
  specials:
    - name: 'Especial'
      description: |
        Uma descrição da habilidade especial...
---

Resumo da criatura...

{{< stats >}}

{{< specials >}}

## Créditos

**Fonte:** O Amuleto na Montanha Mutilada, p. xx
