# Automatismes hidràulics. Fonaments de la hidràulica. Compressió de líquids. Components hidràulics. Valors característics en els circuits. Electrohidràulica: tècnica de comandament. Desenrotllaments seqüencials.

La hidràulica és la tecnologia d'automatització més potent, versàtil i estable. A diferència de la pneumàtica, la qual fa servir aire comprimit, la hidràulica utilitza fluids pràcticament incompresibles, els quals aporten a aquesta tecnologia la capacitat d'exercir forces elevadíssimes, grans precisions, controls molt fins i una alta estabilitat.

La tecnologia hidràulica és molt present a la maquinària de deformació metàl·lica, sistemes d'elevació, maquinària agrícola, premses, trens d'aterratge d'avions i sistemes de frenada. 

Aquest sistema d'automatització destaca per la capacitat de transmetre forces a grans distàncies amb poques pèrdues, i la densitat de potència. Això vol dir que les forces que un component hidràulic és capaç d'exercir no serien assolibles mitjançant un component de grandària similar que faça servir tecnologia pneumàtica o elèctrica. Aquest factor ho fa essencial a la indústria pesant. Això sí, cal tindre en compte que requerirà un fluid en bones condicions, estanquitat i prou manteniment. 

En el següent tema es desenvoluparan els Fonaments físics de la hidràulica, la compressibilitat i comportament dels fluids, els components principals dels circuits, com també, els valors necessaris per al seu dimensionament, la implementació elèctrica al comandament mitjançant l'electrohidràulica i els desenrotllaments seqüencials per desenvolupar automatismes complexos.

## Contextualització a l'FP

El següent tema forma part de l'atribució a l'especialitat docent d'Organització i Projectes de Fabricació Mecànica considerada a la Llei Orgànica 3/2022, la qual ordena els estudis de formació professional. La hidràulica s'inclou de manera transversal en mòduls d'automatització i processos de fabricació tant en graus mitjans (Caldereria, Soldadura i Mecanització) com superiors (Programació de la producció mecànica i Disseny per la fabricació mecànica)

Els coneixements de l'automatització hidràulica atorguen a l'alumnat la capacitat d'anàlisi i interpretació de plànols normalitzats, com també el seu disseny; coneixement sobre els valors necessaris per a dimensionar un circuit i selecció de components i el desenvolupament i comprensió d'instal·lacions complexes mitjançant d'electrohidràulica i els desenrotllaments seqüencials. 

Entendre la hidràulica juntament amb la pneumàtica i l'elèctrica, atorga a l'alumnat una visió general de l'automatització industrial, necessària per al desenvolupament industrial en l'empresa en tasques de diagnòstic, manteniment i disseny.

## Fonaments de la hidràulica

La hidràulica consisteix a fer ús d'un fluid per transmetre energia d'un lloc a l'altre. Entendre els fonaments d'aquests fluids ajudaran a dimensionar correctament les instal·lacions.

- principi de Pascal: Aquest determina que l'exercici d'una força sobre un fluid estanc es transmetrà de manera igual en totes les direccions. D'ací s'extrau la relació F2=F1xA2/A1 la qual ens indica que aplicant una força reduïda sobre un émbol de secció xicoteta, s'obté una força gran sobre un émbol de secció més alta. 

- Incompressibilitat del fluid: Aquest principi indica que el volum dels fluids no varia gaire amb els canvis de pressió. Això, permet explicar per què ofereix una major precisió, resposta i rigidesa que la pneumàtica.

- Caudal: El caudal, definit mitjançant la fórmula Q=vxt ens indica que la velocitat dels actuadors depén totalment del caudal que es deixa passar per la vàlvula.

- Potència: La potència, calculada com N=pxQ permet deduir que la força fixa la pressió i la velocitat el caudal. Per mesurar la pressió, el SI determina que cal fer ús dels Pascals Pa, tot i que a la indústria, s'utilitzen els bars 1bar=10^5Pa

