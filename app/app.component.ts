import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  template: `
  <form class="form-container">
    <img src="images/logo.jpg" alt="logo" class="img-responsive">
 
    <label>Email:<br />
        <input type="email" name="userEmail" class="form-control" required />
    </label> <br />
    
    <label>Password:<br />
        <input type="password" name="userPass" class="form-control" required/>
    </label> <br />
    <br />
    <input type="submit" class="btn btn-block btn-primary" value="Login">
</form>`
})
export class AppComponent { }