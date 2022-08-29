import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tittle = "Single Application"
  constructor(private http: HttpClient){}
  apidata:any[]=[];
  loadData(){
    this.http.get('https://public.connectnow.org.uk/applicant-test/').subscribe((apidata:any)=>{
    this.apidata = apidata;
    });
  }
  ngOnInit(): void {
    this.loadData();
  }
}