# Automatismes pneumàtics. Fonaments de la pneumàtica. Propietats de l'aire comprimit. Components pneumàtics. Valors característics en els circuits. Electropneumàtica: tècnica de comandament. Desenrotllaments seqüencials.

La pneumàtica és un dels pilars fonamentals de l'aumatització industrial. Aquesta consisteix en l'utilització d'aire comprimit i la seua posterior transformació en moviment. És molt utilitzada en la industria de l'embalatge, el transport i la robòtica lleugera. L'automatització pneumàtica, destaca per: la seua rapidesa de moviments, el baix cost dels components, i la seua seguretat i simplicitat. 

En comparació amb els altres tipus de tecnologies d'automatització, com la hidràulica o la elèctrica, la pneumàtica té com avantatges l'abastabilitat de l'aire, el qual es quasi ilimitat, la rapidesa dels moviments realitzats, el fàcil transport i emmagatzematge de l'aire i la innoquitat del mitja utilitzat com a fluid, la qual ho fa ideal per ambients on la seguretat de l'operari és essencial o és molt subsceptible a la contaminació. Com a contrapartida, la pneumàtica presenta una precissió inferior a la resta de mètodes d'automatització i una menor rigidesa.

En el següent tema es desenvoluparan: Els fonaments físics de l'aire a pressió, les seues propietats i procesament, els components d'un sistema pneumàtic, els valors característics per dimensionar una instal·lació, la introducció dels senyals elèctrics mitjançant l'electropneumàtica i els mètodes de funcionament dels desenvolupaments seqüencials, els quals obren la porta als processos d'automatització complexos. 

## Contextualització a l'FP

Aquest temari entra dins del àmbit de l'especialitat "Organització de Projectes de Fabricació Mecànica" el qual busca que l'alumnat dissenye, interprete i gestione sistemes de producció. Es situa emmarcat a la Llei Orgànica 3/2022 la qual ordena la Formació Professional i apareix de forma transversal en mòduls d'automatització, sistemes automàtics i producció. Els continguts de pneumàtica, estan presents a graus mitjans (Mecanització, Soldadura i Caldereria), i superiors (Programació de la producció de la fabricació mecànica i Disseny de la producció per la fabricació mecànica) i són essencials per desenvolupar les competències transversals d'anàlisi, diagnòstic i manteniment. 

A més, està prou rel·lacionat amb els temàris d'automatització hidràulica, elèctrica i sistemes de control programables, el conjunt dels quals facilita a l'alumnat una visió global de l'automatització industrial. 

## Fonaments de la pneumàtica

La penumàtica consisteix en la compressió d'aire mitjançant un sistema mecànic, el qual, augmenta la pressió i emmagatzema una energia que posteriorment és transformarà en moviment gràcies als actuadors que l'alliberaran de forma controlada.

Les magnituds utilitzades per mesurar la pressió d'acord amb el SI són els Pascals (Pa), tot i que a la indústria, s'utilitzen els bars, 1bar = 10^5Pa. Cal sempre distingir entre la pressió absoluta i la mamomètrica, la mamomètrica, mesurada per mamòmetres pren com a referència la pressió atmosfèrica, mentre que l'absoluta es mesura des del buit. 

La producció de treball mecànic útil mitjançant la compressió es fonamenta en el principi físic determinat per la llei de gassos ideals (PxV = nxRxT). D'aquesta llei, s'extrauen tres lleis particulars.

- Llei de Boyle-Mariotte: la qual representa la temperatura constant P1XV1 = P2xV2
- Llei de Gay-Lussac: La qual represerntsa olum constant P/T = constant
- Llei de Charles: La qual representa la pressió constant V/T = constant

Aquestes llei representen clarament com l'augment de temperatura augmenta la pressió i per aquesta raó, perquè cal referirse a condicions normals 1013mBar/ 0graus

La pneumàtica, presenta grans avantatges, com la disponibilitat practicament ilimitada del fluid, la seguretat davant explosions o incendis, el baix cost dels components i la capacitat de treballar en ambients humids i bruts.

Com a desavantatges, presenta una pitjor precissió respecte a les altres tecnologies per causa de la comrpessió de l'aire, canvis de pressió, soroll generat per la comrpessió i necessitat d'incloure silenciadors, necessitat d'un sistema de filtrat de l'aire i un rendiment energètic inferior, puix que la comrpessió requereix prou energia.

## Propietats de l'aire comprimit

L'aire comprimit escau un procés a fi que els automatismes funcionen correctament i es prolongue la vida útil dels elements. Un aire mal tractat es la causa de gran part dels errors: corrosió, deteriorament i pèrdudes de rendiment. 

