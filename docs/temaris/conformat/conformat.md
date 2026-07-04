# Conformació de materials 

## Fonaments de la conformació per deformació plàstica: fonaments i anàlisis de tensió i deformació

La deformació plàstica consisteix en l'aplicació d'un esforç mecànic mitjançant càrregues sobre el material per aconseguir superanr el límit de fluència del material modificant la geometria i que el canvi de forma siga permanent per obtenir una nova geometria, la qual depenent de les condicions de treball i les propietats del material poden ser distintes respecte a les considerades inicialment

``` mermaid
graph LR
  A[Cargues exteriors] --> B[Aplicació d'un esforç mecànic];
  B --> C[Modificació de la geometria];
  D[Límit de fluència] --> C;
  C -->E[Canvi de forma permanent];
  F[Nova geometria / propietats] -->E;
```

Aquest procés es restrigeix d'acord amb:

``` mermaid
stateDiagram-v2
  state material
  state temperatura
    material --> restringeix
    temperatura --> restringeix
    restringeix --> S1
    restringeix --> S2
    restringeix --> S3
    restringeix --> S4
    S1: Tipus de geometria
    S2: Propietats finals de la peça
    S3: Seqüència de tasques que cal realitzar
    S4: Qualitat de la peça final
```

La deformació plàstica per tant és la deformació aplicada a un material no recuperable

<figure markdown="span">
    ![](./img/deformacio_plastica.png){ width="300" }
    <figcaption>Foto de Juan Manuel Vallejos: https://youtu.be/5u1yQZHw1iA?si=0obRAIccrV5Q-MD6</figcaption>
</figure>


La deformació plàstica provoca:

- Canvis de forma significatius respecte a la matèria de partida.
-  Millores en les característiques mecàniques del material.
- En alguns casos s'obtenen peces acabades sense necessitat de processament posterior.
- Toleràncies més ajustades i acabats superficials millors que en peces obtingudes per fosa.
- Possibilitat d'obtenir tant geometries senzilles com complexes.

Els efectes de la temperatura en el procés de deformació plàstica es basen en l'assoliment de la temperatura de recristalització, la qual es pot definir com la meitat de la de fusió. Arribar a aquesta temperatura provoca un creiximent del gra i canvia la localització de la deformació en la estrucutra (a les vores del gra o al gra). Si es treballa per sota de la T s'anomenta conformat en fred i si es treballa per damunt conformat en calent.

``` mermaid
graph TB
    A["Conformat en fred"]
    A --> B["Sense recristal·lització"]
    B --> C["Deformació intragranular"]
    C --> D["Canvien les proprietats mecàniques"]
    D --> E["Requereix grans esforços"]

    F["Conformat en calent"]
    F --> G["Recristal·lització"]
    G --> H["Deformació intergranular"]
    H --> I["No canvien les proprietats mecàniques"]
    I --> J["Requereix esforços menors"]
```

Les formes inicials inclouen barres, totxos cilíndrics, totxos rectangulars i planxes, així com altres formes similars elementals. Els processos de deformació volumètrica que refinen les formes originals, algunes vegades milloren les propietats mecàniques. El treball dels processos de deformació consisteix a sotmetre el metall a un esforç suficient per a fer que aquest fluisca plàsticament i prenga la forma desitjada.

### Conformat en fred

El treball en fred o sota la temperatura de cristal·lització és apropiat quan el canvi de forma és menys sever i hi ha necessitat de millorar les propietats mecàniques, o aconseguir un bon acabat en la peça final.

<figure markdown="span">
    ![](./img/deformacio_fred.png){ width="600" }
    <figcaption>Foto de Universitat Politècnica de València: https://www.weerg.com/es/guias/galvanizacion</figcaption>
</figure>

Les operacions de treball en fred es poden usar no solament per a donar forma al producte, sinó també per a incrementar la seva resistència mitjançant l'enduriment per deformació.

Això provoca que el material no estiga homogeneïtzat; tensions residuals als materials; un augment de la duresa, el límit elàstic i la fragilitat; i que l'esforç requerit depenga del grau de deformació.

### Conformat en calent

