# Automatismes elèctrics aplicats. Normalització. Elements elèctrics. Elements de control, de mesura i de protecció. Sistemes de detecció i control.

Els automatismes elèctrics són un dels pilars de la automatització industrial moderna. En un context on s'escau repetitibilitat, fiabilitat, seguretat i rendiment energètic, els automatismes elèctrics ofereixen la capacitat d'accionar, controlar, coordinar i supervisar processos i equips d'alts nivells de precisió i de forma continua.

Un automatisme elèctric integra elements de potència, sensorització, comandament, regulació, lògica i protecció. Aquestos s'interconnecten per executar accions de forma autònoma sense intervenció humana directa. Abarquen des d'una maniobra en una màquina senzilla fins una complexa línia de farbicació amb autòmats programables. 

Els automatismes elèctrics actuen habitualment sobre: motors, frens, sistemes de trqansport, sistemes hidràulics i pneumàtics, robots, forns... Per tant, el seu estudi és essencial per poder comprendre el funcionament integral de qualsevol instal·lació industrial i per abordar projectes de disseny, manteniment i optimització. 

## Contextualització en FP

Aquest temari forma part de l'atribució docent de l'especialització Organització i Projectes de Fabricació Mecànica, amparada a la llei 3/2022 d'ordenació de la formació professional. Entendre la automatització elèctrica resulta essencial per elaborar i comprendre esquemes normalitzats, realitzar instal·lacions, dissenyar-ne i aplicar i entendre la lògica de circuits i els seus components. També, dona la base necessària per fer fornt a sistemes més avançats com la SCARA o la robòtica.

Resulten uns coneixements essencials a la indústria moderna per dur a terme tasques de disseny, diagnòstic i manteniment de màquines i sistemes moderns.

## Normalització

La normalització permet reduir els errors que els diversos projectistes i operaris puguen cometre. puix que crea una simbologia, i estableix unes normes que asseguren que es dissenyen, fabriquen i antinguen sota criteris homologats; grantitzant la seguretat, funcionalitat i interoperabilitat.

Les normes importants de normalització que cal conèixer són:
- IEC 60617: que normalitza la representació de circuits establint símbols gràfics comuns
- IEC 60204: de seguretat de màquines
- IEC 60947: per l'aparamenta de baixa tensió

La simbologia, és un dels aspectes més importants, ja que s'encarrega de simbolitzar els components, connexions i espais de vegades amb referències entrecreuades si es tracata d'implementacions pneumàtiques i hidràuliques. Saber-ne interpretar-les resulta essencial pels perfils tècnics i de disseny.

Un sistema elèctric es documenta mitjançant esquemes de potència, control o comandament, a més del llistat de cables, el Bill of Materials (BOM) o els diagrames funcionals i lògics. Softwares com AutoCAD elèctric permeten recollir i connectar tota aquest documentació. Això garantitza la coherència i traçabilitat del projecte.

També, afegit a totes les normes mencionades s'escau una reglamentació industrial i de seguretat, com els factors IP i IK que defineixen la resistencia a líquids i impactes, compatibilitat electromagnètica, distancies de seguretat i aillament o la classificació de color per cables. Grantint la seguretat dels tècnics en contacte directe.

## Elements elèctrics

Els conductors són els encarregats de transportar el corrent. Aquests han de tindre en compte la intensitat màxima de la instal·lació, les caigudes de tensió, l'aillament tèrmic i l'entorn d'instal·lació. Una secció molt baixa pot implicar calfament i per tant pèrdues i una molt d'alta implica un cost elevat.

Els bornes són els encarregats d'agrupar i organitzar les connexions, afavorint la instal·lació de fusibles o elements selectors. Poden ser de caragol, d'endoll o push-in

Els transformadors s'encarreguen d'adaptar la tensió als manecs i control. S'utilitzen transformadors aïllants i fonts d'alimentació conmutades, sistemes redundants en instal·lacions crítiques i sistemes d'alimentació ininterrompuda per evitar problemes amb els plcs

Els contactors accionen càrregues de potència i motors, consten d'una bobina, contactes auxiliars i càmbres d'extinció d'arc. S'utilitzen juntament amb relés tèrmics per protegir els motors; els relés electromecànics s'utilitzen com a interficie entre els sensors i actuadors i els relés temporitzadors permeten determinar amb precissió el temps d'actuació

