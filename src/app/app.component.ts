import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  images = [
    {'image': 'assets/images/indenpendance.jpg', 'label': 'test label 2', 'desc': 'test description 2'},
    {'image': 'assets/images/cake.jpg', 'label': 'Delicious Cakes ', 'desc': 'Fresh and delicious cakes are ready 24 hours'},
    {'image': 'assets/images/display1.jpg', 'label': 'test label 2', 'desc': 'test description 2'},
    // {'image': 'assets/images/temp-images/slide-1-flex.jpg', 'label': 'test label 1', 'desc': 'test descripition'},
    // {'image': 'assets/images/temp-images/slide-2-flex.jpg', 'label': 'test label 2', 'desc': 'test description 2'}
  ];
}