Els avantatges oferits per aquesta tecnologia d'automatització són: La capacitat d'obtindre forces molt superiors; major rigidesa, la qual permetrà que sota càrregues molt elevades no es moguen els actuadors; el suport sota aquestes càrregues, gràcies a les vàlvules limitadores; la vida útil dels components; i l'elevada precisió i fàcil regulació.

Tot i així, aquesta tecnologia presenta diversos desavantatges. Entre aquests es pot destacar la necessitat de molt manteniment; que el fluid estiga net, ja que incorporació de partícules, aire i altres pot danyar els components; possibilitat de fugues, les quals provoquen brutícia i pèrdues de pressió; sensibilitat a la temperatura que pot degradar el fluid i afectar a la seua viscositat; necessitat d'un grup de bombeig constant; i el cost de la instal·lació i components, el qual és més elevat.

Davant la pneumàtica, permet forces i precisió molt superiors, però moviments menys ràpids i un cost d'instal·lació més elevat. Davant d'actuadors elèctrics, resulta més apropiada en ambients agressius on hi haja càrregues pesades, puix que aporta una major robustesa. A la fi, cada un d'aquests mètodes té avantatges respecte a la resta, per aquest motiu, les instal·lacions modernes disposen de sistemes mixtos que permeten extraure les millors característiques d'uns i altres.

## Compressió de líquids

Els fluids hidràulics són l'element principal del sistema, ja que són els encarregats de transportar l'energia, refrigeren el circuit i els protegeixen contra la corrosió, i evacuen les impureses. Per aquest motiu, seleccionar-lo adequadament és crucial per la instal·lació.

Un bon fluid ha de presentar una viscositat adequada, estabilitat davant l'oxidació, bones propietats lubricants, resistència tèrmica, compatibilitat amb materials del circuit i ausencia d'aire i partícules. Un equilinbri incorrecte pot provocar desgast.

Hi ha quatre tipus principals de fluids utilitzats: 
- Olis minerals: Utilitzats per la seua relació cost-rendiment
- Fluids sintètics: Major estabilitat tèrmica i ressitència al foc
- Fluids biodegradables: Utilitzats a la indústria agrícola, ja que no afecten el medi ambient en cas de fuga
- Emulsions oli/aigua: Utilitzades a la indústria siderúrgica, ja que redueixen el risc d'incendi.

La viscosittat n'és la característica més important d'un fluid. Un bon fluid ha de presentar una viscositat adequada, ja que una d'alta podria provocar pèrdues i danys per rosament mentre que una baixa afavoreix fugues internes. Es classifica mitjançant graus ISO VG. Així i tot, també en són relevants compatibilitat química amb altres elements del circuit, la capacitat de lubricació i la resistència a l'envelliment.

La contaminació dels fluids és la causa més habitual de fallades als sistemes hidràulics. Pot consistir en l'entrada d'aire, partícules o vapor d'aigua que condense, que degrade el fluid o els components. Per fer-hi front s'utilitzen filtres, anàlisi periòdics, classificació de l'estat d'acord amb la norma ISO 4406 i canvis habituals del líquid per manteniment.

## Components hidràulics

Els components hidràulics són els encarregats de dirigir, controlar i determinar les funcions d'un circuit hidràulic. Una correcta selecció d'aquests serà essencial per dissenyar una instal·lació.

Les bombes, són l'element encarregat de tranformar l'energia mecànica del motor primari en energia hidràulica. El seu caudal ho defineix Q=cilindrada x velocitat de gir. Poden ser d'engranatges, paletes (les més silencioces) o de pistons axials (alta pressió). La bomba però, no genera pressió per si mateixa, la pressió apareix quan el fluid troba resistència al circuit. 

El diposit compleix la funció d'emmagatzemar el fluid, disipar la calor i decantar les partícules del líquid.

