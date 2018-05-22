import { Component, OnInit } from '@angular/core'
import { Page } from 'ui/page'

import { Tema } from '../../shared/tema.model'
import { TemaService } from '../../services/tema.service'

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    public temas: Tema[]
    
    constructor(private temaService: TemaService, private page: Page){}

    ngOnInit(): void {
        this.loadTemas()
        //this.page.on(("navigatingFrom"), () => this.loadTemas())
    }

    private loadTemas(){
        this.temas = this.temaService.getTemas();
    }
}