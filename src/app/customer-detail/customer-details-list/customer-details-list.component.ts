import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from 'src/app/shared/customer-details.service';
import { CustomerDetails } from 'src/app/shared/customer-details.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-details-list',
  templateUrl: './customer-details-list.component.html',
  styles: []
})
export class CustomerDetailsListComponent implements OnInit {

  constructor(private custdetService:CustomerDetailsService,private toastr:ToastrService) { }

  ngOnInit() {
    this.custdetService.refreshList();
  }
  populateForm(pd:CustomerDetails)
  {
this.custdetService.formData=Object.assign({},pd);
  }
  onDelete(CustId)
     {
      if (confirm('Are you sure want to delete record?'))
       {
           this.custdetService.deleteCustomerDetail(CustId)
          .subscribe(res=>{
          this.custdetService.refreshList();
           this.toastr.warning('Deleted Successfully','Customer Information');
           this.custdetService.refreshList();

        },
            err=>{
              console.log(err);
            }
            )
        }
    } 
}
