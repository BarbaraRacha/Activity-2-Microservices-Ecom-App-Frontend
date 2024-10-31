import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrl: './bill-details.component.css'
})
export class BillDetailsComponent implements OnInit {
  bill : any;
  billId! :number;
  constructor(private http:HttpClient, private router : Router, private route: ActivatedRoute) {
    this.billId=route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/BILLING-SERVICE/fullBill/"+this.billId)
      .subscribe({
        next : (data)=>{
          this.bill=data;
        },
        error : (err)=>{}
      });
  }


  handleBillDetails(id:number) {
    this.router.navigateByUrl('/bill-details/'+id)
  }
}