El treball en calent es requereix generalment quan involucra la deformació volumètrica de grans peces de treball. En aquest cas, ocorre una major homogeneïtat del material, No s'acumulen tensions residuals al material, les proprietats mecàniques no són afectades, i l'esforç que es requereix depen de la velocitat de deformació.

<figure markdown="span">
    ![](./img/deformacio_calent.png){ width="600" }
    <figcaption>Foto de Universitat Politècnica de València: https://www.weerg.com/es/guias/galvanizacion</figcaption>
</figure>

Amb les operacions de treball en calent es poden aconseguir canvis significatius en la forma de les peces de treball.

## Processos de deformació volumètrica

``` mermaid
graph TB
    A["Processos de deformació volumètrica"]
    A --> B["Canvis significatius de forma (3D)"]
    B --> C["Conformat en calent"]
    C --> D["Toleràncies i acabats superficials limitats"]

    E["Processos de conformat de xapa"]
    E --> F["Canvis en forma 2D, mantenint un espessor]
    F --> G["Conformat en fred"]
    G --> H["Toleràncies i acabats superficials bons"]
```

### Laminatge

El laminatge és un procés de deformació en el qual el gruix del material de treball es redueix mitjançant forces de compressió exercides per dos corrons oposats.

<figure markdown="span">
    ![](./img/laminatge.png){ width="600" }
    <figcaption>Foto de Fundamentos de la manufactura moderna</figcaption>
</figure>

El procés s'usa per a reduir el gruix d'una secció transversal rectangular. Un procés estretament relacionat és el laminatge de perfils, en el qual una secció transversal quadrada es transforma en un perfil, tal com en una biga en I.

La majoria del laminatge es realitza en calent a causa de la gran quantitat de deformació requerida. Els metalls laminats en calent estan generalment lliures d'esforços residuals i les seues propietats són isotròpiques. Els desavantatges són que el producte no pot mantenir-se dins de toleràncies adequades, i la superfície presenta una capa d'òxid característica.

El treball comença amb un lingot d'acer fos recentment solidificat. Encara calent, el lingot es col·loca en un forn on roman durant moltes hores, fins a aconseguir la temperatura uniforme en tota la seua extensió, perquè puga fluir consistentment durant el laminatge.

El lingot reescalfat passa al molí de laminació, on es lamina per a convertir-lo en una de les tres formes intermèdies anomenades lupies, totxos o planxes.

Les lupies es laminen per a generar perfils estructurals i raïls per a ferrocarril. Els totxos es laminen per a produir barres i varetes. Aquestes formes són la matèria primera per al maquinat, estirat de filferro, forjat i altres processos de treball de metalls. Les planxes es laminen per a convertir-les en plaques, làmines i tires.

<figure markdown="span">
    ![](./img/formes_intermitges_laminatge.png){ width="600" }
    <figcaption>Foto de Fundamentos de la manufactura moderna</figcaption>
</figure>

Involucra el laminatge de planxes, tires, làmines i plaques, peces de treball de secció transversal rectangular amb un ample
major que el gruix. En el laminatge pla, es pressiona el treball entre dos corrons de manera que el seu gruix es redueix a una quantitat anomenada *draft*

La fricció es presenta en el laminatge amb un cert coeficient de fricció, i la força de compressió dels corrons, multiplicada per aquest coeficient de fricció, dona per resultat una força de fricció entre els corrons i el treball. En el costat de l'entrada del punt neutre la força de fricció té una direcció; en l'altre costat, té la direcció oposada. No obstant això, les dues forces no són iguals. La força de fricció és major en l'entrada, de manera que la força neta estira el treball a través dels corrons. El laminatge no seria possible sense aquestes diferències. Hi ha un límit per al màxim *draft* possible que pot aconseguir el laminatge pla amb un coeficient de fricció

El laminatge en calent es caracteritza sovint per una condició anomenada adherència, en la qual la superfície calenta del material de treball es pega als corrons sobre l'arc de contacte. Aquesta condició ocorre sovint en el laminat d'acers i aliatges per a alta  temperatura. Quan ocorre l'adherència, el coeficient de fricció pot ser tan alt com 0.7. La conseqüència de l'adherència és que les capes superficials del material de treball no es poden moure a la mateixa velocitat que la velocitat del corró *vr*; i sota la superfície la deformació és més severa a fi de permetre el pas de la peça a través de l'obertura entre els corrons.