Els elements de conducció són els encarregats de distribuir el fluid pel circuit mitjançant tuberies rígides i mangueres (resistens a les pressions i temperatures) i l'addició de ràcors permet montar modularment el sistema.

Respecte a les vàlvules, són les encarregades de dirigir i controlar el caudal que entra als actuadors. Existeixen les vàlvules distribuidores, que regulen la direcció. Aquestes es defineixen pel tipus d'actuació i pel nombre de vies i posicions; vàlvules limitadores, que fixen la pressió màxima; lògiques, que fan servir els sistemes lògics per control del sistema; i d'estrangulament, per reduir el caudal. Aquestes darreres solen qacompanyar-se de no-retorn, per controlar en una direcció.

Els actuadors són els encarregats de transformar l'energia en moviment. Existeixen els cilíndres que poden ser: d'efecte simple, quan només una de les cambre es activa i el retorn es realitza per forces externes o per un moll; de doble efecte, que permet activar dues càmeres per realitzar un retorn hidràulic; telescòpic, i d'impacte, per reblons. Per calcular la força exercida pels cilindres s'utilitza la fòrmula F=pxA, als de doble efecte, per calcular el retocés, caldra descomptar l'àrea del plançò. 

Cal també mencionar els elements auxiliars, necessaris pel correcte funcionament. Entre aquests es poden destacar: Els filtres, encarregats de extraure les partícules als fluids; els intercanviadros de calor, que regulen la tempratura; els acumuladors, que emmagatzemen energia hidràulica; i els manómetres i presostats, que mesuren la pressió i msanen senyasl elèctrics.

## Valors característics en els circuits

Tot i que es coneguen els diversos elements que componen un circuit i les seues funcions, es imperatiu coneixer els valors característics d'un automatisme hidràulic, això, permetrà poder dimensionar adequadament la instal·lació. Aquests són:

- Caudal: Ho determina la velocitat Q=vxt, cal trobar-ne un equilibri adequat, puix que un de molt elevat podria provocar moviments no controlats i un de baix podria provocar moviments més erràtics.
- Pressió: És la força exercida pel fluid, les aplicacions industrials treballen habitualment sota 100-350 bar.
- Força: És la força exercida pels actuadors, F=pxA, resulta important diferenciar entre la idea l i la real, a la que caldra afegir el factor
- Pèrdues: Pèrdues provocades per fugues o insercions d'altres elements, aquestes poden reduir la pressió que és possible exercir pel fluid.
- Rendiment: Es distingeix el rendiment volumètric (afectat per fugues internes), del mecànic (Afectat per rosaments), i del global, el producte de ambdós. 
- Temperatura: Si s'eleva massa, pot afectar la viscositat i degradar el fluid, habitualment es manté sota uns 50-60 graus.

## Electrohidràulica: tècnica de comandament

A fi de obtenir un millor control amb una elevada precissió, introduint-hi autòmates programables s'utilitza la electrohidràulica, aquesta combina la capacitat de control elèctrica, la qual és precisa i flexible amb la potència hidràulica, separant-ne els actuadors dels controladors.

A fi de que es puguen generar senyals elèctrics escauen sensors al circuit, els quals transmetran posicions, trajectòries, temperatures, situacions ambientals, posicions, materials, pressions i activitat elèctrica a senyals interprestables per ordinador. Per això es fan servir: finals de carrera, sensors ambientals, fotoelèctrics, capacitius, presostats, termostats i LVDT entre altres.

Una vegada s'ha generat la resposta, seràn les vàlvules les encarregades d'activar-se i regular el caudal i direcció. Per aquest motiu a l'electrohidràulica es fa ús d'electrovàlvues i servovàlvules, les primeres s'activen mitjançant una bobina que s'exita, mou la posició, pasant d'oberta a tancada o viceversa; per altra banda, la servo vàlvula otorga més control, ja que permet controlar l'entrada de líquid i regular-la en proporció al senyal elèctric.

