# Routing
    ng g m [module-name] --routing 
    ng g m [module-name] --routing --module=[module-name_parent]

`--module=[module-name-parent]` indique à la CLI de l'enregistrer dans l'imports du tableau du fichier module parent.
   
### lazy
    ng generate module [module-name] --module [module-name-parent] --routing true --route [module-name]

example :
    
generate module and routing
    
    ng g m app --routing 
    
generate module ,routing and import in module app
    
    ng g m private --routing --module=app 
    
generate module ,routing and import in module app
    
    ng g m public --routing --module=app --route public 
    
    ng g m component --routing --module=app --route component   
