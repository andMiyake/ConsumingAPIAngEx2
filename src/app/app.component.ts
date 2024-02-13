import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ConsumingAPIAngEx2';
  dogs: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe({
      next: response => this.dogs = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed.')
    })
  }



}
