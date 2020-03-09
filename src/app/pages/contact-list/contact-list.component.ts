import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ContactRequestModel } from './../../models/contact-request-model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: any = [];
  firstname: string;
  constructor(private dataServive: DataService) {}

  ngOnInit() {
    this.onGetAllContacts();
  }

  search() {
    if (this.firstname !== '') {
      this.contacts = this.contacts.filter(res => {
        return res.firstName
          .toLocaleLowerCase()
          .match(this.firstname.toLocaleLowerCase());
      });
    } else {
      this.ngOnInit();
    }
  }
  onGetAllContacts() {
    this.dataServive.getData().subscribe(allContacts => {
      allContacts.sort((record, nextRecord) => {
        if (record.firstName > nextRecord.firstName) {
          return 1;
        } else {
          return -1;
        }
      });
      this.contacts = allContacts;
      console.log(this.contacts);
    });
  }
  compare(a, b) {
    const firstNameA = a.band.toUpperCase();
    const firstNameB = b.band.toUpperCase();

    let comparison = 0;
    if (firstNameA > firstNameB) {
      comparison = 1;
    } else if (firstNameA < firstNameB) {
      comparison = -1;
    }
    return comparison;
  }
}