<figure markdown="span">
    ![](./img/velocitats_corro.png){ width="600" }
    <figcaption>Foto de Fundamentos de la manufactura moderna</figcaption>
</figure>

Variació típica de pressió al llarg de la longitud de contacte en el laminatge pla. La pressió pic es localitza en el punt neutre. L'àrea sota la corba, representada per la integral, és la força de laminació F.

<figure markdown="span">
    ![](./img/pressio_laminatge.png){ width="600" }
    <figcaption>Foto de Fundamentos de la manufactura moderna</figcaption>
</figure>

#### Laminatge de perfils

<figure markdown="span">
    ![](./img/laminatge_perfils.jpg){ width="600" }
    <figcaption>Foto de Voestalpine: https://www.voestalpine.com/sadef/es/Laminado-en-frio</figcaption>
</figure>

En el laminatge de perfils, el material de treball es deforma per a generar un contorn en la secció transversal. Els productes fets per aquest procediment inclouen perfils de construcció com a bigues en I, en L i canals en O.

Els corrons formadors són més complicats; i el material inicial, de forma usualment quadrada, requereix una transformació gradual a través de diversos corrons per a aconseguir la secció final. El disseny de la seqüència de les formes intermèdies i els corresponents corrons es diu disseny de passades de laminació. La seva meta és aconseguir una deformació uniforme

#### Molins laminadors

<figure markdown="span">
    ![](./img/molins_de_laminatge.png){ width="600" }
    <figcaption>Foto de Fundamentos de la manufactura moderna</figcaption>
</figure>

Es disposa de diverses configuracions de molins de laminació:

Dos corrons oposats i es denomina molí de laminació de dos corrons, aquesta, pot ser reversible o no reversible. En el molí no reversible els corrons giren sempre en la mateixa direcció i el treball sempre passa a través del mateix costat. El molí reversible permet la rotació dels corrons en totes dues direccions, de manera que el treball pot passar a través de qualsevol direcció. Això permet una sèrie de reduccions que es fan a través del mateix joc de corrons, passant simplement el treball diverses vegades des de direccions oposades. El desavantatge de la configuració reversible és la quantitat significativa de moviment angular a causa de la rotació de grans corrons

En la configuració de tres corrons, hi ha tres corrons en una columna vertical i la direcció de rotació de cada corró roman sense canvi. Per a aconseguir una sèrie de reduccions es pot passar el material de treball en qualsevol direcció, ja siga elevant o baixant la tira després de cada pas. L'equip en un molí de tres corrons es torna més complicat a causa del mecanisme elevador que es necessita per a elevar o baixar el material de treball.

En els molins de quatre corrons s'usen dos corrons de diàmetre menor per a fer contacte amb el treball i dos corrons darrere com a suport, A causa de les altes forces de laminatge, els corrons menors podrien desviar-se elàsticament amb el pas de la laminació, si no fos pels corrons més grans de suport que els suporten.

Una altra configuració que permet l'ús de corrons menors contra el treball és el molí en conjunt o ram.

Per a aconseguir altes velocitats de rendiment en els productes estàndard s'usa freqüentement un molí de corrons en tàndem. Aquesta configuració consisteix en una sèrie de bastidors de corrons i cadascun realitza una reducció en el gruix o un refinament en la forma del material de treball que passa entre ells. A cada pas de laminació s'incrementa la velocitat, fent significatiu el problema de sincronitzar les velocitats dels corrons en cada etapa.

Els avantatges inclouen: eliminació de fosses de reescalfat, reducció del espai en les instal·lacions i temps de manufactura més  curts. Aquests avantatges tècnics es tradueixen en beneficis econòmics per a aquells molins que poden realitzar la colada contínua i la laminació.

#### Altres processos de laminatge

##### Laminatge de cordes

<figure markdown="span">
    ![](./img/laminatge_de_cordes.png){ width="600" }
    <figcaption>Foto de Fundamentos de la manufactura moderna</figcaption>
</figure>

