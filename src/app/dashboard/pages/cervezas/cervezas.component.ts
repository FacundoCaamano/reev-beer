import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-cervezas',
  templateUrl: './cervezas.component.html',
  styleUrls: ['./cervezas.component.css']
})
export class CervezasComponent implements AfterViewInit{
 
  @ViewChildren('beerElement') beerElements!: QueryList<ElementRef>;

  beers = [
    { id: 1, img: '../../../../assets/imgs/cardimg.png' },
    { id: 2, img: '../../../../assets/imgs/cardimg.png' },
    { id: 3, img: '../../../../assets/imgs/cardimg.png' },
    { id: 4, img: '../../../../assets/imgs/cardimg.png' },
    { id: 5, img: '../../../../assets/imgs/cardimg.png' },
  ];

  private ticking = false; // Evita llamadas innecesarias a la función

  ngAfterViewInit() {
    this.applyParallax();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.applyParallax();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  private applyParallax() {
    const speed = 0.5; // Ajusta la velocidad para que sea más notorio

    this.beerElements.forEach((element) => {
      const img = element.nativeElement.querySelector('.beer__element--img') as HTMLElement;
      const rect = element.nativeElement.getBoundingClientRect();
      const yOffset = (rect.top - window.innerHeight / 2) * speed;

      img.style.transform = `translateY(${yOffset}px)`;
    });
  }
}