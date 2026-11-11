let TrAfectPreset = (trafec) => trafec ?
  `<div class="newsTrAfect display_flex justify_center align_center alignSelf_center">
    <span>${trafec}</span>
  </div>` : '';
  
let AnuntPreset = (anunt) => anunt ?
  `<a href="./Anunt.html#${anunt.idAnunt}" class="abtnlink anews display_flex align_center flexDir_col">
    <div class="newsGap display_flex flexDir_row alignSelf_start">  
      <div class="nnr display_flex justify_center align_center">
        ${anunt.dataAnunt}
      </div>
      ${TrAfectFull}
    </div>
    <div style="justify-content: space-between; width: 100% !important;" class="display_flex">
      <div style="flex: 1" class="display_flex align_center news3">${anunt.titluAnunt}</div>
      <div class="abtnlink readmore width_fitcontent">Citeste mai mult</div>
    </div>
  </a>` : '';

let TrAfectFull = ``;

`<strong> *text* </strong>`

