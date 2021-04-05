import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FilterPosts extends Component {

    onChanged = (e) => {
        e.preventDefault()
        const filteredPosts = this.props.posts.filter(post => post.title.toLowerCase().startsWith(e.target.value))
        this.props.onChanged(filteredPosts)
    }

    render () {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">Filter by title:</Label>
          <Input onChange={this.onChanged} type="text" name="email" id="filter-field" />
        </FormGroup>
      </Form>
    )
  }
}

export default FilterPosts