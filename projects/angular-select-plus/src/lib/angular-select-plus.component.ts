import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'lib-angular-select-plus',
  standalone: true,
  imports: [FormsModule, CommonModule, NgSelectModule],
  template: `
    <ng-select
      class="custom-ng-select"
      id="{{placeholder}}"
      [items]="items$"
      bindLabel="name"
      bindValue="id"
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
          <div class="ng-value" *ngFor="let item of items | slice : 0 : 4">
            <span class="ng-value-label">{{ getValue(item) }}</span>
            <span
              class="ng-value-icon right"
              (click)="clear(item)"
              aria-hidden="true"
              >×</span
            >
          </div>
          <div class="ng-value" *ngIf="items.length > 4">
            <span class="ng-value-label">{{ items.length - 4 }} more...</span>
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
  styles: `
    .custom-ng-select {
      .ng-dropdown-panel {
        .ng-dropdown-panel-items {
          .ng-option {
            border-bottom: 1px solid #5ca8db95;
            &.ng-option-marked {
              background-color: #a31515;
              color: white;
              font-weight: bold;
              .cus_phone,
              .cus_pport > div:first-child,
              .cus_eid > div:first-child {
                color: white;
              }
            }
          }
        }
      }
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,

})
export class AngularSelectPlusComponent {
  @Input('items') items$: any[] | null = null;
  @Input() placeholder: string = '';
  @Output() selectedValChange = new EventEmitter<any[] | null>();
  @Input() selectedVal: any[] | null = null;
  @Output() onChange = new EventEmitter();

  getValue(item: any) {
    return item.name;
  }
  onChanges() {
    this.selectedValChange.emit(this.selectedVal);
    this.onChange.emit();
  }

  getCheckVal(event: any) {
    if (event.target.checked) {
      this.selectedVal = this.items$ && this.items$.map((x: any) => x.id);
    } else {
      this.selectedVal = [];
    }
    this.selectedValChange.emit(this.selectedVal);
  }
}
