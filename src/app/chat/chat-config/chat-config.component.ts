import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DestroyService } from '../../shared';

@Component({
  selector: 'app-chat-config',
  template: `
    <div class="chat-config">
      {{ text }}
      <button *ngFor="let item of themes" class="btn" [class.btn-active]="item === theme" (click)="setTheme(item)">
        {{ item }}
      </button>
    </div>
  `,
  styles: [
    `
      .chat-config {
        padding: 20px;
      }

      .btn {
        padding: 5px;
        margin: 0 2px;
        border: 1px solid #dedede;
        outline: none;
      }

      .btn-active {
        border: 1px solid #a0a0a0;
      }

      .btn:focus {
        border: 1px solid #333;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class ChatConfigComponent {
  @Input() public theme = 'blue';
  @Input() public text = 'Select theme';
  @Output() public themeChange = new EventEmitter<string>();

  constructor(private readonly destroyService: DestroyService) {}
  public themes = ['blue', 'grey', 'red'];
  public setTheme(theme: string) {
    this.theme = theme;
    this.themeChange.emit(this.theme);
  }
}
