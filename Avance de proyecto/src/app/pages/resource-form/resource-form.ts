import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ResourcesService } from '../../services/resources.service';

@Component({
  selector: 'app-resource-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './resource-form.html',
  styleUrl: './resource-form.css',
})
export class ResourceForm {
  private catalog = inject(ResourcesService);

  categories = this.catalog.categories;
  resourceTypes = this.catalog.resourceTypes;
  tags = this.catalog.tags;

  error = '';
  validated = false;

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    url: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    category: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    resourceType: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    tags: new FormControl<string[]>([], {
      nonNullable: true,
    }),
    imageUrl: new FormControl('', {
      nonNullable: true,
    }),
  });

  onSubmit(): void {
    this.error = '';
    this.validated = false;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const values = this.form.getRawValue();
    const title = values.title.trim();
    const description = values.description.trim();
    const url = values.url.trim();
    const imageUrl = values.imageUrl.trim();

    if (title === '' || description === '') {
      this.error = 'Title and description cannot be blank.';
      return;
    }

    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      this.error = 'The URL must start with http:// or https://.';
      return;
    }

    if (imageUrl !== '' && !imageUrl.startsWith('https://') && !imageUrl.startsWith('http://')) {
      this.error = 'The image URL must start with http:// or https://.';
      return;
    }

    this.validated = true;
  }
}
