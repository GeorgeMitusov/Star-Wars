import React, { Component } from 'react';

const withData = ( View, getData ) => {
    return class extends Component {
  
      state = {
        data: null,
        nextPage: null,
        prevPage: null,
        count: 0
      }
      
  
      componentDidMount() {
        getData()
          .then((data) => {
            this.setState({
              data: data.results,
              nextPage: data.next,
              prevPage: data.previous
            })

          })
      }

      goToNextPage = async () => {
        const res = await fetch(this.state.nextPage);

        if(!res.ok) {
          throw new Error(`couldn't fetch ${this.state.nextPage}` + `${res.status}`)
        }

        const data = await res.json();
        console.log(data.results);
        this.setState({
          data: data.results,
          nextPage: data.next,
          prevPage: data.previous,
          count: this.state.count + 1
        })

      }

      goToPrevPage = async () => {
        const res = await fetch(this.state.prevPage);

        if(!res.ok) {
          throw new Error(`couldn't fetch ${this.state.prevPage}` + `${res.status}`)
        }

        const data = await res.json();
        console.log(data.results);
        this.setState({
          data: data.results,
          nextPage: data.next,
          prevPage: data.previous,
          count: this.state.count - 1
        })

      }
     
      
      render () {
        const { data, count } = this.state;
  
        return (
          <View 
            {...this.props} 
            data={data} count={count}
            goToNextPage={this.goToNextPage}
            goToPrevPage={this.goToPrevPage}
          />
        )
      }
    }
}

export default withData;  