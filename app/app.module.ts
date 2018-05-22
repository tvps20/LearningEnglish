import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

// Pacotes


// Import Services
import { TemaService } from './services/tema.service'

// Import pages
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from './pages/home/home.component'
import { TemaComponent } from "~/pages/tema/tema.component";
import { TemaDetailComponent } from './pages/tema/temaDetail/temaDetail.component'
import { SobreComponent } from "~/pages/sobre/sobre.component";
import { TreinoComponent } from "~/pages/treino/treino.component";




@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        SobreComponent,
        TemaComponent,
        TemaDetailComponent,
        TreinoComponent
    ],
    providers: [
        TemaService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