L'aire està compost per nitrògen en un 78%, oxigen en un 20% i un 1% d'altres gassos com l'argó. A més, conté vapor d'aigua, partícules en suspensió, olis... Tot això són components que cal filtrar previament a l'ús de l'aire, puix que poden fer malbé als components del circuit. 

La humitat és un dels grans problemes. Una vegada s'ha comprimit l'aire, s'abaixa la temperatura, això, però provoca que es genere aigua per condensació, la qual pot provocar corrossió. El punt. apartir del qual un gas condensa s'anomena Punt de Rosada (A més baixet, més sec). Per solventar aquest problema, entre les sol·lucions es destaquen la secada frigorífica per una banda que enfreden l'aire per precipitar aigua i secants d'adsorció, els quals retenen l'aigua en un material i que posteriorment cal filtrar i purgar.

Quan l'aire es comprimeix, mitjançant un procés adiabàtic, experiment uns canvis de temperatura bruscos, i posteriorment, una vegada emmagatzemat, se enfreda novament, sent possible la generació d'aigua novament. Per aquest motiu, psoterior a la compressió, habitualment l'aire s'enfreda una segona vegada (aftercooler).

Els canvis de temperatura, que augmenten o disminueixen la densitat provoquen un estirament o contracció del gas. Aquests canvis són la raó de la pitjor precissió de la pneumàtica respecte d'altres mètodes d'automatització. L'expansió/compressió provoca retards, rebots i canvis de velocitat dels actuadors.

Una norma (ISO 8573-1), classifica l'aire comprimit en diversos nivells de puresa. És útil, ja que algunes industries, com l'alimentària, no permeten cap traça d'olis a l'aire.

## Components pneumàtics

Un sistema pneumàtic està compost per elements els qual acondicionen, regulen i distribueixen l'aire comprimit. Entre els diversos components cal tindre en compte:

Per una banda el compressor, el qual s'encarrega d'extrure l'aire de l'atmosfera i elevar la pressió fins els valors necessàris. Hi ha diversos tipus, d'un costat els d'èmbol i pistó, molt econòmics, i d'altra els de caragol rotatiu, pels casos en els quals es necessita un flux constant d'aire, també són més silenciosos. Darrerament també hi són els d'aletes.

El depòsit acumulador és l'encarregat de estabilitzar la pressió dels sistema a la determinada i emmagatzemar l'aire per evitar el nombre d'arrancades del compressor. La unitat de manteniment, s'encarrega de que l'aire arribe de manera correcta als actuadors. Consta de tres elements: el filtre, que neteja l'aire d'impureses; el regulador, el qual manté la pressió constant i el lubricador, el qual genera una boira d'oli als components quan escau.

Els actuadors són els encarregats de generar moviments mecànics. El cilindre d'efecte simple funciona alimentant d'aire una de les càmeres i el retorn es genera habitualment per un moll a l'altra, també existeix però, el cilindre de doble efecte, el qual permet l'entrada d'aire a les dues càmeres, aleshores per fer el moviment contrari no escau un moll o força externa. Existeixen molt tipus de cilindre: sense plançó, multiposició o d'impacte (per reblons). 

La força del cilindre es calcula mitjançant la fòrmula F=PxA on A és l'Àrea del cilindre. PixR^2, en el retrocés però, cal descomptar el radi del plançó. Amb l'objectiu de corregir la força real, escau aplicar el factor n=0.85.

Les vàlvules són les encarregades de controlar la direcció del caudal de l'aire. Es classifiquen per vies i posicions, a banda de per l'accionament (manual, mecànic, pneumàtic o elèctric). per la notació, es designen vies sobre posicions 3/2 o 5/3. Les que en tenen 3, poden retindre el cilindre en una posició intermitja. Les vàlvules compleixen funcions reguladores moltes vagades (de pressió, caudal) i poden ser bidireccionals o unidireccionals 

Cal també destacar els elements auxiliars que complementen el circuit, com racors, mangueres, tuberies, silenciadors manòmetres o presostats (per transformar nivells de pressió en senyals elèctrics).

## Valors característics

A l'hora de dissenyar un circuit no cal només comprendre els diversos components que el componen sinó que també escau dominar els valors que determinen el seu funcionament òptim i dimensionat. 

- Pressió de treball: És el nivell de pressió que s'estableix pel conjunt de l'instal·lació. Habitualment solen ser 6 Bars. 
- Força de l'actuador: S'obté mitjançant la fórmula F=nxPxA. Com més gran el diàmetre del cilindre, més força. 
- Caudal: Mesurat en Nl/min, detewrmina la velocitat de resposta dels actuadors. Un d'insuficient, provoca moviments erràtics i lents mentre que un d'excessiu, pot provocar colps.
- Consum del sistema: Cada cilindre o motor consumeix una quantitat d'aire per cicle, que s'obté multiplicant el volum desplaçat per la rel·lació de pressió Abs/Atm per la cadèmcia de treball. La suma de tots els consums és la base per dimensionar el compressor.
- Pèrdues de càrrega: s'originen en filtre, tuberies i ràcors i redueixen la pressió del circuit, afectant la força i la velocitat.
- Temps de cicle: Depén del caudal, el volum dels cilindres i la geometria de les tuberies. 
- Coeficient de caudal (Kv/Cv): les vàlvules posseeixen valors que indiquen la seva capacitat de deixar passar l'aire; triar vàlvules amb un coeficient adequat evita escanyaments.

