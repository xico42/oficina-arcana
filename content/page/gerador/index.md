---
date: '2025-07-18T22:28:13-03:00'
draft: false
title: 'Gerador de Personagens'
menu:
  main:
    name: Gerador de Personagens
    weight: 7
    params:
      icon: ikosaedr
---

Para usar o gerador de personagens, basta preencher os parâmetros abaixo e clicar no botão "Gerar Personagem".
Todos os parâmetros são opcionais e o que não for selecionado será decidido aleatoriamente.

### Parâmetros Gerais

<div style="line-height: 2.5">
    <label class="generator-option" style="display: none"><input type="checkbox" name="equipment"> Equipamentos</label>
    <label class="generator-option" style="display: none"><input type="checkbox" name="weapons"> Armas</label>
    <label class="generator-option" style="display: none"><input type="checkbox" name="spells"> Magias</label>
    <label class="generator-option"><input type="radio" name="gender" value="M"> Homem</label>
    <label class="generator-option"><input type="radio" name="gender" value="F"> Mulher</label>
</div>

### Classes

<div style="line-height: 2.5">

<div>
    <label class="generator-option"><input type="radio" name="class" value="legionario"> Legionário</label>
    <label class="generator-option"><input type="radio" name="class" value="arqueiro"> Arqueiro</label>
    <label class="generator-option"><input type="radio" name="class" value="barbaro"> Bárbaro</label>
    <label class="generator-option"><input type="radio" name="class" value="gladiador"> Gladiador</label>
    <label class="generator-option"><input type="radio" name="class" value="lanceiro"> Lanceiro</label>
</div>

<div>
    <label class="generator-option"><input type="radio" name="class" value="clerigo"> Clérigo</label>
    <label class="generator-option"><input type="radio" name="class" value="paladino"> Paladino</label>
    <label class="generator-option"><input type="radio" name="class" value="druida"> Druida</label>
    <label class="generator-option"><input type="radio" name="class" value="monge"> Monge</label>
</div>

<div>
    <label class="generator-option"><input type="radio" name="class" value="ladrao"> Ladrão</label>
    <label class="generator-option"><input type="radio" name="class" value="assassino"> Assassino</label>
    <label class="generator-option"><input type="radio" name="class" value="bardo"> Bardo</label>
    <label class="generator-option"><input type="radio" name="class" value="desbravador"> Desbravador</label>
    <label class="generator-option"><input type="radio" name="class" value="espiao"> Espião</label>
</div>

<div>
    <label class="generator-option"><input type="radio" name="class" value="mago"> Mago</label>
    <label class="generator-option"><input type="radio" name="class" value="ilusionista"> Ilusionista</label>
    <label class="generator-option"><input type="radio" name="class" value="necromante"> Necromante</label>
    <label class="generator-option"><input type="radio" name="class" value="psionico"> Psiônico</label>
</div>

</div>

### Quem vem aí?

<button class="generator-option" onclick="goGenerateChar();">Gerar Personagem</button>

## Seu personagem é ...

**Nome:** <span id="char-name">XXXXX</span>

**Ancestralidade:** <span id="char-ancestry">XXXXX</span>

**Classe:** <span id="char-class">XXXXX</span> (<span id="char-hit-dice">dX</span>)

**Dinheiro:** <span id="char-money">XXX P.O.</span>

> **IN** <span id="char-in">XX</span> **CA** <span id="char-ac">XX</span> **PV** <span id="char-hp">XX</span>
>
> **BN** <span id="char-bn">+X</span> **JdP** <span id="char-jdp">VXX/RXX/MXX</span>
>
> **MOV** <span id="char-mov">XX</span>'
>
> **FOR** <span id="attr-for">XX (+1)</span> **DES** <span id="attr-des">XX (+1)</span> **CON** <span id="attr-con">XX (+1)</span>
>
> **INT** <span id="attr-int">XX (+1)</span> **SAB** <span id="attr-sab">XX (+1)</span> **CAR** <span id="attr-car">XX (+1)</span>

{{< generator >}}