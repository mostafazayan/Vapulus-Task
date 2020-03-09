import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContactRequestModel } from './../../models/contact-request-model';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss']
})
export class AddNewContactComponent implements OnInit {
  contact: ContactRequestModel = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  };

  // selecteFile: null;

  constructor(
    private dataServive: DataService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {}
  onAddContact() {
    this.dataServive.addContact(this.contact).subscribe(contactAdded => {
      console.log(contactAdded);
      this.router.navigate(['/']);
    });
  }
  // onFileSelected(event) {
  //   this.selecteFile = event.target.files[0];
  // }
  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selecteFile, this.selecteFile.name);
  //   this.http.post('https://api.vapulus.com:81/profile', fd).subscribe(res => {
  //     console.log(res);
  //   });
  // }
}
