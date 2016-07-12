import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  template: `
  <div class="form-container">
    <img src="images/logo.jpg" alt="logo" class="img-responsive">
 
    <label>Email:<br />
        <input type="text" name="userEmail" class="form-control" />
    </label> <br />
    
    <label>Password:<br />
        <input type="password" name="userPass" class="form-control" />
    </label> <br />
    <br />
    <button class="btn btn-block btn-primary"> Login </button>
</div>`
})
export class AppComponent { }