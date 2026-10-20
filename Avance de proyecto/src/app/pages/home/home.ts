import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResourceCard } from '../../components/resource-card/resource-card';
import { AuthService } from '../../services/auth.service';
import { ResourcesService } from '../../services/resources.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ResourceCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private auth = inject(AuthService);
  private catalog = inject(ResourcesService);

  user = this.auth.user;
  resources = this.catalog.filteredResources;
  resourceTypes = this.catalog.resourceTypes;
  resourceType = this.catalog.resourceType;
  category = this.catalog.category;
  tag = this.catalog.tag;

  filterType(value: string): void {
    this.catalog.resourceType.set(value);
  }

  clearFilters(): void {
    this.catalog.clearFilters();
  }
}
