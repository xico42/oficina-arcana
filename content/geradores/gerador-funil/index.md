---
date: '2025-08-19T09:00:13-03:00'
draft: false
title: 'Gerador de Funil'
description: 'Crie seu aventureiro.'
categories:
  - geradores
---

Na Arcana Primária, personagens não nascem heróis. Há um longo trajeto de sangue e sorte até que sejam reconhecidos
como tais. O funil é o começo dessa carreira, é a seleção natural que separa a corja da cambada de vagabundos aptos
a se aventurar.

Para usar o gerador de personagens para funil, basta preencher os parâmetros abaixo e clicar no botão "Gerar Personagem".
Todos os parâmetros são opcionais e o que não for selecionado será decidido aleatoriamente.

Caso queira resetar os parâmetros, clique no botão "Limpar".

<form id="generator-form">

### Parâmetros Gerais

<div style="line-height: 2.5">
    <label class="generator-option"><input type="radio" name="gender" value="M"> Homem</label>
    <label class="generator-option"><input type="radio" name="gender" value="F"> Mulher</label>
</div>

</form>

### Quem vai passar no triturador?

<button class="generator-option" onclick="goGenerateFunnelChar();">Gerar Personagem</button>
<button class="generator-option" onclick="resetForm();">Limpar</button>

## Seu personagem é ...

**Nome:** <span id="char-name">XXXXX</span>

**Ancestralidade:** <span id="char-ancestry">XXXXX</span>

**Ofício:** <span id="char-craft">XXXXX</span>

**Equipamento Inicial:** <span id="char-equipment">XXXXX</span>

> **IN** <span id="char-in">XX</span> **CA** <span id="char-ac">XX</span> **PV** <span id="char-hp">XX</span>
>
> **BN** <span id="char-bn">+0</span> **JdP** <span id="char-jdp">VXX/RXX/MXX</span>
>
> **MOV** <span id="char-mov">XX</span>'
>
> **FOR** <span id="attr-for">XX (+1)</span> **DES** <span id="attr-des">XX (+1)</span> **CON** <span id="attr-con">XX (+1)</span>
>
> **INT** <span id="attr-int">XX (+1)</span> **SAB** <span id="attr-sab">XX (+1)</span> **CAR** <span id="attr-car">XX (+1)</span>

{{< generator >}}