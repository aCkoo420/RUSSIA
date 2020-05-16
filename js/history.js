let coll = document.getElementsByClassName("collap");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let text = this.nextElementSibling;
      if (text.style.maxHeight){
        text.style.maxHeight = null;
      } else {
        text.style.maxHeight = text.scrollHeight + "px";
      } 
    });
  }

const events = [
    {
       "year":"862",
       "event":"Počátky Ruska",
       "detail":"První státní útvar Východních Slovanů (později rozdělených na Rusy, Bělorusy a Ukrajince) vznikal mezi Baltským a Černým mořem, kudy vedly obchodní stezky mezi Skandinávií a Byzantskou říší. Za počátek dějin Ruska je považováno založení Novgorodu roku 862. Roku 882 ovládl novgorodský kníže Oleg z rodu Rurikovců Kyjev, který předtím platil tribut Chazarské říši. Následně Oleg založil Kyjevskou Rus.",
       "url":"https://cs.wikipedia.org/wiki/Kyjevsk%C3%A1_Rus",
    },
    {
        "year":"1325",
        "event":"Sjednocení Rusi pod Moskvou",
        "detail":" Koncem 13. století začalo nabývat na významu Moskevské velkoknížectví. Moskva, založená 1147, se stala roku 1325 sídlem hlavy pravoslavné ruské církve. Země však byla nadále poddaná Zlaté hordě, které musela odvádět daně. Byly to těžké časy s častými mongolsko-tatarskými nájezdy, úpadkem zemědělství a rozšířením různých epidemií. Epidemie černé smrti nezasáhla Rusko tak silně jako západní Evropu a populaci se podařilo brzy obnovit.",
        "url":"https://cs.wikipedia.org/wiki/Moskevsk%C3%A9_velkokn%C3%AD%C5%BEectv%C3%AD",
   
    },
    {
       "year":"1547",
       "event":"Carské Rusko",
       "detail":"Roku 1547 se Ivan IV. Vasiljevič, zvaný Hrozný, nechal korunovat carem a nastolil tak tzv. samoděržaví: centralistickou absolutní monarchii. Za jeho vlády se ruské teritorium směrem na Sibiř zdvojnásobilo, což z Ruska vytvořilo transkontinentální stát. Krymští Tataři, jediní zbývající zástupci Zlaté Hordy, pokračovali v nájezdech do jižního Ruska a odváděli ve velkém obyvatele do osmanského otroctví. Zabraňovali tak většímu osídlení území. Krymští Tataři také roku 1570 zdevastovali Rjazaň, kde se setkali jen se slabým odporem.",
       "url":"https://cs.wikipedia.org/wiki/Rusk%C3%A9_carstv%C3%AD",

    },
    {
        "year":"1721",
        "event":"Ruské Impérium",
        "detail":"Koncem 17. století se stal ruským carem Petr Veliký, známý svými odvážnými reformami a modernizací státu. Po vítězství v Severní válce nad Švédskem (1700–1721) byl zaveden název Ruské impérium. Na jednom ze získaných území (v ústí řeky Něvy) založil Petrohrad, který se stal hlavním městem země. Roku 1721 také přijal Petr titul imperátora.",
        "url":"https://cs.wikipedia.org/wiki/Rusk%C3%A9_imp%C3%A9rium",
     },
     {
        "year":"1917",
        "event":"Revoluce a Sovětský svaz",
        "detail":"7. listopadu 1917 byla v Petrohradu ustavena sovětská vláda v čele s Leninem, revolucionářem a marxistickým intelektuálem. V lednu 1918 byla vyhlášena Ruská sovětská federativní socialistická republika (RSFSR), v jejíchž postupem doby pozměněných hranicích existuje dnešní Rusko. Hlavním městem se stala opět Moskva. 3. března podepsalo Rusko separátní Brest-litevskou mírovou smlouvu ukončující první světovou válku, ovšem za cenu ztráty většiny Ukrajiny, Běloruska, Polska, Besarábie, Finska a Pobaltí. Země upadla do vleklé občanské války trvající až do roku 1922; proti komunistům povstalo mnoho odpůrců, např. Bílá armáda, Černá armáda, Zelená armáda, donští kozáci nebo rolníci během Tambovského povstání, avšak byli velmi nejednotní, a tudíž nemohli být silným protivníkem proti bolševikům podporovaným Rakousko-Uherskem a Německem, a to ani přes intervenci Francie, Británie a Československých legií.",
        "url":"https://cs.wikipedia.org/wiki/Sov%C4%9Btsk%C3%BD_svaz",
     },
     {
        "year":"1991",
        "event":"Ruská federace",
        "detail":" Sovětský svaz měl být reorganizován ve volnější federaci, pro což se vyjádřila většina voličů 17. března 1991 v referendu. Byla zřízena funkce prezidenta RSFSR. 12. června 1991 byl prvním prezidentem Ruska zvolen Boris Jelcin. Tzv. srpnový puč, jehož cílem bylo zrušení demokratických přeměn, byl potlačen. 8. prosince 1991 pak hlavy Ruska, Ukrajiny a Běloruska podepisují Bělověžskou dohodu, prohlášení o vytvoření Společenství nezávislých států stanovící, že „SSSR jako subjekt mezinárodního práva přestal existovat“. 25. prosince 1991 se SSSR oficiálně rozpadla na Ruskou federaci a dalších 14 postsovětských republik.",
        "url":"https://cs.wikipedia.org/wiki/Rusko#",
     },
     
];



 $(function(){
 
    $("h2").on("click", function(){
        $(this).parents(".row").next().toggle(500);
    });

    events.forEach((event)=>{
        $("#nevim tbody").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"><i class="fas fa-chevron-down"></i> <a href="${event.url}" target="_new">${event.event}</a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
        </tr>`);
    });


    $(".event-detail").hide();
    $(".event-name i, .event-name a").on("click", function(){
        $("#nevim tr").removeClass("bg-secondary text-white");
        $(this).parents("tr").addClass("bg-secondary text-white");
        $(".event-detail").hide();
        $(this).parent().next().show(500);
    });    
}) 
