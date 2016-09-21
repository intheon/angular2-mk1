// angular stuff
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

// routes
import { routing } from "./app.routing";

// my own component code
import { DashboardComponent } from "./dashboard.component";
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { AppComponent } from "./app.component";

// services
import { HeroService } from "./hero.service";


@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		routing
	],
	declarations: [ 
		AppComponent,
		HeroesComponent,
		DashboardComponent,
		HeroDetailComponent
	],
	bootstrap: [ 
		AppComponent
	],
	providers: [
		HeroService
	]

})

export class AppModule {  }