## Electropneumàtica: tècnica de comandament

L'electropneumàtica ajuda a obtindre sistemes més flexibles i segurs mitjançant la implemantació d'elements elèctrics a la part de control. D'aquesta manera s'obté una combinació entre la potència pneumàtica i el control elèctric, molt més segur i fiable. 

Per l'implementació de senyals elèctriques els circuits necessiten incloure diversitat de sensors: fotoelèctrics, inductius, finals de carrera, magnètics, manòmetres, presostats i capacitius. Així aconsegueixen detectar posicions, objectes o condicions que ajudaran a prendre decisions.

Per prendre decisions, l'electropneumàtica fa ús de polsadors, selectors, temporitzadors o relés als centres de comandament. Així, és possible automatitzar decisions i posicions, mitjançant autòmats programables o controlar a distància els circuits mitjançant un comandament. 

Un element essencial dels circuits electromecànics són les electrovàlvules. Aquestes, a diferència de les normals s'accionen mitjançant bobines que s'exciten i desplacen l'obturador, deixant passar l'aire. Poden ser monoestables, les quals requereixen d'un moll o força externa que la torne a la seua posició inicial, o biestables, les quals "memoritzen" la darrera posició.

Els cirucuits electropneumàtics, també afegeixen complicació a la representació. A diferència dels circuit pneumàtics, els quals només es regeixen per la norma ISO 1219 de representació, aquests afegeixen la IEC 60617, per la part elèctrica. Totes dos representacions requereixen de referències entrecreuades per facilitar l'enteniment

## Desenrotllaments seqüencials

Per realitzar una automatització de caracter industrial, els desenvolupaments seqëncials són essencials. Serveixen per ordenar l'actuació de diversos elements del circuit. Amb una notació simple (avançament o retrocés +, -) defineixen les seqüències A+A-B+B-. Existeixen diversos tipus d'automatitzacions, des de les purament pneumàtiques a les que inclouen plcs.

Les purament pneumàtiques, utilitzen finals de carrera pneumàtics i vàlvules lògiques. El principal inconvenient és que de vegades els senyals es solapen i impossibiliten un canvi de fase net. Per evitar-ho s'utilitza el mètode cascade o pas a pas. Els quals, habiliten l'aire per grups.

Els elèctrics, és el més freqüent a la industria, aquests fan servir PLCs com memòries i utilitza sensors per generar senyals interpretables elèctricament. Inclou habitualment temporitzadors o contadors. Facilita molt la modificació.

Pel disseny d'aquestes seqüències es fa servir el software de dibuix normalitzat GRAFCET, aquest permet definir amb claritat les diverses etapes, trancicions i condicions que cal complir per anar avançant. Transmet el disseny conceptual directament en una implementació pràctica, tant en un circuit cablejat com en un PLC, sent la ferramenta de referència.

Els desenvolupaments seqüencials són habitualment utilitzats en sistemes de pick and place, embalatge o sistemes de classificació.

Per seguretat, aquests sistemes, fan ús de sistemes de pulsadors bimanuals, per mantindre ambdues mans ocupades, sensibilitat de pressió, vàlvules de bloquig o finals de carrera redundants per garantir la norma iso de seguretat.

## Conclusions

Els automatismes pneumàtics tenen un paper essencial en moltes industries gràcies a la rapidesa, seguretat, flexibilitat seguretat i cost que aporten. Tot i així, també plantegen diversos inconvenients com la precisió o la poca rigidesa. 

Comprendre els fonaments físics, els tipus de components necessaris en un circuit i els valors per un correcte funcionament, ajuden a dissenyar, comprendre o mantindre un circuit i la implementació de l'electromagnètica amb ferramentes de disseny com GRAFCET amplien les possibilitats. 

Des del punt de vista docent, el caràcter transversal de la pneumàtica la converteix en el contingut idoni per desenvolupar competències de disseny interpretació i manteniment.

## Bibliografia

- Bosch Rexroth. Tecnología Neumática: Manual Técnico. Bosch Rexroth AG.
- Esposito, A. Fluid Power with Applica&ons. Pearson Education.
- SMC – Manuales técnicos, catálogos y formación online (www.smc.eu).