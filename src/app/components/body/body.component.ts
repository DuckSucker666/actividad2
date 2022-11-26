import { Component } from "@angular/core";

@Component({
    selector: "app-body",
    templateUrl: "./body.component.html",
    styleUrls: ["./body.component.css"]
})

export class BodyComponent {
    mostrar = true;
    frase: any = {
        mensaje: 'Bienvenidos al curso de DFSTACK',
        autor: 'Certus'
    };
    personajes:string[] = ['Batman', 'Ironman', 'Venus']
}