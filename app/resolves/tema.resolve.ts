import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Tema } from "~/shared/tema.model";
import { Observable } from "rxjs/Observable";
import { TemaService } from "~/services/tema.service";

export default class TemaResolve implements Resolve<Tema> {
    
    constructor (private temas: TemaService) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Tema | Observable<Tema> | Promise<Tema> {
        let id = +route.paramMap.get('id');
        
        return new Promise((resolve, reject) => {
            if (id === 0)
                reject('error')

            resolve(this.temas.getTema(id));
        });
    }
}