# Control de processos industrials per ordinador. Controlador lògic programable, o autòmat programable: component. Programació. Modificació de programes. Simulació. Controladors digitals. Estratègies de control: control de regulació, optimització, adaptatiu i sistema supervisor de control.

La automatització és l'eix sobre el qual la industria moderna es suporta a fi d'assolir productivitat, estabilitat i qualitat. Des de finals del segle XX el control de processos mitjançant ordinador, s'ha imposat a la lògica cablejada, puix que permet una major rapidesa, flexibilitat i fiabilitat. En aquets context, el plc s'ha convertit en la base del sistema. 

Front a la lògica cablejada, la qual es robusta però poc flexible, el plc aporta flexibilitat mitjançant la capacitat d'adaptació mitjançant software, permetent la reconfiguració de màquines o sistemes de producció complets a noves tipologies de producte. 

En el següent tema es desenvoluparan els fonaments del plc, els elements que el componen, els llenguatges de programació i la manera de simular-los, així com sistemes avançats de control i supervisió.

## Contextualització en FP

Aquets temari forma part de la atribució docent de l'especialització Organització de projectes de fabricació mecànica amparat en la lleis 3/2022 d'ordenació dels estudis de formació professional. Juntament amb la tecnologia elèctrica, pneumàtica i hidràulica no només odna una visió general de l'automatització industrial, sinó que afavoreix el desenvolupament de les competències de disseny, diagnòstic i manteniment d'instal·lacions, necessàris per tècnics de programació de la producció. 

## Control de processos industrials per ordinador

El control per ordinador consisteix en el comandament, supervisió i regulació d'un sistema mitjançant un dispositiu electrònic programable. L'objectiu es que un procés es desenvolupe sota uns criteris, recorregint-se automàticament i prenent decisions d'acord amb el context. 

A diferència de la lògica cablejada, la qual es desenvolupava mitjançant conjunts de relés els quals s'anaven accionant entre ells, on els canvis implicaven recablejar tot el sistema, els plcs presenten una alternativa més ràpida, eficaç i adaptable. A més presenten compatibilitats i capacitat de conversió de senyals analògics i digitals.

Les arquitectures modernes presenten una estructura jeràrquica, on a la base es troba el nivell de cap (sensors i actuadors), més amunt es troba el nivell de control (PLC + reguladors PDI), per damunt el nivell de supervisió (SCADA), i per últim la gestió de la producció (MES) i el nivell empresarial (ERP).

Respecte al control, aquest pot ser distribuit o centralitzat, el centralitzat, governa tot el procés, això, tot i que simplifica l'arquitectura ho fa més vulnerable a les fallades, puix que fara parada el sistema complet i serà més dificil fer manteniment per trobar on és la falla. els sistemes distribuits faciliten això separant els subsitemes, permetent que el programa continue corrent i facilitant el manteniment. 

## L'automat programable (PLC)

Un plc (programmable logic controller), substitueix els armaris de relés per un component compacte, progrmable i fiable capaç de controlar des d'un sistema o màquina fins una producció completa.

El PLC rep informació captada pels sensors, la transforma i procesa d'acord amb el programa determinat i envia ordres als actuadors connectats. És capaç de treballar en ambients industrials bruts, humids i calents amb una elevada fiabilitat i vida útil, molt superior a la d'un ordinadr convencional.

Respecte a la seua estructura, aquest consta de una cpu, que es el cervell de l'element, mòduls d'entrada, eixida i mòduls de comunicació i expansió, que ho connecten amb altres equips.

El plc consta d'entrades i eixides digitals (si/no 1/0) i analògiques (temperatura, pressió...), les quals es passen a formats normalitzats, les eixides digitals accionen, relés, contactors, electrobvàlvules... mentre que les analògiques govewrnen reguladors de velocitat, o vàlvules proporcionals. Això permet al plc controlar tant la lògica com la regulació d'un procés. 

Es distingeixen els *PLC compactes, que integren la CPU i un nombre fix d'entrades i sortides en un sol bloc, adequats per a màquines petites; els modulars, ampliables mitjançant bastidors i targetes, per a instal·lacions grans i complexes; els distribuïts, formats per petits *PLC comunicats en xarxa; i els *PLC de seguretat, dissenyats per a executar funcions crítiques certificades pel seu nivell d'integritat *SIL

## Programació d'un PLC

La programació d'un plc implica el disseny i traducció de la lògica que governarà un plc de manera cíclica en un programa d'ordinador. Per suposar un bon hardware sense uuna bona lògica no es pot concebre, per aquest motiu és imperatiu crear un bon programa.

Els plcs es fonamenten en un funcionament cíclic on; es llegeixen les entrades mitjançant sensors; s'envien els valors rebuts a la cpu, la qual filtra i neteja els senyals captats; s'actualitzen les eixides, manant ordres als actuadors; i, per últim, es realitzen tasques de comunicació i diagnòstic. Tot aquest cicle es realitza en qëstió de milisegons.

