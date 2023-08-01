import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Password';
  userInput:number = 0;
  answerOutput: string = '';
  pool:string = '';
  includeNumbers = false;
;
  onKey(event: any){
    let input = event.target.value
    this.userInput = event.target.value
  }

  letterChecked(event: any){
    let letters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      if (event.target.checked == true) {
        this.pool += letters
      }
    }

  numberChecked(event: any){
  let numbers ='0123456789'
    if (event.target.checked == true) {
      this.pool += numbers
    }
  }

  symbolChecked(event: any){
    let symbols ='!@#$%'
      if (event.target.checked == true) {
        this.pool += symbols;
      }
    }


  onClick(length: number){
    this.answerOutput = '';
    const charactersLength = this.pool.length;

    for ( let i = 0; i < length; i++ ) {
        this.answerOutput += this.pool.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(this.pool)
  }
}
