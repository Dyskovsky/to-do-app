import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToDoItem } from '../shared/models/to-do-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsManagemntService {
  private  items$ = new BehaviorSubject<ToDoItem[]>([]);
  private static currentItemId = 1;

  constructor() { }

  public getItems(): Observable<ToDoItem[]> {
    return this.items$.asObservable();
  }

  public addNewItem(newItemDescription: string): void {
    this.items$.next([
      ...this.items$.getValue(),
      {
        description: newItemDescription,
        status: false,
        id: ItemsManagemntService.currentItemId++,
      }
    ]);
  }

  public updateItem(item: ToDoItem) {
    const items = this.items$.getValue();
    const targetItemIndex = items.findIndex(listItem => listItem.id === item.id);
    items.splice(targetItemIndex, 1, item);
        this.items$.next([...items]);
  }
}
