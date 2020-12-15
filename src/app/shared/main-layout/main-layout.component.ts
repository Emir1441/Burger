import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  images = ['./assets/image/slide/slideOne.jpg', './assets/image/slide/slideTwo.jpg', './assets/image/slide/slideThree.jpg']


}
