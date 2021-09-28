import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemsManagemntService } from './items-managemnt/items-managemnt.service';
import { ToDoItem } from './shared/models/to-do-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  constructor(private itemsManagementService: ItemsManagemntService) { 
  }

  public onStatusChanged(item: ToDoItem): void {
    this.itemsManagementService.updateItem(item);
  }

  public addNewItem(description: string): void {
    this.itemsManagementService.addNewItem(description);
  }
}
