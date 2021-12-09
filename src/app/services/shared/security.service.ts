import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredentialsModel } from '../../models/security/user-credentials.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigurationData } from '../../config/ConfigurationData';
import { SessionDataModel } from 'src/app/models/security/session-data.model';
import { LocalStorageService } from './local-storage.service';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  sessionDataSubject: BehaviorSubject<SessionDataModel> =
    new BehaviorSubject<SessionDataModel>(new SessionDataModel());
  url: string = ConfigurationData.SECURITY_MS_URL;
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.VerifyActiveSession();
  }

  VerifyActiveSession() {
    let info = this.localStorageService.GetSessionData();
    if (info.tk) {
      info.isLoggedIn = true;
      this.RefreshSessionData(info);
      return true;
    } else {
      return false;
    }
  }

  Login(data: UserCredentialsModel): Observable<SessionDataModel> {
    return this.http.post<SessionDataModel>(`${this.url}identificar-usuario`, {
      usuario: data.username,
      clave: data.password,
    });
  }

  RefreshSessionData(data: SessionDataModel) {
    this.sessionDataSubject.next(data);
  }

  GetSessionData() {
    return this.sessionDataSubject.asObservable();
  }
}
