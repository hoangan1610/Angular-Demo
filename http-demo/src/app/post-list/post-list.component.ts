import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  newPost: any = { title: '', body: '' }; // Initialize newPost object
  editedPost: any = { id: 0, title: '', body: '' }; // Initialize editedPost object with id
  isEditing: { [key: number]: boolean } = {}; // Track editing state for each post

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.dataService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error loading posts:', error);
      }
    );
  }

  addPost(): void {
    this.dataService.addPost(this.newPost).subscribe(
      (data) => {
        console.log('Added new post:', data);
        this.newPost = { title: '', body: '' }; // Reset newPost object
        this.posts.unshift(data); // Add the new post to the beginning of posts array
      },
      (error) => {
        console.error('Error adding post:', error);
      }
    );
  }

  editPost(post: any): void {
    this.isEditing[post.id] = true; // Set editing state to true
    this.editedPost = { ...post }; // Clone post object for editing
  }

  submitEdit(postId: number): void {
    const updatedPost = { title: this.editedPost.title, body: this.editedPost.body };
    this.dataService.updatePost(postId, updatedPost).subscribe(
      (data) => {
        console.log('Updated post:', data);
        this.posts = this.posts.map(post => {
          if (post.id === postId) {
            return data; // Replace the old post with the updated post
          }
          return post;
        });
        this.isEditing[postId] = false; // Reset editing state to false
        this.editedPost = { id: 0, title: '', body: '' }; // Clear editedPost object
      },
      (error) => {
        console.error('Error updating post:', error);
      }
    );
  }

  cancelEdit(): void {
    this.isEditing[this.editedPost.id] = false; // Reset editing state to false
    this.editedPost = { id: 0, title: '', body: '' }; // Clear editedPost object
  }

  deletePost(postId: number): void {
    this.dataService.deletePost(postId).subscribe(
      () => {
        console.log('Deleted post with id:', postId);
        this.posts = this.posts.filter(post => post.id !== postId); // Remove the deleted post from posts array
      },
      (error) => {
        console.error('Error deleting post:', error);
      }
    );
  }

  onSubmit(form: any): void {
    if (form.valid) {
      this.addPost();
    }
  }
}
