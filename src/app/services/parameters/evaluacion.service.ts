import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionModel } from 'src/app/models/parameters/evaluacion.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class EvaluacionService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = '';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecodList(): Observable<EvaluacionModel[]> {
    return this.http.get<EvaluacionModel[]>(`${this.url}/evaluacion-solicitudes`);
  }
  SearchRecord(id: number): Observable<EvaluacionModel> {
    return this.http.get<EvaluacionModel>(`${this.url}/evaluacion-solicitudes/${id}`);
  }

  SaveRecod(data: EvaluacionModel): Observable<EvaluacionModel> {
    console.log(data);

    return this.http.post<EvaluacionModel>(
      `${this.url}/evaluacion-solicitudes`,
      {
        id_solicitud: data.id_solicitud,
        id_jurado: data.id_jurado,
        fecha_invitacion: data.fecha_invitacion,
        fecha_respuesta: data.fecha_respuesta,
        respuesta: data.respuesta,
        observaciones: data.observaciones,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  EditRecod(data: EvaluacionModel): Observable<EvaluacionModel> {
    console.log(data);

    return this.http.put<EvaluacionModel>(
      `${this.url}/evaluacion-solicitudes${data.id}`,
      {
        id_solicitud: data.id_solicitud,
        id_jurado: data.id_jurado,
        fecha_invitacion: data.fecha_invitacion,
        fecha_respuesta: data.fecha_respuesta,
        respuesta: data.respuesta,
        observaciones: data.observaciones,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  RemoveRecord(id: number): Observable<EvaluacionModel> {
    return this.http.delete<any>(`${this.url}/evaluacion-solicitudes${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
