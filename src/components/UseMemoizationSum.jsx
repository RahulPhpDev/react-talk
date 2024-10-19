import React, { memo } from 'react';

function UseMemoizationSum({sum}) {
    console.log('sum trigger', {sum})
    return (
        <div>
              <h2> {sum} </h2> 
        </div>
    );
}

export default memo(UseMemoizationSum);
