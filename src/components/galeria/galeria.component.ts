import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  @Input() imagens: string[] = [];
  fotoAtual = 0;

  // Funções para controle do carrossel
  irParaProximaFoto() {
    if (this.fotoAtual < this.imagens.length - 1) {
      this.fotoAtual++;
    }
  }

  irParaFotoAnterior() {
    if (this.fotoAtual > 0) {
      this.fotoAtual--;
    }
  }

  irParaPrimeiraFoto() {
    this.fotoAtual = 0;
  }

  irParaUltimaFoto() {
    this.fotoAtual = this.imagens.length - 1;
  }
}