import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
	
 }

  ngOnInit(): void {
	this.route.paramMap.subscribe((params: ParamMap) => {
      
    });
  }

}
