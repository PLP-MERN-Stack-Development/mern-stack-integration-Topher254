import React from 'react'
import Blog from '../../pages/Blog';
import { Delete, Ticket, TicketIcon, Trash } from 'lucide-react';

const CommentTableItem = ({comment,fetchComments}) => {

const {blog,createdAt,_id}=comment;
const BlogDate = new Date(createdAt)





  return (
    <tr>
        <td><b>Blog</b>:{blog.title}
        <br/>
        <b>
            Name
        </b>:{comment.name}
        <b>
            Content
        </b>:{comment.content}
        </td>
        <td>{BlogDate.toLocaleDateString()}</td>
        <td>
            <div>
                {!comment.isApproved?<Ticket/>:<p>Approved</p>}
                <Delete/>
            </div>
        </td>
    </tr>
  )
}

export default CommentTableItem
