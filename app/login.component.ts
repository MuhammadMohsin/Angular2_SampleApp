import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'login',
  template: `
  <form class="form-container">
      <img src="images/logo.jpg" alt="logo" class="img-responsive">
  
      <label>Email:<br />
          <input type="email" name="userEmail" class="form-control" />
      </label> <br />
      
      <label>Password:<br />
          <input type="password" name="userPass" class="form-control"/>
      </label> <br />
      <br />
      <input type="submit" [routerLink]="['/page2']" class="btn btn-block btn-primary" value="Login">
  </form>`,
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent { }