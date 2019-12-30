import {Component, Input} from '@angular/core';
import {Service} from './shared/service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private search = '';
  constructor(private service: Service) {
  }
  onWorkerAdded(workerData: { name: string, role: string, tel: number, id: number }) { // обработчик события workerCreated из
    // компонента Interface
    this.service.workerElements.push({
      name: workerData.name,
      role: workerData.role,
      type: 'сотрудник',
      tel: workerData.tel,
      id: Date.now()
    });
  }

  onHeadWorkerAdded(workerData: { name: string, role: string, tel: number, id: number }) { // обработчиксобытия headWorkerCreated изк
    // омпонента Interface
    this.service.workerElements.push({
      name: workerData.name,
      role: workerData.role,
      type: 'руководитель',
      tel: workerData.tel,
      id: Date.now()
    });
  }
}

