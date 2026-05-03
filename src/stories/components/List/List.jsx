import React from 'react'
import PropTypes from 'prop-types'

export const List = ({data}) => {
  return (
    <div>
        {
            data?.length > 0 ? (
                <ul>
                    {
                        data.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
            ) : <p>No data</p>  
        }
    </div>
        )
}

List.propTypes = {
  data: PropTypes.array.isRequired
}

