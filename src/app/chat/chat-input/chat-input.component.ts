import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
import { DestroyService } from '../../shared';

@Component({
  selector: 'app-chat-input',
  template: `
    <textarea
      type="text"
      class="chat-input-text"
      placeholder="Type message..."
      #message
      (keydown.enter)="onSubmit()"
      (keyup.enter)="message.value = ''"
      (keyup.escape)="dismiss.emit()"
    ></textarea>
    <button type="submit" class="chat-input-submit" (click)="onSubmit()">
      {{ buttonText }}
    </button>
    <div class="h-10 w-10 bg-red-400"></div>

  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  @Input() public buttonText = '↩︎';
  @Input() public focus = new Subject();
  @Output() public send = new EventEmitter();
  @Output() public dismiss = new EventEmitter();
  @ViewChild('message', { static: true }) message!: ElementRef;
  constructor(private readonly destroyService: DestroyService) {}
  ngOnInit() {
    this.focus.subscribe(() => this.focusMessage());
  }

  public focusMessage() {
    this.message.nativeElement.focus();
  }

  public getMessage() {
    return this.message.nativeElement.value;
  }

  public clearMessage() {
    this.message.nativeElement.value = '';
  }

  onSubmit() {
    const message = this.getMessage();
    if (message.trim() === '') {
      return;
    }
    this.send.emit({ message });
    this.clearMessage();
    this.focusMessage();
  }
}
