import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Const from '../Const';


const insertBtnDefaultClass = 'react-bs-table-add-btn';

class InsertButton extends Component {
  render() {
    // const newObj = {
    //   id: ' ',
    //   name: ' ',
    //   price: ' '
    // };
    const {
      btnContextual,
      className,
      btnGlyphicon,
      onClick,
      btnText,
      children,
      ...rest
    } = this.props;
    const content = children ||
      (<span><i className={ `fa glyphicon ${btnGlyphicon}` }></i> { btnText }</span>);
    return (
      <button type='button'
              className={ `btn ${btnContextual} ${insertBtnDefaultClass} ${className}` }
              onClick={ onClick }
              { ...rest }>
        { content }
      </button>
    );
  }
}

InsertButton.propTypes = {
  noModal : PropTypes.bool,
  btnText: PropTypes.string,
  btnContextual: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  btnGlyphicon: PropTypes.string
};
InsertButton.defaultProps = {
  noModal: false,
  btnText: Const.INSERT_BTN_TEXT,
  btnContextual: 'btn-info',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-plus fa-plus'
};

export default InsertButton;
