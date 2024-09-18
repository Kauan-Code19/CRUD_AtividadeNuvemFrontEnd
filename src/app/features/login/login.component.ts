import { Component } from '@angular/core';
import { ButtonSendDataAdministratorComponent } from "../../shared/buttons/button-send-data-administrator/button-send-data-administrator.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministratorService } from '../../services/administrator/administrator.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ButtonSendDataAdministratorComponent, ReactiveFormsModule],
  providers: [AdministratorService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Form group to manage the login inputs: email and password
  inputsForm: FormGroup<{ email: any; password: any }>;

  constructor(private administratorService: AdministratorService, private router: Router) {
    this.inputsForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(8), 
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=]).*$')
        ]),
    });
  }

  submit() {
    if (this.inputsForm.valid) {
      this.administratorService.login(this.inputsForm.value.email, this.inputsForm.value.password)
        .subscribe({
          next: () => {
            this.router.navigateByUrl("/products")
          },
        })
    }
  }
}