El laminatge de cordes s'usa per a formar cordes en peces cilíndriques mitjançant la seva laminació entre dos encunys. És el procés comercial més important per la producció massiva de components amb cordes externes (perns i caragols)

La majoria de les operacions de laminatge de cordes es realitza per treball en fred, utilitzant màquines laminadores de cordes. Aquestes màquines estan equipades amb encunys especials que determinen la grandària i forma de la corda; els encunys són de dos tipus: encunys plans que es mouen alternadament entre si i encunys rodons, que giren relativament entre si per a aconseguir l'acció de laminatge.

##### Laminatge d'anells

<figure markdown="span">
    ![](./img/laminatge_anells.png){ width="600" }
    <figcaption>Foto de Fundamentos de la manufactura moderna</figcaption>
</figure>

El laminatge d'anells és un procés de deformació que lamina les parets gruixudes d'un anell per a obtenir anells de parets més primes, però d'un diàmetre major.

El laminatge d'anells s'aplica usualment en processos de treball en calent per a anells grans i en processos de treball en fred per a anells petits. Els avantatges del laminatge  d'anells sobre altres mètodes per a fabricar les mateixes peces són: l'estalvi de matèries primeres, l'orientació ideal dels grans per a l'aplicació i l'enduriment a través del treball en fred.

##### Laminat d'engranatges

Aquest és un procés de format en fred que produeix certs engranatges. És similar al laminatge de cordes, excepte perquè les característiques de deformació dels cilindres o discos s'orienten paral·lelament al seu eix (o a un angle en el cas d'engranatges helicoidals), en lloc de l'espiral del laminatge de cordes.

##### Perforat de corrons

<figure markdown="span">
    ![](./img/perforat_corrons.png){ width="600" }
    <figcaption>Foto de Fundamentos de la manufactura moderna</figcaption>
</figure>

És un procés especialitzat de treball en calent per a fer tubs sense costura de parets gruixudes. Utilitza dos corrons oposats i per tant s'agrupa entre els processos de laminatge. El procés es basa en el principi que en comprimir un sòlid cilíndric sobre la seva circumferència, es generen alts esforços de tensió en el seu centre. Si la compressió és prou alta, es forma
una esquerda interna. Aquest principi s'aprofita en el perforat de corrons. Els esforços de compressió s'apliquen sobre el totxo sòlid cilíndric per dos corrons. Un mandril s'encarrega de controlar la grandària i acabat de la perforació creada per l'acció. S'usen els termes perforat rotatori de tubs i procés *Mannesmann* per a aquesta operació en la fabricació de tubs.

### Forjat



### Extrusió 



### Trefilatge




## Conformació de xapa: processos amb separació de material i sense



### Encunyat



### Embotit



### Doblat



### Repujat



## Processos de conformació de materials polimèrics i compostos



### Injecció



### Extrusió



### Termoconformació



### Bufament



### Emmotlament rotacional



### Laminatge manual



### Projecció simultània



### Emmotlament centrífug



### Bobinatge de fils



### Prepeg, SMC, pultrusió, RTM, VARI



### Emmotlament per injecció de resina




## Tractaments tèrmics i superficials

Al diagrama de meta estable i ferro carboni es representen les transformacions que pateixen els acers al carboni amb la temperatura considerant que l'escalfament de la mescla es realitza molt lentament de mode tal que els processos de difusió tinguen temps per a completar-se. Utilitzant aquest diagrama es pot determinar a diferents temperatures i percentatges de carboni les fases presents i les seves proporcions relatives la distribució de les fases en la microestructura entre altres coses. No obstant això, en la pràctica de la metal·lúrgia en general existeixen refredaments que no són lents de manera que els processos de difusió i la formació de fases d'equilibri no es produeixen de la manera que indica el diagrama. D'aquesta manera, la velocitat de escalfament i sobretot la de refredament influiran en els paràmetres micro estructurals com ara la grandària del gra i també en les fases presents i la seua distribució, modificant així les propietats mecàniques.

En metal·lúrgia es defineix a un tractament tèrmic com la combinació d'operacions d'escalfament i refredament de temps determinats i aplicats a un aliatge en l'estat sòlid de tal manera que produirà propietats desitjades.

