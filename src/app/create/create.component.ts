import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Service} from '../shared/service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public myModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  @Output() workerCreated = new EventEmitter<{ name: string, role: string, tel: number, id: number }>();
  @Output() headWorkerCreated = new EventEmitter<{ name: string, role: string, tel: number, id: number }>();
  @ViewChild('workerRoleInput', {static: false}) workerRoleInput: ElementRef;
  userForm: FormGroup;

  constructor(private service: Service) {
    this.userForm = new FormGroup({ // создание новой формы
      name: new FormControl(null, [Validators.required]), // поля формы
      role: new FormControl(null, [Validators.required]),
      tel: new FormControl(null, [Validators.required]),
      id: new FormControl()
    });
  }

  onAddWorker() {
    this.service.workerElements.push({
      name: this.userForm.value.name,
      role: this.userForm.value.role,
      tel: this.userForm.value.tel,
      id: Date.now()
    });
  }

  onAddHeadWorker() {
    this.service.workerElements.push({
      name: this.userForm.value.name,
      role: this.userForm.value.role,
      tel: this.userForm.value.tel,
      id: Date.now()
    });
  }
}
