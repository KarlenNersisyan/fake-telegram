import React from 'react';

import { Clip } from '../Icons/icons';
import { types } from '../../constants/formTypes.constant';

import classes from './FileUpload.module.css';

function FileUpload() {
  return (
    <div className={classes.imageUpload}>
      <div className={classes.uploadIcon}>
        <label htmlFor={types.input.file.id}>
          <Clip />
        </label>
      </div>

      <input id={types.input.file.id} type={types.input.file.type} />
    </div>
  );
}

export default FileUpload;
