import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public path="http://5.160.146.125/api/"
  public advertisementPath="advertisement/advertisements/"
  constructor(public http:HttpClient) { }
}
