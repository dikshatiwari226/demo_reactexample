import React from 'react';
 
class Search extends React.Component{

	
	handleInputChange = ()=>{
		this.setState({
			query: this.search.value
		})
	}

	render(){
    return (
       <div>
          <h1>Search</h1>
           <form>
           	<input 
           		placeholder="Search for..."
           		ref={input => this.search = input}
           		onChange={this.handleInputChange}
           	/>
           </form>
           <p>{this.state.query}</p>
       </div>
    );
  }
}
 
export default Search;