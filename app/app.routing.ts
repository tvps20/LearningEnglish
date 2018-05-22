import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// Paginas
import { LoginComponent } from "~/pages/login/login.component";
import { HomeComponent } from './pages/home/home.component'
import { TemaDetailComponent } from './pages/tema/temaDetail/temaDetail.component'
import { TemaComponent } from "~/pages/tema/tema.component";
import { SobreComponent } from "~/pages/sobre/sobre.component";
import { TreinoComponent } from "~/pages/treino/treino.component";



const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "home", component: HomeComponent },
    { path: "sobre", component: SobreComponent },
    { path: "tema", component: TemaComponent},
    { path: "tema/:id", component: TemaDetailComponent },
    { path: "treino/:id", component: TreinoComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }