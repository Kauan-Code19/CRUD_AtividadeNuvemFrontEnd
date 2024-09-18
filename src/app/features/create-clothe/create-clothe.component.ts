import { Component } from '@angular/core';
import { ButtonSendDataAdministratorComponent } from '../../shared/buttons/button-send-data-administrator/button-send-data-administrator.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClothesService } from '../../services/clothes/clothes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-clothe',
  standalone: true,
  imports: [ButtonSendDataAdministratorComponent, ReactiveFormsModule],
  providers: [ClothesService],
  templateUrl: './create-clothe.component.html',
  styleUrl: './create-clothe.component.css'
})
export class CreateClotheComponent {
  clotheForm: FormGroup;

  constructor(private clothesService: ClothesService, private router: Router) {
    this.clotheForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      price: new FormControl('', [Validators.required, Validators.min(0.01)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      size: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      material: new FormControl('', Validators.required)
    });
  }
  
  submit() {
    if (this.clotheForm.valid) {
      this.clothesService.createClothe
      (
        this.clotheForm.value.name,
        this.clotheForm.value.price,
        this.clotheForm.value.description,
        this.clotheForm.value.size,
        this.clotheForm.value.color,
        this.clotheForm.value.material
      ).subscribe({
        next: () => {
          this.router.navigateByUrl("/products")
        }
      })
    }
  }
}
