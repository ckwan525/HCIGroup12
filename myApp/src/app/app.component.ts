import { Component } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';

  name:string='';
  constructor(private httpClient:HttpClient){}
  onNameKeyUp(event:any){
  	this.name = event.target.value;
  }
  getEvent(){
  	console.log(this.name);
  	this.httpClient.get('localhost:3000/events')
  	.subscribe{
  		(data:any[]) => { 
  			console.log(data);
  		}
  	};
  }

}
