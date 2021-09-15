import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStoreModule } from '@angualr/fire/firestore';

const modules: any[] = [
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  FormsModule,
  MatCardModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule,
  AngularFireStoreModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class MaterialModule {}
