import { Component } from '@angular/core';
import { ButtonSendDataAdministratorComponent } from '../../shared/buttons/button-send-data-administrator/button-send-data-administrator.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClothesService } from '../../services/clothes/clothes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-clothe',
  standalone: true,
  imports: [ButtonSendDataAdministratorComponent, ReactiveFormsModule],
  providers: [ClothesService],
  templateUrl: './edit-clothe.component.html',
  styleUrl: './edit-clothe.component.css'
})
export class EditClotheComponent {
  clotheId: number | null = null;
  clotheForm: FormGroup;

  constructor(
    private route: ActivatedRoute, // Para acessar o ID da rota
    private clothesService: ClothesService,
    private router: Router
  ) {
    // Inicializa o formulário
    this.clotheForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      price: new FormControl('', [Validators.required, Validators.min(0.01)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      size: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      material: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.clotheId = +(this.route.snapshot.paramMap.get('id') ?? 0);
  }
  
  submit() {
    if (this.clotheForm.valid && this.clotheId != null) {
      this.clothesService.updateClothe
      (
        this.clotheId,
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