El comandament elèctric es construeix mitjançant reles, temporitzadors i contactors quan es requeris de lògica programada. Si es b usca flexibilitat s'implementen autòmats programables PLCs, els quals gestionaran seq¨ències complexes, enclavaments i condicins de seguretat. 

L'electrohidràuloca, però, planteja una complicació afegida a l'hora de representar esquemes normalitzats, puix que, afegit a la norma ISO 1219 de representació hidràulica, s'ha d'afegir la norma IEC 60617 de representació d'esquemes elèctrics. D'aquesta manera, s'escau una doble representació amb referències entrecreuades.

Mitjançant servovàlvules, sensors lineals i controladors digitals s'ajusten la posició i la velocitat amb enorme precisió, emprant un llaç tancat que compara contínuament la magnitud mesurada amb la consigna i corregeix l'error.

## Desenrotllaments seqüencials

La seqüenciació ordena els moviments de diveros actuuadors de manera que funcinen seguint un ordre. Mitjançant una notació abreviada el defineix amb signe + o - l'avançament o retrocés del cilindre i amb lletres (A, B, C...) els cilíndres, definint una seqüència completa.

Aquestes seqüenciacions no han de implimentar la hidràulica necessàriament, poden fer-se implementant finals de carrera i actuadors purament hidràulics, tot i que dificulta la modificació, fa els sistemes més robustos per ambients més agressius.

Les electrohidràuliques per altra banda són les més utilitzades implementant sensors amb actuadors hidràulics, són molt més flexiblesi fàcils de modificar.

El disseny pas a pas és el ecarregat de fer front a les senyals solapades que poden ocorrer en sistemes purament hidràulics. En aquest potser que arriben dos senyals per costats diferents a una vàlvula distribuidora, la qual es bloqueja. Per fer-hi front, aquest sistema separa la seqüència en grups on els actuadors no es repeteixen i permeten fer un disseny en el qual s'activen els grups definits en un order determinat. 

GRAFCET és el llenguatge tècnic normalitzat que descriu una seqüència mitjançant etapes, trancisions, repitivitats i accions associades a cada etapa. És de gran importància ja que, transmet un disseny conceptual en un cricuit cablejat o a la programació PLC, facilitat la implementació i servint com a documentació tècnica.

Els desenrotllaments són implementats en sistemes d'elevació, frenada, maquinària de plegat, premses i embragaments. 

Per causa de la potència d'aquesta tecnologia, exigeix mesures de seguretat molt definides com: vàlvules de caiguda, bloqueig, elements redundants, presostats de seguretat, control de fugues... tot definit per la norma ISO 13849

## Conclusions

Els automatismes hidràulics es constitueixen essencials per la automatització industrial per cuassa de la seua capacitat de generar forces molt elevades i la seua precissió. La seua densitat de potència la converteix en una tecnologia essencial per la indústria pesada. 

El tècnic/a ha de comprendre els fonaments físics juntament amb els valors de dimensionament necessaris per poder dissenyar una instal·lació optima, per la qual caldrà seleccionar correctament tots els elements correctament d'acord amb la seua funció. Darrerament en cas de voler dissenyar un automatisme complexe, serà imperatiu conèixer els desenrotllaents seqüencials i l'implementació electehidràulica. 

Des del punt de vista de la docència el coneicement de cadascun dels apartats d'aquest tema juntament amb la pneumàtica i la elèctrica otorga a l'alumnat una visió general de l'automatització industrial, així com unes capacitats de muntatge, manteniment, diagnòstic i disseny essencials per tècnics de disseny i programació de la producció.

## Bibliografia

- Esposito, A. Fluid Power with Applications. Pearson Education.
- Bosch Rexroth. Manual Técnico de Hidráulica. Bosch Rexroth AG.
- SMC Corporation. Tecnología de Fluidos: Catálogo y Manual de Aplicaciones.