import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../Models/Blog'; 

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://your-api-url/blogs'

  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  getBlog(id: string): Observable<Blog> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Blog>(url);
  }

  createBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.apiUrl, blog);
  }

  updateBlog(blog: Blog): Observable<Blog> {
    const url = `${this.apiUrl}/${blog._id}`;
    return this.http.put<Blog>(url, blog);
  }

  deleteBlog(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
