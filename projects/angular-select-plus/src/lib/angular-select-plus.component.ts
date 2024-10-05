import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// import "node_modules/@ng-select/ng-select/themes/default.theme.css";

@Component({
  selector: 'lib-angular-select-plus',
  standalone: true,
  imports: [FormsModule, CommonModule, NgSelectModule],
  template: `<p>custom-ng-select</p>
    <ng-select
      class="custom-ng-select"
      id="{{placeholder}}"
      [items]="items$"
      [bindLabel]="bindLabel"
      [bindValue]="bindValue"
      [hideSelected]="false"
      [multiple]="true"
      [minTermLength]="1"
      [(ngModel)]="selectedVal"
      (change)="onChanges()"
      dropdownPosition="bottom"
      [closeOnSelect]="false"
      placeholder="{{placeholder|titlecase}}"
    >
      <ng-template ng-multi-label-tmp let-items="items" let-clear="clear">
        <ng-template #lessSelected>
          <div class="ng-value" *ngFor="let item of items | slice : 0 : displayQuantity">
            <span class="ng-value-label">{{ getValue(item) }}</span>
            <span
              class="ng-value-icon right"
              (click)="clear(item)"
              aria-hidden="true"
              >×</span
            >
          </div>
          <div class="ng-value" *ngIf="items.length > displayQuantity">
            <span class="ng-value-label">{{ items.length - displayQuantity }} more...</span>
          </div>
        </ng-template>

        <ng-container *ngIf="items.length === items$?.length; else lessSelected">
          <div class="ng-value">
            <span class="ng-value-label"
              >{{ items.length }} of {{ items$?.length }} Selected</span
            >
          </div>
        </ng-container>
      </ng-template>
      <ng-template ng-header-tmp>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            [checked]="selectedVal?.length === items$?.length"
            (change)="getCheckVal($event)"
            id="inlineCheckbox1"
          />
          <label for="inlineCheckbox1">Select All</label>
        </div>
      </ng-template>
      <ng-template ng-footer-tmp>
        Selected count:
        {{ selectedVal?.length }}
      </ng-template>
    </ng-select>

  `,
  styleUrls: ['./angular-select-plus.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AngularSelectPlusComponent implements OnChanges {
  @Input('items') items$: any[] | null = null;
  @Input() bindLabel: string = 'label';
  @Input() bindValue: string = 'value';
  @Input() displayQuantity: number = 4;
  @Input() placeholder: string = '';
  @Output() selectedValChange = new EventEmitter<any[] | null>();
  @Input() selectedVal: any[] | null = null;
  @Output() onChange = new EventEmitter();

  constructor(){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.bindLabel = this.bindLabel || 'label';
  }

  getValue(item: any) {
    return item[this.bindLabel];
  }
  onChanges() {
    this.selectedValChange.emit(this.selectedVal);
    this.onChange.emit();
  }

  getCheckVal(event: any) {
    if (event.target.checked) {
      this.selectedVal = this.items$ && this.items$.map((x: any) => this.bindValue? x[this.bindValue]: x[this.bindLabel]);
    } else {
      this.selectedVal = [];
    }
    this.selectedValChange.emit(this.selectedVal);
  }
}
