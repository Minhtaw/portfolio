import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  modal!: HTMLElement;
  closeBtn!: HTMLElement;
  images!: HTMLCollectionOf<Element>;
  popupImage!: HTMLImageElement;
  caption!: HTMLElement;
  isModalOpen: boolean = false;
  modalImageSrc: string = '';

  captions: { [key: string]: string } = {
    "/assets/1.png": "In the quiet depths of the forest, a graceful deer cautiously navigated through the dappled sunlight, its delicate presence blending seamlessly with nature's ethereal beauty.",
    "/assets/2.jpeg": "Nestled amidst towering mountains, a campsite emerged, where a flickering campfire embraced the cool night air, illuminating a tapestry of starlit peaks that whispered tales of awe and adventure.",
    "/assets/3.jpeg": "Hiking is an exhilarating outdoor activity that allows you to immerse yourself in nature, explore scenic trails, and challenge your physical endurance while experiencing a sense of peace and adventure.",
    "/assets/4.png": "Within the majestic embrace of towering mountains, a lush and enchanting forest thrives, bathed in the warm glow of the sun. As birds take flight, their wings gracefully carry them through the breathtaking landscape, adding a touch of freedom and harmony to the scene.",
    "/assets/5.jpg":  "In the vast expanse of their farm, the diligent farmers toiled under the radiant sun, tending to the fertile land with unwavering dedication, while above them, a symphony of birds painted the sky with graceful flight, their wings dancing to the rhythm of nature's melodies.",
    "/assets/6.jpg": "Under the shade of towering palm trees, the farmer skillfully steered his bullock cart, traversing the fertile fields of his farm, eagerly anticipating the comforts of home."
  };
  
  constructor() {}

  ngOnInit(): void {
    this.modal = document.getElementById("myModal")!;
    this.closeBtn = document.getElementsByClassName("close")[0] as HTMLElement;
    this.images = document.getElementsByClassName("img");
    this.popupImage = document.getElementById("popupImage") as HTMLImageElement;
    this.caption = document.getElementById("caption")!;

    this.closeBtn.addEventListener("click", this.closeModal.bind(this));

    for (let i = 0; i < this.images.length; i++) {
      this.images[i].addEventListener("click", (event) => {
        const imageSrc = (event.target as HTMLElement).getAttribute("src")!;
        this.openModal(imageSrc);
      });
    }
  }

  openModal(imageSrc: string): void {
    this.modal.style.display = "block";
    this.popupImage.src = imageSrc;
    this.caption.textContent = this.captions[imageSrc];
  }

  closeModal(): void {
    this.modal.style.display = "none";
  }
}