Respecte dels llenguatges necessàris per la programació d'un plc, aquests estan regulats per una norma iec la qual determina 5 llenguatges estàndard: Information list, Structured list (molt utilitzat per càlculs), Ladder (molt simple / utilitzat per tècnics), per blocs d'informació i grafcet per seqüències.

Els temporitzadors TON / TOF i els contadors CTD / CTU, complimenten la lògica del sistema afegint esperes o comptabilitzant events en el procés com a condicions d'avançament del programa. 

Un codi estructurat en blocs els quals guarden funcions específiques ajudarà al manteniment i sol·lució de problemes (debugging), ja que simplificarà el procés per trobar errors. A més, acompanyar un codi estructurat d'una bona documentació resulta essencial per una comunicació coherent i cohesionada amb altres programadors i tècnics, puix que facilitarà la comprensió de les sol·lucions tècniques assolides.

## Modificacions

Una vegada es realitzen canvis en la programació d'un plc, resulta important conèixer les dos maneres existents de modificació al plc. Si es tracta de canvis que només implique ajustaments de valors realitzats, aquests poden ser enviats mitjançant el mode online, en el qual el plc no para el procés. En cas que es desitge realitzar canvis més estructurals de lògica, cal fer-ho pel sistema offline, el qual pararà el funcionament de la instal·lació per carregar el nou codi.

A l'hora de fer canvis, també es important l'organització. Per això, es realitzen mitjançant un sistema de control de versions, aqests guarden els canvis que s'han fet al codi per versions i permenten controlar exactament què s'ha canviat, per qui i quan. GIT n'és l'eina de control de referència. 

## Simulacions de sistemes PLC

La simulació és essencial a la industria moderna, poder analitzar quines poden ser les fallades prèviament a la aplicació estalvia diners, temps morts de producció i evita riscos en la maquinaria, persones i funcionament. A banda facilita l'aprenentatge i la formació.

Els diversos fabricants ofereixen els seus softwares de simulació SiemensPLCSIM o Schneider ExoStructure, els quals reprodueixen el comportament dels autòmats simulant entrades, processos, i fallades. La tendència actual es la utilització de digital twins per simular el comportament del sistema o màquina i fer anàlisis detallats per la seua comprensió, així com detectar fallades abans de posar en marxa la producció.

## Controladors digitals

A més de la lògica seqüencial, molts processos requereixen una regulació continua de variables com la temperatura, la pressió o la velocitat. Els controladors digitals, que van inclosos dins del plc o de manera externa s'encarreguen d'això.

En un llaç de control digital, les magnituds físiques en filtren i regulen per ser convertides en valors normalitzats. Aquests controladors prenen els senyals en intervals determinats pel mostreig. La freqüència de mostreig ha de superar el doble de la màxima freqüència prenent en el senyal per construir-la sense cap pèrdua d'informació i mantenir l'estabilitat del llaç.

El PDI és el controlador industrial més utilitzat. Elimina l'error actual entre la variable i la consigna, elimina l'error acumulat en règim permanent i anticipa l'evolució de l'error. En la seua versió digital s'implementa de forma discreta i inclou anti-windup, que evita la saturació de la component integral. Pel seu ajustament es fixa un compromís entre velocitat i estabilitat.

Cal tindre en compte però que el PID és un porcés més lent, per tant, si es tracta d'un procés molt ràpid, probablement escaiga un controlador dedicat. En la majoria de casos, però, un controlador PID inclós en un PLC farà la feina.

## Estratègies avançades de control

Més enllà de la regulació PDI, existeixen estràtegies avançades de control, les quals milloren el rendiment en processos complexes. Depenent de la naturalesa del procés i les seues condicions, caldrà fer l'elecció.

El control de llaç tancat (feedback) corregeix l'error entre la variable mesurada i la consigna, destaca per ser senzill i eficaç. El control anticipatiu (feedforward), actua sobre perturbacions conegudes abans que aquestes actuen sobre el procés. A la pràctica, ambdos processos solen conbinar-se.

Al control adaptatiu, el controlador ajusta automàticament els paràmetres en funció del comportament del sistema, adaptantse als canvis. És molt utilitzat en processos no lineals i variables.

El control predictiu basat en models (MCP), utilitza un model matemàtic del procés per predir els estats futurs i calcular l'actuació òptima. Permet anticipar-se al comportament del sistema. S'utilitza en processos compexes. 

Darrerament, els sistemes SCADA, monitoritzen la instal·lació, registren les dades històriques, alarmes, i visualitzen el procés en temps real mitjançant interfícies gràfiques. Són essencials per la gestió global de la planta, ja que ofereixen una visió de tots el prrocessos en planta, i les ferramentes per diagnosticar, documentar. Aquestes màquines, també inclouen pnatalles, botons panels tàctils... (HMI) per facilitar l'ajustament i diagnòstic in situ.
