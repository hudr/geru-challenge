import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from '../../redux/actions/todo'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/core/styles'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

import { TagsContainer } from './styled'

const useStyles = theme => ({
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0)
  },
  dateField: {
    marginTop: theme.spacing(4)
  },
  radioButton: {
    marginTop: theme.spacing(2)
  }
})

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.currentTodo.id || '',
      title: props.currentTodo.title || '',
      description: props.currentTodo.description || '',
      dueDate: props.currentTodo.dueDate || new Date(),
      createDate: props.currentTodo.createDate || new Date(),
      estTime: props.currentTodo.estTime || '',
      done: props.currentTodo.done || 'false',
      tags: props.currentTodo.tags || []
    }

    this.handleTagsChange = this.handleTagsChange.bind(this)
  }

  handleDateChange = date => {
    this.setState({
      dueDate: date
    })
  }

  handleTagsChange(tags) {
    this.setState({ tags })
  }

  handleStatusChange(event) {
    this.setState({ done: event.target.value })
  }

  handleInputOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { modalType, addTodo, updateTodo } = this.props

    const {
      id,
      title,
      description,
      createDate,
      dueDate,
      estTime,
      done,
      tags
    } = this.state

    const currentTodo = {
      id,
      title,
      description,
      createDate,
      dueDate,
      estTime,
      done,
      tags
    }

    if (modalType === 'put') {
      await updateTodo(currentTodo)
    } else {
      await addTodo(currentTodo)
    }

    return this.setState({
      title: '',
      description: '',
      estTime: '',
      dueDate,
      tags: []
    })
  }

  render() {
    const {
      fullScreen,
      classes,
      handleClose,
      isModalOpen,
      closeModal,
      modalType
    } = this.props

    const { title, description, estTime, dueDate, done } = this.state
    return (
      <Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={isModalOpen}
          onClose={handleClose}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>
            {'Fill your todo info :)'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Don't forget to add tags, they're important to remember what you
              need to do. Tag names can't be the same.
            </DialogContentText>
            <form
              onSubmit={this.handleSubmit.bind(this)}
              onChange={this.handleInputOnChange}
              id='todoinfo'
              autoComplete='off'
            >
              <TextField
                label='Title'
                required
                name='title'
                placeholder='e.g.: Homework'
                value={title}
                multiline
                className={classes.textField}
                margin='normal'
                fullWidth
              />

              <TextField
                label='Description'
                placeholder='e.g.: Finish biology research'
                name='description'
                value={description}
                className={classes.textField}
                margin='normal'
                fullWidth
                required
              />

              <TextField
                label='Estimated Time in days'
                type='number'
                name='estTime'
                placeholder='e.g.: 3'
                value={estTime}
                className={classes.textField}
                InputProps={{ inputProps: { min: 1 } }}
                margin='normal'
                fullWidth
                required
              />

              {modalType === 'put' && (
                <Fragment>
                  <RadioGroup
                    onChange={e => this.handleStatusChange(e)}
                    aria-label='status'
                    name='status'
                    value={done}
                    className={classes.radioButton}
                  >
                    <FormControlLabel
                      control={<Radio color='primary' />}
                      label='Done'
                      name='true'
                      value='true'
                    />
                    <FormControlLabel
                      control={<Radio color='secondary' />}
                      label='Pending'
                      name='false'
                      value='false'
                    />
                  </RadioGroup>
                </Fragment>
              )}

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  label='Due date:'
                  ampm={false}
                  value={dueDate}
                  onChange={this.handleDateChange}
                  className={classes.dateField}
                  animateYearScrolling={false}
                  required
                  disablePast
                  format={'dd/MM/yyyy HH:mm'}
                  showTodayButton
                  fullWidth
                />
              </MuiPickersUtilsProvider>

              <TagsContainer>
                <TagsInput
                  value={this.state.tags}
                  onlyUnique
                  maxTags={6}
                  inputProps={{
                    placeholder: 'Add a tag'
                  }}
                  onChange={this.handleTagsChange}
                />
              </TagsContainer>
            </form>
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button type='submit' form='todoinfo' color='primary'>
              {modalType === 'put' ? 'Update' : 'Insert'}
            </Button>
            <Button onClick={() => closeModal()} color='secondary'>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos,
  isModalOpen: state.todo.isModalOpen,
  modalType: state.todo.modalType,
  currentTodo: state.todo.currentTodo
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withMobileDialog()(withStyles(useStyles)(Modal)))

Modal.propTypes = {
  todos: PropTypes.array.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  currentTodo: PropTypes.object.isRequired
}

export { Modal }
