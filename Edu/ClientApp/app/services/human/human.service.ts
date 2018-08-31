import { Injectable } from '@angular/core';
import { Human } from '../../models/human/human.interface';
import { HttpClient, HttpParams, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

const listApiUrl: string = "api/human/list";
const getApiUrl: string = "api/human/get";
const updateApiUrl: string = "api/human/update";
const addApiUrl: string = "api/human/add"

@Injectable()
export class HumanService {

    constructor(private http: HttpClient, private authService: AuthService) { }

    searchHumans(id: number, name: string, dateOfBirth: string): Observable<Human[]> {
        let params: HttpParams = new HttpParams()
            .set("id", id ? id.toString() : "")
            .set("name", name || "")
            .set("dateOfBirth", dateOfBirth || "");

        return this.http.get<Human[]>(listApiUrl, { params });
    }

    getHuman(id: number): Observable<Human> {
        let params: HttpParams = new HttpParams()
            .set("id", id ? id.toString() : "");
        return this.http.get<Human>(getApiUrl, { params });
    }

    updateHuman(human: Human): Observable<Human> {
        return this.http.post<Human>(updateApiUrl, human, { observe: "body" });
    }

    createHuman(human: Human): Observable<Human> {
        return this.http.put<Human>(addApiUrl, human);
    }

}
