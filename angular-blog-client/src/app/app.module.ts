import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

=======
>>>>>>> 14b49fbb4597b89c21590446b0e269618b765cee
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    NgbModule.forRoot()
=======
    AppRoutingModule
>>>>>>> 14b49fbb4597b89c21590446b0e269618b765cee
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
