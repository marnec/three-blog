import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private readonly http = inject(HttpClient);

  async getAll(folderPath: string): Promise<string[]> {
    // return firstValueFrom(this.http.get<string[]>(folderPath));
  }
}
