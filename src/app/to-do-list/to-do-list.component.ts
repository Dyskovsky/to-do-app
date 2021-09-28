import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemsManagemntService } from '../items-managemnt/items-managemnt.service';
import { ToDoItem } from '../shared/models/to-do-item.interface';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent implements OnInit {

  @Output() statusChanged = new EventEmitter<ToDoItem>();
  
  public items$ = this.itemsManagementService.getItems();

  constructor(private itemsManagementService: ItemsManagemntService) { }

  ngOnInit(): void {
  }

  public valueChange(item: ToDoItem, clickEvent: MouseEvent): void {
    const inputElement = clickEvent.target as HTMLInputElement;
    this.statusChanged.emit({...item, status: inputElement.checked });
  }

}
