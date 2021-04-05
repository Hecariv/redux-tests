import React, {Component} from 'react'
import AddPostForm from './AddPostForm'
import Post from './Post'
import FilterPosts from './FilterPosts'
import {Container, Row, Col, Button} from 'reactstrap'
import {connect} from "react-redux";
import Comment from "./Comment";
import * as actionCreators from "../store/actions/index";


class Main extends Component {
    state = {
        showForm: false,
        filter: false,
        filteredPosts: []
    }

     componentDidMount() {
        this.props.onFetchPosts();
        this.props.onFetchComments();
    }

    compare = (obj1, obj2) => {
        if (obj1.votes < obj2.votes) {
            return 1
        }
        if (obj1.votes > obj2.votes) {
            return -1
        }
        return 0
    }

    formShown = () => {
        this.setState({showForm: !this.state.showForm})
    }

    showFilteredPost = (posts) => {
        const newArr = [...posts]
        this.setState({...this.state, filter: true, filteredPosts: newArr})
        console.log(this.state)
    }

    addComment = (comment) => {
        this.props.onAddNewComment(comment)
    }

    show = () => {
        this.setState({showForm: !this.state.showForm})
    }

    render() {
        let posts = null
        let filteredPosts = this.state.filteredPosts
        let allPosts = this.props.posts

        if (this.state.filter) {
            posts = filteredPosts
        } else {
            posts = allPosts
        }
        posts.sort(this.compare)
        return (
            <Container className="mt-4">
                <Row>
                    <Col sm={{size: 8, offset: 1}}>
                        <FilterPosts
                            onChanged={this.showFilteredPost}
                            posts={this.props.posts}
                        />
                    </Col>
                    <Col sm="2">
                        <Button onClick={this.formShown} color="secondary">Add Post</Button>
                    </Col>
                </Row>
                {this.state.showForm &&
                <Row className="mt-4">
                    <Col sm={{size: 11, offset: 1}}>
                        <AddPostForm show={this.show}/>
                    </Col>
                </Row>
                }
                <Row>
                    <Col className="pr-0" sm={{size: 9, offset: 1}}>
                        {/* Below is the Post component for each post. It is up to you how you would like to iterate over them. */}
                        {posts.map((post) => (
                            <Post
                                key={post.id}
                                title={post.title}
                                body={post.content}
                                author={post.author}
                                img={post.img_url}
                                date={post.createdAt}
                                votes={post.votes}
                                comments={this.props.comments}
                                incrementVotes={() => this.props.onIncrementVotes(post)}
                                decreaseVotes={() => this.props.OnDecreaseVotes(post)}
                                postId={post.id}
                                addComment={this.addComment}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsRed.posts,
        comments: state.commentsRed.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actionCreators.fetchPosts()),
        onFetchComments: () => dispatch(actionCreators.fetchComments()),
        onIncrementVotes: (post) => dispatch(actionCreators.updateIncrementVotes(post)),
        OnDecreaseVotes: (post) => dispatch(actionCreators.updateDecreaseVotes(post)),
        onAddNewComment: (comment) => dispatch(actionCreators.addNewComment(comment)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
