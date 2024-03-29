import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SeriesStorage } from "../storage/series-storage";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class SeriesApi {

  constructor(public http: Http, public store: SeriesStorage) {
  }
  one(id) {
    return this.http.get(`https://movie-ease.herokuapp.com/series/one/${id}`).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  search(query) {
    return this.http.get(`https://movie-ease.herokuapp.com/series/search/${query}`).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  popular(n=1) {
    return this.http.get('https://movie-ease.herokuapp.com/series/popular/'+n).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  latest(n=1) {
    return this.http.get('https://movie-ease.herokuapp.com/series/latest/'+n).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  upcoming(n=1) {
    return this.http.get('https://movie-ease.herokuapp.com/series/upcoming/'+n).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  topRated(n=1) {
    return this.http.get('https://movie-ease.herokuapp.com/series/top-rated/'+n).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  } 
  private _handleError(){
    return Observable.throw("Network Error")
  }

  getCategories() {
    //call api categories for series arabic , foriegn ...
    let res = [{
      id : 0,
      cate: 'agnabi',
    },
    {
      id : 1,
      cate: 'arabi'
    }]
    return res
  }

  getByCategory(id,page){
    //call api series by cate and page
  }
}