<figure markdown="span">
    ![](./img/Fe-C_diagrama.png){ width="600" }
    <figcaption>Foto de Wikimedia: https://es.wikipedia.org/wiki/Diagrama_hierro-carbono#/media/Archivo:Iron_carbon_phase_diagram.svg</figcaption>
</figure>

### Recuita

Recuita per a alleujament de tensions: la temperatura de re cristal·lització del acer de baix carboni és d'aproximadament 500 graus celsius. D'aquesta manera durant un procés de laminació en calent la recristal·lització procedeix simultàniament amb la laminació, aconseguint que les tensions que sorgeixen del procés siguen alleujades a mesura que es van produint. Tot i així, amb freqüència s'ha d'aplicar una quantitat considerable de treball en fred als acers de baix carboni com per exemple en el trefilatge, el qual es produeix a temperatura ambient o en la laminació en fred. En aquests casos, és imperatiu alleujar les tensions per poder realitzar més operacions de conformatge sense que aquest es trenque.

La recuita es duu a terme entre 500 i 700 graus celsius aproximadament. Aquest és el rang és per damunt de la temperatura de cristal·lització, es completarà en qüestió de minuts. Cal anar en compte, però, ja que una recuita prolongada pot causar un deteriorament de les propietats, puix que la ductilitat pot augmentar i causar una pèrdua de resistència a causa del creixement excessiu de grans i una globulització de les capes de cementita en l'estructura ferritica perdent així la microestructura perlítica de capes de ferrita i cementita. 

<figure markdown="span">
    ![](./img/recuita_1.png){ width="600" }
    <figcaption>Foto de Juan Manuel Vallejos: https://youtu.be/lABq26BapwA?si=fV14PpvQaVdcU4vE</figcaption>
</figure>

Cal aclarir que com la temperatura de recuita d'alleujament de tensions és menor que la d'optimització, no hi ha canvi de fase i els constituents de ferrita i cementita romanen en l'estructura durant tot el procés.

<figure markdown="span">
    ![](./img/recuita_2.png){ width="600" }
    <figcaption>Foto de Juan Manuel Vallejos: https://youtu.be/lABq26BapwA?si=fV14PpvQaVdcU4vE</figcaption>
</figure>

### Normalitzat

En aquest es realitza un escalfament a una alta temperatura (similar a la recuita) però el refredament és a l'aire, és a dir, més ràpid. Això provoca que el temps per a la formació de perlita siga menor i que aquesta quede més fina, endurint l'aliatge. NO ES REFREDA EN CONDICIONS D'EQUILIBRI

La resistència mecànica serà més alta que en un element recuiut.


### Tempre

En refredaments lents el C pot difondre's fora de l'estructura i formar cementita. Contràriament, si es refreda ràpidament l'aliatge des d'una temperatura per sobre de la austenització el C intersticial de la fase austenita no té temps de difondre durant la transformació, quedant retingut i produint una fase sobresaturada BCT. Aquesta estructura es denomina martensita i la seua xarxa presenta distorsions a causa del C retingut, endurint l'aliatge. A contingut més alt de C, major distorsió i duresa.


<figure markdown="span">
    ![](./img/tremp_1.png){ width="600" }
    <figcaption>Foto de Juan Manuel Vallejos: https://youtu.be/lABq26BapwA?si=fV14PpvQaVdcU4vE</figcaption>
</figure>


<figure markdown="span">
    ![](./img/Martensite.jpg){ width="600" }
    <figcaption>Foto de Wikimedia: https://en.wikipedia.org/wiki/Martensite#/media/File:Martensite.jpg</figcaption>
</figure>

### Reveniment

L'acer al carboni en fase martensítica després del tremp es troba amb moltes tensions residuals producte de la ràpida transformació de fase. A causa d'això, l'aliatge és molt dur i fràgil. Per a millorar la ductilitat, es realitza un tractament tèrmic de reveniment, aprofitant que la martensita és una fase metaestable, per a descompondre part d'ella en ferrita i cementita i per a alleujar tensions.

