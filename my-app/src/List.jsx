function List(){

    const fruits=["Apple","Banana","Mango","Orange","Grapes"];

    const listItems=fruits.map(fruit => <li>{fruit}</li>);

    return <ul>{listItems}</ul>;
}
export default List