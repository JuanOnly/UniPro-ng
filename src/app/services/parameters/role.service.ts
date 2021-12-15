import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RoleModel } from 'src/app/models/parameters/role.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  url: string = ConfigurationData.SECURITY_MS_URL;
  tk: string = '';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecodList(): Observable<RoleModel[]> {
    return this.http.get<RoleModel[]>(`${this.url}/roles`);
  }
  SearchRecord(id: number): Observable<RoleModel> {
    return this.http.get<RoleModel>(`${this.url}/roles/${id}`);
  }

  SaveRecod(data: RoleModel): Observable<RoleModel> {
    console.log(data);

    return this.http.post<RoleModel>(
      `${this.url}/roles`,
      {
        nombre: data.nombre,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  EditRecord(data: RoleModel): Observable<RoleModel> {
    console.log(data);

    return this.http.put<RoleModel>(
      `${this.url}/roles/${data.id}`,
      {
        nombre: data.nombre,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  RemoveRecord(id: number): Observable<RoleModel> {
    return this.http.delete<any>(`${this.url}/roles/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
