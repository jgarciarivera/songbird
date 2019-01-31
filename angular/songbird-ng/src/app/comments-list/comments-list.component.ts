import { Component, Input } from '@angular/core';
import { Comment } from '../Comment'
import { dummyComments } from '../comments';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent  {
  
  name: string = "";
  comment: string = "";

  @Input() joinOnName: string;
  @Input() joinOnComment: string;

  
  comments: Comment[] = dummyComments;
  

  addComment(m: Comment) {
      this.comments.push({ name: this.name, comment: this.comment });
    }

}
