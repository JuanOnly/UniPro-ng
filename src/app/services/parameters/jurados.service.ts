import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class JuradosService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = '';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecodList(): Observable<JuradosModel[]> {
    return this.http.get<JuradosModel[]>(`${this.url}/jurados`);
  }
  SearchRecord(id: number): Observable<JuradosModel> {
    return this.http.get<JuradosModel>(`${this.url}/jurados/${id}`);
  }

  SaveRecod(data: JuradosModel): Observable<JuradosModel> {
    console.log(data);

    return this.http.post<JuradosModel>(
      `${this.url}/jurados`,
      {
        nombre_completo: data.nombre_completo,
        correo_electronico: data.correo_electronico,
        telefono: data.telefono,
        entidad: data.entidad,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  EditRecod(data: JuradosModel): Observable<JuradosModel> {
    console.log(data);

    return this.http.put<JuradosModel>(
      `${this.url}/jurados/${data.id}`,
      {
        nombre_completo: data.nombre_completo,
        correo_electronico: data.correo_electronico,
        telefono: data.telefono,
        entidad: data.entidad,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  RemoveRecord(id: number): Observable<JuradosModel> {
    return this.http.delete<any>(`${this.url}/jurados/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
