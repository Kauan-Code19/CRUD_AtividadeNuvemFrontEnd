import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-send-data-administrator',
  standalone: true,
  imports: [],
  templateUrl: './button-send-data-administrator.component.html',
  styleUrl: './button-send-data-administrator.component.css'
})
export class ButtonSendDataAdministratorComponent {
  @Output() submitForm = new EventEmitter<void>()

  @Input() disabled: boolean = false

  @Input() btnText: string = "Sing In"

  submit(): void {
    this.submitForm.emit()
  }
}
