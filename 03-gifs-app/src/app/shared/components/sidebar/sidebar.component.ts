import { Component, inject } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  private gifService = inject(GifsService);

  get tags(): string[] {
    return this.gifService.tagsHistory;
  }

  reSearch(tag: string): void {
    this.gifService.searchTag(tag);
  }

}
