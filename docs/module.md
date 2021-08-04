# Module
#### ngModule
 Les NgModules sont des conteneurs pour un bloc de 
 code cohérent dédié à un domaine d'application, 
 un flux de travail ou un ensemble de fonctionnalités 
 étroitement liées. Ils peuvent contenir des composants, 
 des fournisseurs de services et d'autres fichiers de code 
 dont la portée est définie par le NgModule contenant. 
 Ils peuvent importer des fonctionnalités exportées à 
 partir d'autres NgModules et exporter des fonctionnalités 
 sélectionnées pour être utilisées par d'autres NgModules.
    
    ng generate module [module-name]
    ng g m [module-name]
    ng g m [module-name] --module=[existing-module-nam]

exemple:
    
    ng g m shared
