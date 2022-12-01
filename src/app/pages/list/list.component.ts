import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  //Importar el input filter de pipes y la interface de details

  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoDetail() {
    console.log('click');
    this.router.navigate(['detail']);
  }

  /*   goToDetails = (game: VideogamesInterface) => {
    console.log(game);
    this.router.navigate(['details', game.appId]);
  }; */
}
