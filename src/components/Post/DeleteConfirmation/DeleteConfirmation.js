import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class DeleteConfirmation extends Component {
  state = {
    confirmed: false,
  };

  handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${this.props.match.params.postId}`)
      .then((res) => {
        console.log("succesfully deleted post", res);
        this.props.history.goBack()
      })
      .catch(err => console.log(err));
  }

  handleCancel = () => {
    this.props.handleDeleteModalOpen();
  }

  render() {
    return (
      <Modal show={this.props.deleteModalOpen} onHide={this.props.handleDeleteModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete {this.props.postTitle}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button onClick={this.handleCancel} type="button" className="btn btn-dark">Cancel</button>
          <button onClick={this.handleDelete} type="button" className="btn btn-danger">Yes</button>
        </Modal.Body>
      </Modal>
    )
  }
}

export default withRouter(DeleteConfirmation);