<figure markdown="span">
    ![](./img/reveniment.png){ width="600" }
    <figcaption>Foto de Juan Manuel Vallejos: https://youtu.be/lABq26BapwA?si=fV14PpvQaVdcU4vE</figcaption>
</figure>

### Nitruració

És un tractament termoquímic que es dona a l'acer a còpia d'afegir nitrogen quan se l'escalfa. El resultat és un increment de la duresa superficial de l'acer obtingut. També augmenta la resistència a la corrosió i a la fatiga dels materials.

La nitruració es pot fer en un forn o per ionització. En el primer cas la peça es fica a un forn ple d'una atmosfera d'amoníac i després s'escalfa fins a uns 500 °C. Amb això l'amoníac es descompon en nitrogen i hidrogen; l'hidrogen se separa del nitrogen per diferència de densitat i el nitrogen, en entrar en contacte amb la superfície de la peça, forma un recobriment de nitrur de ferro.

<figure markdown="span">
    ![](./img/nitruracio_1.jpg){ width="600" }
    <figcaption>Foto de Wikimedia: https://en.wikipedia.org/wiki/Nitriding#/media/File:Computerised_Heat_Treatment_Furnance.jpg</figcaption>
</figure>

En el cas de la nitruració iònica, les molècules d'amoníac es trenquen mitjançant l'aplicació d'un camp elèctric el qual s'aconsegueix sotmetent l'amoníac a diferència de potencial d'entre 300 i 1000 volts. Els ions de nitogen van cap al càtode (que consisteix en la peça a tractar) i reaccionen per a formar nitrur de ferro, Fe₂N.

Cal un posterior temperat del ferro. Les parts del ferro que no es vulguin nitrurar es recobreixen amb un bany d'estany-plom al 50%.

<figure markdown="span">
    ![](./img/nitruracio_2.png){ width="600" }
    <figcaption>Foto de Ingeniosos: https://youtu.be/F6tY6y0r-Sw?si=C41F2HX-LqUK3CYB</figcaption>
</figure>

Aquest procés s'utilitza en aliatges que no trempen i és molt car jan que s'han de mantindre al firn durant prou de temps. 

### Cementació

La cementació, és un tractament tèrmic d'enduriment superficial en el qual el ferro o l'acer absorbeixen carboni mentre el metall s'escalfa en presència d'un material que conté carboni, com carbó vegetal o monòxid de carboni. Depenent de la durada del procés i de la seva temperatura, l'àrea afectada pot variar en contingut de carboni. Els temps de cementació més llargs i les temperatures més altes generalment augmenten la profunditat de la difusió del carboni.

<figure markdown="span">
    ![](./img/cementacio_1.png){ width="600" }
    <figcaption>Foto de Ingeniosos: https://youtu.be/F6tY6y0r-Sw?si=C41F2HX-LqUK3CYB</figcaption>
</figure>

<figure markdown="span">
    ![](./img/cementacio_2.png){ width="600" }
    <figcaption>Foto de Ingeniosos: https://youtu.be/F6tY6y0r-Sw?si=C41F2HX-LqUK3CYB</figcaption>
</figure>

Normalment, s'aplica un reveniment posterior per disminuir les tensions superficials de la peça.

### Anodització

Es denomina anodització al procés electrolític de passivació utilitzat per a incrementar el gruix de la capa natural d'òxid en la superfície de peces metàl·liques. Aquesta tècnica sol utilitzar-se sobre l'alumini per a generar una capa de protecció artificial mitjançant l'òxid protector de l'alumini, conegut com a alúmina. La capa s'aconsegueix per mitjà de procediments electroquímics, i proporciona una major resistència i durabilitat de l'alumini.

El nom del procés deriva del fet que la peça a tractar amb aquest material fa d'ànode en el circuit elèctric d'aquest procés electrolític.

<figure markdown="span">
    ![](./img/anoditzacio_1.png){ width="600" }
    <figcaption>Foto de Wikimedia: https://es.wikipedia.org/wiki/Pasivaci%C3%B3n#/media/Archivo:Mecanisme_passivation_inox_es.svg</figcaption>
</figure>

Els aliatges d'alumini s'anoditzen per a augmentar la resistència a la corrosió i permetre el tenyit, una millor lubricació o una millor adhesió. No obstant això, l'anoditzat no augmenta la resistència de l'objecte d'alumini.

