import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-worker-element',
  templateUrl: './worker-element.component.html',
  styleUrls: ['./worker-element.component.css']
})
export class WorkerElementComponent {
  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  @Input() worker: { name: string, type: string, role: string, tel: number, id: number };
  userForm: FormGroup;
  constructor() {
    this.userForm = new FormGroup({ // создание новой формы
      name: new FormControl(null, [Validators.required]), // поля формы
      role: new FormControl(null, [Validators.required]),
      tel: new FormControl(null, [Validators.required]),
      id: new FormControl()
    });
  }
  removeWorker() {
    this.worker.name = null;
  }
  editWorker() {
    this.worker.name = this.userForm.value.name;
    this.worker.role = this.userForm.value.role;
    this.worker.tel = this.userForm.value.tel;
    this.worker.id = Date.now();
    this.userForm.reset();
  }
}
