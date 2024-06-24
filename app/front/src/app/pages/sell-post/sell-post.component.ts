import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-sell-post',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './sell-post.component.html',
  styleUrl: './sell-post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SellPostComponent {
  postsBooks: any[] = []
}
