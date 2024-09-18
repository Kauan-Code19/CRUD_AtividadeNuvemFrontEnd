import { Component, OnInit } from '@angular/core';
import { ClotheResponse } from '../../interfaces/clothe-response';
import { ClothesService } from '../../services/clothes/clothes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
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
}
