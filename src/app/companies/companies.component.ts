import { HttpClient } from '@angular/common/http';
import {
  Component, OnInit
} from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companyList:any;
  headers = ["ID", "Company Name", "Description"];

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.http.get('http://localhost:3000/companies').subscribe((res)=>{
    this.companyList=res;
    })
    }

}
