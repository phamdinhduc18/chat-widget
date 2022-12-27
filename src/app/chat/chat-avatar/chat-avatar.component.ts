import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DestroyService } from '../../shared';

@Component({
  selector: 'app-chat-avatar',
  template: ` <img [attr.src]="image" class="avatar" alt="" /> `,
  styles: [
    `
      .avatar {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class ChatAvatarComponent {
  constructor(private readonly destroyService: DestroyService) {}
  @Input() public image = '';
}
