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
  includeNumbers = false;
;
  onKey(event: any){
    let input = event.target.value
    this.userInput = event.target.value
  }

  numberChange(){
  }

  onClick(length: number){
    this.answerOutput = '';
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = 1234567890;
    const symbols = '!@#$%';
    const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          this.answerOutput += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    console.log(this.answerOutput)
  }
}
