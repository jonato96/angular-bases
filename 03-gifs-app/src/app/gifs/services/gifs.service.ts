import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagHistory: string[] = [];
  private apiKey: string = 'kUnq0NAhQY4cOcEuh4ro4hmr3EUD36GT';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  private httpClient = inject(HttpClient);

  get tagsHistory() {
    return [...this._tagHistory];
  }
  
  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)
    
    this.httpClient.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe( resp => {
      this.gifList = resp.data;
    })
    
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if(this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(x => x !== tag);      
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10);
  }

}
