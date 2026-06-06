# Processos de mecanització i control numèric (CNC)

## Generalitats de la conformació per arrancada de material

### Conceptes bàsics 

### Eines de tall

## Màquines eina

### Planejadora

### Llimadora

### Mortasadora

### Brotxadora

### Torn

### Fresadora

### Perforadora 

### Rectificadora





## Programació i control numèric

Per controlar les màquines de fabricació (fresadores, impressores 3D, plotters de tall...) s'ha de programar el seu moviment i les funcions que farà durant aquest moviment. Per fer-ho s'usen els anomenats ```g-code``` i ```m-code```.   

### Automatització





### Programació CNC 

#### Alguns comandaments essencials de codi G:

**G00** representa moviments ràpids.

```
 G00 X5 Y10 Z5;
```
**G01** Talla en una línia recta. Aquest, cal acompanyar-ho del comandament `F`, el qual representa el 'Feed Rate' de la màquina (mm/min).

```
G01 X10 Y0 F500;
```

**G02** Talla una corba en sentit horari. Cal acompanyar-ho de `R` (radi).

```
G02 X2 Y10 R5;
```

**G03** Corba tallada en sentit antihorari.

```
G03 X10 Y-10 R5;
```

**G21** Estableix el mode mètric.

```
G21;
```

**G20** Estableix el mode imperial.

```
G20;
```

**G53** Coordenades de la màquina

**G54** Coordenades del sistema (Offset)

**G83** Peck drilling

```
G83 X Y Z R P Q F
```

**G90** Distàcies absolutes.

**G91** Distàncies incrementals.

**G94** 'Feed Rate' establit en `mm` o `inch`, la qual cosa depen de si `G20` o `G21` està aplicat.



---

#### Alguns comandaments essencials de codi M:

**M0** Pausa la màquina, quan és polsa sobre l'actuador de la màquina una altra vegada continuarà des d'on està.

**M2** Acaba el programa.

**M3** Comença a girar el fus en sentit horari. Pot combinar-se amb el comandament `S` per determinar la velocitat de gir RPM

```
M3 S1200;
``` 

**M4** Comença a girar el fus en sentit antihorari. Pot combinar-se amb el comandament `S` per determinar la velocitat de gir RPM. Cal tindre ne compte, però, que calen unes eines especials per treballar en sentit antihorari.

```
M4 S1200;
``` 

**M5** Para el gir del fus.

**M8** Comença l'enfredament per aigua o activa un relé SSR (Relé d'Estat Sòlid).

**M9** Para l'enfredament per aigua o activa un relé SSR (Relé d'Estat Sòlid).

**M30** Para el programa i torna a la primera línia

**M98** Comença subprograma

**M99** Acaba subprograma


---

#### Codis de lletres

**F** Feed Rate

**R** Radi

**S** velocitat del fus

**X** Moure's en direcció X

**Y** Moure's en direcció Y

**Z** Moure's en direcció Z

**N** Número de línia

**I** Radi quan es fa un cercle





### Robots industrials






## Mecanització d'alta precisió

### Electroerosió

### Rectificació

### Tornejament de precisió

### Fresatge de precisió

## Bibliografia

- https://www.haascnc.com/service/service-content/guide-procedures/mill---g-codes.html#gsc.tab=0
