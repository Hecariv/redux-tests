import React, {Component} from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'
import Moment from "react-moment";
import Comment from "./Comment";
import CommentList from "./CommentList";

class Post extends Component {

  state = {
    showComments: false,
    content: "",
    post_id: 0,
  }

  onChanged = (e, id) => {
    e.preventDefault()
    this.setState({...this.state, content: e.target.value, post_id: id})
  }

  onClicked = (e) => {
    e.preventDefault()
    this.props.addComment(this.state)

  }

  showComments = () => {
    this.setState({...this.state, showComments: !this.state.showComments})
  }


  render() {

    return (
        <Row className="mt-3">
          <Col>
            <Card>
              <CardImg
                  top
                  width="100%"
                  src={this.props.img}
                  alt="Card image cap"
              />
              <CardBody>
                <CardTitle> {this.props.title} | <FaArrowUp onClick={this.props.incrementVotes} /> {this.props.votes} <FaArrowDown onClick={this.props.decreaseVotes} /></CardTitle>
                <CardSubtitle>{this.props.author}</CardSubtitle>
                <CardText>
                  {this.props.body}
                </CardText>
                <hr />

                <Moment fromNow>{this.props.date}</Moment>

                {this.props.numberOfComments === 1 ?
                    <p><FaComment onClick={this.showComments}/> {this.props.comments.filter(comment => comment.post_id === this.props.postId).length} Comment</p> :
                    <p><FaComment onClick={this.showComments}/> {this.props.comments.filter(comment => comment.post_id === this.props.postId).length} Comments</p>
                }
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input onChange={(e) => this.onChanged(e, this.props.postId)} type="text" name="comment" id="comment-field" placeholder="Enter a comment here" />
                  </FormGroup>
                  <Button disabled={this.state.content.trim() === ""} onClick={this.onClicked}>Submit</Button>
                </Form>
                { this.state.showComments &&
                  <CommentList
                      comments={this.props.comments}
                      postId={this.props.postId}
                  />
                }
                
              </CardBody>
            </Card>
          </Col>
        </Row>
    )
  }
}
export default Post
