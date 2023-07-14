import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ZelleDescriptionComponent } from './body/zelle-description/zelle-description.component';
import { HowZelleComponent } from './body/how-zelle/how-zelle.component';
import { WhyZelleComponent } from './body/why-zelle/why-zelle.component';
import { FaqZelleComponent } from './body/faq-zelle/faq-zelle.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ZelleDescriptionComponent,
    HowZelleComponent,
    WhyZelleComponent,
    FaqZelleComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
