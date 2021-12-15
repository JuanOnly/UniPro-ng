import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UsersModel } from 'src/app/models/parameters/users.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url: string = ConfigurationData.SECURITY_MS_URL;
  tk: string = '';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecodList(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(`${this.url}/usuarios`);
  }
  SearchRecord(_id: number): Observable<UsersModel> {
    return this.http.get<UsersModel>(`${this.url}/usuarios/${_id}`);
  }

  SaveRecord(data: UsersModel): Observable<UsersModel> {
    console.log(data);

    return this.http.post<UsersModel>(
      `${this.url}/usuarios`,
      {
        nombre: data.nombre,
        correo: data.correo,
        celular: data.celular,
        clave: data.clave,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  EditRecord(data: UsersModel): Observable<UsersModel> {
    console.log(data);

    return this.http.put<UsersModel>(
      `${this.url}/usuarios/${data._id}`,
      {
        _id: data._id, // new
        nombre: data.nombre,
        correo: data.correo,
        celular: data.celular,
        clave: data.clave,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  RemoveRecord(_id: number): Observable<UsersModel> {
    return this.http.delete<any>(`${this.url}/usuarios/${_id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
