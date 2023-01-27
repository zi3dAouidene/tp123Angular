import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  sendMeHome() {
    this.router.navigate(['']);
  }
  ngOnInit(): void {}
}
