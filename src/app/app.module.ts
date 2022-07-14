import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { exampleReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExampleEffects } from './store/effects';
import { ExampleOneComponent } from './example-component/example-one/example-one.component';
import { ExampleTwoComponent } from './example-component/example-two/example-two.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({example: exampleReducer}),
    EffectsModule.forRoot([ExampleEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
