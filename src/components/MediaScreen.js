import React from 'react'
import { Media } from 'react-bootstrap'
import MediaBody from "./MediaBody"


export default function MediaScreen() {
    return (
      <div>
        <MediaBody name = "Sohum" text = "Make sure to follow my youtube channel and subscribe!" title = "Hello"/>
        <MediaBody name = "Ashay" text = "Hello disciples!" title = "Greetings"/>
        <MediaBody name = "Labdhi" text = "Join the zoom and get ready for some coding" title = "Upcoming Meeting"/>
      </div>
      
    );
}