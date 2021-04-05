import React, {Component} from 'react'
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import * as actionCreators from "../store/actions";
import {connect} from "react-redux";

class AddPostForm extends Component {

    state = {
        title: "",
        content: "",
        author: "",
        img_url: "",
        createdAt: new Date(),
        votes: 0
    }

    titleChangedHandler = (e) => {
        this.setState({title: e.target.value})
    }

    bodyChangedHandler = (e) => {
        this.setState({content: e.target.value})
    }

    authorChangedHandler = (e) => {
        this.setState({author: e.target.value})
    }

    imageChangedHandler = (e) => {
        this.setState({img_url: e.target.value})
    }

    postAdded = (e) => {
        e.preventDefault()
        this.props.onAddNewPost(this.state)
        this.props.show()

    }

    render() {
        const {title, content, author, img_url} = this.state
        const REGEX_URL = "[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"
        const enable = (title.length > 0 &&
                content.length > 0 &&
                author.length > 0 &&
            (img_url.length > 0 &&
                img_url.match(REGEX_URL)))
        return (
            <Row>
                <Col sm="10">
                    <Form onSubmit={ this.postAdded}>
                        <FormGroup>
                            <Label htmlFor="title-field">Title</Label>
                            <Input type="text" onChange={this.titleChangedHandler} name="title" id="title-field" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="body-field">Body</Label>
                            <Input type="text" onChange={this.bodyChangedHandler} name="body" id="body-field" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="author-field">Author</Label>
                            <Input type="text" onChange={this.authorChangedHandler} name="author" id="author-field" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="image-field">Image URL</Label>
                            <Input htmlFor={"ulr"} type="url" onChange={this.imageChangedHandler} placeholder="https://example.com"  name="image" id="image-field" required/>
                        </FormGroup>
                        <Button disabled={!enable} type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onAddNewPost: (postData) => dispatch(actionCreators.addNewPost(postData)),
    }
}

export default connect(null, mapDispatchToProps)(AddPostForm);

