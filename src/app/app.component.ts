import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DestroyService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class AppComponent {
  theme = 'blue';
  constructor(private readonly destroyService: DestroyService) {}
}
