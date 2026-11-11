/*

<div class="mb_10"></div>
    <div class="card display_flex flexDir_col">
      <div>
        <div class="display_flex align_center">
          <div class="abtnlink-nr statie_nr display_flex justify_center align_center">
            <span>30</span>
          </div>
          <div><strong>HALE CATEDRALA</strong></div>
        </div>
      </div>
      <div class="display_flex flexDir_row" id=liveETA style="justify-content: space-around;"></div>
    </div>
    
    
    */


// let i=0;
// let full = '';
// do {
//   let formatat = String(i).padStart(3, '0');
//   let section = `{"stopId": "S50${formatat}", "nume": ""},\n`
//   full += section;
//   i = i+1;
// } while (i<=040)
// console.log(full);





function statiiGen() {
      document.getElementById('StatieLiveETA').innerHTML = '';

      let ReqStopID = `${window.location.hash.replace('#', '').replace('.html', '')}`;
      /*testing purposes, COMMENT WHEN FINISH*/ if (!window.location.hash) {ReqStopID = 'S00005'};
      // const stopId = ReqStopID.includes('=') ? ReqStopID.split('=')[1] : ReqStopID;
      console.warn(ReqStopID);
      // if (!ReqStopID)
      document.getElementById('statieName').innerHTML = data.IDs.find(st => st.stopId === ReqStopID).nume;
  
      ListaTraseeInStatie = findStopOccurrences(ReqStopID, data);
      console.warn(ListaTraseeInStatie)
      
      if (ListaTraseeInStatie.length === 0) {
        console.warn(`Stația cu ID-ul ${ReqStopID} nu a fost găsită.`);
        return;
      }
      console.log(`Găsit stația ${ListaTraseeInStatie[0].numeStatie} pe traseele:`, ListaTraseeInStatie);

      let htmlCarduri = '';
      let colectiePrograme = [];
      
      // const NrTraseeInStatie = ListaTraseeInStatie.map(m => m.NrTraseu);
      // console.log('Trasee care trec prin stație:', NrTraseeInStatie);

      ListaTraseeInStatie.forEach((LTiS, index) => {
        console.error('LTIS')
        console.warn(LTiS.NrTraseu);
        console.warn(ListaTraseeInStatie[index].capFront);

        let listaStatiiCurrent = ListaTraseeInStatie[index].statii;
        console.warn('lista statii', listaStatiiCurrent)
        let lastoffset = 0;
        let isIdReached = false;
        listaStatiiCurrent.forEach(st => {
          if (st.stopId !== ReqStopID && isIdReached==false) {
            lastoffset = lastoffset + st.offset;
            console.log(`${lastoffset}`)
          } else {
            // console.log('else');
            isIdReached = true;
          }
        })

        tipdir = LTiS.directie;
        console.warn(tipdir)
        let getDataAzi = new Date();
        let ziAct = getDataAzi.getDay();
        console.warn(ziAct);
        if (ziAct === 6) {
          tipzi = "S";
        } else if (ziAct === 0) {
          tipzi = "D"
        } else {
          tipzi = "LV"
        }
        if (!data[`${LTiS.NrTraseu}`][`Prog_${tipdir}_${tipzi}`]) {
          if (tipzi === "S" || tipzi === "D") {
            tipzi = "SD";
          }
        }
        
        let ProgSelectat = data[`${LTiS.NrTraseu}`][`Prog_${tipdir}_${tipzi}`];
        console.error(ProgSelectat);
        
        ProgOffset = {};
        for (const ora in ProgSelectat) {
          const oraint = parseInt(ora, 10);
          ProgSelectat[ora].forEach((minut) => {
            const totalmin = oraint * 60 + minut + lastoffset;
            const oracalc = Math.floor(totalmin / 60) % 25;
            const mincalc = totalmin % 60;
            if (!ProgOffset[oracalc]) {
              ProgOffset[oracalc] = [];
            }
            ProgOffset[oracalc].push(mincalc);
          })
        };
        console.log('ProgOffset', ProgOffset);

        htmlCarduri += ContainerTraseu(LTiS, index, cardMuted);
        colectiePrograme.push({ProgOffset, index});
        console.error('colprog', colectiePrograme);
        console.log(data[LTiS.NrTraseu]);
      });
      document.getElementById('StatieLiveETA').innerHTML = htmlCarduri;

      colectiePrograme.forEach(item => {
        liveETAfunc(item.ProgOffset, item.index);
      });

      // Exemplu afișare:
      // lista va returna un array de forma:
      // [
      //   { traseu: "30", directie: "Retur", numeStatie: "Hipodrom", ... },
      //   { traseu: "30S", directie: "Retur", numeStatie: "Hipodrom", ... }
      // ]  
    }

    

    function findStopOccurrences(ReqStopID, data) {
      const results = [];
      Object.keys(data).forEach(trKey => {
        const traseu = data[trKey];
        if (!traseu || typeof traseu !== 'object' || !Array.isArray(traseu.Variante) && !traseu.StatiiTur && !traseu.StatiiRetur) {
          // console.log(trKey);
          return;
        }
        // console.log('numar', trKey);
        if (traseu.StatiiTur && Array.isArray(traseu.StatiiTur)) {
          const StatieIndex = traseu.StatiiTur.findIndex(s => s.stopId === ReqStopID);
          if (StatieIndex !== -1) {
            results.push({
              NrTraseu: trKey,
              directie: 'T',
              // numeStatie: traseu.StatiiTur[StatieIndex].nume,
              offset: traseu.StatiiTur[StatieIndex].offset,
              capOrig: traseu.Cap1,
              capFront: traseu.Cap2,
              statii: traseu.StatiiTur,
              index: StatieIndex
            });
          }
        }
        if (traseu.StatiiRetur && Array.isArray(traseu.StatiiRetur)) {
          const StatieIndex = traseu.StatiiRetur.findIndex(s => s.stopId === ReqStopID);
          if (StatieIndex !== -1) {
            results.push({
              NrTraseu: trKey,
              directie: 'R',
              // numeStatie: traseu.StatiiRetur[StatieIndex].nume,
              offset: traseu.StatiiRetur[StatieIndex].offset,
              capOrig: traseu.Cap3,
              capFront: traseu.Cap4,
              statii: traseu.StatiiRetur,
              index: StatieIndex
            });
          }
        }
      });
      return results;
    }
    
    function liveETAfunc(ProgSelectat, index) {
      let liveETAbox = document.getElementById(`liveETA${index}`);
      let cardContainer = document.getElementById(`cardContainer${index}`)
      if (!liveETAbox) return;
      liveETAbox.innerHTML = '';
    
      if (!ProgSelectat || Object.keys(ProgSelectat).length === 0) {
        liveETAbox.innerHTML = `--`;
        console.error('HERE')
        if (cardContainer) cardContainer.classList.add(`stopCardGrayedOut`);
        return;
      }
      
      let now_time = new Date();
      let hour_now = now_time.getHours();
      let minute_now = now_time.getMinutes();
      // let secunde_now = now_time.getSeconds();
      let totalMinNow = hour_now * 60 + minute_now;
      let oraGasita = '';

      let oreSortate = Object.keys(ProgSelectat).sort((a, b) => parseInt(a) - parseInt(b));
      
      let counterShow = 0;
      for (let ora of oreSortate) {
        let oraInt = parseInt(ora, 10);
        for (let min of ProgSelectat[ora]) {
          let totalMinCursa = oraInt * 60 + min;
          if (totalMinCursa >= totalMinNow) {
            oraGasita = `${String(oraInt).padStart(2, '0')}:${String(min).padStart(2, '0')}`;

            if (totalMinCursa - totalMinNow === 0) {
              liveETAbox.innerHTML += `<div class="display_flex justify_center flexDir_col"><div class="ETAtop display_flex justify_center"><strong>acum</strong></div><div class="ETAbottom display_flex justify_center">(${oraGasita})</div></div>`;
            } else {
              liveETAbox.innerHTML += `<div class="display_flex justify_center flexDir_col"><div class="ETAtop display_flex justify_center"><strong>${totalMinCursa - totalMinNow} min</strong></div><div class="ETAbottom display_flex justify_center">(${oraGasita})</div></div>`;
            }
            counterShow = counterShow + 1;
            if (counterShow === 3) break;
          }
        }
        if (counterShow === 3) break;
      }
      if (counterShow === 0) {
        liveETAbox.innerHTML = `-`;
        if (cardContainer) cardContainer.classList.add(`stopCardGrayedOut`);
      }
    }


    
    setInterval(() => {
      statiiGen();
    }, 10000);
