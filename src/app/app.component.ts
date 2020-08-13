import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home';

  
  public onToggleSidenav = () => {
    //this.sidenavToggle.emit();
  }

  public onSidenavClose = () => {
    // this.sidenavClose.emit();
  }
}
