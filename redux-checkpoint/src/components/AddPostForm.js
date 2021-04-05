import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class AddPostForm extends Component {
  render() {
    return (
      <Row>
        <Col sm="10">
          <Form>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input type="text" name="title" id="title-field" />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input type="text" name="body" id="body-field" />
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input type="text" name="author" id="author-field" />
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input type="text" name="image" id="image-field" />
            </FormGroup>
            <Button onClick={this.props.clicked} type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default AddPostForm
