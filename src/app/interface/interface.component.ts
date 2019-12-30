import {Component, ElementRef, EventEmitter, NgModule, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
  public myModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  @Output() workerCreated = new EventEmitter<{ name: string, role: string, tel: number, id: number }>();
  @Output() headWorkerCreated = new EventEmitter<{ name: string, role: string, tel: number, id: number}>();
  @ViewChild('workerRoleInput',  {static: false}) workerRoleInput: ElementRef;
  userForm: FormGroup;
  constructor() {
    this.userForm = new FormGroup({ // создание новой формы
      name: new FormControl(null, [Validators.required]), // поля формы
      role: new FormControl(null, [Validators.required]),
      tel: new FormControl(null, [Validators.required]),
      id: new FormControl()
    });
  }
  onAddWorker() {
    this.workerCreated.emit({
      name: this.userForm.value.name,
      role: this.userForm.value.role,
      tel: this.userForm.value.tel,
      id: Date.now()
    });
  }
  onAddHeadWorker() {
    this.headWorkerCreated.emit({
      name: this.userForm.value.name,
      role: this.userForm.value.role,
      tel: this.userForm.value.tel,
      id: Date.now()
    });
  }
}
