// window.addEventListener('DOMContentLoaded', () => {
  
  
//   const titluElem = document.getElementById('titlu');
//   const deadspaceElems = document.querySelectorAll('.deadTopSpace');
//   if (titluElem && deadspaceElems.length > 0) {
//     deadspaceElems.forEach(el => {
//       el.style.height = titluElem.offsetHeight + 'px';
//     });
//   }
// });


window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});

// const watermark = document.createElement('div');
// watermark.innerHTML = `<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-55deg); font-size: 10vmax; font-weight: 900; color: #fff; opacity: 0.15; pointer-events: none; z-index: 99999; white-space: nowrap; user-select: none;">T.P. TEST VERSION </div>`;
// document.body.appendChild(watermark.firstElementChild);

let menuHint = (window.location.pathname.endsWith('home.html') || window.location.pathname === '/') ? `<span class="menutext">Meniu</span>` : '';

document.getElementById('titlu').insertAdjacentHTML('afterbegin',
  `<div class="titlu display_flex height_fitcontent align_center">
    <a href="./index.html">
      <img class="ratphpng" src="https://transploiesti.com/files/dynamicContent/sites/ctje5h/images/ro/layout_2/mvary6uo/element_410/rwdMode_4/76x76/TransPloiesti-logo-2024-5.webp">
    </a>
    <div style="color: var(--font-testver); font-size: 5vmin; font-weight: 700;">TEST VERSION</div>
    <div id=menu class="display_flex alignSelf_center"></div>
  </div>`);

// https://ratph.ro/SiglaTCE.png

if (document.getElementById('footer')) document.getElementById('footer').innerHTML =
  `<div class="endtitl display_flex flexDir_col justify_center align_center">
    <span><strong>TransPloiesti DEMO version</strong></span>
    <div style="white-space: wrap; text-align: center">Scop demonstrativ.</div>
    <div style="white-space: wrap; text-align: center">Prezentul site NU va fi publicat fara permisiunea detinatorilor imaginilor si continuturilor prezentate</div>
    <div style="white-space: wrap; text-align: center">Informatiile, imaginile si drepturile de autor apartin detinatorilor acestora.</div>
    <span>-</span>
    <span>&copy 2011-2026 TransPloiesti</span>
    <span>Toate drepturile sunt rezervate</span>
    <span>Ultimul update: octombrie 2026</span>
    <span>Ploiesti, Romania</span>
  </div>`;

  // `<div class="endtitl display_flex flexDir_col justify_center align_center">
  //   <span>S.C.TRANSPORT CALATORI EXPRESS S.A. PLOIESTI</span>
  //   <span>Toate drepturile sunt rezervate 2009 2026</span>
  //   <span>Ultimul update: septembrie 2026</span>
  //   <span>Ploiesti Romania</span>
  // </div>`

document.querySelectorAll('#menu').forEach(menu => menu.innerHTML =
  `<div class="menu display_flex width_fitcontent height_fitcontent justSelf_center">
      <a href="./ListaTrasee.html"class="topbut width_fitcontent height_fitcontent">
        Trasee
      </a>
      <a href="./tarife.html" class="topbut width_fitcontent height_fitcontent">
        Tarife
      </a>
      <a href="./harta-trasee.html"class="topbut width_fitcontent height_fitcontent">
        Harta Trasee
      </a>
      <a href="./anunturi.html" class="topbut width_fitcontent height_fitcontent">
        Anunturi
      </a>
      <a href="./WIP.html" class="topbut width_fitcontent height_fitcontent">
        Galerie Foto
      </a>
      <a href="./DespreNoi.html" class="topbut width_fitcontent height_fitcontent">
        Despre noi
      </a>
      <div style="margin-right: 1vw;"></div>
      <svg xmlns="http://www.w3.org/2000/svg" onclick="changeTheme()" class="topbut searchIconClass alignSelf_center justSelf_end" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.504 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
     <svg id=searchIconTop onclick="searchStart()" class="topbut searchIconClass display_flex alignSelf_center justSelf_end" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7"></circle>
        <line x1="16.5" y1="16.5" x2="21" y2="21"></line>
      </svg>
   </div`);


