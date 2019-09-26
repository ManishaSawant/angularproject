import { CustomerDetails} from './customer-details.model';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {
formData:CustomerDetails;
list:CustomerDetails[];
readonly rootURL="http://localhost:54506/api"
  constructor(private http:HttpClient) 
  { }
  postCustomerDetail(formData)
  {
return this.http.post(this.rootURL + '/CustomerDetail',formData);
  }
  putCustomerDetail(formData)
  {
    debugger;
return this.http.put(this.rootURL + '/CustomerDetail/'+this.formData.CUST_ID ,formData);
  }
  deleteCustomerDetail(id)
  {
  return this.http.delete(this.rootURL + '/CustomerDetail/'+id );
  }
  refreshList()
  {
    this.http.get(this.rootURL + '/CustomerDetail')
    .toPromise()
    .then(res=>this.list=res as CustomerDetails[]);
  }
}
