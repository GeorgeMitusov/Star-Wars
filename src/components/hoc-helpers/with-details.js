import React, { Component } from 'react';

const withDetails = ( View, getData ) => {
    return class extends Component {
      
      state = {
        item: null
      }
  
      componentDidMount() {
        getData()
          .then((item) => {
            this.setState({
              item
            })
          })
      }
  
      render () {
        const { item } = this.state;
  
        return <View {...this.props} item={item} />
      }
    }
}

export default withDetails;  