// TCE Menu
/*
  `<div class="menu display_flex width_fitcontent height_fitcontent justSelf_center">
      <!--<a class="topbut width_fitcontent height_fitcontent" href="/nj.html">
        Acasa
      </a>-->
      <div class="topbut width_fitcontent height_fitcontent">
        Trasee
      </div>
      <a href="./ImportOrar.html" class="topbut width_fitcontent height_fitcontent">
        Tarife
      </a>
      <a href="/anunturi.html" class="topbut width_fitcontent height_fitcontent">
        Anunturi
      </a>
      <div class="topbut width_fitcontent height_fitcontent">
        Informatii
        <div class="floatmenu display_flex flexDir_col width_fitcontent hidden">
          jjbjj
        </div>
      </div>
      <div class="topbut width_fitcontent height_fitcontent">
        Legal
        <div class='floatmenu display_flex flexDir_col width_fitcontent hidden'>
          <a class="btnlink display_flex align_center fmawid">sjsjs</a>
          <a class="btnlink display_flex align_center fmawid">jsjsjssj</a>
          <a class="btnlink display_flex align_center fmawid">eieowjssk</a>
        </div>
      </div>
      <div class="topbut width_fitcontent height_fitcontent">
        Despre noi
      </div>
      <div class="topbut width_fitcontent height_fitcontent">
        Contact
      </div>
   </div`;
*/



// menu shi


document.getElementById('fixbtn').innerHTML = 
  `<div class="fixedbtnDiv gap_3 display_flex flexDir_row">
    <div style="transform: scale(0.8)" class="fixedbtn fixedbtnHideToggle display_flex justify_center align_center" onclick="scrollToTop()">
      <div class="menuicon_fix chevron-up">⌄</div>
    </div>
    <svg id=searchIconDown onclick="searchStart()" class="searchIconClass fixedbtn display_flex alignSelf_center justSelf_end" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="7"></circle>
      <line x1="16.5" y1="16.5" x2="21" y2="21"></line>
    </svg>
    <div class="fixedbtn gap_5 display_flex justify_center align_center" onclick="menuopen()">
      ${menuHint}
      <span class="menuicon">&#9776;</span>
    </div>
  </div>`


// <div class="card display_flex justSelf_center alignSelf_center">test</div

let menuopened = 
  `<div style="width: 80vw; position: absolute; transform: translate(0%, 0%); bottom: 32%; right: 30%" class="display_flex gap_3 height_fitcontent justSelf_center flexDir_col justify_center">
    <a href="./index.html"class="menubut width_fitcontent height_fitcontent alignSelf_end">
      Acasa
    </a>
    <a href="./ListaTrasee.html"class="menubut width_fitcontent height_fitcontent alignSelf_end">
      Trasee
    </a>
    <a href="./harta-trasee.html"class="menubut width_fitcontent height_fitcontent alignSelf_end">
      Harta Trasee
    </a>
    <a href="./tarife.html" class="menubut width_fitcontent height_fitcontent alignSelf_end">
      Tarife
    </a>
    <a href="./anunturi.html" class="menubut width_fitcontent height_fitcontent alignSelf_end">
      Anunturi
    </a>
    <a href="./WIP.html" class="hidden menubut width_fitcontent height_fitcontent alignSelf_end">
      Galerie Foto
    </a>
    <a href="./DespreNoi.html" class="menubut width_fitcontent height_fitcontent alignSelf_end">
      Despre noi
    </a>
    <div class="mb_3"></div>
    <div class="menubut width_fitcontent height_fitcontent alignSelf_end" onclick="changeTheme()">
      Fundal
    </div>
  </div>`;
const menuOpenElem = document.getElementById('menuopen');

function menuopen() {
  const isOpen = menuOpenElem.classList.contains('open');
  const isMenuContent = menuOpenElem.innerHTML.includes('menubut');

  if (isOpen && isMenuContent) {
    menuOpenElem.classList.remove('open');
    document.querySelectorAll('.fixedbtnHideToggle').forEach(fbtn => fbtn.classList.remove('animhidden'));
  } else {
    menuOpenElem.innerHTML = menuopened;
    // console.log('menu apasat');
    menuOpenElem.classList.add('open');
    document.querySelectorAll('.fixedbtnHideToggle').forEach(fbtn => fbtn.classList.add('animhidden'));
  }
  
  // document.getElementById('menuopen').innerHTML = menuopened;
  // document.getElementById('menuopen').classList.toggle('open')
  // document.querySelectorAll('.fixedbtnHideToggle').forEach(fbtn => fbtn.classList.toggle('hidden'))
}

