import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { PostListComponent } from './app/post-list/post-list.component';
import { DataService } from './app/data.service';

@Component({
  selector: 'app-root',
  template: '<app-post-list></app-post-list>',
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // Include FormsModule here
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
