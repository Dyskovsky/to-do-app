import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewItemComponent implements OnInit {
  public newItemDescription = '';

  @Output() createItem = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public onCreateClick(): void {
    if (this.newItemDescription) {
      this.createItem.next(this.newItemDescription);
      this.newItemDescription = '';
    }
  }
}
