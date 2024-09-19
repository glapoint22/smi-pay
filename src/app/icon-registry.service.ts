import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

interface SvgIconConfig {
  url: SafeResourceUrl;
  svg: SafeHtml | null;
}

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {
  private icons = new Map<string, SvgIconConfig>();
  private sanitizer = inject(DomSanitizer);


  public registerIcon(iconName: string, url: string): void {
    this.icons.set(iconName, { url: url, svg: null });
  }


  public async getIcon(iconName: string): Promise<SafeHtml> {
    const config = this.icons.get(iconName);

    if (!config) {
      throw new Error(`No icon registered with the name '${iconName}'`);
    }

    if (!config.svg) {
      // Fetch SVG and sanitize it
      const response = await fetch(config.url.toString());
      const svgText = await response.text();
      config.svg = this.sanitizer.bypassSecurityTrustHtml(svgText);
    }

    return config.svg;
  }
}