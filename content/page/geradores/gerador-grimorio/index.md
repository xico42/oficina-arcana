---
date: '2025-08-04T20:37:13-03:00'
draft: false
title: 'Gerador de lista de magias'
---

Para usar o gerador de lista de magias, basta preencher os parâmetros abaixo e clicar no botão "Gerar Lista".
Para divinos e bardos será gerado uma lista de magias preparadas. Já para os arcanos, será gerado um grimório de magias.

Caso queira resetar os parâmetros, clique no botão "Limpar".

<form id="generator-form">

### Parâmetros Gerais

<div style="line-height: 2.5">
    <select class="generator-option" id="char-level">
        <option>Nível 1</option>
        <option>Nível 2</option>
        <option>Nível 3</option>
        <option>Nível 4</option>
        <option>Nível 5</option>
        <option>Nível 6</option>
        <option>Nível 7</option>
        <option>Nível 8</option>
        <option>Nível 9</option>
        <option>Nível 10</option>
        <option>Nível 11</option>
        <option>Nível 12</option>
        <option>Nível 13</option>
        <option>Nível 14</option>
        <option>Nível 15</option>
        <option>Nível 16</option>
        <option>Nível 17</option>
        <option>Nível 18</option>
        <option>Nível 19</option>
        <option>Nível 20</option>
    </select>
</div>

### Classes

<div style="line-height: 2.5">

<div class="hidden">
    <label class="generator-option"><input type="radio" name="class" value="clerigo"> Clérigo</label>
    <label class="generator-option"><input type="radio" name="class" value="paladino"> Paladino</label>
    <label class="generator-option"><input type="radio" name="class" value="druida"> Druida</label>
    <label class="generator-option"><input type="radio" name="class" value="monge"> Monge</label>
    <label class="generator-option"><input type="radio" name="class" value="bardo"> Bardo</label>
</div>

<div>
    <label class="generator-option"><input type="radio" name="class" value="mago"> Mago</label>
    <label class="generator-option hidden"><input type="radio" name="class" value="ilusionista"> Ilusionista</label>
    <label class="generator-option hidden"><input type="radio" name="class" value="necromante"> Necromante</label>
    <label class="generator-option hidden"><input type="radio" name="class" value="psionico"> Psiônico</label>
</div>

</div>

</form>

### Cuidado! O abuso dos segredos metafísicos custa caro...

<button class="generator-option" onclick="goGenerateSpellList();">Gerar Lista</button>
<button class="generator-option" onclick="resetForm();">Limpar</button>

<h2 id="spells-title">
    Aqui está...
</h2>

<div id="char-spells-1" class="hidden">
    <h4>1° Círculo</h4>
    <ul id="char-spells-1-list"></ul>
</div>

<div id="char-spells-2" class="hidden">
    <h4>2° Círculo</h4>
    <ul id="char-spells-2-list"></ul>
</div>

<div id="char-spells-3" class="hidden">
    <h4>3° Círculo</h4>
    <ul id="char-spells-3-list"></ul>
</div>

<div id="char-spells-4" class="hidden">
    <h4>4° Círculo</h4>
    <ul id="char-spells-4-list"></ul>
</div>

<div id="char-spells-5" class="hidden">
    <h4>5° Círculo</h4>
    <ul id="char-spells-5-list"></ul>
</div>

<div id="char-spells-6" class="hidden">
    <h4>6° Círculo</h4>
    <ul id="char-spells-6-list"></ul>
</div>

<div id="char-spells-7" class="hidden">
    <h4>7° Círculo</h4>
    <ul id="char-spells-7-list"></ul>
</div>

<div id="char-spells-8" class="hidden">
    <h4>8° Círculo</h4>
    <ul id="char-spells-8-list"></ul>
</div>

<div id="char-spells-9" class="hidden">
    <h4>9° Círculo</h4>
    <ul id="char-spells-9-list"></ul>
</div>

{{< generator >}}