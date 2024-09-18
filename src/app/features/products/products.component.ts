import { Component, OnInit } from '@angular/core';
import { ClotheResponse } from '../../interfaces/clothe-response';
import { ClothesService } from '../../services/clothes/clothes.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [ClothesService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  clothes: ClotheResponse[] = [];

  constructor(private clothesService: ClothesService) {}

  ngOnInit(): void {
    this.clothesService.getAllClothes().subscribe({
      next: (clothes) => {
        this.clothes = clothes 
      }
    })
  }

  // Função de edição de roupa
  editClothe(clothe: ClotheResponse): void {
    
  }

  // Função de exclusão de roupa
  deleteClothe(clotheId: number): void {
    this.clothesService.deleteClothe(clotheId).subscribe({
      next: () => {
        // Remove a roupa excluída da lista
        this.clothes = this.clothes.filter(clothe => clothe.id !== clotheId);
    }})
  }
}
