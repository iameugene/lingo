import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lingo';
  constructor(private storage: AngularFireStorage) { }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'uploads';
    const task = this.storage.upload(filePath, file);
  }
}
