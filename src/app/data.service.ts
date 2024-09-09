import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private behaviorSubject = new BehaviorSubject<string>('Hello Everyone!');
  current = this.behaviorSubject.asObservable();

  constructor() { }

  modifyMessage(message: string) 
  { 
    this.behaviorSubject.next(message);
  }

  saveItems(key: string, item: any) 
  {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): any 
  {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
}
