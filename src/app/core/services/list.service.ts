import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private base: string =
    'https://www.oysho.com/itxrest/2/catalog/store/64009600/60361120/category';

  constructor(private http: HttpClient) {}

  /* getCollectionList(
    collection: CollectionInterface
  ): Observable<CollectionInterface> {
    return this.http.get<CollectionInterface>(`${this.base}/`,
    {
      headers: {

      },
    }
    );
  }

  getProductList;

  getProductDetail; */
}
