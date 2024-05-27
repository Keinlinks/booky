import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommentI } from '../../../../models/comment';

@Component({
  selector: 'booky-comment',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  @Input() comment:CommentI = {
    content: '',
    username: '',
  }
}
