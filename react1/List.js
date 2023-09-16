function List (props) {
    const listItems = props.items.map((item) =>
      <li key ={item}>{item}</li> //key is optional
    );
    
    return <ul>{listItems}</ul>;
  }
export default List;  