let dataForSearch;
let searchOpened = 
  `<div id="searchOpen" style="width: 70vw; position: absolute; transform: translate(50%, 0%); right: 50%" class="display_flex gap_3 height_fitcontent justSelf_center flexDir_col justify_center">
    <input id="searchField" type="text" placeholder="Cauta o statie..." class="mb_3 display_flex searchBox justSelf_center alignSelf_center">
    <div id=searchResults class="display_flex gap_2 flexDir_col justSelf_center alignSelf_center"></div>
  </div>`;
function searchStart() {
  const isOpen = menuOpenElem.classList.contains('open');
  const isSearchContent = menuOpenElem.innerHTML.includes('searchField');

  if (isOpen && isSearchContent) {
    menuOpenElem.classList.remove('open');
    document.querySelectorAll('.fixedbtnHideToggle').forEach(fbtn => fbtn.classList.remove('animhidden'));
  } else {
    menuOpenElem.innerHTML = searchOpened;
    // console.log('search apasat');
    menuOpenElem.classList.add('open');
    document.querySelectorAll('.fixedbtnHideToggle').forEach(fbtn => fbtn.classList.add('animhidden'));
    searchRun();
    if (!dataForSearch) {
      fetch('./JSON/trasee.json')
        .then(response => response.json())
        .then(datajson => {
          dataForSearch = datajson;
          // console.log(dataForSearch)
        });
    }
  };
  // document.getElementById('menuopen').innerHTML = searchOpened;
  // document.getElementById('menuopen').classList.toggle('open')
  // document.querySelectorAll('.fixedbtnHideToggle').forEach(fbtn => fbtn.classList.toggle('hidden'))
}

let searchTimeout;

function searchRun() {
  if (document.getElementById('searchField')) {
    document.getElementById('searchField').focus();
  }
  searchField.removeEventListener('input', handleSearchInput);
  searchField.addEventListener('input', handleSearchInput);
}
  
function handleSearchInput(e) {
  if (!dataForSearch) return;
  const query = e.target.value.toLowerCase().trim();
  // console.log('input', query);
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    document.getElementById('searchResults').innerHTML = ``;
    const matches = dataForSearch.IDs.filter(st => {
      if (!st.nume || st.nume.trim() === '') return false;
      return st.nume.toLowerCase().includes(query) || st.stopId.toLowerCase().includes(query);
    });
    // console.table(matches);
    matches.forEach(st => {
      let traseeHere = getTraseeInStatie(st.stopId, dataForSearch);

      const traseeInStatie = traseeHere.length > 0 ? traseeHere.map(t => `<div class="newsTrAfect display_flex justify_center align_center alignSelf_center">${t}</div>`).join('') : ``;

      const item = document.createElement('div');
      item.className = 'search-item';
      item.innerHTML = `
        <a class="display_flex btnSearchResult flexDir_col" href="./statie.html#${st.stopId}">
          <span>${st.nume}</span>
          <div style="flex-wrap: wrap;" class="display_flex flexDir_row gap_05">${traseeInStatie}</div>
        </a>`;
      item.addEventListener('click', () => {
        // OutputElement.style.display = 'none'; // Ascunde dropdown-ul
      });
      document.getElementById('searchResults').appendChild(item)
    });
    
  }, 250);
}

function getTraseeInStatie(stopId, dataForSearch) {
  const results = [];
  Object.keys(dataForSearch).forEach(trKey => {
    const traseu = dataForSearch[trKey];
    if (!traseu || typeof traseu !== 'object' || !Array.isArray(traseu.Variante) && !traseu.StatiiTur && !traseu.StatiiRetur) {
      // console.log(trKey);
      return;
    }
    const inTur = traseu.StatiiTur && Array.isArray(traseu.StatiiTur) && traseu.StatiiTur.some(s => s.stopId === stopId);
    const inRetur = traseu.StatiiRetur && Array.isArray(traseu.StatiiRetur) && traseu.StatiiRetur.some(s => s.stopId === stopId);
    // console.warn(inTur, inRetur);
    if (inTur || inRetur) {
      if (!results.includes(trKey)) {
        results.push(trKey);
      }
    }
  })
  return results;
}

function changeTheme() {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    if (map) { resetMapTheme() };
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    if (map) { resetMapTheme() };
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  console.log('scroll')
}


document.querySelectorAll('.topbut').forEach(btn => {
  const fmenu = btn.querySelector('.floatmenu');
  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    document.querySelectorAll('.floatmenu').forEach (m => {
      if (m !== fmenu) m.classList.add('hidden');
    });
    fmenu.classList.toggle('hidden');
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.floatmenu').forEach(fmenu => {
    fmenu.classList.add('hidden');
  });
});