import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { IconRegistryService } from '../icon-registry.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  public name = input.required<string>();
  protected icon!: Promise<SafeHtml>;
  private iconRegistry = inject(IconRegistryService);

  ngOnInit(): void {
    if (this.name) {
      this.icon = this.iconRegistry.getIcon(this.name());
    }
  }
}