import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../common/country';
import { State } from '../common/state';

@Injectable({
  providedIn: 'root'
})
export class FoodboxFormService {


  countries:Country[]=[];
  states:State[]=[];

  private countriesUrl = "http://18.159.124.247:8080/api/countries";
  private stateUrl = 'http://18.159.124.247:8080/api/states'

  constructor(private httpClient:HttpClient) { }


  getCraditCardMonths(startMonth:number):Observable<number[]>{
    let data:number[]=[];
    // build an array for "Month" dropDpwn List
    //- start at desired startMonth and loop until 12
    // .push() method add element in an Array in javascript

    for(let theMonth = startMonth; theMonth<=12; theMonth++){
      data.push(theMonth);
    }
    // of oparator works as wrapper to convert the array to observable
    return of(data)
  }

  getCraditCardYars():Observable<number[]>{
    let data:number[]=[];
    // build an array for "Year" dropDpwn List
    //- start at desired startYea and loop until to next 10 years\

    const startYear:number= new Date().getFullYear(); //.getFullYear() will retrun 2021 or YYYY
    const endYear:number= startYear+10;


    for(let theYear = startYear; theYear<=endYear; theYear++){
      data.push(theYear);
    }
    // of oparator works as wrapper to convert the array to observable
    return of(data)
  }

  getCountries():Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.countriesUrl);
    
  }

  getStates(theCountryId:number):Observable<State[]>{
    //search url
    const searchStateUrl=`${this.stateUrl}/search?countryId=${theCountryId}`;
    return this.httpClient.get<State[]>(searchStateUrl);
  }
  getStates2(theCountryCode:String):Observable<State[]>{
    //search url
    const searchStateUrl=`${this.stateUrl}/search/findByCountryId?=${theCountryCode}`;
    return this.httpClient.get<State[]>(searchStateUrl);
  }




}


