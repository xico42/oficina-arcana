---
date: '2025-09-20T21:34:11-03:00'
draft: false
title: 'Gerador de Aventuras'
categories:
  - geradores
---

# Como funciona o gerador

Esse gerador tem por objetivo auxiliar no desenvolvimento de uma aventura. Aqui será fornecido o nome de uma 
localidade, as características de um NPC e ideias para um encontro. Seu trabalho é criar uma aventura 
envolvendo esses elementos.

As palavras são intencionalmente abrangentes, para abrir margem à interpretação e criatividade do mestre, divirta-se!

<button class="generator-option" onclick="goGenerateAdventure();">Gerar Aventura</button>
<button class="generator-option" onclick="resetAdventure();">Limpar</button>

<h3>Localidade</h3>

<strong>Nome:</strong> <span id="location-name"></span>

<h3>NPC</h3>

<strong>Nome:</strong> <span id="npc-name"></span>

<strong>Características:</strong> <span id="npc-characteristics"></span>

<h3>Encontro</h3>

<strong>Palavras-chave:</strong> <span id="encounter-plot"></span>

<strong>Chave de cena:</strong> <span id="encounter-type"></span>

<strong>Magnitude:</strong> <span id="encounter-magnitude"></span>

{{< generator >}}
