import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number | undefined;
  month: number | undefined;

  constructor(private route: ActivatedRoute, 
              private router: Router) { 

  }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    this.year = Number(params.get('year'));
    this.month = Number(params.get('month'));

  }

  viewAll(){
    this.router.navigate(['/']);
  }

}