Respecte als motors, els més utilitzats són els trifàsics asìncrons (robustos i econòmics), tot i que també hi ha pas a pas, que permeten ser precís amb el posicionament; els de corrent continua, que atorguen una regulació molt fina de la velocitat; i els servomotors, ampliament utilitzats en màquines cnc per l'extremada precissió. Aquests mitjançant la regulació de la freqüència poden variar la velocitat, par, i sentit.

L'accionament de tots aquests elements, es realitza habitualment mitjançant polsadors, són els que permeten a l'oprerari controlar la màquina. Habitualment es classifiquen entre normalment oberts o normalment tancats. Setes de parada d'emergècia amb enclau. El codi de colors d'acord IEC 60204 és nergre o verd per marxa, roig per parada i groc per actuació.

## Elements de control

Relés temporitzadors i contadors: Ofereixen diverses possibilitats com la de retard a connexió, desconnexió, interval, cíclic o biestable. Possibiliten automatismes repetitius, com el control de cicles, contabilitzant events i accionant events.

Els enclavaments eviten l'activació d'accions contràries, maniobres incompatibles i impedexen moviments si no es compleixen condicions prèvies. Són essencials per garantitzar la coherència dels automatismes.

Els plcs s'encarreguen d'exercir els automatismes moderns. Es composen de la cpu (el cervell), els mòduls d'entrades analògiques i digitals, la font d'alimentació i els mòduls de comunicació. Funcionen com un cicle repetitiu, es a dir, reben entrades, executen accions i manen eixides. Permeten executar lògica molt més complexa, i són molt flexibles per fer canvis.
Per la seua programació, aquests poden fer servir 5 llengutages: listes d'instruccions, el diagrama de contactes, per blocs, text estructurat, i diagrames seqüencials (grafcet)

Els controladors electrònics tenen la funció de controlar certs valors del circuit. Poden ser de llaç tancat els quals comproven un valor repetidament i ajusten en cicle; de caudal per sistemes hidràulics i elèctrics; de velocitat. 

El control escau un sistema analògic-digital el qual permeta passar de senyal analògics (temperatura, velocitat, pressió...) a digitals (obert/tancat), els plcs moderns disposen de sistemes de conversió per tractar unificadament tota la informació del procés

El quadre elèctric de manec és on conviuen els elements, si està correctament dissenyat, incloura passatges per l'aire, separació de la potència i el control, indentifica correctament el cablejat i integra les proteccions adequades. 


## Elements de mesura

El control i supervisió d'una instal·lació exigeix mesurar magnituds com la instemnsitat, tensió, potència, resistència, factor de potència i la distorsió harmònica. Aquestes determinen el rendiment, consum, i qualitat de l'energia. El seguiment d'aquestos valors ajudarà a determinar-ne el rendiment i fer-ne el diagnòstic.

A l'hora de mesurar, es pot fer servir la instrumentació analògica o digital. La analògica destaca per la seua robustesa, el cost baix i la lectura directa. Per altra banda, la digital ofereix multiples funcions i una major precisió. Aquesta fa servir: multímetres, osciloscòpis, registradors portàtils, analitzadors trifàsics... Que permetern un anàlisi amb prou detall.

Els tranformadors d'intensitat i tensió, reduieixen les corrents a valors normalitzats, la qual cosa permet mesurar i protegir amb seguretat, imprescindibles en instal·lacions d'alta tensió.

Els equips de monitorització i registre, permeten el manteniment predictiu mitjançant la vibració, la detecció d'harmònics i el control tèrmic dels motors. 

## Elements de protecció

Els fusibles protegeixen davant curtcircuits, fonent-se quan el corrent supera l'umbral. Es classifiquen com a gG (General) i aM (Motors). Els interruptors automàtics magnetotèrmkics, protegeixen davant sobrecàrregues i curtcircuits. Aquests es seleccionen amb corbes de tret B, C o D. 

Els relés tèrmics detecten sobrecàrregues prolongades dels motors per efecte tèrmic i provoquen la seua desconnexió abans que es produïsquen danys.

L'interruptor diferencial, protegeix a les persones i la instal·lació davant derivacions i fugues a terra, comparant el corrent d'entrada i eixida i disparant quan la diferència és elevada. 

Per causa de la gran quantitat d'elements electrònics sensibles és important protegir contra sobretensions, mitjançant desparregadors de sobretensions SPD, així com para rajos exteriors.

Explicats tots els mètodes de protecció, és important destacar la importàcia de la coordinació. Disparant únicament la protecció més propera al defecte. Minimitzant el nombre de parades, desconnexions de línies completes i millorant la continuitat del servei. 

## Sistemes de detecció i control

