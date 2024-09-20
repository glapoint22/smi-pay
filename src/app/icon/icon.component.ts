import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  private sanitizer = inject(DomSanitizer);

  async ngOnInit(): Promise<void> {
    this.icon = this.getIcon(this.name());
  }

  public async getIcon(iconName: string): Promise<SafeHtml> {
    const response = await fetch(iconName.toString());
    const svgText = await response.text();
    return this.sanitizer.bypassSecurityTrustHtml(svgText);
  }
}