<figure markdown="span">
    ![](./img/anoditzacio_2.jpg){ width="600" }
    <figcaption>Foto de Wikimedia: https://es.wikipedia.org/wiki/Pasivaci%C3%B3n#/media/Archivo:Mecanisme_passivation_inox_es.svg</figcaption>
</figure>

Quan s'exposa a l'aire a temperatura ambient o a qualsevol altre gas que continga oxigen, l'alumini pur s'autopassiva formant una capa superficial d'òxid d'alumini amorf de 2 a 3 nm de gruix, que proporciona una protecció molt eficaç contra la corrosió. Els aliatges d'alumini solen formar una capa d'òxid més gruixuda, de 5 a 15 nm de gruix, però tendeixen a ser més susceptibles a la corrosió. Les peces d'aliatge d'alumini estan anoditzades per a augmentar en gran manera el gruix d'aquesta capa per a resistència a la corrosió. La resistència a la corrosió dels aliatges d'alumini disminueix significativament per uns certs elements d'aliatge o impureses: coure, ferro i silici, pel que els aliatges d'Al de les sèries 2000, 4000, 6000 i 7000 tendeixen a ser les més susceptibles.

Encara que l'anoditzat produeix un recobriment molt regular i uniforme, les fissures microscòpiques en el recobriment poden provocar corrosió. A més, el recobriment és susceptible a la dissolució química en presència de productes químics de pH alt i baix, la qual cosa provoca el despreniment del recobriment i la corrosió del substrat.

El procés d'anoditzat es realitza mitjançant l'electròlisi. En aquest, la capa d'alumini anoditzat es crea en passar un corrent continu a través d'una solució electrolítica, on l'objecte d'alumini serveix com a ànode (l'elèctrode positiu en una cel·la electrolítica). El corrent allibera hidrogen en el càtode (l'elèctrode negatiu) i oxigen en la superfície de l'ànode d'alumini, creant una acumulació d'òxid d'alumini

### Galvanització

La galvanització és un procés metal·lúrgic que consisteix a aplicar una capa protectora de zinc sobre la superfície de l'acer o un altre metall.

<figure markdown="span">
    ![](./img/galvanitzat_2.png){ width="600" }
    <figcaption>Foto de Weerg: https://www.weerg.com/es/guias/galvanizacion</figcaption>
</figure>

El zinc actua com a barrera anticorrosiva i també ofereix protecció electroquímica, evitant que l'acer subjacent s'oxidi.

Hi ha diversos tipus de galvanitzat:

<figure markdown="span">
    ![](./img/galvanitzat_1.png){ width="600" }
    <figcaption>Foto de Weerg: https://www.weerg.com/es/guias/galvanizacion</figcaption>
</figure>

És important distingir la galvanització electrolítica (ideal per a gruixos controlats i alta precisió) de la galvanització en calenta, que implica la immersió en metall fos.

La galvanització funciona millor amb acer i fosa, ja que el zinc s'adhereix de manera estable i garanteix una protecció molt elevada enfront de la corrosió.

Hi ha metalls, però, que són galvanitzables només amb tècniques específiques com l'alumini (que només pot ser mitjançant galvanització electrolítica en aliatges específics) i el zinc i els seus aliatges.

Per altra banda, també hi ha metalls NO RECOMANATS PER A GALVANITZAR, com l'acer inoxidable, pel fet que ja és resistent a la corrosió, el coure llautó, bronze, per la seua dolenta adherència del zinc o el titani, el qual no es beneficia del zincatge
 

## Bibliografia

- https://youtu.be/lABq26BapwA?si=zvU0XR7eevjxseiD
- https://youtu.be/rEV2b4I0_zQ?si=dff2sY_qutnVIDgw
- https://ca.wikipedia.org/wiki/Nitruraci%C3%B3
- https://www.weerg.com/es/guias/galvanizacion
- https://youtu.be/OgTVh-9pmTQ?si=gF9JCY2jHlsThLZD
- https://youtu.be/5u1yQZHw1iA?si=7NiOe1Rqv9xuxVPP
