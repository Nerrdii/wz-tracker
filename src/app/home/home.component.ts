import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public platforms: { value: string; label: string }[] = [
    { value: 'psn', label: 'PlayStation' },
    { value: 'steam', label: 'Steam' },
    { value: 'battle', label: 'Battle.net' },
    { value: 'xbl', label: 'XBOX' },
    { value: 'acti', label: 'Activision ID' },
  ];

  public searchForm = new FormGroup({
    platform: new FormControl('', [Validators.required]),
    gamertag: new FormControl('', [Validators.required]),
  });

  public get platform() {
    return this.searchForm.get('platform');
  }
  public get gamertag() {
    return this.searchForm.get('gamertag');
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch() {
    const gamertag = this.gamertag?.value;
    const platform = this.platform?.value;
    this.router.navigate(['details', gamertag, platform]);
  }
}
