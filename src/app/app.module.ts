import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ConvertToYesNo } from './pipes/convert-to-yes-no.pipe';
import { StarComponent } from './star/star.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {config} from './config'
import {FirebaseAppModule, initializeApp, provideFirebaseApp} from '@angular/fire/app'
import { FirestoreModule } from '@angular/fire/firestore';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToYesNo,
    StarComponent,
    routingComponents
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    FirebaseAppModule,
    FirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
