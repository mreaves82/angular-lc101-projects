import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Picture Pages Picture Pages';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://images.slideplayer.com/32/10077716/slides/slide_3.jpg';
  image3 = 'https://sdz-upload.s3.amazonaws.com/prod/upload/fontsize.png';

  constructor() { }

  ngOnInit() {
  }

}
